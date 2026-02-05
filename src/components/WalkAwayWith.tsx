export default function WalkAwayWith() {
  const benefits = [
    "Add 20+ yards to your driver",
    "Eliminate back pain and stiffness after 18 holes",
    "Improve ball-striking consistency without changing your swing",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What You&apos;ll Walk Away With:
          </h2>
          <p className="text-xl text-[#F26B4E] font-semibold">
            Immediately Actionable Drills You Can Use This Week
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <p className="text-gray-700 text-lg mb-8">
            No fluff, no theory overload. You&apos;ll get simple, 5-minute exercises you can practice in your living room that will:
          </p>

          {/* Benefits List */}
          <div className="space-y-4 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#F26B4E] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-800 text-lg font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Live Q&A Callout */}
          <div className="bg-[#2B5BAF] text-white p-6 rounded-xl">
            <p className="text-lg">
              <strong>Plus, Dr. Jake answers YOUR specific questions live</strong>—this isn&apos;t a recording!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
