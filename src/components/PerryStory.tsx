import Image from "next/image";

export default function PerryStory() {
  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#F26B4E] font-semibold tracking-widest uppercase text-sm mb-3">
            Proof It Works
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: Screenshot */}
          <div className="flex justify-center order-2 md:order-1">
            <div className="relative w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
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
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              &ldquo;Back nine was a monster. <span className="text-[#F26B4E]">Getting my swing</span> &mdash; thanks, Dr. Jake Berman.&rdquo;
            </blockquote>

            <p className="text-lg text-gray-700 mb-8">
              <strong>Perry Oliveira</strong> just took <strong>1st place in Senior Flight C</strong> at the Veteran Golfers Association tournament &mdash; Clear Creek, VA.
            </p>

            <p className="text-base md:text-lg text-gray-800 mb-4">
              Perry isn&apos;t a 30-year-old former collegiate athlete. He&apos;s a senior golfer who did exactly what you&apos;ll learn to do in these two days:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-[#F26B4E] font-extrabold flex-shrink-0 mt-1">&rarr;</span>
                <span className="text-base md:text-lg text-gray-800 leading-snug">
                  Stop chasing swing fixes designed for 25-year-old bodies
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F26B4E] font-extrabold flex-shrink-0 mt-1">&rarr;</span>
                <span className="text-base md:text-lg text-gray-800 leading-snug">
                  Activate the muscles age and sitting have shut down
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F26B4E] font-extrabold flex-shrink-0 mt-1">&rarr;</span>
                <span className="text-base md:text-lg text-gray-800 leading-snug">
                  Get the rotation, the speed, and the distance back
                </span>
              </li>
            </ul>

            <p className="text-base md:text-lg text-gray-800">
              The Activation Method that Perry used is the same one you&apos;ll walk away with on <strong>June 25th</strong>.
            </p>

            <a
              href="#register"
              className="btn-primary inline-block mt-8 bg-[#F26B4E] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide"
            >
              Join the 2-Day Event &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
