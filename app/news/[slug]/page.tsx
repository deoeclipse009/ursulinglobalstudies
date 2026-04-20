import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllSlugs,
  getArticleBySlug,
  getSortedArticles,
} from "@/content/articles";
import { ArticlePageContent } from "@/components/article-page-content";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return { title: "Not found" };
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author],
      images: [{ url: article.coverImage, alt: article.coverImageAlt }],
    },
  };
}

export default function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const related = getSortedArticles()
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  return <ArticlePageContent article={article} related={related} />;
}
