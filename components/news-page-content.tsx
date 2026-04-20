"use client";

import { useLanguage } from "@/components/language-provider";
import { NewsListClient } from "@/components/news-list-client";
import type { Article } from "@/content/types";

export function NewsPageContent({ articles }: { articles: Article[] }) {
  const { t } = useLanguage();
  return (
    <div className="container py-14 sm:py-20">
      <header className="mb-12 max-w-2xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-brand">
          {t("news.eyebrow")}
        </p>
        <h1 className="font-serif text-4xl font-bold leading-tight text-ink sm:text-5xl">
          {t("news.title")}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-text sm:text-lg">
          {t("news.subtitle")}
        </p>
      </header>
      <NewsListClient articles={articles} />
    </div>
  );
}
