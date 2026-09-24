import { NextResponse, type NextRequest } from "next/server";
import { ADMIN_COOKIE, verifySessionToken } from "@/lib/admin-auth";

/**
 * First gate for the hidden admin area: a validly signed session cookie.
 * Route handlers and pages then load the editor from the database
 * (lib/server/session.ts) to check they still exist and aren't disabled.
 */
export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname === "/admin/login" || pathname === "/api/admin/login") {
    return NextResponse.next();
  }

  if (await verifySessionToken(req.cookies.get(ADMIN_COOKIE)?.value)) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/api/")) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }
  const url = req.nextUrl.clone();
  url.pathname = "/admin/login";
  url.search = "";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
