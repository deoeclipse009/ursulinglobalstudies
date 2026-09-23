import "server-only";
import mammoth from "mammoth";
import type { SubmissionDoc } from "@/lib/ai/convert";

const DOCX_MIME = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

/** Turn an uploaded file into something the model can read. */
export async function extractFromFile(
  file: File,
  language: SubmissionDoc["language"],
): Promise<SubmissionDoc> {
  const name = file.name || "upload";
  const lower = name.toLowerCase();
  const buf = Buffer.from(await file.arrayBuffer());

  if (lower.endsWith(".docx") || file.type === DOCX_MIME) {
    return { language, name, text: await docxToHtml(buf) };
  }
  if (lower.endsWith(".pdf") || file.type === "application/pdf") {
    return { language, name, pdfBase64: buf.toString("base64") };
  }
  if (/\.(txt|md|markdown|html?)$/.test(lower) || file.type.startsWith("text/")) {
    return { language, name, text: buf.toString("utf8") };
  }
  throw new Error(
    `${name}: unsupported file type. Use .docx, .pdf, .txt, .md or .html (for old .doc files, "Save as .docx" first).`,
  );
}

/**
 * Fetch a Google Drive / Google Docs link. Works when the file is shared as
 * "Anyone with the link can view"; private files need to be downloaded and
 * uploaded instead.
 */
export async function extractFromDriveLink(
  url: string,
  language: SubmissionDoc["language"],
): Promise<SubmissionDoc> {
  const id = driveFileId(url);
  if (!id) throw new Error(`Not a Google Drive / Docs link: ${url}`);

  const attempts = [
    `https://docs.google.com/document/d/${id}/export?format=docx`, // native Google Doc
    `https://drive.google.com/uc?export=download&id=${id}`, // uploaded .docx / .pdf
  ];
  for (const attempt of attempts) {
    const res = await fetch(attempt, { redirect: "follow" });
    if (!res.ok) continue;
    const type = res.headers.get("content-type") ?? "";
    const buf = Buffer.from(await res.arrayBuffer());
    if (type.includes("wordprocessingml") || isZip(buf)) {
      return { language, name: `drive:${id}`, text: await docxToHtml(buf) };
    }
    if (type.includes("pdf")) {
      return { language, name: `drive:${id}`, pdfBase64: buf.toString("base64") };
    }
    // An HTML response here is Google's sign-in or virus-scan page: try the next URL.
  }
  throw new Error(
    `Couldn't download ${url}. Share it as "Anyone with the link can view", or download it and attach the file instead.`,
  );
}

export function driveFileId(url: string): string | null {
  const m =
    url.match(/\/d\/([\w-]{20,})/) ?? url.match(/[?&]id=([\w-]{20,})/);
  return m ? m[1] : null;
}

function isZip(buf: Buffer) {
  return buf.length > 4 && buf[0] === 0x50 && buf[1] === 0x4b;
}

async function docxToHtml(buf: Buffer): Promise<string> {
  // HTML (not raw text) keeps tables, bold/italic and paragraph breaks.
  const { value } = await mammoth.convertToHtml({ buffer: buf });
  return value;
}
