export default function WhoThisIsFor() {
  const criteria = [
    "Used to hit 250+ yards but now struggle to reach 200",
    "Need ibuprofen before/after rounds due to back pain",
    "Feel frustrated watching buddies outdrive you",
    "Want to play well into your 70s, 80s, and beyond",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who This Is For:
          </h2>
          <p className="text-xl text-[#F26B4E] font-semibold">
            Senior Golfers Who Refuse to &quot;Age Out&quot; of the Game
          </p>
        </div>

        {/* Content */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <p className="text-gray-700 text-lg mb-8">
            This class is perfect if you:
          </p>

          {/* Criteria List */}
          <div className="space-y-4 mb-8">
            {criteria.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#2B5BAF] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-800 text-lg">{item}</span>
              </div>
            ))}
          </div>

          {/* Closing Statement */}
          <p className="text-gray-700 text-lg font-medium border-t border-gray-200 pt-6">
            If you&apos;re done making the same golf resolutions and want 2026 to actually be different, this is for you.
          </p>
        </div>

        {/* CTA */}
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
