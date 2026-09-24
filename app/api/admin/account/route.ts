import { NextResponse } from "next/server";
import { credentialsOf, secretPatch, toPublic, updateEditor } from "@/lib/server/editors";
import { checkGithubAccess } from "@/lib/github-publish";
import { errorResponse, requireUser, type SessionUser } from "@/lib/server/session";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function describe(user: SessionUser) {
  return {
    kind: user.kind,
    displayName: user.displayName,
    isAdmin: user.isAdmin,
    editor: user.editor ? toPublic(user.editor) : null,
  };
}

export async function GET() {
  try {
    return NextResponse.json(describe(await requireUser()));
  } catch (e) {
    return errorResponse(e);
  }
}

/** Save the editor's own API keys, GitHub token and repo. */
export async function PUT(req: Request) {
  try {
    const user = await requireUser();
    if (user.kind !== "editor") throw new Error("The head admin login has no personal settings. Create an editor account for yourself.");
    const body = (await req.json()) as {
      displayName?: string;
      anthropicKey?: string;
      geminiKey?: string;
      githubToken?: string;
      githubRepo?: string;
      githubBranch?: string;
    };

    const repo = body.githubRepo?.trim().replace(/^https:\/\/github\.com\//, "").replace(/\.git$|\/$/g, "");
    if (repo !== undefined && repo !== "" && !/^[\w.-]+\/[\w.-]+$/.test(repo)) {
      throw new Error('Repository must look like "owner/name".');
    }
    const branch = body.githubBranch?.trim();

    const updated = await updateEditor(user.editor.id, {
      ...(body.displayName?.trim() ? { display_name: body.displayName.trim() } : {}),
      ...secretPatch("anthropic_key_enc", body.anthropicKey),
      ...secretPatch("gemini_key_enc", body.geminiKey),
      ...secretPatch("github_token_enc", body.githubToken),
      ...(repo !== undefined ? { github_repo: repo || null } : {}),
      ...(branch ? { github_branch: branch } : {}),
    });

    // Tell the editor straight away if the token can't push to the repo.
    const creds = credentialsOf(updated);
    const github =
      creds.githubToken && creds.githubRepo ? await checkGithubAccess(creds).catch((e: Error) => e.message) : null;
    return NextResponse.json({ ...describe({ ...user, editor: updated, displayName: updated.display_name }), github });
  } catch (e) {
    return errorResponse(e);
  }
}
