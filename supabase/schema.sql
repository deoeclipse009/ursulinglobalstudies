-- UGS newsroom editor accounts.
-- Run once in Supabase: Dashboard → SQL Editor → paste → Run.
--
-- The website reads and writes this table only from the server, with the
-- service-role key. Row Level Security is on with no policies, so the public
-- (anon) key can't read it at all. API keys and tokens are stored encrypted
-- (AES-256-GCM) with SECRETS_ENCRYPTION_KEY, which never leaves the server.

create table if not exists public.editors (
  id uuid primary key default gen_random_uuid(),
  username text not null unique check (username ~ '^[a-z0-9._-]{3,32}$'),
  display_name text not null,
  password_hash text not null,
  -- Bumped on password change/reset or disable: signs out existing sessions.
  session_version integer not null default 1,
  must_change_password boolean not null default true,
  is_admin boolean not null default false,
  disabled boolean not null default false,
  anthropic_key_enc text,
  gemini_key_enc text,
  github_token_enc text,
  github_repo text,
  github_branch text not null default 'main',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.editors enable row level security;
