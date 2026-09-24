# UGS website: notes for AI coding agents

Works for Claude Code, Google Antigravity, Gemini CLI, Codex, Cursor, etc.

Next.js 14 (app router) + Tailwind. Package manager: pnpm.
Checks before committing: `pnpm typecheck` and `pnpm build`.

## Adding a news article from a submission document

Newsroom writers submit an English and an Indonesian copy of the
"UGS NEWSROOM - ARTICLE SUBMISSION FORM" (Word / Google Docs / PDF).

1. Read the formatting rules in `lib/ai/format-prompt.ts` (`FORMAT_SYSTEM_PROMPT`).
   They are the single source of truth, also used by the /admin page.
   **The most important rule: copy the writers' text verbatim. Format, never edit.**
2. Append one object to `content/published-articles.json` (type: `Article`
   in `content/types.ts`). English goes in the top-level fields;
   Indonesian goes in `translations.id` with the same block structure.
3. Cover image: save it as `public/images/<slug>.jpg` (or .png/.webp) and set
   `coverImage`, `coverImageAlt`, and `coverImageCredit` (photographer/source + licence).
   Without a licensed photo, generate a branded placeholder:
   `python3 scripts/make-cover.py public/images/<slug>.jpg "<Category>" "<English title>"` (needs Pillow).
4. Run `pnpm typecheck && pnpm build`. The article shows up at `/news/<slug>`.
5. Tell the human what you removed or couldn't place (the "notes" from the rules).

Don't edit the older hand-written articles in `content/articles.ts` unless asked.

## Admin page

`/admin` (hidden) does the same thing through a browser:
upload → AI formats (Claude or Gemini) → human reviews → publish commits
to GitHub → the host redeploys. Each editor has an account (Supabase table
`editors`, `supabase/schema.sql`) holding their own encrypted API keys,
GitHub token and repo; the head admin invites them. Code: `app/admin`,
`app/api/admin`, `lib/server`. Setup: `docs/ADMIN.md`.
