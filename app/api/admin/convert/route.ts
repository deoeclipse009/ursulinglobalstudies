import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { availableProviders, convertSubmission, type Provider, type SubmissionDoc } from "@/lib/ai/convert";
import { extractFromDriveLink, extractFromFile } from "@/lib/ai/extract";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
// Formatting a long bilingual article can take a minute or two.
export const maxDuration = 300;

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const docs: SubmissionDoc[] = [];
    for (const language of ["en", "id"] as const) {
      const file = form.get(`${language}File`);
      const link = String(form.get(`${language}Link`) ?? "").trim();
      if (file instanceof File && file.size > 0) docs.push(await extractFromFile(file, language));
      else if (link) docs.push(await extractFromDriveLink(link, language));
    }
    if (docs.length === 0) {
      return NextResponse.json({ error: "Attach the English and/or Indonesian document (or paste a Drive link)." }, { status: 400 });
    }

    const providers = availableProviders();
    const requested = String(form.get("provider") ?? "") as Provider;
    const provider = providers.includes(requested) ? requested : providers[0];
    if (!provider) {
      return NextResponse.json({ error: "No AI provider configured: set ANTHROPIC_API_KEY (or GEMINI_API_KEY)." }, { status: 503 });
    }

    const result = await convertSubmission(docs, {
      provider,
      translateMissing: form.get("translateMissing") === "on",
    });
    return NextResponse.json(result);
  } catch (e) {
    if (e instanceof Anthropic.RateLimitError) {
      return NextResponse.json({ error: "Claude is rate-limited right now. Try again in a minute." }, { status: 429 });
    }
    if (e instanceof Anthropic.APIError) {
      return NextResponse.json({ error: `Claude API error ${e.status}: ${e.message}` }, { status: 502 });
    }
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}
