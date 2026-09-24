import "server-only";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { ADMIN_COOKIE, ROOT_SUBJECT, createSessionToken, verifySessionToken } from "@/lib/admin-auth";
import { databaseConfigured, getEditorById, type EditorRow } from "@/lib/server/editors";

export type SessionUser =
  | { kind: "root"; displayName: string; isAdmin: true; editor: null }
  | { kind: "editor"; displayName: string; isAdmin: boolean; editor: EditorRow };

/** The signed-in head admin or editor, or null (expired, reset, disabled, deleted). */
export async function getSessionUser(): Promise<SessionUser | null> {
  const claims = await verifySessionToken(cookies().get(ADMIN_COOKIE)?.value);
  if (!claims) return null;
  if (claims.subject === ROOT_SUBJECT) {
    return process.env.ADMIN_PASSWORD
      ? { kind: "root", displayName: "Head admin", isAdmin: true, editor: null }
      : null;
  }
  if (!databaseConfigured()) return null;
  const editor = await getEditorById(claims.subject);
  if (!editor || editor.disabled || editor.session_version !== claims.version) return null;
  return { kind: "editor", displayName: editor.display_name, isAdmin: editor.is_admin, editor };
}

export class HttpError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}

/** For route handlers: the current user, or throw 401/403. */
export async function requireUser(opts: { admin?: boolean; editor?: boolean } = {}) {
  const user = await getSessionUser();
  if (!user) throw new HttpError(401, "Not signed in.");
  if (opts.admin && !user.isAdmin) throw new HttpError(403, "Only admins can do this.");
  if (opts.editor && user.kind !== "editor") {
    throw new HttpError(403, "Sign in with your own editor account to do this. The head admin login is only for managing editors.");
  }
  if (user.kind === "editor" && user.editor.must_change_password && opts.editor) {
    throw new HttpError(403, "Change your temporary password first (Account page).");
  }
  return user;
}

export function errorResponse(e: unknown) {
  if (e instanceof HttpError) return NextResponse.json({ error: e.message }, { status: e.status });
  return NextResponse.json({ error: (e as Error).message }, { status: 500 });
}

export async function setSessionCookie(res: NextResponse, subject: string, version: number) {
  const { token, maxAge } = await createSessionToken(subject, version);
  res.cookies.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge,
  });
}
