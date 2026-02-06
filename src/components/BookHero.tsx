"use client";

import Image from "next/image";

export default function BookHero() {
  return (
    <section className="pt-20 pb-16 bg-white flex items-center">
      <div className="max-w-6xl mx-auto px-4 w-full">
        {/* Eyebrow - centered above */}
        <p className="text-center text-gray-500 font-semibold tracking-widest uppercase text-base md:text-lg mb-6">
          Attention: Senior Golfers
        </p>

        {/* Two Column Layout on Desktop, Reordered on Mobile */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text (Desktop) */}
          <div className="flex flex-col text-center md:text-left">
            {/* Headline - Order 1 on mobile */}
            <h1 className="order-1 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
              Add Distance Back to Your Drives,{" "}
              <span className="text-[#F26B4E]">Pain-Free</span>
            </h1>

            {/* Book Image - Order 2 on mobile, hidden on desktop (shown in right column) */}
            <div className="order-2 md:hidden relative flex justify-center mb-6">
              <div className="relative w-64 h-80">
                <Image
                  src="/berman-book-standing.png"
                  alt="The Berman Method Book"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>

            {/* CTA Button - Order 3 on mobile */}
            <button
              onClick={() => {
                window.dispatchEvent(new CustomEvent("openBookPopup"));
              }}
              className="order-3 md:order-4 btn-primary inline-block bg-[#F26B4E] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide cursor-pointer mb-6 md:mb-0"
            >
              Get Your Free Digital Copy
            </button>

            {/* Paragraph - Order 4 on mobile */}
            <p className="order-4 md:order-3 text-xl text-gray-600 mb-8 md:mb-8">
              Too many senior golfers are frustrated by watching their game deteriorate as they lose distance off their tee shots and are stunned by aches and pains. If you want to regain your competitive edge and fall back in love with the sport, this should be at the top of your To-Read list!
            </p>
          </div>

          {/* Right Column - Book Image (Desktop only) */}
          <div className="hidden md:flex relative justify-center md:justify-end">
            <div className="relative w-80 h-[400px] lg:w-96 lg:h-[480px]">
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
