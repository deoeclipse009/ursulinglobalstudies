import { NextResponse } from "next/server";
import { hashPassword, PASSWORD_MIN_LENGTH, verifyPassword } from "@/lib/server/crypto";
import { updateEditor } from "@/lib/server/editors";
import { errorResponse, requireUser, setSessionCookie } from "@/lib/server/session";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const user = await requireUser();
    if (user.kind !== "editor") throw new Error("The head admin password is ADMIN_PASSWORD in the hosting settings.");
    const { currentPassword = "", newPassword = "" } = (await req.json()) as {
      currentPassword?: string;
      newPassword?: string;
    };
    if (!(await verifyPassword(currentPassword, user.editor.password_hash))) {
      throw new Error("Current password is wrong.");
    }
    if (newPassword.length < PASSWORD_MIN_LENGTH) {
      throw new Error(`New password must be at least ${PASSWORD_MIN_LENGTH} characters.`);
    }
    if (newPassword === currentPassword) throw new Error("Choose a different password.");

    const updated = await updateEditor(user.editor.id, {
      password_hash: await hashPassword(newPassword),
      must_change_password: false,
      session_version: user.editor.session_version + 1, // signs out other devices
    });
    const res = NextResponse.json({ ok: true });
    await setSessionCookie(res, updated.id, updated.session_version);
    return res;
  } catch (e) {
    return errorResponse(e);
  }
}
