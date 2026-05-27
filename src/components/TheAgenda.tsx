export default function TheAgenda() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#F26B4E] font-semibold tracking-widest uppercase text-sm mb-3">
            What We&apos;ll Cover
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight max-w-3xl mx-auto mb-4">
            Two Days. One Method. 20 More Yards.
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Here&apos;s exactly what happens across the 3 hours you&apos;ll spend with Dr. Jake.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Day 1 */}
          <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8 md:p-10">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-widest text-[#F26B4E] mb-2">
                Day 1 &bull; Wed, June 24 &bull; 10 AM ET
              </p>
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-1">
                The Activation Blueprint
              </h3>
              <p className="text-sm text-gray-600 font-medium">90 minutes</p>
            </div>

            <p className="text-sm font-bold uppercase tracking-wider text-gray-700 mb-4">
              What you&apos;ll learn:
            </p>

            <ul className="space-y-4 text-gray-800">
              <li className="flex items-start gap-3">
                <span className="text-[#F26B4E] font-extrabold flex-shrink-0 mt-1">&rarr;</span>
                <span className="text-base md:text-lg leading-snug">
                  Why traditional golf instruction quietly fails the senior body &mdash; and the fix no swing coach is teaching you
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F26B4E] font-extrabold flex-shrink-0 mt-1">&rarr;</span>
                <span className="text-base md:text-lg leading-snug">
                  The muscles that go dormant after 50, and the exact sequence to wake them up
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F26B4E] font-extrabold flex-shrink-0 mt-1">&rarr;</span>
                <span className="text-base md:text-lg leading-snug">
                  How &ldquo;Ground Force&rdquo; generates real distance &mdash; without changing a single thing about your swing
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F26B4E] font-extrabold flex-shrink-0 mt-1">&rarr;</span>
                <span className="text-base md:text-lg leading-snug">
                  A live walk-through of The Activation Method you can do in your living room
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F26B4E] font-extrabold flex-shrink-0 mt-1">&rarr;</span>
                <span className="text-base md:text-lg leading-snug">
                  Your homework: two specific movements to try before Day 2
                </span>
              </li>
            </ul>
          </div>

          {/* Day 2 */}
          <div className="bg-gradient-to-br from-[#0f4c81] to-[#1e88e5] text-white rounded-2xl p-8 md:p-10 shadow-xl">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-widest text-[#F26B4E] mb-2">
                Day 2 &bull; Thu, June 25 &bull; 10 AM ET
              </p>
              <h3 className="text-2xl md:text-3xl font-extrabold mb-1">
                Implementation &amp; Refinement
              </h3>
              <p className="text-sm text-white/80 font-medium">90 minutes</p>
            </div>

            <p className="text-sm font-bold uppercase tracking-wider text-white/80 mb-4">
              What you&apos;ll do:
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#F26B4E] font-extrabold flex-shrink-0 mt-1">&rarr;</span>
                <span className="text-base md:text-lg leading-snug">
                  Report back: what changed after 24 hours of activation (you&apos;ll be surprised)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F26B4E] font-extrabold flex-shrink-0 mt-1">&rarr;</span>
                <span className="text-base md:text-lg leading-snug">
                  Live Q&amp;A &mdash; Jake answers <strong>YOUR</strong> specific questions, not the ones from a script
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F26B4E] font-extrabold flex-shrink-0 mt-1">&rarr;</span>
                <span className="text-base md:text-lg leading-snug">
                  Troubleshooting the 3 most common stumbling blocks
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F26B4E] font-extrabold flex-shrink-0 mt-1">&rarr;</span>
                <span className="text-base md:text-lg leading-snug">
                  The take-home protocol: exactly what to do for the next 30 days to keep gaining yards
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F26B4E] font-extrabold flex-shrink-0 mt-1">&rarr;</span>
                <span className="text-base md:text-lg leading-snug">
                  The path forward &mdash; for golfers ready to go deeper
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
