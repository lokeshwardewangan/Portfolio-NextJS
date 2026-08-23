import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const acceptHeader = request.headers.get("accept") || "";
  const wantsMarkdown = acceptHeader.toLowerCase().includes("text/markdown");
  const pathname = request.nextUrl.pathname;

  // Exclude Next.js internals, API routes, and file extensions (.png, .ico, etc.)
  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.includes(".")) {
    return NextResponse.next();
  }

  if (wantsMarkdown) {
    // Rewrite to our markdown router API endpoint
    const url = new URL("/api/markdown", request.url);
    url.searchParams.set("path", pathname);

    const response = NextResponse.rewrite(url);
    response.headers.set("Content-Type", "text/markdown; charset=utf-8");
    response.headers.set("Vary", "Accept");
    return response;
  }

  // HTML page request: ensure Vary header includes Accept
  const response = NextResponse.next();
  response.headers.set("Vary", "Accept");
  return response;
}

export const config = {
  matcher: [
    // Match all page routes except static files
    "/((?!_next/static|_next/image|favicon.ico|.*\\.).*)",
  ],
};
