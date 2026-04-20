export type Category =
  | "Environment"
  | "Economy"
  | "Politics"
  | "Hype/Trend"
  | "Technology/AI"
  | "Health";

export const CATEGORIES: Category[] = [
  "Environment",
  "Economy",
  "Politics",
  "Hype/Trend",
  "Technology/AI",
  "Health",
];

/**
 * Content blocks used to compose article bodies.
 * Add new block types here if you need a new editorial treatment.
 */
export type ContentBlock =
  | { type: "paragraph"; html: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "eyebrow"; text: string } // small uppercase section label
  | { type: "callout"; html: string } // left-border pull-out
  | { type: "quote"; html: string } // centered black block quote
  | { type: "list"; items: { label: string; text: string }[] } // arrow list
  | { type: "statsGrid"; items: { flag?: string; label: string; value: string }[] }
  | { type: "divider" }
  | { type: "sources"; items: string[] };

export interface ArticleTranslation {
  title?: string;
  excerpt?: string;
  content?: ContentBlock[];
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  coverImageAlt: string;
  author: string;
  publishedAt: string; // ISO date
  category: Category;
  readingMinutes: number;
  content: ContentBlock[];
  translations?: {
    id?: ArticleTranslation;
  };
}

export interface Update {
  slug: string;
  title: string;
  body: string;
  date: string; // ISO date
  kind: "announcement" | "milestone" | "event";
  icon?: string; // emoji
  translations?: {
    id?: { title?: string; body?: string };
  };
}

export interface UpcomingEvent {
  date: string;
  title: string;
  body: string;
  translations?: {
    id?: { title?: string; body?: string };
  };
}
