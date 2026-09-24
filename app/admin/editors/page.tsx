import { redirect } from "next/navigation";
import { EditorsManager } from "@/components/admin/editors-manager";
import { databaseConfigured } from "@/lib/server/editors";
import { getSessionUser } from "@/lib/server/session";

export const dynamic = "force-dynamic";

export default async function EditorsPage() {
  const user = await getSessionUser();
  if (!user) redirect("/admin/login");
  if (!user.isAdmin) redirect("/admin");
  return (
    <EditorsManager
      databaseReady={databaseConfigured()}
      myId={user.kind === "editor" ? user.editor.id : null}
      isRoot={user.kind === "root"}
    />
  );
}
