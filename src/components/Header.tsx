"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const getCtaConfig = () => {
    if (pathname === "/free-book") {
      return { text: "Get Free Book", href: "#get-book" };
    }
    if (pathname === "/10yards-30days") {
      return { text: "Enroll Now - $97", href: "#enroll" };
    }
    // Default for /free-class and home
    return { text: "Save My Spot", href: "#register" };
  };

  const { text: ctaText, href: ctaHref } = getCtaConfig();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">
            <span className="text-[#F26B4E]">BERMAN</span>
            <span className="text-gray-800">GOLF</span>
          </span>
        </div>
        <a
          href={ctaHref}
          className="btn-primary bg-[#F26B4E] text-white px-6 py-2 rounded-full font-semibold text-sm hover:bg-[#e05a3d]"
        >
          {ctaText}
        </a>
      </div>
    </header>
  );
}
