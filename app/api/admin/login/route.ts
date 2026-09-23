import { NextResponse } from "next/server";
import { ADMIN_COOKIE, adminEnabled, checkPassword, createSessionToken } from "@/lib/admin-auth";

export async function POST(req: Request) {
  if (!adminEnabled()) {
    return NextResponse.json({ error: "Admin is disabled: ADMIN_PASSWORD is not set." }, { status: 503 });
  }
  const { password } = (await req.json().catch(() => ({}))) as { password?: string };
  if (!password || !(await checkPassword(password))) {
    // Slow down guessing a little.
    await new Promise((r) => setTimeout(r, 800));
    return NextResponse.json({ error: "Wrong password." }, { status: 401 });
  }
  const { token, maxAge } = await createSessionToken();
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge,
  });
  return res;
}
