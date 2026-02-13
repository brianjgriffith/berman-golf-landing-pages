import Image from "next/image";

export default function BonusGift() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-4">
          <span className="inline-block bg-[#F26B4E]/10 text-[#F26B4E] font-bold tracking-widest uppercase text-sm px-4 py-1.5 rounded-full">
            Free Bonus
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Register Today &amp; Get a Free Copy of<br />
          <span className="text-[#F26B4E]">The Berman Method</span>
        </h2>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
          {/* Book Image */}
          <div className="flex justify-center">
            <div className="relative w-56 h-72 md:w-64 md:h-80">
              <Image
                src="/berman-book-3d.png"
                alt="The Berman Method Book"
                fill
                className="object-contain drop-shadow-xl"
              />
            </div>
          </div>

          {/* Copy */}
          <div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              When you sign up for the free workshop, you&apos;ll also receive a
              complimentary digital copy of <strong>The Berman Method</strong>&mdash;the
              complete guide to adding distance back to your drives, pain-free.
            </p>
            <div className="space-y-3">
              {[
                "Why golfers lose distance with age and how to get it back",
                "The muscles-over-momentum approach to longer drives",
                "Actionable tips you can start using today—no equipment needed",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#F26B4E] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#register"
              className="btn-primary inline-block bg-[#F26B4E] text-white px-8 py-3 rounded-lg font-bold text-base hover:bg-[#e05a3d] uppercase tracking-wide mt-8"
            >
              Claim Your Free Spot + Book
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
