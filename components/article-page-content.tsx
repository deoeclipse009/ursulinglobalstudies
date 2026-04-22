"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { ArticleBody } from "@/components/article-body";
import { ArticleCard } from "@/components/article-card";
import { CategoryChip } from "@/components/category-chip";
import { formatDate } from "@/lib/utils";
import { useLanguage } from "@/components/language-provider";
import { getLocalizedArticle } from "@/content/articles";
import type { Article } from "@/content/types";

interface Props {
  article: Article;
  related: Article[];
}

export function ArticlePageContent({ article, related }: Props) {
  const { t, lang } = useLanguage();
  const { title, excerpt, content } = getLocalizedArticle(article, lang);
  return (
    <article>
      {/* Top bar */}
      <div className="border-b border-ink/10 bg-paper">
        <div className="container py-4">
          <Link
            href="/news"
            className="inline-flex items-center gap-1.5 text-sm text-ink/60 transition-colors hover:text-brand focus-brand rounded"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("article.back")}
          </Link>
        </div>
      </div>

      {/* Header */}
      <header className="container max-w-4xl pt-10 sm:pt-16">
        <div className="mb-5">
          <CategoryChip category={article.category} size="md" />
        </div>
        <h1 className="font-serif text-3xl font-bold leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-text sm:text-xl">
          {excerpt}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-ink/10 py-4 text-sm">
          <span className="font-semibold text-ink">{article.author}</span>
          <span className="text-ink/30" aria-hidden>·</span>
          <time dateTime={article.publishedAt} className="text-ink/60">
            {formatDate(article.publishedAt)}
          </time>
          <span className="text-ink/30" aria-hidden>·</span>
          <span className="inline-flex items-center gap-1 text-ink/60">
            <Clock className="h-3.5 w-3.5" />
            {article.readingMinutes} {t("article.readTime")}
          </span>
        </div>
      </header>

      {/* Cover image */}
      <div className="container max-w-5xl pt-10">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-feed">
          <Image
            src={article.coverImage}
            alt={article.coverImageAlt}
            fill
            sizes="(min-width: 1024px) 960px, 100vw"
            className="object-cover"
            priority
          />
        </div>
        {article.coverImageCredit && (
          <p className="mt-2 text-right text-xs text-ink/40">
            {article.coverImageCredit}
          </p>
        )}
      </div>

      {/* Body */}
      <div className="container max-w-3xl py-12 sm:py-16">
        <ArticleBody blocks={content} />
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-ink/10 bg-feed/30 py-16 sm:py-20">
          <div className="container">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-brand">
              {t("article.related.eyebrow")}
            </p>
            <h2 className="mb-10 text-2xl font-bold text-ink sm:text-3xl">
              {t("article.related.title")}
            </h2>
            <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
