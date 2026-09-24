# Newsroom admin: setup and use

The hidden page at **`/admin`** turns a submission form into a published
article. Every editor has their own account and uses **their own** Claude or
Gemini API key and GitHub token.

## How editors publish

1. Attach the English and/or Indonesian file (.docx, .pdf, .txt, .md), or paste
   a Google Drive link (the file must be shared as "Anyone with the link").
2. **Format with AI.** Claude (or Gemini) lays the text out in the site's
   article structure. It is told to copy the text word for word, and it lists
   anything it removed or couldn't place under **"Things the AI wants a human to check"**.
3. Check the preview in both languages, fix the details, and add a cover photo.
4. **Publish to website.** This commits the article, as that editor, to the
   repo on their account. The host (e.g. Vercel) redeploys in 1 to 3 minutes.

## Accounts

| Who | Signs in with | Can |
|---|---|---|
| Head admin | username `admin` + `ADMIN_PASSWORD` | Invite, reset, disable and delete editors. Can't publish. |
| Admin editor | own username + password | Publish, and manage editors. |
| Editor | own username + password | Publish. |

- **Inviting:** Editors page → *Invite an editor*. You get a temporary password,
  shown once, to hand over.
- **First sign-in:** the editor must choose their own password. Then, on
  *My account*, they add their Claude key (and optionally Gemini), a GitHub token,
  and the repository. Saving checks that the token can push to the repo.
- **Reset password / Disable:** signs that editor out everywhere right away.
- Tip: create an admin editor account for yourself too, so you can publish.

### What each editor needs

- **Claude API key:** console.anthropic.com → API keys (billing is on their own
  Anthropic account). Or a **Gemini key** from aistudio.google.com/apikey.
- **GitHub token:** github.com/settings/personal-access-tokens/new, as a *fine-grained*
  token with only the website repository selected and **Contents: Read and write**
  permission. The editor must be a collaborator on the repo.
- **Repository:** `deoeclipse009/ursulinglobalstudies`, branch `main`.

## One-time site setup

1. **Create a Supabase project** (free) at supabase.com. Or in Vercel: Storage →
   Marketplace → Supabase, which fills in the env vars for you.
2. In Supabase open **SQL Editor**, paste `supabase/schema.sql`, and click **Run**.
3. In Vercel → Project → Settings → **Environment Variables**, add the following, then **Redeploy**:

| Variable | Where from |
|---|---|
| `ADMIN_PASSWORD` | Choose a strong password. |
| `SUPABASE_URL` | Supabase → Project Settings → API → Project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Same page, `service_role` key. Keep it secret: server only. |
| `SECRETS_ENCRYPTION_KEY` | 32+ random characters (`openssl rand -base64 48`). Don't change it later. |

4. Go to `/admin/login`, sign in as `admin`, and invite your editors.

### Security notes

- Keys and tokens are encrypted (AES-256-GCM) before they reach the database.
  The browser only ever sees masked hints like `sk-ant…1a2b`.
- The `editors` table has Row Level Security on with no policies, so only the
  server (service-role key) can read it.
- Passwords are hashed with scrypt. Sessions last 12 hours, in an httpOnly cookie.
- Formatting a long bilingual article can take 1 to 2 minutes. The route allows
  300 s (`maxDuration`).

## Using Claude Code / Antigravity / Gemini CLI instead

Open the repo in the agent and say "Add this article to the website", attaching
both documents. `AGENTS.md` (and `CLAUDE.md`) tell the agent to follow the same
formatting rules as the admin page.
