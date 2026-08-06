import type { NextConfig } from "next";

// Funnel routing lives in src/proxy.ts, not here.
//
// The webclass -> challenge handoff is time-based (see config/funnelSwitch.ts),
// and next.config redirects/rewrites are baked in at build time, so they can't
// express "flip at 11:00 AM ET." The proxy runs per request and can.
//
// Two things the proxy owns that used to live in this file:
//   - the 20moreyards.com root rewrite
//   - /free-class -> /20-more-yards
//
// Keep them there. A `beforeFiles` rewrite here would run after the proxy and
// silently shadow it.
const nextConfig: NextConfig = {};

export default nextConfig;
