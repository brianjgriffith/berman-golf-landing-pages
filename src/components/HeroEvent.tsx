"use client";

import Image from "next/image";

export default function HeroEvent() {
  return (
    <section className="pt-24 pb-12 md:pb-16 bg-gradient-to-br from-[#081a2e] via-[#0a2845] to-[#0f4c81] text-white">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column - All Text Content */}
          <div className="md:col-span-7 text-center md:text-left">
            {/* Eyebrow */}
            <div className="mb-5">
              <span className="inline-block bg-[#F26B4E] text-white font-bold tracking-widest uppercase text-xs md:text-sm px-5 py-2 rounded-full">
                Free 2-Day Live Event &bull; June 24&ndash;25
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-3">
              20 More Yards.<br className="hidden md:block" /> In 2 Days.
            </h1>

            {/* Sub-H1 */}
            <p className="text-2xl md:text-3xl lg:text-4xl text-[#F26B4E] font-extrabold leading-tight mb-6 tracking-tight">
              Live with Dr. Jake.
            </p>

            {/* Body */}
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
              Two live sessions where senior golfers learn the exact protocol they&apos;re using to add 20+ yards &mdash; <strong className="text-white">without rebuilding their swing</strong>, and without spending another minute on the range.
            </p>

            {/* CTA */}
            <p className="text-white/80 text-xs md:text-sm font-bold uppercase tracking-widest mb-3">
              Save Your Spot:
            </p>
            <a
              href="#register"
              className="btn-primary inline-block bg-[#F26B4E] text-white px-10 py-5 rounded-lg font-bold text-xl hover:bg-[#e05a3d] uppercase tracking-wide shadow-[0_10px_30px_rgba(242,107,78,0.45)] hover:shadow-[0_15px_40px_rgba(242,107,78,0.65)] hover:-translate-y-0.5 transition-all"
            >
              Reserve My Free Seat &rarr;
            </a>

            <p className="mt-5 text-white/80 text-sm font-medium text-center md:text-left max-w-xl mx-auto md:mx-0">
              June 24 + 25 &bull; 10 AM ET &bull; 90 min/day &bull; <strong className="text-white">Live Only &mdash; No Replays</strong>
            </p>
          </div>

          {/* Right Column - Jake's Photo */}
          <div className="md:col-span-5 flex justify-center md:justify-end md:sticky md:top-24">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-full md:h-[500px] lg:h-[560px] max-w-[520px]">
              <Image
                src="/jake-orange.png"
                alt="Dr. Jake Berman"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
