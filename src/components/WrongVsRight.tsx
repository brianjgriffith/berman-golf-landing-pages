export default function WrongVsRight() {
  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#F26B4E] font-semibold tracking-widest uppercase text-sm mb-3">
            The Problem
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight max-w-3xl mx-auto">
            Most golf advice for seniors is built to fail you.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* The Old Way */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 uppercase tracking-wide">
                The Old Way
              </h3>
            </div>
            <ul className="space-y-4 text-gray-800">
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold flex-shrink-0 mt-0.5">&#10005;</span>
                <span className="text-base md:text-lg leading-snug">&ldquo;Just swing easy and stay loose.&rdquo;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold flex-shrink-0 mt-0.5">&#10005;</span>
                <span className="text-base md:text-lg leading-snug">More lessons designed for tour pros half your age.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold flex-shrink-0 mt-0.5">&#10005;</span>
                <span className="text-base md:text-lg leading-snug">Buy new clubs to compensate for what your body won&apos;t do.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold flex-shrink-0 mt-0.5">&#10005;</span>
                <span className="text-base md:text-lg leading-snug">Push through the back pain. Pop more ibuprofen.</span>
              </li>
            </ul>
          </div>

          {/* The Activation Method */}
          <div className="bg-gradient-to-br from-[#0f4c81] to-[#1e88e5] text-white rounded-2xl p-8 md:p-10 shadow-xl relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#F26B4E] flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold uppercase tracking-wide">
                The Activation Method
              </h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#F26B4E] font-bold flex-shrink-0 mt-0.5">&#10003;</span>
                <span className="text-base md:text-lg leading-snug">Wake up the muscles that have gone to sleep.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F26B4E] font-bold flex-shrink-0 mt-0.5">&#10003;</span>
                <span className="text-base md:text-lg leading-snug">Use Ground Force to power your swing &mdash; at any age.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F26B4E] font-bold flex-shrink-0 mt-0.5">&#10003;</span>
                <span className="text-base md:text-lg leading-snug">Train the body for senior biomechanics, not 25-year-olds.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F26B4E] font-bold flex-shrink-0 mt-0.5">&#10003;</span>
                <span className="text-base md:text-lg leading-snug">Gain yards and play pain-free &mdash; without rebuilding your swing.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
