import { NextRequest, NextResponse } from "next/server";
import { MARKDOWN_PAGES } from "@/lib/markdownContent";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  let path = searchParams.get("path") || "/";

  // Normalize path
  if (!path.startsWith("/")) {
    path = "/" + path;
  }
  // Trim trailing slash for non-root paths
  if (path !== "/" && path.endsWith("/")) {
    path = path.slice(0, -1);
  }

  const hasPage = path in MARKDOWN_PAGES;
  const status = hasPage ? 200 : 404;
  const content = hasPage ? MARKDOWN_PAGES[path] : MARKDOWN_PAGES["404"];

  return new NextResponse(content, {
    status,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Vary: "Accept, Accept-Encoding",
      "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=60",
    },
  });
}
