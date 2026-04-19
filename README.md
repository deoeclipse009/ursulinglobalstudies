# UGS — Ursulin Global Studies

Student-run newsroom and community hub for SMA Ursulin Solo. Next.js 14 App Router + TypeScript + Tailwind + shadcn/ui. No database, no auth, no CMS — articles live in a single typed file.

---

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Scripts:

```bash
npm run dev        # dev server
npm run build      # production build
npm run start      # run production build
npm run typecheck  # TypeScript check (no emit)
npm run lint       # Next.js lint
```

### Deploying to Vercel

Zero config. Push to a Git repo, import into Vercel, done. Inter is fetched from Google Fonts at build time and self-hosted automatically.

---

## Folder tour

```
app/
  layout.tsx              # Root layout, Inter font, header + footer
  page.tsx                # Home
  news/
    page.tsx              # News index
    [slug]/page.tsx       # Article page (statically generated)
  about/page.tsx
  updates/page.tsx
  contact/page.tsx
  not-found.tsx
  globals.css             # Tailwind base + prose-article styles

components/
  ui/                     # shadcn primitives (button, input, textarea, label)
  site-header.tsx         # Sticky nav with mobile menu
  site-footer.tsx
  article-card.tsx        # Reused on Home + News
  article-body.tsx        # Walks ContentBlock[] and renders each block
  category-chip.tsx
  contact-form.tsx        # Client component, logs + mailto
  news-list-client.tsx    # Category filter tabs

content/
  types.ts                # Article, Update, ContentBlock types
  articles.ts             # ⭐ All articles live here
  updates.ts              # ⭐ All community updates + events live here

lib/
  utils.ts                # cn() helper, formatDate()
  categories.ts           # Category → color mapping

tailwind.config.ts        # Brand + category colors baked in
```

---

## How to add a new article

Open **`content/articles.ts`** and append an object to the `articles` array. Save — the `/news` list and `/news/[slug]` pages update automatically. Nothing else to touch.

Minimum fields:

```ts
{
  slug: "unique-hyphenated-slug",     // becomes /news/unique-hyphenated-slug
  title: "Your headline here",
  excerpt: "One or two sentences that show up in cards and at the top of the article.",
  coverImage: "https://images.unsplash.com/photo-....?auto=format&fit=crop&w=1800&q=80",
  coverImageAlt: "Describe the image for screen readers",
  author: "Jane Doe",
  publishedAt: "2026-04-15",          // ISO date, YYYY-MM-DD
  category: "Environment",            // see below
  readingMinutes: 5,
  content: [
    { type: "paragraph", html: "Opening paragraph. <strong>Inline HTML is supported.</strong>" },
    { type: "eyebrow", text: "What's happening" },
    { type: "paragraph", html: "Follow-up paragraph." },
  ],
}
```

### Categories (one of)

`"Environment"` · `"Economy"` · `"Politics"` · `"Hype/Trend"` · `"Technology/AI"` · `"Health"`

Each has its own color from the brand palette — the chip is applied automatically.

### Content blocks

The `content` array is a sequence of blocks. Types (full definitions in `content/types.ts`):

| Block | What it does |
|---|---|
| `{ type: "paragraph", html }` | Body paragraph. `html` supports inline `<strong>`, `<em>`, `<a>`. |
| `{ type: "heading", level: 2 \| 3, text }` | Section heading. |
| `{ type: "eyebrow", text }` | Small uppercase blue label above a section (e.g. *"What's happening"*). |
| `{ type: "callout", html }` | Blue left-border pull-out box. |
| `{ type: "quote", html }` | Dark centered block quote — good for closers. |
| `{ type: "list", items }` | Arrow-bullet list inside a grey card. Items are `{ label, text }`. |
| `{ type: "statsGrid", items }` | Grid of labeled cards. Items are `{ flag?, label, value }`. |
| `{ type: "divider" }` | Thin horizontal rule. |
| `{ type: "sources", items }` | Numbered sources list. Item strings support inline HTML. |

### Images

- **Unsplash URLs** work out of the box — hostname is allowlisted in `next.config.js`.
- **Local images**: drop them in `public/` and reference as `/your-image.jpg`.
- Always provide `coverImageAlt`.

---

## How to add an update

Open **`content/updates.ts`**. Two arrays:

### `updates` (community milestones + announcements)

```ts
{
  slug: "unique-slug",
  title: "Building Our Data Journalism Division",
  body: "Short paragraph describing the update.",
  date: "2026-03-28",
  kind: "announcement" | "milestone" | "event",
  icon: "📊",   // optional emoji
}
```

### `upcomingEvents` (the dated event list)

```ts
{
  date: "2026-05-05",
  title: "Student Journalism Workshop",
  body: "What the event is about.",
}
```

Events render with a date tile (MONTH / day) automatically parsed from the ISO date.

---

## Design system

Brand colors are defined in `tailwind.config.ts` and available as Tailwind utilities:

| Token | Hex | Use |
|---|---|---|
| `bg-ink` / `text-ink` | `#1E2A38` | Headlines, dark CTAs, primary text on light |
| `bg-brand` / `text-brand` | `#2F6BFF` | Links, CTAs, accent eyebrows |
| `bg-feed` | `#E9EBED` | Section backgrounds, subtle cards |
| `text-text` | `#3A3A3A` | Body copy |
| `bg-paper` | `#FFFFFF` | Card surfaces |
| `bg-cat-environment` | `#2C9B66` | Category chips |
| `bg-cat-economy` | `#6E7A87` | |
| `bg-cat-politics` | `#F2C94C` | |
| `bg-cat-hype` | `#8B5CF6` | |
| `bg-cat-tech` | `#3B82F6` | |
| `bg-cat-health` | `#E63946` | |

Accents available: `bg-data`, `bg-positive`, `bg-hype`, `bg-warn`, `bg-callout`.

Typography: **Inter** from `next/font/google`, self-hosted at build time.

---

## Constraints honored

- ✅ No database, no auth, no CMS, no backend API
- ✅ Light mode only
- ✅ Zero-config Vercel deploy
- ✅ Mobile-first responsive
- ✅ Accessible (semantic HTML, alt text, focus rings, skip link, proper heading order)
- ✅ TypeScript strict, no `any` used in app code
- ✅ Minimal dependencies (one radix slot, clsx, cva, tailwind-merge, lucide, animate plugin)

---

## Credits

Built for SMA Ursulin Solo. Stock photography from Unsplash. Icons from [Lucide](https://lucide.dev).
