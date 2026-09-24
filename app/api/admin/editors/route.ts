import { NextResponse } from "next/server";
import { generateTempPassword, hashPassword } from "@/lib/server/crypto";
import { createEditor, listEditors, toPublic } from "@/lib/server/editors";
import { errorResponse, requireUser } from "@/lib/server/session";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await requireUser({ admin: true });
    return NextResponse.json({ editors: (await listEditors()).map(toPublic) });
  } catch (e) {
    return errorResponse(e);
  }
}

/** Invite an editor: returns a one-time temporary password to hand over. */
export async function POST(req: Request) {
  try {
    await requireUser({ admin: true });
    const body = (await req.json()) as { username?: string; displayName?: string; isAdmin?: boolean };
    const username = (body.username ?? "").trim().toLowerCase();
    if (!/^[a-z0-9._-]{3,32}$/.test(username)) {
      throw new Error("Username: 3–32 characters, lowercase letters, numbers, dot, dash or underscore.");
    }
    if (username === "admin") throw new Error('"admin" is reserved for the head admin login.');
    const displayName = (body.displayName ?? "").trim() || username;
    const tempPassword = generateTempPassword();
    const editor = await createEditor({
      username,
      displayName,
      passwordHash: await hashPassword(tempPassword),
      isAdmin: Boolean(body.isAdmin),
    });
    return NextResponse.json({ editor: toPublic(editor), tempPassword });
  } catch (e) {
    return errorResponse(e);
  }
}
