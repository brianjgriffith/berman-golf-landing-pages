interface WalkAwayWithProps {
  title?: string;
  variant?: "default" | "poster";
}

export default function WalkAwayWith({
  title = "What You'll Walk Away With:",
  variant = "default",
}: WalkAwayWithProps = {}) {
  const isPoster = variant === "poster";

  const benefits = [
    "Use muscles, not momentum, to add real distance (no speed sticks required)",
    "Eliminate back pain and stiffness after 18 holes",
    "Improve ball-striking consistency without changing your swing",
  ];

  if (isPoster) {
    return (
      <section className="py-20 bg-[#efe5d4]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-10 md:mb-12 max-w-4xl">
            <div className="h-[3px] w-32 bg-[#1a365d] mb-8" />
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black uppercase text-[#1a365d] leading-[0.95] mb-4 tracking-[0.005em]">
              {title}
            </h2>
            <p className="font-serif text-lg md:text-xl text-[#1a365d]/80 max-w-2xl leading-relaxed">
              Simple, 5-minute exercises you can practice in your living room.
            </p>
          </div>

          <div className="bg-white border border-[#1a365d]/15 p-8 md:p-12">
            <div className="space-y-5 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="font-display text-2xl text-[#F26B4E] flex-shrink-0 leading-none w-8">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-[#1a365d]/90 text-lg leading-snug pt-1">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#1a365d] text-[#f5ede0] p-6">
              <p className="font-serif text-lg leading-relaxed">
                <strong className="font-bold">Plus, Dr. Jake answers YOUR specific questions live.</strong> This isn&apos;t a recording.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-[#F26B4E] font-semibold">
            Immediately Actionable Drills You Can Use This Week
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <p className="text-gray-700 text-lg mb-8">
            No fluff, no theory overload. You&apos;ll get simple, 5-minute exercises you can practice in your living room that will:
          </p>

          <div className="space-y-4 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#F26B4E] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-800 text-lg font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="bg-[#2B5BAF] text-white p-6 rounded-xl">
            <p className="text-lg">
              <strong>Plus, Dr. Jake answers YOUR specific questions live.</strong> This isn&apos;t a recording.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
