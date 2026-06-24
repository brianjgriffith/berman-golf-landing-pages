"use client";

import { useEffect, useState } from "react";
import { EventPhase, useEventPhase } from "@/lib/eventPhase";

const STICKY_COPY: Record<EventPhase, { eyebrow: string; title: string; cta: string }> = {
  before: {
    eyebrow: "June 24 + 25 · 10:00 AM ET",
    title: "20 More Yards Live Event",
    cta: "Reserve",
  },
  between: {
    eyebrow: "Session 2 · Thu June 25 · 10 AM ET",
    title: "Replay + Live Session 2",
    cta: "Join Free",
  },
  replay: {
    eyebrow: "Replay free thru Sun, June 28",
    title: "Watch Both Sessions",
    cta: "Watch Free",
  },
  closed: {
    eyebrow: "Next live event coming soon",
    title: "20 More Yards Challenge",
    cta: "Join Next",
  },
};

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const phase = useEventPhase();
  const copy = STICKY_COPY[phase];

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
            {copy.eyebrow}
          </p>
          <p className="text-sm font-bold text-[#f5ede0] leading-tight mt-1 truncate">
            {copy.title}
          </p>
        </div>
        <a
          href="#register"
          className="flex-shrink-0 bg-[#F26B4E] text-white px-5 py-3 font-bold text-sm uppercase tracking-wider hover:bg-[#e05a3d] transition-colors"
        >
          {copy.cta} <span aria-hidden>&rarr;</span>
        </a>
      </div>
    </div>
  );
}
