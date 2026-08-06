import { NextResponse, type NextRequest } from "next/server";
import { challengeOwnsFunnel } from "@/config/funnelSwitch";

const CHALLENGE = "/20-more-yards";
const WEBCLASS = "/free-class";

// Entry points that exist only to sell a seat in the current webclass. Once
// that class has started they should feed the challenge instead.
const WEBCLASS_ROUTES = new Set([WEBCLASS, "/free-class-v1"]);

const VANITY_HOST = /^(?:www\.)?20moreyards\.com$/i;

export default function proxy(request: NextRequest) {
  const afterSwitch = challengeOwnsFunnel();
  const { pathname } = request.nextUrl;

  // 20moreyards.com root serves a page under its own clean URL — the webclass
  // opt-in until the class starts, the challenge after. Rewrite (not redirect)
  // so the vanity domain stays in the address bar either way.
  //
  // This lives here rather than in next.config's `beforeFiles` rewrites
  // because those run *after* the proxy: a config rewrite would hand us
  // pathname "/" and we'd never see the /free-class we were meant to redirect.
  if (pathname === "/" && VANITY_HOST.test(request.headers.get("host") ?? "")) {
    const url = request.nextUrl.clone();
    url.pathname = afterSwitch ? CHALLENGE : WEBCLASS;
    return NextResponse.rewrite(url);
  }

  // 307, not 308: /free-class goes back to serving its own opt-in page for the
  // next webclass, so this must not be cached as permanent by browsers.
  if (afterSwitch && WEBCLASS_ROUTES.has(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = CHALLENGE;
    // clone() carries the query string, so ad UTMs survive the hop.
    return NextResponse.redirect(url, 307);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/free-class", "/free-class-v1"],
};
