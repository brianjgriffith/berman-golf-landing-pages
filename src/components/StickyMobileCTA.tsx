"use client";

import { useEffect, useState } from "react";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#1a365d] border-t-2 border-[#F26B4E] transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <div className="px-4 py-3 flex items-center justify-between gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f5ede0]/70 leading-none">
            June 24 + 25 &middot; 10:00 AM ET
          </p>
          <p className="text-sm font-bold text-[#f5ede0] leading-tight mt-1 truncate">
            20 More Yards Live Event
          </p>
        </div>
        <a
          href="#register"
          className="flex-shrink-0 bg-[#F26B4E] text-white px-5 py-3 font-bold text-sm uppercase tracking-wider hover:bg-[#e05a3d] transition-colors"
        >
          Reserve <span aria-hidden>&rarr;</span>
        </a>
      </div>
    </div>
  );
}
