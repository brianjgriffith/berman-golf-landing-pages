interface WhoThisIsForProps {
  variant?: "default" | "poster";
}

export default function WhoThisIsFor({ variant = "default" }: WhoThisIsForProps = {}) {
  const isPoster = variant === "poster";

  const criteria = [
    "Used to hit 250+ yards but now struggle to reach 200",
    "Tired of being told to 'just swing faster' or 'move up a tee'",
    "Need ibuprofen before/after rounds due to back pain",
    "Feel frustrated watching buddies outdrive you",
    "Want to play well into your 70s, 80s, and beyond",
  ];

  if (isPoster) {
    return (
      <section className="py-20 bg-[#f5ede0]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-10 md:mb-12 max-w-4xl">
            <h2 className="font-serif italic text-3xl md:text-5xl lg:text-6xl text-[#1a365d] leading-[1.05] mb-4">
              Who this is for.
            </h2>
            <p className="font-serif text-lg md:text-xl text-[#1a365d]/70 max-w-2xl leading-relaxed">
              Senior golfers who refuse to &ldquo;age out&rdquo; of the game.
            </p>
          </div>

          <div className="bg-white border border-[#1a365d]/15 p-8 md:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#F26B4E] mb-6">
              This class is for you if you:
            </p>

            <ul className="space-y-4 mb-8">
              {criteria.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[#1a365d] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-serif text-[#1a365d]/90 text-lg leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            <p className="font-serif text-[#1a365d]/90 text-lg italic border-t border-[#1a365d]/15 pt-6">
              If you&apos;re tired of being told &ldquo;it&apos;s just your age,&rdquo; this training will change everything.
            </p>
          </div>

          <div className="mt-10">
            <a
              href="#register"
              className="inline-block bg-[#F26B4E] text-white px-10 py-4 font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide"
            >
              Reserve Your Seat
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who This Is For:
          </h2>
          <p className="text-xl text-[#F26B4E] font-semibold">
            Senior Golfers Who Refuse to &quot;Age Out&quot; of the Game
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <p className="text-gray-700 text-lg mb-8">
            This class is perfect if you:
          </p>

          <div className="space-y-4 mb-8">
            {criteria.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#2B5BAF] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-800 text-lg">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-gray-700 text-lg font-medium border-t border-gray-200 pt-6">
            If you&apos;re tired of being told &quot;it&apos;s just your age,&quot; this training will change everything.
          </p>
        </div>

        <div className="text-center mt-10">
          <a
            href="#register"
            className="btn-primary inline-block bg-[#F26B4E] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide"
          >
            <span className="block">Reserve Your Seat</span>
          </a>
        </div>
      </div>
    </section>
  );
}
