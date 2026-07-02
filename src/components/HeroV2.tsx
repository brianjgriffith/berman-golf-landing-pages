"use client";

import Image from "next/image";
import { Workshop } from "@/config/workshops";

interface HeroV2Props {
  workshops: Workshop[];
}

export default function HeroV2({ workshops }: HeroV2Props) {
  return (
    <section className="pt-24 pb-12 md:pb-16 bg-gradient-to-br from-[#081a2e] via-[#0a2845] to-[#0f4c81] text-white">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column - All Text Content */}
          <div className="md:col-span-7 text-center md:text-left">
            {/* Eyebrow */}
            <div className="mb-5">
              <span className="inline-block bg-[#F26B4E] text-white font-bold tracking-widest uppercase text-xs md:text-sm px-5 py-2 rounded-full">
                Free Live Class For Senior Golfers
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-3">
              Out-Drive Your Buddies This Summer.
            </h1>

            {/* Sub-H1 */}
            <p className="text-2xl md:text-3xl lg:text-4xl text-[#F26B4E] font-extrabold leading-tight mb-6 tracking-tight">
              Gain 20&ndash;50 Yards Without Rebuilding Your Swing.
            </p>

            {/* Body */}
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-6 max-w-xl mx-auto md:mx-0">
              You don&apos;t need a new swing &mdash; you need a body that fires the right muscles in the right order. Join <strong className="text-white">Dr. Jake Berman (PT, DPT)</strong> for a free, live class on the biomechanics that add distance for senior golfers &mdash; no matter your age or handicap.
            </p>

            {/* Bullets */}
            <ul className="space-y-3 mb-8 max-w-xl mx-auto md:mx-0 text-left">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-[#F26B4E] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-base md:text-lg font-semibold text-white/95">
                  Stop swinging &ldquo;loose&rdquo; and start using <strong className="text-white">Ground Force</strong>.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-[#F26B4E] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-base md:text-lg font-semibold text-white/95">
                  Gain 20+ yards by waking up your <strong className="text-white">&ldquo;asleep&rdquo; muscles</strong>.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-[#F26B4E] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-base md:text-lg font-semibold text-white/95">
                  Live Q&amp;A: Dr. Jake answers your specific swing questions.
                </span>
              </li>
            </ul>

            {/* CTA */}
            <p className="text-white/80 text-xs md:text-sm font-bold uppercase tracking-widest mb-3">
              Save Your Spot:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {workshops.map((workshop, index) => (
                <a
                  key={index}
                  href={`#register-${index}`}
                  className="btn-primary inline-block bg-[#F26B4E] text-white px-10 py-5 rounded-lg font-bold text-xl hover:bg-[#e05a3d] uppercase tracking-wide shadow-[0_10px_30px_rgba(242,107,78,0.45)] hover:shadow-[0_15px_40px_rgba(242,107,78,0.65)] hover:-translate-y-0.5 transition-all"
                >
                  <span className="block">Save My Spot &rarr;</span>
                  <span className="block text-sm font-normal opacity-90">{workshop.date} at {workshop.time}</span>
                </a>
              ))}
            </div>

            <p className="mt-4 text-white/80 text-sm font-medium text-center md:text-left">
              Plus, get a <strong className="text-white">free digital copy</strong> of The Berman Method book when you register
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
