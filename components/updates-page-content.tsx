"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import { formatDate } from "@/lib/utils";
import type { Update, UpcomingEvent } from "@/content/types";

interface Props {
  updates: Update[];
  upcomingEvents: UpcomingEvent[];
}

function formatEventDate(iso: string) {
  const d = new Date(iso);
  return {
    month: d.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
    day: d.getDate().toString().padStart(2, "0"),
  };
}

function localize<T extends { translations?: { id?: { title?: string; body?: string } } }>(
  item: T & { title: string; body: string },
  lang: string,
) {
  const tr = lang !== "en" ? item.translations?.id : undefined;
  return {
    title: tr?.title ?? item.title,
    body: tr?.body ?? item.body,
  };
}

export function UpdatesPageContent({ updates, upcomingEvents }: Props) {
  const { t, lang } = useLanguage();
  return (
    <div className="container py-14 sm:py-20">
      <header className="mb-14 max-w-2xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-brand">
          {t("updates.eyebrow")}
        </p>
        <h1 className="text-4xl font-bold leading-tight text-ink sm:text-5xl">
          {t("updates.title")}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-text sm:text-lg">
          {t("updates.subtitle")}
        </p>
      </header>

      {/* Open recruitment */}
      <section className="mb-16">
        <h2 className="mb-5 text-xl font-semibold text-ink">{t("updates.recruitment")}</h2>
        <div className="overflow-hidden rounded-2xl bg-brand p-8 text-paper sm:p-10">
          <span className="inline-block rounded-full bg-paper/15 px-3 py-1 text-xs font-bold uppercase tracking-wider">
            {t("updates.deadline")}: Apr 30, 2026
          </span>
          <h3 className="mt-5 text-2xl font-bold leading-tight sm:text-3xl">
            {t("updates.recruitment.title")}
          </h3>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-paper/90">
            {t("updates.recruitment.body")}
          </p>
          <div className="mt-7">
            <Button asChild size="lg" className="bg-paper text-brand hover:bg-paper/90">
              <Link href="/contact">{t("updates.apply")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming events */}
      <section className="mb-16">
        <h2 className="mb-5 text-xl font-semibold text-ink">{t("updates.events")}</h2>
        <div className="divide-y divide-ink/10 overflow-hidden rounded-2xl border border-ink/10 bg-paper">
          {upcomingEvents.map((e) => {
            const d = formatEventDate(e.date);
            const { title, body } = localize(e, lang);
            return (
              <div
                key={e.date + e.title}
                className="flex gap-5 p-5 transition-colors hover:bg-feed/40 sm:p-7"
              >
                <div className="flex h-16 w-16 flex-shrink-0 flex-col items-center justify-center rounded-lg bg-feed text-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-ink/60">
                    {d.month}
                  </span>
                  <span className="text-2xl font-bold leading-none text-ink">
                    {d.day}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-ink sm:text-lg">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-text">{body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* What we're up to */}
      <section>
        <h2 className="mb-5 text-xl font-semibold text-ink">{t("updates.whatsUp")}</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {updates.map((u) => {
            const { title, body } = localize(u, lang);
            return (
              <article
                key={u.slug}
                className="group rounded-2xl border border-ink/10 bg-feed/40 p-6 transition-all hover:-translate-y-1 hover:border-brand/30 hover:bg-paper hover:shadow-md sm:p-7"
              >
                {u.icon && (
                  <div className="mb-4 text-2xl" aria-hidden>
                    {u.icon}
                  </div>
                )}
                <h3 className="mb-2 text-lg font-semibold text-ink">{title}</h3>
                <p className="text-sm leading-relaxed text-text">{body}</p>
                <p className="mt-5 text-xs text-ink/50">{formatDate(u.date)}</p>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
