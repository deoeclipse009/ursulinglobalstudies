import { redirect } from "next/navigation";
import { AccountSettings } from "@/components/admin/account-settings";
import { toPublic } from "@/lib/server/editors";
import { getSessionUser } from "@/lib/server/session";

export const dynamic = "force-dynamic";

export default async function AccountPage() {
  const user = await getSessionUser();
  if (!user) redirect("/admin/login");
  if (user.kind === "root") redirect("/admin/editors");
  return <AccountSettings initial={toPublic(user.editor)} />;
}
