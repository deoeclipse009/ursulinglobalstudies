"use client";

import Link from "next/link";
import { Instagram, Mail } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";

export function SiteFooter() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const FOOTER_NAV = [
    { href: "/", label: t("nav.home") },
    { href: "/news", label: t("nav.news") },
    { href: "/about", label: t("nav.about") },
    { href: "/updates", label: t("nav.updates") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <footer className="mt-24 bg-ink text-paper">
      {/* Top rule — classic masthead treatment, inverted */}
      <div
        aria-hidden
        className="h-[6px] w-full"
        style={{
          background:
            "linear-gradient(to bottom, #ffffff 0 1px, transparent 1px 3px, #ffffff 3px 5px)",
        }}
      />

      <div className="container py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-md">
            <div className="flex items-center gap-2.5">
              <Image
                src="/ugs_menu_bar.png"
                alt=""
                width={150}
                height={150}
                className="h-22 w-22 object-contain brightness-0 invert"
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-paper/70">
              {t("footer.description")}
            </p>
            <p className="mt-6 font-serif text-xs italic text-paper/50">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-paper/50">
              {t("footer.explore")}
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-paper/80 transition-colors hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-paper/50">
              {t("footer.connect")}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://instagram.com/ursulin.globalstudies"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex items-center gap-2 text-sm text-paper/80 transition-colors hover:text-paper"
                >
                  <Instagram className="h-4 w-4" />
                  @ursulin.globalstudies
                </a>
              </li>
              <li>
                <a
                  href="mailto:ursulinglobalstudies4326@gmail.com"
                  className="group inline-flex items-center gap-2 text-sm text-paper/80 transition-colors hover:text-paper"
                >
                  <Mail className="h-4 w-4" />
                  ursulinglobalstudies4326@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-paper/10 pt-6 text-xs text-paper/50 sm:flex-row sm:items-center">
          <p>{t("footer.rights", { year })}</p>
          <p>{t("footer.location")}</p>
        </div>
      </div>
    </footer>
  );
}
