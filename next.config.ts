import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
