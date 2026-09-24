import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { decryptSecret, encryptSecret, maskSecret } from "@/lib/server/crypto";

/**
 * Editor accounts, stored in the Supabase `editors` table
 * (see supabase/schema.sql). Server-only: uses the service-role key.
 */
export interface EditorRow {
  id: string;
  username: string;
  display_name: string;
  password_hash: string;
  session_version: number;
  must_change_password: boolean;
  is_admin: boolean;
  disabled: boolean;
  anthropic_key_enc: string | null;
  gemini_key_enc: string | null;
  github_token_enc: string | null;
  github_repo: string | null;
  github_branch: string;
  created_at: string;
  updated_at: string;
}

/** Safe to send to the browser: no hashes, only masked secrets. */
export interface EditorPublic {
  id: string;
  username: string;
  displayName: string;
  isAdmin: boolean;
  disabled: boolean;
  mustChangePassword: boolean;
  githubRepo: string | null;
  githubBranch: string;
  anthropicKey: string | null;
  geminiKey: string | null;
  githubToken: string | null;
  createdAt: string;
}

/** Decrypted credentials, only ever used server-side. */
export interface EditorCredentials {
  anthropicKey: string | null;
  geminiKey: string | null;
  githubToken: string | null;
  githubRepo: string | null;
  githubBranch: string;
}

export function databaseConfigured() {
  return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY && process.env.SECRETS_ENCRYPTION_KEY);
}

let client: SupabaseClient | null = null;
function db() {
  if (!databaseConfigured()) {
    throw new Error("Editor accounts need SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY and SECRETS_ENCRYPTION_KEY.");
  }
  client ??= createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return client.from("editors");
}

function check<T>(res: { data: T; error: { message: string; code?: string } | null }): T {
  if (res.error) {
    if (res.error.code === "23505") throw new Error("That username is already taken.");
    if (res.error.code === "42P01") throw new Error("The editors table doesn't exist yet: run supabase/schema.sql in Supabase.");
    throw new Error(`Database error: ${res.error.message}`);
  }
  return res.data;
}

export function toPublic(row: EditorRow): EditorPublic {
  const safeMask = (v: string | null) => {
    try {
      return maskSecret(decryptSecret(v));
    } catch {
      return "(unreadable: re-enter)";
    }
  };
  return {
    id: row.id,
    username: row.username,
    displayName: row.display_name,
    isAdmin: row.is_admin,
    disabled: row.disabled,
    mustChangePassword: row.must_change_password,
    githubRepo: row.github_repo,
    githubBranch: row.github_branch,
    anthropicKey: safeMask(row.anthropic_key_enc),
    geminiKey: safeMask(row.gemini_key_enc),
    githubToken: safeMask(row.github_token_enc),
    createdAt: row.created_at,
  };
}

export function credentialsOf(row: EditorRow): EditorCredentials {
  return {
    anthropicKey: decryptSecret(row.anthropic_key_enc),
    geminiKey: decryptSecret(row.gemini_key_enc),
    githubToken: decryptSecret(row.github_token_enc),
    githubRepo: row.github_repo,
    githubBranch: row.github_branch || "main",
  };
}

export async function getEditorById(id: string): Promise<EditorRow | null> {
  return check(await db().select("*").eq("id", id).maybeSingle()) as EditorRow | null;
}

export async function getEditorByUsername(username: string): Promise<EditorRow | null> {
  return check(await db().select("*").eq("username", username.toLowerCase()).maybeSingle()) as EditorRow | null;
}

export async function listEditors(): Promise<EditorRow[]> {
  return check(await db().select("*").order("created_at", { ascending: true })) as EditorRow[];
}

export async function createEditor(input: {
  username: string;
  displayName: string;
  passwordHash: string;
  isAdmin: boolean;
}): Promise<EditorRow> {
  return check(
    await db()
      .insert({
        username: input.username.toLowerCase(),
        display_name: input.displayName,
        password_hash: input.passwordHash,
        is_admin: input.isAdmin,
        must_change_password: true,
      })
      .select("*")
      .single(),
  ) as EditorRow;
}

export async function updateEditor(id: string, patch: Partial<EditorRow>): Promise<EditorRow> {
  return check(
    await db()
      .update({ ...patch, updated_at: new Date().toISOString() })
      .eq("id", id)
      .select("*")
      .single(),
  ) as EditorRow;
}

export async function deleteEditor(id: string): Promise<void> {
  check(await db().delete().eq("id", id));
}

/**
 * Apply a settings form. For each secret: undefined = keep, "" = clear,
 * anything else = replace (encrypted).
 */
export function secretPatch(
  field: "anthropic_key_enc" | "gemini_key_enc" | "github_token_enc",
  value: string | undefined,
): Partial<EditorRow> {
  if (value === undefined) return {};
  const trimmed = value.trim();
  return { [field]: trimmed ? encryptSecret(trimmed) : null };
}
