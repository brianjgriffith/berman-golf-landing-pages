"use client";

import Image from "next/image";
import { Workshop } from "@/config/workshops";

interface HeroV2Props {
  workshops: Workshop[];
}

export default function HeroV2({ workshops }: HeroV2Props) {

  return (
    <section className="pt-24 pb-6 bg-gradient-to-br from-[#0f4c81] via-[#1565c0] to-[#1e88e5] text-white">
      <div className="max-w-6xl mx-auto px-4 w-full">
        {/* Eyebrow - centered above */}
        <div className="text-center mb-4">
          <span className="inline-block bg-[#F26B4E] text-white font-bold tracking-widest uppercase text-sm md:text-base px-6 py-2 rounded-full">
            Warning To Senior Golfers
          </span>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Golf Lessons Don&apos;t Work.
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 font-semibold mb-6">
              Here&apos;s What Actually Does.
            </p>
          </div>

          {/* Right Column - Jake's Photo */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
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

        {/* Subheadline - full width below */}
        <div className="text-center mt-4">
          <p className="text-lg md:text-xl text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed">
            99% of golf instruction is designed for a 25-year-old body. Join <strong className="text-white">Dr. Jake Berman (PT, DPT)</strong> for a free, live class breaking down <strong className="text-white">The Activation Method</strong> &mdash; and learn how seniors are gaining distance, improving consistency, and playing more often without changing their swing or popping ibuprofen on the back 9.
          </p>

          {/* Bullets */}
          <ul className="max-w-2xl mx-auto text-left space-y-3 mb-8">
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

          {/* CTA Buttons */}
          <p className="text-white/80 text-sm font-semibold uppercase tracking-wider mb-4">
            Save Your Spot:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {workshops.map((workshop, index) => (
              <a
                key={index}
                href={`#register-${index}`}
                className="btn-primary inline-block bg-[#F26B4E] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide"
              >
                <span className="block">Save My Spot</span>
                <span className="block text-sm font-normal opacity-90">{workshop.date} at {workshop.time}</span>
              </a>
            ))}
          </div>

          <p className="mt-4 text-white/80 text-sm font-medium">
            Plus, get a <strong className="text-white">free digital copy</strong> of The Berman Method book when you register
          </p>
        </div>
      </div>
    </section>
  );
}
