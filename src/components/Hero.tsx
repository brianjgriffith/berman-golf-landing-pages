"use client";

import Image from "next/image";

interface HeroProps {
  workshopDate?: string;
  workshopTime?: string;
}

export default function Hero({ workshopDate = "February 15th", workshopTime = "10:00 AM EST" }: HeroProps) {
  return (
    <section className="pt-6 pb-6 bg-gradient-to-br from-[#0f4c81] via-[#1565c0] to-[#1e88e5] text-white">
      <div className="max-w-6xl mx-auto px-4 w-full">
        {/* Eyebrow - centered above */}
        <div className="text-center mb-4">
          <span className="inline-block bg-[#F26B4E] text-white font-bold tracking-widest uppercase text-base md:text-lg px-6 py-2 rounded-full">
            Attention: Senior Golfers
          </span>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Finally Out-Drive Your Buddies Again
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 font-semibold mb-6">
              Without Changing Your Swing
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
          <p className="text-xl md:text-2xl text-white mb-6 max-w-3xl mx-auto">
            Free web class: Learn the 7-step framework that&apos;s helped senior golfers gain 20-50+ yards, eliminate back pain, and prove age is just a number
          </p>

          {/* CTA Button */}
          <a
            href="#register"
            className="btn-primary inline-block bg-[#F26B4E] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide"
          >
            <span className="block">Reserve Your Seat</span>
            <span className="block text-sm font-normal opacity-90">{workshopDate} {workshopTime}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
