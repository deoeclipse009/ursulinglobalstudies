"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/components/language-provider";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const { t } = useLanguage();

  const NAV = [
    { href: "/", label: t("nav.home") },
    { href: "/news", label: t("nav.news") },
    { href: "/about", label: t("nav.about") },
    { href: "/updates", label: t("nav.updates") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b-2 border-ink transition-all",
        scrolled
          ? "bg-paper/85 backdrop-blur-md"
          : "bg-paper",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          aria-label="UGS home"
          className="group flex items-center gap-2.5 focus-brand rounded"
        >
          <Image
            src="/ugs_menu_bar.png"
            alt=""
            width={130}
            height={130}
            className="h-22 w-22 object-contain transition-transform group-hover:rotate-[-4deg]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm font-medium transition-colors focus-brand",
                  active ? "text-ink" : "text-ink/60 hover:text-ink",
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-3 -bottom-px h-0.5 bg-brand" />
                )}
              </Link>
            );
          })}
          <div className="ml-2 border-l border-ink/15 pl-2">
            <LanguageToggle />
          </div>
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-md text-ink transition-colors hover:bg-feed/60 focus-brand md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          id="mobile-menu"
          className="border-t border-ink/10 bg-paper md:hidden"
          aria-label="Mobile"
        >
          <div className="container flex flex-col py-2">
            {NAV.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-3 text-base font-medium transition-colors",
                    active
                      ? "bg-feed text-ink"
                      : "text-ink/70 hover:bg-feed/60 hover:text-ink",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-1 border-t border-ink/10 pt-2 px-1">
              <LanguageToggle />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
