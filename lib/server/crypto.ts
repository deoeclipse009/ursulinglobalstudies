import "server-only";
import { createCipheriv, createDecipheriv, createHash, randomBytes, scrypt, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";

const scryptAsync = promisify(scrypt) as (pw: string, salt: Buffer, len: number) => Promise<Buffer>;

// ---------------------------------------------------------------------------
// Encryption for stored API keys / tokens (AES-256-GCM).

function encryptionKey(): Buffer {
  const secret = process.env.SECRETS_ENCRYPTION_KEY;
  if (!secret || secret.length < 32) {
    throw new Error("SECRETS_ENCRYPTION_KEY is missing or shorter than 32 characters.");
  }
  return createHash("sha256").update(secret).digest();
}

export function encryptSecret(plain: string): string {
  const iv = randomBytes(12);
  const cipher = createCipheriv("aes-256-gcm", encryptionKey(), iv);
  const data = Buffer.concat([cipher.update(plain, "utf8"), cipher.final()]);
  return ["v1", iv.toString("base64"), cipher.getAuthTag().toString("base64"), data.toString("base64")].join(".");
}

export function decryptSecret(stored: string | null | undefined): string | null {
  if (!stored) return null;
  const [version, iv, tag, data] = stored.split(".");
  if (version !== "v1") throw new Error("Unknown secret format.");
  const decipher = createDecipheriv("aes-256-gcm", encryptionKey(), Buffer.from(iv, "base64"));
  decipher.setAuthTag(Buffer.from(tag, "base64"));
  return Buffer.concat([decipher.update(Buffer.from(data, "base64")), decipher.final()]).toString("utf8");
}

/** "sk-ant-…a1b2" style hint so editors can see which key is saved. */
export function maskSecret(plain: string | null): string | null {
  if (!plain) return null;
  return plain.length <= 10 ? "••••" : `${plain.slice(0, 6)}…${plain.slice(-4)}`;
}

// ---------------------------------------------------------------------------
// Passwords (scrypt).

export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16);
  const hash = await scryptAsync(password, salt, 64);
  return `scrypt$${salt.toString("base64")}$${hash.toString("base64")}`;
}

export async function verifyPassword(password: string, stored: string): Promise<boolean> {
  const [algo, salt, hash] = stored.split("$");
  if (algo !== "scrypt" || !salt || !hash) return false;
  const expected = Buffer.from(hash, "base64");
  const actual = await scryptAsync(password, Buffer.from(salt, "base64"), expected.length);
  return timingSafeEqual(actual, expected);
}

/** Readable temporary password, e.g. "tide-cedar-4827-maple". */
export function generateTempPassword(): string {
  const words = ["river", "maple", "cloud", "ember", "tide", "cedar", "orbit", "delta", "lumen", "coral", "sable", "flint"];
  const pick = () => words[randomBytes(1)[0] % words.length];
  const num = (randomBytes(2).readUInt16BE() % 9000) + 1000;
  return `${pick()}-${pick()}-${num}-${pick()}`;
}

export const PASSWORD_MIN_LENGTH = 10;
