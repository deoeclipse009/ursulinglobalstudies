"use client";

import { useMemo, useState } from "react";
import type { Article, Category } from "@/content/types";
import { ArticleCard } from "@/components/article-card";
import { cn } from "@/lib/utils";

const FILTERS: ("All" | Category)[] = [
  "All",
  "Environment",
  "Economy",
  "Politics",
  "Hype/Trend",
  "Technology/AI",
  "Health",
];

export function NewsListClient({ articles }: { articles: Article[] }) {
  const [active, setActive] = useState<(typeof FILTERS)[number]>("All");

  const filtered = useMemo(() => {
    if (active === "All") return articles;
    return articles.filter((a) => a.category === active);
  }, [articles, active]);

  return (
    <div>
      <div
        className="mb-10 flex gap-2 overflow-x-auto pb-2"
        role="tablist"
        aria-label="Filter articles by category"
      >
        {FILTERS.map((f) => {
          const isActive = f === active;
          return (
            <button
              key={f}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(f)}
              className={cn(
                "flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all focus-brand",
                isActive
                  ? "bg-ink text-paper"
                  : "bg-feed text-ink/70 hover:bg-feed/70 hover:text-ink",
              )}
            >
              {f}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-xl border border-dashed border-ink/15 py-20 text-center">
          <p className="text-sm text-ink/60">
            No stories in this category yet. Check back soon.
          </p>
        </div>
      ) : (
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      )}
    </div>
  );
}
