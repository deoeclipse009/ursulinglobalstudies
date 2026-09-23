"use client";

import { useEffect, useMemo, useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Download,
  FileUp,
  Loader2,
  LogOut,
  Sparkles,
  UploadCloud,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArticleBody } from "@/components/article-body";
import { CategoryChip } from "@/components/category-chip";
import { CATEGORIES, type Article, type Category } from "@/content/types";
import { cn } from "@/lib/utils";

interface Status {
  providers: ("claude" | "gemini")[];
  publishing: boolean;
  repo: string | null;
  branch: string;
}

const PROVIDER_LABEL = { claude: "Claude (Anthropic)", gemini: "Gemini (Google)" };

export function AdminConsole() {
  const [status, setStatus] = useState<Status | null>(null);

  // Step 1: input
  const [provider, setProvider] = useState<"claude" | "gemini">("claude");
  const [translateMissing, setTranslateMissing] = useState(false);
  const [converting, setConverting] = useState(false);
  const [convertError, setConvertError] = useState<string | null>(null);

  // Step 2: review
  const [article, setArticle] = useState<Article | null>(null);
  const [notes, setNotes] = useState<string[]>([]);
  const [modelUsed, setModelUsed] = useState<string>("");
  const [previewLang, setPreviewLang] = useState<"en" | "id">("en");
  const [jsonText, setJsonText] = useState("");
  const [jsonError, setJsonError] = useState<string | null>(null);
  const [cover, setCover] = useState<File | null>(null);
  const coverUrl = useMemo(() => (cover ? URL.createObjectURL(cover) : null), [cover]);

  // Step 3: publish
  const [overwrite, setOverwrite] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [publishError, setPublishError] = useState<string | null>(null);
  const [published, setPublished] = useState<{ commitUrl: string; updated: boolean } | null>(null);

  useEffect(() => {
    fetch("/api/admin/status")
      .then((r) => r.json())
      .then((s: Status) => {
        setStatus(s);
        if (s.providers[0]) setProvider(s.providers[0]);
      })
      .catch(() => undefined);
  }, []);

  function loadArticle(a: Article) {
    setArticle(a);
    setJsonText(JSON.stringify(a, null, 2));
    setJsonError(null);
  }

  function patch(p: Partial<Article>) {
    if (!article) return;
    loadArticle({ ...article, ...p });
  }

  async function convert(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setConverting(true);
    setConvertError(null);
    setPublished(null);
    const form = new FormData(e.currentTarget);
    form.set("provider", provider);
    if (translateMissing) form.set("translateMissing", "on");
    try {
      const res = await fetch("/api/admin/convert", { method: "POST", body: form });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? `Request failed (${res.status})`);
      loadArticle(data.article);
      setNotes(data.notes ?? []);
      setModelUsed(`${PROVIDER_LABEL[data.provider as "claude" | "gemini"]} · ${data.model}`);
    } catch (err) {
      setConvertError((err as Error).message);
    } finally {
      setConverting(false);
    }
  }

  function applyJson() {
    try {
      loadArticle(JSON.parse(jsonText));
    } catch (err) {
      setJsonError((err as Error).message);
    }
  }

  function downloadJson() {
    if (!article) return;
    const blob = new Blob([JSON.stringify(article, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${article.slug}.json`;
    a.click();
  }

  async function publish() {
    if (!article) return;
    setPublishing(true);
    setPublishError(null);
    const form = new FormData();
    form.set("article", JSON.stringify(article));
    if (cover) form.set("cover", cover);
    if (overwrite) form.set("overwrite", "on");
    try {
      const res = await fetch("/api/admin/publish", { method: "POST", body: form });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? `Request failed (${res.status})`);
      setPublished(data);
    } catch (err) {
      setPublishError((err as Error).message);
    } finally {
      setPublishing(false);
    }
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/";
  }

  const preview =
    article &&
    (previewLang === "id" && article.translations?.id
      ? {
          title: article.translations.id.title ?? article.title,
          excerpt: article.translations.id.excerpt ?? article.excerpt,
          content: article.translations.id.content ?? article.content,
        }
      : { title: article.title, excerpt: article.excerpt, content: article.content });

  return (
    <div className="container max-w-6xl py-10">
      <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl font-bold text-ink">Newsroom admin</h1>
          <p className="mt-1 text-sm text-ink/60">
            Attach a submission form, let AI lay it out for the site, check it, publish.
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={logout}>
          <LogOut /> Sign out
        </Button>
      </div>

      {status && (!status.providers.length || !status.publishing) && (
        <div className="mb-6 rounded-xl border border-warn bg-warn/30 p-4 text-sm text-ink">
          <p className="font-semibold">Setup incomplete</p>
          <ul className="mt-1 list-disc pl-5">
            {!status.providers.length && (
              <li>No AI provider: set <code>ANTHROPIC_API_KEY</code> (or <code>GEMINI_API_KEY</code>) in the hosting environment.</li>
            )}
            {!status.publishing && (
              <li>
                Publishing is off: set <code>GITHUB_TOKEN</code> and <code>GITHUB_REPO</code>. You can still
                format articles and download the JSON.
              </li>
            )}
          </ul>
        </div>
      )}

      {/* Step 1 */}
      <section className="rounded-2xl border border-ink/10 bg-paper p-6 shadow-sm">
        <StepTitle n={1} title="Attach the submission" />
        <form onSubmit={convert} className="mt-5 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <DocInput lang="en" label="English version" />
            <DocInput lang="id" label="Indonesian version (Bahasa Indonesia)" />
          </div>
          <div className="flex flex-wrap items-end gap-6">
            <div className="space-y-2">
              <Label htmlFor="provider">AI model</Label>
              <select
                id="provider"
                value={provider}
                onChange={(e) => setProvider(e.target.value as "claude" | "gemini")}
                className="h-10 rounded-md border border-ink/15 bg-paper px-3 text-sm"
              >
                {(status?.providers.length ? status.providers : (["claude"] as const)).map((p) => (
                  <option key={p} value={p}>
                    {PROVIDER_LABEL[p]}
                  </option>
                ))}
              </select>
            </div>
            <label className="flex items-center gap-2 pb-2 text-sm text-ink/80">
              <input
                type="checkbox"
                checked={translateMissing}
                onChange={(e) => setTranslateMissing(e.target.checked)}
              />
              If only one language is attached, AI-translate the other
            </label>
            <Button type="submit" variant="brand" disabled={converting} className="ml-auto">
              {converting ? <Loader2 className="animate-spin" /> : <Sparkles />}
              {converting ? "Formatting… (up to 2 min)" : "Format with AI"}
            </Button>
          </div>
          {convertError && <ErrorBox message={convertError} />}
        </form>
      </section>

      {article && preview && (
        <>
          {/* Step 2 */}
          <section className="mt-8 rounded-2xl border border-ink/10 bg-paper p-6 shadow-sm">
            <StepTitle n={2} title="Check it" />
            <p className="mt-1 text-xs text-ink/50">Formatted by {modelUsed}</p>

            {notes.length > 0 && (
              <div className="mt-5 rounded-xl border border-warn bg-warn/30 p-4 text-sm">
                <p className="flex items-center gap-2 font-semibold text-ink">
                  <AlertTriangle className="h-4 w-4" /> Things the AI wants a human to check
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-ink/80">
                  {notes.map((n, i) => (
                    <li key={i}>{n}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Field label="Slug (URL)">
                <Input value={article.slug} onChange={(e) => patch({ slug: e.target.value })} />
              </Field>
              <Field label="Author">
                <Input value={article.author} onChange={(e) => patch({ author: e.target.value })} />
              </Field>
              <Field label="Published date">
                <Input
                  type="date"
                  value={article.publishedAt}
                  onChange={(e) => patch({ publishedAt: e.target.value })}
                />
              </Field>
              <Field label="Category">
                <select
                  value={article.category}
                  onChange={(e) => patch({ category: e.target.value as Category })}
                  className="h-10 w-full rounded-md border border-ink/15 bg-paper px-3 text-sm"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </Field>
              <Field label="Reading time (minutes)">
                <Input
                  type="number"
                  min={1}
                  value={article.readingMinutes}
                  onChange={(e) => patch({ readingMinutes: Number(e.target.value) || 1 })}
                />
              </Field>
              <Field label="Cover image (JPG/PNG/WebP, under 4 MB)">
                <Input type="file" accept="image/jpeg,image/png,image/webp" onChange={(e) => setCover(e.target.files?.[0] ?? null)} />
              </Field>
              <Field label="Cover image description (alt text)">
                <Input value={article.coverImageAlt} onChange={(e) => patch({ coverImageAlt: e.target.value })} />
              </Field>
              <Field label="Photo credit">
                <Input
                  placeholder="Photo: Name / Source (licence)"
                  value={article.coverImageCredit ?? ""}
                  onChange={(e) => patch({ coverImageCredit: e.target.value || undefined })}
                />
              </Field>
            </div>

            {/* Preview */}
            <div className="mt-8 flex items-center gap-2">
              {(["en", "id"] as const).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setPreviewLang(l)}
                  disabled={l === "id" && !article.translations?.id}
                  className={cn(
                    "rounded-full px-4 py-1.5 text-sm font-medium disabled:opacity-40",
                    previewLang === l ? "bg-ink text-paper" : "bg-feed text-ink/70",
                  )}
                >
                  {l === "en" ? "English" : "Bahasa Indonesia"}
                </button>
              ))}
              {!article.translations?.id && (
                <span className="text-xs text-ink/50">No Indonesian version</span>
              )}
            </div>
            <div className="mt-4 rounded-xl border border-ink/10 p-6 sm:p-10">
              <CategoryChip category={article.category} size="md" />
              <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-ink">{preview.title}</h2>
              <p className="mt-4 text-lg text-text">{preview.excerpt}</p>
              <p className="mt-4 text-sm text-ink/60">
                {article.author} · {article.publishedAt} · {article.readingMinutes} min
              </p>
              {coverUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={coverUrl} alt="" className="mt-6 aspect-[16/9] w-full rounded-xl object-cover" />
              )}
              <div className="mx-auto mt-8 max-w-2xl">
                <ArticleBody blocks={preview.content} />
              </div>
            </div>

            <details className="mt-6">
              <summary className="cursor-pointer text-sm font-medium text-ink/70">
                Advanced: edit the raw article data (JSON)
              </summary>
              <Textarea
                className="mt-3 h-80 font-mono text-xs"
                value={jsonText}
                onChange={(e) => setJsonText(e.target.value)}
              />
              <div className="mt-2 flex items-center gap-3">
                <Button type="button" size="sm" variant="outline" onClick={applyJson}>
                  Apply JSON changes
                </Button>
                {jsonError && <span className="text-sm text-cat-health">{jsonError}</span>}
              </div>
            </details>
          </section>

          {/* Step 3 */}
          <section className="mt-8 rounded-2xl border border-ink/10 bg-paper p-6 shadow-sm">
            <StepTitle n={3} title="Publish" />
            <p className="mt-2 text-sm text-ink/70">
              Publishing commits the article{status?.repo ? ` to ${status.repo} (${status.branch})` : ""}. The live
              site updates when the next deploy finishes, usually 1–3 minutes.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <label className="flex items-center gap-2 text-sm text-ink/80">
                <input type="checkbox" checked={overwrite} onChange={(e) => setOverwrite(e.target.checked)} />
                Replace an existing article with this slug
              </label>
              <Button type="button" variant="outline" onClick={downloadJson}>
                <Download /> Download JSON
              </Button>
              <Button
                type="button"
                onClick={publish}
                disabled={publishing || !status?.publishing}
                className="ml-auto"
              >
                {publishing ? <Loader2 className="animate-spin" /> : <UploadCloud />}
                {publishing ? "Publishing…" : "Publish to website"}
              </Button>
            </div>
            {publishError && <ErrorBox message={publishError} />}
            {published && (
              <div className="mt-5 flex items-start gap-3 rounded-xl border border-cat-environment/40 bg-positive/20 p-4 text-sm text-ink">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-cat-environment" />
                <div>
                  <p className="font-semibold">{published.updated ? "Article updated." : "Article published."}</p>
                  <p className="mt-1">
                    It will be live at{" "}
                    <a className="text-brand underline" href={`/news/${article.slug}`}>
                      /news/{article.slug}
                    </a>{" "}
                    after the deploy.{" "}
                    <a className="text-brand underline" href={published.commitUrl} target="_blank" rel="noreferrer">
                      View commit
                    </a>
                  </p>
                </div>
              </div>
            )}
          </section>
        </>
      )}
    </div>
  );
}

function StepTitle({ n, title }: { n: number; title: string }) {
  return (
    <h2 className="flex items-center gap-3 text-lg font-bold text-ink">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-sm text-paper">{n}</span>
      {title}
    </h2>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      {children}
    </div>
  );
}

function ErrorBox({ message }: { message: string }) {
  return (
    <div className="mt-4 flex items-start gap-2 rounded-xl border border-callout bg-callout/15 p-4 text-sm text-ink">
      <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-cat-health" />
      <span>{message}</span>
    </div>
  );
}

function DocInput({ lang, label }: { lang: "en" | "id"; label: string }) {
  const [fileName, setFileName] = useState<string | null>(null);
  return (
    <div className="space-y-3 rounded-xl border border-dashed border-ink/20 p-4">
      <p className="text-sm font-semibold text-ink">{label}</p>
      <label className="flex cursor-pointer items-center gap-3 rounded-lg bg-feed/60 px-4 py-3 text-sm text-ink/80 hover:bg-feed">
        <FileUp className="h-4 w-4" />
        <span className="truncate">{fileName ?? "Choose .docx, .pdf, .txt or .md"}</span>
        <input
          type="file"
          name={`${lang}File`}
          accept=".docx,.pdf,.txt,.md,.html"
          className="sr-only"
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
        />
      </label>
      <Input name={`${lang}Link`} placeholder="…or paste a Google Drive / Docs link" />
    </div>
  );
}
