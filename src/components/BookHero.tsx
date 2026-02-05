"use client";

import Image from "next/image";

export default function BookHero() {
  return (
    <section className="pt-20 pb-16 bg-white flex items-center">
      <div className="max-w-6xl mx-auto px-4 w-full">
        {/* Eyebrow - centered above */}
        <p className="text-center text-gray-500 font-semibold tracking-widest uppercase text-sm mb-6">
          Attention: Senior Golfers
        </p>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
              Add Distance Back to Your Drives,{" "}
              <span className="text-[#F26B4E]">Pain-Free</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Too many senior golfers are frustrated by watching their game deteriorate as they lose distance off their tee shots and are stunned by aches and pains. If you want to regain your competitive edge and fall back in love with the sport, this should be at the top of your To-Read list!
            </p>
            <a
              href="#get-book"
              className="btn-primary inline-block bg-[#F26B4E] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide"
            >
              Get Your Free Digital Copy
            </a>
          </div>

          {/* Right Column - Book Image */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-64 h-80 md:w-80 md:h-[400px] lg:w-96 lg:h-[480px]">
              <Image
                src="/berman-book-standing.png"
                alt="The Berman Method Book"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
