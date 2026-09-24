"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

export function AdminNav({ displayName, isAdmin, isRoot }: { displayName: string; isAdmin: boolean; isRoot: boolean }) {
  const pathname = usePathname();
  const links = [
    ...(isRoot ? [] : [{ href: "/admin", label: "Publish" }, { href: "/admin/account", label: "My account" }]),
    ...(isAdmin ? [{ href: "/admin/editors", label: "Editors" }] : []),
  ];

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin/login";
  }

  return (
    <div className="border-b border-ink/10 bg-paper">
      <div className="container flex max-w-6xl flex-wrap items-center gap-2 py-3">
        <span className="mr-4 text-xs font-bold uppercase tracking-[0.12em] text-brand">Newsroom admin</span>
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={cn(
              "rounded-full px-3 py-1.5 text-sm font-medium",
              pathname === l.href ? "bg-ink text-paper" : "text-ink/70 hover:bg-feed",
            )}
          >
            {l.label}
          </Link>
        ))}
        <span className="ml-auto text-sm text-ink/60">{displayName}</span>
        <button onClick={logout} className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-sm text-ink/70 hover:bg-feed">
          <LogOut className="h-4 w-4" /> Sign out
        </button>
      </div>
    </div>
  );
}
