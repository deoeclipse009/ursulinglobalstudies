"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import type { Article } from "@/content/types";
import { getLocalizedArticle } from "@/content/articles";
import { CategoryChip } from "@/components/category-chip";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/language-provider";

interface ArticleCardProps {
  article: Article;
  priority?: boolean;
  className?: string;
}

export function ArticleCard({ article, priority, className }: ArticleCardProps) {
  const { lang } = useLanguage();
  const { title, excerpt } = getLocalizedArticle(article, lang);

  return (
    <article className={cn("group flex flex-col", className)}>
      <Link
        href={`/news/${article.slug}`}
        className="block overflow-hidden rounded-xl focus-brand"
        aria-label={title}
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-feed">
          <Image
            src={article.coverImage}
            alt={article.coverImageAlt}
            fill
            sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            priority={priority}
          />
        </div>
      </Link>

      <div className="mt-4 flex flex-col">
        <div className="mb-3">
          <CategoryChip category={article.category} />
        </div>
        <h3 className="text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-brand sm:text-xl">
          <Link href={`/news/${article.slug}`} className="focus-brand rounded">
            {title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-text">
          {excerpt}
        </p>
        <div className="mt-4 flex items-center gap-3 text-xs text-ink/50">
          <span className="font-medium text-ink/70">{article.author}</span>
          <span aria-hidden>·</span>
          <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
          <span aria-hidden>·</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {article.readingMinutes} min
          </span>
        </div>
      </div>
    </article>
  );
}
