import Image from "next/image";

export default function PerryStory() {
  return (
    <section className="py-16 md:py-24 bg-[#f5ede0]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: Screenshot */}
          <div className="flex justify-center order-2 md:order-1">
            <div className="relative w-full max-w-md bg-white shadow-[0_25px_70px_rgba(26,54,93,0.15)] overflow-hidden border border-[#1a365d]/15">
              <Image
                src="/perry-full-picture.jpg"
                alt="Screenshot of Perry Oliveira's Skool community post titled '1st place' showing his Veteran Golfers Association medal and tournament leaderboard, with caption thanking Dr. Jake Berman."
                width={800}
                height={1000}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right: Quote + Body */}
          <div className="order-1 md:order-2">
            <div className="h-[3px] w-32 bg-[#1a365d] mb-8" />

            <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1a365d] leading-[0.95] mb-6">
              &ldquo;Back nine was a monster. <span className="text-[#F26B4E]">Getting my swing</span>, thanks Dr. Jake Berman.&rdquo;
            </blockquote>

            <p className="font-serif text-lg text-[#1a365d]/90 mb-8 leading-relaxed">
              <strong className="font-bold">Perry Oliveira</strong> just took <strong className="font-bold">1st place in Senior Flight C</strong> at the Veteran Golfers Association tournament, Clear Creek, VA.
            </p>

            <p className="font-serif text-base md:text-lg text-[#1a365d]/90 mb-4 leading-relaxed">
              Perry isn&apos;t a 30-year-old former collegiate athlete. He&apos;s a senior golfer who did exactly what you&apos;ll learn to do in these two days:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-[#F26B4E] font-extrabold flex-shrink-0 mt-1">&rarr;</span>
                <span className="font-serif text-base md:text-lg text-[#1a365d]/90 leading-snug">
                  Stop chasing swing fixes designed for 25-year-old bodies
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F26B4E] font-extrabold flex-shrink-0 mt-1">&rarr;</span>
                <span className="font-serif text-base md:text-lg text-[#1a365d]/90 leading-snug">
                  Activate the muscles age and sitting have shut down
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F26B4E] font-extrabold flex-shrink-0 mt-1">&rarr;</span>
                <span className="font-serif text-base md:text-lg text-[#1a365d]/90 leading-snug">
                  Get the rotation, the speed, and the distance back
                </span>
              </li>
            </ul>

            <p className="font-serif text-base md:text-lg text-[#1a365d]/90 leading-relaxed">
              The Activation Method that Perry used is the same one you&apos;ll walk away with on <strong className="font-bold">June 25th</strong>.
            </p>

            <a
              href="#register"
              className="inline-block mt-8 bg-[#F26B4E] text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide"
            >
              Join the 2-Day Event &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
