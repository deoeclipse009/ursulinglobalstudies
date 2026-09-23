import "server-only";
import Anthropic from "@anthropic-ai/sdk";
import { FORMAT_OUTPUT_SCHEMA, FORMAT_SYSTEM_PROMPT } from "@/lib/ai/format-prompt";
import { validateArticle } from "@/lib/article-schema";
import type { Article, Category, ContentBlock } from "@/content/types";

export type Provider = "claude" | "gemini";

/** One submitted document, already turned into text (or a PDF for the model to read). */
export interface SubmissionDoc {
  language: "en" | "id";
  name: string;
  text?: string; // HTML or plain text
  pdfBase64?: string;
}

export interface AiKeys {
  anthropicKey: string | null;
  geminiKey: string | null;
}

export interface ConvertOptions {
  provider: Provider;
  /** The signed-in editor's own API keys. */
  keys: AiKeys;
  /** Ask the model to translate when only one language was submitted. */
  translateMissing: boolean;
}

export interface ConvertResult {
  article: Article;
  notes: string[];
  provider: Provider;
  model: string;
}

export function availableProviders(keys: AiKeys): Provider[] {
  const list: Provider[] = [];
  if (keys.anthropicKey) list.push("claude");
  if (keys.geminiKey) list.push("gemini");
  return list;
}

// ---------------------------------------------------------------------------
// Shape returned by the model (see FORMAT_OUTPUT_SCHEMA)

interface RawBlock {
  type: string;
  text: string | null;
  html: string | null;
  level: number | null;
  items: { label: string; value: string }[] | null;
  sources: string[] | null;
}
interface RawVersion {
  title: string;
  excerpt: string;
  blocks: RawBlock[];
}
export interface RawOutput {
  slug: string;
  category: Category;
  author: string;
  publishedAt: string;
  readingMinutes: number;
  en: RawVersion | null;
  id: RawVersion | null;
  notes: string[];
}

function userInstruction(docs: SubmissionDoc[], translateMissing: boolean): string {
  const langs = new Set(docs.map((d) => d.language));
  const lines = [
    `Format the attached UGS Newsroom submission${docs.length > 1 ? "s" : ""} into the website's article structure.`,
    `Submitted languages: ${[...langs].map((l) => (l === "en" ? "English" : "Indonesian")).join(" and ")}.`,
  ];
  if (langs.size === 1) {
    lines.push(
      translateMissing
        ? `Also produce the missing ${langs.has("en") ? "Indonesian" : "English"} version by translating faithfully (same meaning, same structure, no additions). Add a note that this version is an AI translation that needs a human check.`
        : `Only one language was submitted: set the other version to null. Do not translate.`,
    );
  }
  return lines.join("\n");
}

function docLabel(d: SubmissionDoc) {
  return `${d.language === "en" ? "ENGLISH" : "INDONESIAN"} SUBMISSION (${d.name})`;
}

// ---------------------------------------------------------------------------
// Providers

async function runClaude(docs: SubmissionDoc[], opts: ConvertOptions) {
  const model = process.env.ANTHROPIC_MODEL || "claude-opus-5";
  const client = new Anthropic({ apiKey: opts.keys.anthropicKey ?? undefined });

  const content: Anthropic.ContentBlockParam[] = [];
  for (const d of docs) {
    if (d.pdfBase64) {
      content.push({
        type: "document",
        title: docLabel(d),
        source: { type: "base64", media_type: "application/pdf", data: d.pdfBase64 },
      });
    } else {
      content.push({ type: "text", text: `<document title="${docLabel(d)}">\n${d.text ?? ""}\n</document>` });
    }
  }
  content.push({ type: "text", text: userInstruction(docs, opts.translateMissing) });

  const stream = client.messages.stream({
    model,
    max_tokens: 64000,
    system: FORMAT_SYSTEM_PROMPT,
    thinking: { type: "adaptive" },
    output_config: {
      effort: "medium",
      format: { type: "json_schema", schema: FORMAT_OUTPUT_SCHEMA as unknown as Record<string, unknown> },
    },
    messages: [{ role: "user", content }],
  });
  const message = await stream.finalMessage();

  if (message.stop_reason === "refusal") {
    throw new Error("Claude declined to process this document.");
  }
  if (message.stop_reason === "max_tokens") {
    throw new Error("The article is too long for one pass (hit max_tokens).");
  }
  const text = message.content
    .filter((b): b is Anthropic.TextBlock => b.type === "text")
    .map((b) => b.text)
    .join("");
  return { raw: JSON.parse(text) as RawOutput, model };
}

async function runGemini(docs: SubmissionDoc[], opts: ConvertOptions) {
  const model = process.env.GEMINI_MODEL || "gemini-2.5-pro";
  const parts: Record<string, unknown>[] = [];
  for (const d of docs) {
    parts.push({ text: docLabel(d) });
    if (d.pdfBase64) {
      parts.push({ inlineData: { mimeType: "application/pdf", data: d.pdfBase64 } });
    } else {
      parts.push({ text: d.text ?? "" });
    }
  }
  parts.push({ text: userInstruction(docs, opts.translateMissing) });

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-goog-api-key": opts.keys.geminiKey ?? "",
      },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: FORMAT_SYSTEM_PROMPT }] },
        contents: [{ role: "user", parts }],
        generationConfig: {
          responseMimeType: "application/json",
          responseJsonSchema: FORMAT_OUTPUT_SCHEMA,
          maxOutputTokens: 65536,
        },
      }),
    },
  );
  if (!res.ok) {
    throw new Error(`Gemini API error ${res.status}: ${(await res.text()).slice(0, 500)}`);
  }
  const data = (await res.json()) as {
    candidates?: { content?: { parts?: { text?: string }[] }; finishReason?: string }[];
  };
  const candidate = data.candidates?.[0];
  const text = candidate?.content?.parts?.map((p) => p.text ?? "").join("") ?? "";
  if (!text) throw new Error(`Gemini returned no content (finishReason: ${candidate?.finishReason ?? "unknown"}).`);
  return { raw: JSON.parse(text) as RawOutput, model };
}

// ---------------------------------------------------------------------------
// Normalisation: flattened model output -> Article

function toBlocks(raw: RawBlock[]): ContentBlock[] {
  const out: ContentBlock[] = [];
  for (const b of raw) {
    const text = (b.text ?? b.html ?? "").trim();
    const html = (b.html ?? b.text ?? "").trim();
    switch (b.type) {
      case "eyebrow":
        if (text) out.push({ type: "eyebrow", text });
        break;
      case "paragraph":
        if (html) out.push({ type: "paragraph", html });
        break;
      case "heading":
        if (text) out.push({ type: "heading", level: b.level === 3 ? 3 : 2, text });
        break;
      case "callout":
        if (html) out.push({ type: "callout", html });
        break;
      case "quote":
        if (html) out.push({ type: "quote", html });
        break;
      case "statsGrid":
        if (b.items?.length) out.push({ type: "statsGrid", items: b.items.map(({ label, value }) => ({ label, value })) });
        break;
      case "list":
        if (b.items?.length) out.push({ type: "list", items: b.items.map(({ label, value }) => ({ label, text: value })) });
        break;
      case "divider":
        out.push({ type: "divider" });
        break;
      case "sources":
        if (b.sources?.length) out.push({ type: "sources", items: b.sources });
        break;
    }
  }
  return out;
}

export function toArticle(raw: RawOutput): Article {
  const primary = raw.en ?? raw.id;
  if (!primary) throw new Error("The model returned neither an English nor an Indonesian version.");
  const slug = raw.slug
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  const article: Article = {
    slug,
    title: primary.title,
    excerpt: primary.excerpt,
    coverImage: `/images/${slug}.jpg`,
    coverImageAlt: primary.title,
    author: raw.author || "UGS Newsroom",
    publishedAt: raw.publishedAt,
    category: raw.category,
    readingMinutes: Math.max(1, Math.round(raw.readingMinutes || 1)),
    content: toBlocks(primary.blocks),
  };
  if (raw.en && raw.id) {
    article.translations = {
      id: { title: raw.id.title, excerpt: raw.id.excerpt, content: toBlocks(raw.id.blocks) },
    };
  }
  return article;
}

export async function convertSubmission(
  docs: SubmissionDoc[],
  opts: ConvertOptions,
): Promise<ConvertResult> {
  if (docs.length === 0) throw new Error("Attach at least one document.");
  const { raw, model } =
    opts.provider === "gemini" ? await runGemini(docs, opts) : await runClaude(docs, opts);
  const notes = [...(raw.notes ?? [])];
  if (!raw.en) notes.unshift("No English version: the Indonesian text is used as the main article.");
  const article = validateArticle(toArticle(raw));
  return { article, notes, provider: opts.provider, model };
}
