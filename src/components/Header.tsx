"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const getCtaConfig = () => {
    // Thank-you pages (poster): keep it non-salesy — just a help link.
    if (pathname === "/20-more-yards/thank-you" || pathname === "/senior-golf-mastery/thank-you") {
      return { text: "Need Help?", href: "mailto:distance@bermangolf.com", isPopup: false };
    }
    if (pathname === "/senior-golf-mastery-cohort") {
      return { text: "Enroll Now - $3,000", href: "/senior-golf-mastery-cohort/checkout", isPopup: false };
    }
    if (pathname === "/free-book/thank-you" || pathname === "/senior-golf-warm-up/thank-you") {
      return { text: "Join Free Class", href: "/free-class#register", isPopup: false };
    }
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
    if (pathname === "/20-more-yards") {
      return { text: "Reserve My Seat", href: "#register", isPopup: false };
    }
    return { text: "Save My Spot", href: "#register", isPopup: false };
  };

  const { text: ctaText, href: ctaHref, isPopup } = getCtaConfig();
  const posterRoutes = [
    "/20-more-yards",
    "/20-more-yards/thank-you",
    "/senior-golf-mastery-cohort",
    "/senior-golf-mastery/thank-you",
  ];
  const isPoster = posterRoutes.includes(pathname);

  const handlePopupClick = () => {
    window.dispatchEvent(new CustomEvent("openBookPopup"));
  };

  if (isPoster) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a365d] text-[#f5ede0] border-b-2 border-[#1a365d]">
        <div className="max-w-7xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between gap-4">
          <a href="/20-more-yards" className="flex items-baseline gap-2 group">
            <span className="font-display text-xl md:text-2xl font-black uppercase tracking-tight text-[#F26B4E] leading-none">
              Berman
            </span>
            <span className="font-display text-xl md:text-2xl font-black uppercase tracking-tight text-[#f5ede0] leading-none">
              Golf
            </span>
          </a>
          <a
            href={ctaHref}
            className="inline-block bg-[#F26B4E] text-white px-4 sm:px-6 py-2.5 font-bold text-xs sm:text-sm uppercase tracking-[0.15em] hover:bg-[#e05a3d] transition-colors"
          >
            {ctaText} <span aria-hidden>&rarr;</span>
          </a>
        </div>
      </header>
    );
  }

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
