"use client";

import { EventPhase, useEventPhase } from "@/lib/eventPhase";

const HERO_COPY: Record<EventPhase, { cta: string; trust: string }> = {
  before: {
    cta: "Reserve Your Seat",
    trust: "Free · Live + Limited Replay",
  },
  between: {
    cta: "Join Session 2 Free",
    trust: "Free · Session 1 replay included",
  },
  replay: {
    cta: "Watch The Replay Free",
    trust: "Free · Through Wed, July 1",
  },
  closed: {
    cta: "Join The Next One",
    trust: "Free · Next live event coming soon",
  },
};

export default function HeroCTA() {
  const phase = useEventPhase();
  const copy = HERO_COPY[phase];

  return (
    <>
      <a
        href="#register"
        className="inline-block bg-[#F26B4E] text-white px-10 sm:px-12 py-5 rounded-md font-extrabold text-lg sm:text-xl uppercase tracking-wider hover:bg-[#e05a3d] shadow-[0_10px_30px_rgba(242,107,78,0.35)] hover:shadow-[0_15px_40px_rgba(242,107,78,0.5)] hover:-translate-y-0.5 transition-all"
      >
        {copy.cta} &rarr;
      </a>

      <p className="mt-6 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#1a365d]/70">
        {copy.trust}
      </p>
    </>
  );
}
