import { NextResponse } from "next/server";
import { availableProviders } from "@/lib/ai/convert";
import { publishingConfigured } from "@/lib/github-publish";
import { credentialsOf } from "@/lib/server/editors";
import { errorResponse, requireUser } from "@/lib/server/session";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** What the signed-in editor has set up (never the secrets themselves). */
export async function GET() {
  try {
    const user = await requireUser();
    if (user.kind !== "editor") {
      return NextResponse.json({ providers: [], publishing: false, repo: null, branch: "main" });
    }
    const creds = credentialsOf(user.editor);
    return NextResponse.json({
      providers: availableProviders(creds),
      publishing: publishingConfigured(creds),
      repo: creds.githubRepo,
      branch: creds.githubBranch,
    });
  } catch (e) {
    return errorResponse(e);
  }
}
