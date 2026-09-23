/**
 * Signed session cookie for the hidden admin area.
 *
 * Token: `<subject>.<version>.<expiry>.<hmac>` where subject is an editor id,
 * or "root" for the head admin who signs in with ADMIN_PASSWORD. Uses Web
 * Crypto so the signature can be checked in middleware (edge) as well as in
 * route handlers. The version is compared with the editor's session_version
 * in the database by lib/server/session.ts, so a password reset or disabling
 * an editor signs them out everywhere.
 */
export const ADMIN_COOKIE = "ugs_admin";
export const ROOT_SUBJECT = "root";
const SESSION_SECONDS = 60 * 60 * 12;

function signingSecret(): string | null {
  const base = process.env.ADMIN_SESSION_SECRET || process.env.SECRETS_ENCRYPTION_KEY || "";
  const pw = process.env.ADMIN_PASSWORD || "";
  // Mixing in ADMIN_PASSWORD means changing it signs everyone out.
  return base || pw ? `${base}|${pw}` : null;
}

async function hmac(message: string): Promise<string | null> {
  const secret = signingSecret();
  if (!secret) return null;
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(message));
  return Array.from(new Uint8Array(sig), (b) => b.toString(16).padStart(2, "0")).join("");
}

function safeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

/** Constant-time check of the head-admin password. */
export async function checkRootPassword(password: string) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  const [a, b] = await Promise.all([hmac(`pw:${password}`), hmac(`pw:${expected}`)]);
  return Boolean(a && b && safeEqual(a, b));
}

export async function createSessionToken(subject: string, version: number) {
  const expiry = Math.floor(Date.now() / 1000) + SESSION_SECONDS;
  const payload = `${subject}.${version}.${expiry}`;
  const sig = await hmac(`session:${payload}`);
  if (!sig) throw new Error("No session secret configured.");
  return { token: `${payload}.${sig}`, maxAge: SESSION_SECONDS };
}

export interface SessionClaims {
  subject: string;
  version: number;
}

export async function verifySessionToken(token: string | undefined): Promise<SessionClaims | null> {
  if (!token) return null;
  const parts = token.split(".");
  if (parts.length !== 4) return null;
  const [subject, versionStr, expiryStr, sig] = parts;
  const expiry = Number(expiryStr);
  if (!expiry || expiry < Date.now() / 1000) return null;
  const expected = await hmac(`session:${subject}.${versionStr}.${expiryStr}`);
  if (!expected || !safeEqual(sig, expected)) return null;
  return { subject, version: Number(versionStr) };
}
