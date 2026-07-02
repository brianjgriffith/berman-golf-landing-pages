import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // /free-class was temporarily funneled to /20-more-yards during the
    // challenge. The challenge is over, so /free-class now serves its own
    // opt-in page again (the July 23 webclass).
    return [
      {
        // The 2-day challenge is over. Forward the challenge landing page to
        // the /free-class webclass opt-in. Exact match only, so sub-pages
        // (/20-more-yards/replay, /20-more-yards/thank-you) still work.
        // Temporary (307) so it can be flipped back for a future challenge.
        source: "/20-more-yards",
        destination: "/free-class",
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
          // Serve the /free-class opt-in page at the root of 20moreyards.com
          // (and www.) while keeping the clean 20moreyards.com URL. The 2-day
          // challenge is over; the domain now points at the July 23 webclass.
          source: "/",
          has: [{ type: "host", value: "(www\\.)?20moreyards\\.com" }],
          destination: "/free-class",
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
