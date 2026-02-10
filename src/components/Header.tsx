"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const getCtaConfig = () => {
    if (pathname === "/free-book") {
      return { text: "Get Free Book", href: "#get-book", isPopup: true };
    }
    if (pathname === "/10yards-30days") {
      return { text: "Enroll Now - $97", href: "#enroll", isPopup: false };
    }
    if (pathname === "/senior-golf-mastery" || pathname === "/senior-golf-mastery/checkout") {
      return { text: "Enroll Now - $997", href: "/senior-golf-mastery/checkout", isPopup: false };
    }
    if (pathname === "/community") {
      return { text: "Join - $47/mo", href: "#join", isPopup: false };
    }
    // Default for /free-class and home
    return { text: "Save My Spot", href: "#register", isPopup: false };
  };

  const { text: ctaText, href: ctaHref, isPopup } = getCtaConfig();

  const handlePopupClick = () => {
    window.dispatchEvent(new CustomEvent("openBookPopup"));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">
            <span className="text-[#F26B4E]">BERMAN</span>
            <span className="text-gray-800">GOLF</span>
          </span>
        </div>
        {isPopup ? (
          <button
            onClick={handlePopupClick}
            className="btn-primary bg-[#F26B4E] text-white px-6 py-2 rounded-full font-semibold text-sm hover:bg-[#e05a3d] cursor-pointer"
          >
            {ctaText}
          </button>
        ) : (
          <a
            href={ctaHref}
            className="btn-primary bg-[#F26B4E] text-white px-6 py-2 rounded-full font-semibold text-sm hover:bg-[#e05a3d]"
          >
            {ctaText}
          </a>
        )}
      </div>
    </header>
  );
}
