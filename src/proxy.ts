import { NextResponse, type NextRequest } from "next/server";
import { challengeOwnsFunnel } from "@/config/funnelSwitch";

const CHALLENGE = "/20-more-yards";
const WEBCLASS = "/free-class";

// The archived webclass page always follows the live one.
const ARCHIVED = "/free-class-v1";

const VANITY_HOST = /^(?:www\.)?20moreyards\.com$/i;

// Send whichever opt-in page doesn't own the funnel to the one that does.
// See config/funnelSwitch.ts.
export default function proxy(request: NextRequest) {
  const owner = challengeOwnsFunnel() ? CHALLENGE : WEBCLASS;
  const { pathname } = request.nextUrl;

  // 20moreyards.com root serves the owning page under its own clean URL.
  // Rewrite (not redirect) so the vanity domain stays in the address bar.
  //
  // This lives here rather than in next.config's `beforeFiles` rewrites
  // because those run *after* the proxy.
  if (pathname === "/" && VANITY_HOST.test(request.headers.get("host") ?? "")) {
    const url = request.nextUrl.clone();
    url.pathname = owner;
    return NextResponse.rewrite(url);
  }

  // 307, not 308: ownership flips back and forth between runs, so browsers
  // must not cache any of these as permanent.
  const nonOwner = owner === WEBCLASS ? CHALLENGE : WEBCLASS;
  if (pathname === nonOwner || pathname === ARCHIVED) {
    const url = request.nextUrl.clone();
    url.pathname = owner;
    // clone() carries the query string, so ad UTMs survive the hop.
    return NextResponse.redirect(url, 307);
  }

  return NextResponse.next();
}

// Exact paths only — /20-more-yards/replay and /20-more-yards/thank-you must
// never be caught here.
export const config = {
  matcher: ["/", "/free-class", "/free-class-v1", "/20-more-yards"],
};
