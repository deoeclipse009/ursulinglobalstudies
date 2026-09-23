import type { Metadata } from "next";
import { AdminNav } from "@/components/admin/admin-nav";
import { getSessionUser } from "@/lib/server/session";

// Hidden area: not linked anywhere and never indexed.
export const metadata: Metadata = {
  title: "Newsroom admin",
  robots: { index: false, follow: false, nocache: true },
};

export const dynamic = "force-dynamic";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const user = await getSessionUser().catch(() => null);
  return (
    <div className="min-h-[70vh] bg-feed/40">
      {user && <AdminNav displayName={user.displayName} isAdmin={user.isAdmin} isRoot={user.kind === "root"} />}
      {children}
    </div>
  );
}
