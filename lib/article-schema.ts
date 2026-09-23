import { z } from "zod";
import { CATEGORIES, type Article, type Category, type ContentBlock } from "@/content/types";

/**
 * Runtime validation for articles produced by the admin page / AI formatter.
 * Mirrors the types in `content/types.ts`.
 */
const blockSchema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("paragraph"), html: z.string().min(1) }),
  z.object({
    type: z.literal("heading"),
    level: z.union([z.literal(2), z.literal(3)]),
    text: z.string().min(1),
  }),
  z.object({ type: z.literal("eyebrow"), text: z.string().min(1) }),
  z.object({ type: z.literal("callout"), html: z.string().min(1) }),
  z.object({ type: z.literal("quote"), html: z.string().min(1) }),
  z.object({
    type: z.literal("list"),
    items: z.array(z.object({ label: z.string(), text: z.string() })).min(1),
  }),
  z.object({
    type: z.literal("statsGrid"),
    items: z
      .array(
        z.object({
          flag: z.string().optional(),
          label: z.string(),
          value: z.string(),
        }),
      )
      .min(1),
  }),
  z.object({ type: z.literal("divider") }),
  z.object({ type: z.literal("sources"), items: z.array(z.string()).min(1) }),
]);

export const articleSchema = z.object({
  slug: z
    .string()
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "slug must be lowercase-hyphenated"),
  title: z.string().min(1),
  excerpt: z.string().min(1),
  coverImage: z.string().regex(/^\/images\/[\w.-]+$/, "coverImage must be /images/<file>"),
  coverImageAlt: z.string().min(1),
  coverImageCredit: z.string().optional(),
  author: z.string().min(1),
  publishedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "publishedAt must be YYYY-MM-DD"),
  category: z.enum(CATEGORIES as [Category, ...Category[]]),
  readingMinutes: z.number().int().positive(),
  content: z.array(blockSchema).min(1),
  translations: z
    .object({
      id: z
        .object({
          title: z.string().optional(),
          excerpt: z.string().optional(),
          content: z.array(blockSchema).optional(),
        })
        .optional(),
    })
    .optional(),
});

// Compile-time check that the schema and the Article type agree.
type _SchemaMatchesType = z.infer<typeof articleSchema> extends Article ? true : never;
const _check: _SchemaMatchesType = true;
void _check;
export type { ContentBlock };

export function validateArticle(input: unknown): Article {
  return articleSchema.parse(input) as Article;
}
