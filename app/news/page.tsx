import type { Metadata } from "next";
import { getSortedArticles } from "@/content/articles";
import { NewsListClient } from "@/components/news-list-client";

export const metadata: Metadata = {
  title: "News",
  description:
    "All UGS stories, researched and fact-checked by SMA Regina Pacis Surakarta students.",
};

export default function NewsPage() {
  const articles = getSortedArticles();
  return (
    <div className="container py-14 sm:py-20">
      <header className="mb-12 max-w-2xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-brand">
          News Hub
        </p>
        <h1 className="font-serif text-4xl font-bold leading-tight text-ink sm:text-5xl">
          All stories. One newsroom.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-text sm:text-lg">
          Browse our coverage across six categories. Every story is researched,
          written, and fact-checked by students.
        </p>
      </header>

      <NewsListClient articles={articles} />
    </div>
  );
}
