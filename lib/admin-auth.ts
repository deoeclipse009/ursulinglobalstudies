/**
 * Minimal password gate for the hidden admin page.
 *
 * The admin is disabled unless ADMIN_PASSWORD is set. Logging in sets an
 * httpOnly cookie holding `<expiry>.<hmac(expiry)>`, signed with a key derived
 * from ADMIN_PASSWORD, so changing the password logs everyone out.
 * Uses Web Crypto so it runs in both middleware (edge) and route handlers.
 */
export const ADMIN_COOKIE = "ugs_admin";
const SESSION_SECONDS = 60 * 60 * 12;

export function adminEnabled() {
  return Boolean(process.env.ADMIN_PASSWORD);
}

async function hmac(message: string): Promise<string> {
  const secret = `${process.env.ADMIN_PASSWORD ?? ""}|${process.env.ADMIN_SESSION_SECRET ?? "ugs"}`;
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

export async function checkPassword(password: string) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  // Compare HMACs so the comparison time doesn't depend on the password.
  return safeEqual(await hmac(`pw:${password}`), await hmac(`pw:${expected}`));
}

export async function createSessionToken() {
  const expiry = Math.floor(Date.now() / 1000) + SESSION_SECONDS;
  return { token: `${expiry}.${await hmac(`session:${expiry}`)}`, maxAge: SESSION_SECONDS };
}

export async function verifySessionToken(token: string | undefined) {
  if (!token || !adminEnabled()) return false;
  const [expiryStr, sig] = token.split(".");
  const expiry = Number(expiryStr);
  if (!expiry || !sig || expiry < Date.now() / 1000) return false;
  return safeEqual(sig, await hmac(`session:${expiry}`));
}
