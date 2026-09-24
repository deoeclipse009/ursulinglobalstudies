import { NextResponse } from "next/server";
import { generateTempPassword, hashPassword } from "@/lib/server/crypto";
import { deleteEditor, getEditorById, toPublic, updateEditor } from "@/lib/server/editors";
import { errorResponse, HttpError, requireUser } from "@/lib/server/session";

export const runtime = "nodejs";

type Action = "resetPassword" | "disable" | "enable" | "makeAdmin" | "removeAdmin";

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    const me = await requireUser({ admin: true });
    const target = await getEditorById(params.id);
    if (!target) throw new HttpError(404, "Editor not found.");
    const { action } = (await req.json()) as { action?: Action };
    const self = me.kind === "editor" && me.editor.id === target.id;
    if (self) throw new Error("Use the Account page for your own password. Ask another admin to change your access.");

    let tempPassword: string | undefined;
    let patch = {};
    switch (action) {
      case "resetPassword":
        tempPassword = generateTempPassword();
        patch = {
          password_hash: await hashPassword(tempPassword),
          must_change_password: true,
          session_version: target.session_version + 1,
        };
        break;
      case "disable":
        patch = { disabled: true, session_version: target.session_version + 1 };
        break;
      case "enable":
        patch = { disabled: false };
        break;
      case "makeAdmin":
        patch = { is_admin: true };
        break;
      case "removeAdmin":
        patch = { is_admin: false };
        break;
      default:
        throw new Error("Unknown action.");
    }
    const updated = await updateEditor(target.id, patch);
    return NextResponse.json({ editor: toPublic(updated), tempPassword });
  } catch (e) {
    return errorResponse(e);
  }
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  try {
    const me = await requireUser({ admin: true });
    if (me.kind === "editor" && me.editor.id === params.id) throw new Error("You can't delete your own account.");
    await deleteEditor(params.id);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return errorResponse(e);
  }
}
