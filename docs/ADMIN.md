# Newsroom admin page: setup and use

A hidden page at **`/admin`** turns a submission form into a published article:

1. Attach the English and/or Indonesian file (.docx, .pdf, .txt, .md) or paste
   a Google Drive link (the file must be shared as "Anyone with the link").
2. **Format with AI.** Claude (or Gemini) lays the text out into the site's
   article structure: eyebrows, stats grid, callout, H2, closing quote, sources.
   It is told to copy the text word for word and list anything it removed or
   couldn't place under **"Things the AI wants a human to check"**.
3. Check the preview in both languages, fix metadata, and add a cover photo.
4. **Publish to website.** This commits the article (and photo) to GitHub.
   Your host (e.g. Vercel) redeploys automatically, usually in 1 to 3 minutes.

The page isn't linked anywhere, is marked `noindex`, and needs a password.

## One-time setup

Add these environment variables in your hosting dashboard
(Vercel: Project → Settings → Environment Variables), then redeploy.
See `.env.example` for the full list.

| Variable | What it's for |
|---|---|
| `ADMIN_PASSWORD` | Password for /admin. Without it the admin page is off. |
| `ANTHROPIC_API_KEY` | Claude API key from console.anthropic.com. Default formatter. |
| `GEMINI_API_KEY` | Optional. Google AI Studio key, adds Gemini as a second option. |
| `GITHUB_TOKEN` | Fine-grained token, **only this repo**, permission **Contents: Read and write**. |
| `GITHUB_REPO` | `deoeclipse009/ursulinglobalstudies` |
| `GITHUB_BRANCH` | Branch your host deploys from (default `main`). |

Optional: `ANTHROPIC_MODEL` (default `claude-opus-5`), `GEMINI_MODEL`
(default `gemini-2.5-pro`), `ADMIN_SESSION_SECRET`.

The AI step can take 1 to 2 minutes for a long bilingual article. The route
allows up to 300 s (`maxDuration`); on Vercel Hobby without Fluid Compute the
limit may be lower.

## Using Claude Code / Antigravity / Gemini CLI instead

Open the repo in the agent and say, for example:
"Add this article to the website" and attach both documents. `AGENTS.md`
(and `CLAUDE.md`) tell the agent to follow the same formatting rules as the
admin page and to run the build before committing.
