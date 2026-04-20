import type { Metadata } from "next";
import { getSortedArticles } from "@/content/articles";
import { NewsPageContent } from "@/components/news-page-content";

export const metadata: Metadata = {
  title: "News",
  description:
    "All UGS stories, researched and fact-checked by SMA Regina Pacis Surakarta students.",
};

export default function NewsPage() {
  const articles = getSortedArticles();
  return <NewsPageContent articles={articles} />;
}
