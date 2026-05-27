import Image from "next/image";
import Countdown from "./Countdown";

export default function HeroEvent() {
  return (
    <section className="relative pt-24 pb-16 md:pb-20 overflow-hidden bg-[#f5ede0]">
      {/* Subtle paper grain */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 w-full">
        {/* Top kicker, single occurrence on the page */}
        <div className="flex items-center gap-3 mb-8 md:mb-10">
          <div className="h-px flex-1 bg-[#1a365d]/30 max-w-[120px]" />
          <p className="text-[11px] md:text-xs font-bold tracking-[0.35em] uppercase text-[#1a365d]">
            Live Event &middot; Est. 2026
          </p>
          <div className="h-px flex-1 bg-[#1a365d]/30 max-w-[120px]" />
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left column: typography stack */}
          <div className="lg:col-span-7">
            <h1 className="font-display text-[clamp(4rem,13vw,11rem)] font-black uppercase leading-[0.85] tracking-tight text-[#1a365d] mb-6">
              20 More
              <br />
              Yards.
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-[0.12em] text-[#1a365d]/90 mb-8 leading-tight max-w-xl">
              Two days. Live with Dr. Jake Berman.
            </p>

            {/* Heavy rule */}
            <div className="h-[3px] bg-[#1a365d] mb-8 w-32" />

            {/* Date strip */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-10 max-w-lg">
              <div>
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#1a365d]/60 mb-1">
                  When
                </p>
                <p className="text-base sm:text-lg md:text-xl font-bold text-[#1a365d] leading-tight">
                  June 24 + 25
                </p>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#1a365d]/60 mb-1">
                  Time
                </p>
                <p className="text-base sm:text-lg md:text-xl font-bold text-[#1a365d] leading-tight">
                  10:00 AM ET
                </p>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#1a365d]/60 mb-1">
                  Length
                </p>
                <p className="text-base sm:text-lg md:text-xl font-bold text-[#1a365d] leading-tight">
                  90 min ea.
                </p>
              </div>
            </div>

            <Countdown />

            <a
              href="#register"
              className="inline-block mt-10 bg-[#F26B4E] text-white px-10 sm:px-12 py-5 rounded-md font-extrabold text-lg sm:text-xl uppercase tracking-wider hover:bg-[#e05a3d] shadow-[0_10px_30px_rgba(242,107,78,0.35)] hover:shadow-[0_15px_40px_rgba(242,107,78,0.5)] hover:-translate-y-0.5 transition-all"
            >
              Reserve Your Seat &rarr;
            </a>

            <p className="mt-6 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#1a365d]/70">
              Free &middot; Live Only &middot; No Replays
            </p>
          </div>

          {/* Right column: Jake portrait, formally framed */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative max-w-sm">
              {/* Frame */}
              <div className="bg-white p-3 shadow-[0_25px_70px_rgba(26,54,93,0.25)] rotate-[-1deg]">
                <div className="relative aspect-[4/5] w-64 sm:w-80 md:w-96 overflow-hidden bg-[#1a365d]/10">
                  <Image
                    src="/jake-solo.png"
                    alt="Dr. Jake Berman, PT, DPT"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Caption */}
                <div className="pt-4 pb-2 text-center border-t border-[#1a365d]/10 mt-3">
                  <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-[#1a365d]">
                    Dr. Jake Berman
                  </p>
                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#1a365d]/60 mt-1.5">
                    PT, DPT &middot; Your Host
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
