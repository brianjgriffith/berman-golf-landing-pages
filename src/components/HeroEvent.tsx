import Image from "next/image";

export default function HeroEvent() {
  return (
    <section className="relative pt-24 pb-16 md:pb-20 overflow-hidden bg-[#f5ede0]">
      <div className="relative max-w-7xl mx-auto px-4 w-full">
        {/* Top kicker */}
        <div className="flex items-center gap-3 mb-8 md:mb-10">
          <div className="h-px flex-1 bg-[#1a365d]/30 max-w-[120px]" />
          <p className="text-[11px] md:text-xs font-bold tracking-[0.35em] uppercase text-[#1a365d]">
            Live Event
          </p>
          <div className="h-px flex-1 bg-[#1a365d]/30 max-w-[120px]" />
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left column: typography stack */}
          <div className="lg:col-span-7">
            <h1 className="font-display text-[clamp(3.5rem,10vw,9rem)] font-black leading-[0.95] tracking-[0.005em] text-[#1a365d] mb-6">
              20 More
              <br />
              Yards.
            </h1>

            <p className="font-display text-2xl sm:text-3xl md:text-4xl text-[#1a365d] mb-8 leading-tight max-w-xl">
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

            <a
              href="#register"
              className="inline-block bg-[#F26B4E] text-white px-10 sm:px-12 py-5 rounded-md font-extrabold text-lg sm:text-xl uppercase tracking-wider hover:bg-[#e05a3d] shadow-[0_10px_30px_rgba(242,107,78,0.35)] hover:shadow-[0_15px_40px_rgba(242,107,78,0.5)] hover:-translate-y-0.5 transition-all"
            >
              Reserve Your Seat &rarr;
            </a>

            <p className="mt-6 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#1a365d]/70">
              Free &middot; Live Only &middot; No Replays
            </p>
          </div>

          {/* Right column: Polaroid stack on a table */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[4/5] mx-auto">
              {/* Background Polaroid: coaching photo, tilted clockwise */}
              <div className="absolute top-[2%] left-[2%] sm:left-[-4%] lg:left-[-8%] w-[60%] origin-top-left rotate-[6deg] bg-white p-2.5 shadow-[0_18px_45px_rgba(26,54,93,0.22)]">
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#1a365d]/10">
                  <Image
                    src="/jake-coaching.png"
                    alt="Dr. Jake Berman coaching a senior golfer at the practice tee"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 240px, (min-width: 640px) 220px, 180px"
                  />
                </div>
                <div className="pt-2 pb-1 text-center">
                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#1a365d]/70">
                    Practice Tee
                  </p>
                </div>
              </div>

              {/* Foreground Polaroid: Jake portrait, tilted counter-clockwise */}
              <div className="absolute bottom-0 right-0 sm:right-[-2%] w-[78%] origin-bottom-right -rotate-[3deg] bg-white p-3 shadow-[0_30px_80px_rgba(26,54,93,0.3)]">
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#1a365d]/10">
                  <Image
                    src="/jake-solo.png"
                    alt="Dr. Jake Berman, PT, DPT"
                    fill
                    className="object-cover"
                    priority
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 320px, 260px"
                  />
                </div>
                <div className="pt-3 pb-1.5 text-center border-t border-[#1a365d]/10 mt-2">
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
