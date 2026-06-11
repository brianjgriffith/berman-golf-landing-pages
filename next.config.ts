import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // Funnel all /free-class ("Golf Lessons Don't Work") traffic to the
        // /20-more-yards page. Temporary (302/307) so it can be flipped back
        // anytime without browsers caching it permanently.
        source: "/free-class",
        destination: "/20-more-yards",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return {
      // beforeFiles runs before filesystem routes, so it overrides the
      // homepage's redirect("/free-book") for the 20moreyards.com vanity domain.
      beforeFiles: [
        {
          // Serve the /20-more-yards landing page at the root of 20moreyards.com
          // (and www.) while keeping the clean 20moreyards.com URL.
          source: "/",
          has: [{ type: "host", value: "(www\\.)?20moreyards\\.com" }],
          destination: "/20-more-yards",
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
