import { NextResponse } from "next/server";
import { ROOT_SUBJECT, checkRootPassword } from "@/lib/admin-auth";
import { verifyPassword } from "@/lib/server/crypto";
import { databaseConfigured, getEditorByUsername } from "@/lib/server/editors";
import { errorResponse, setSessionCookie } from "@/lib/server/session";

export const runtime = "nodejs";

/** The head admin signs in as "admin" with ADMIN_PASSWORD; editors with their own account. */
export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => ({}))) as { username?: string; password?: string };
    const username = (body.username ?? "").trim().toLowerCase();
    const password = body.password ?? "";
    const res = NextResponse.json({ ok: true });

    if (username === "admin") {
      if (await checkRootPassword(password)) {
        await setSessionCookie(res, ROOT_SUBJECT, 1);
        return res;
      }
    } else if (username && databaseConfigured()) {
      const editor = await getEditorByUsername(username);
      if (editor && !editor.disabled && (await verifyPassword(password, editor.password_hash))) {
        await setSessionCookie(res, editor.id, editor.session_version);
        return res;
      }
    }

    // Same answer for unknown users and wrong passwords; slow down guessing.
    await new Promise((r) => setTimeout(r, 800));
    return NextResponse.json({ error: "Wrong username or password." }, { status: 401 });
  } catch (e) {
    return errorResponse(e);
  }
}
