import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { validateArticle } from "@/lib/article-schema";
import { publishArticle } from "@/lib/github-publish";
import { credentialsOf } from "@/lib/server/editors";
import { errorResponse, requireUser } from "@/lib/server/session";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const IMAGE_EXT: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
};

export async function POST(req: Request) {
  try {
    const user = await requireUser({ editor: true });
    const form = await req.formData();
    const article = validateArticle(JSON.parse(String(form.get("article") ?? "null")));

    let cover: { base64: string; extension: string } | undefined;
    const file = form.get("cover");
    if (file instanceof File && file.size > 0) {
      const extension = IMAGE_EXT[file.type];
      if (!extension) throw new Error("Cover image must be JPG, PNG or WebP.");
      if (file.size > 4 * 1024 * 1024) throw new Error("Cover image must be under 4 MB.");
      cover = { base64: Buffer.from(await file.arrayBuffer()).toString("base64"), extension };
    }

    const result = await publishArticle({
      target: credentialsOf(user.editor!),
      publishedBy: user.displayName,
      article,
      cover,
      overwrite: form.get("overwrite") === "on",
    });
    return NextResponse.json(result);
  } catch (e) {
    if (e instanceof ZodError) {
      const msg = e.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join("; ");
      return NextResponse.json({ error: `Article data is invalid: ${msg}` }, { status: 400 });
    }
    return errorResponse(e);
  }
}
