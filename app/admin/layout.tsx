import type { Metadata } from "next";

// Hidden page: not linked anywhere and never indexed.
export const metadata: Metadata = {
  title: "Newsroom admin",
  robots: { index: false, follow: false, nocache: true },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-[70vh] bg-feed/40">{children}</div>;
}
