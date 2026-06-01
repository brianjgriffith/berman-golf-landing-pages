export default function TheAgenda() {
  return (
    <section className="py-16 md:py-24 bg-[#f5ede0]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 md:mb-16 max-w-4xl">
          <div className="h-[3px] w-32 bg-[#1a365d] mb-8" />
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-[#1a365d] leading-[1.0] mb-4 tracking-tight">
            Two days. One method.
            <br />
            Twenty more yards.
          </h2>
          <p className="font-serif text-lg md:text-xl text-[#1a365d]/80 max-w-2xl leading-relaxed">
            Here&apos;s exactly what happens across the three hours you&apos;ll spend with Dr. Jake.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Day 1 */}
          <div className="bg-white border border-[#1a365d]/15 p-8 md:p-10">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-widest text-[#F26B4E] mb-2">
                Day 1 &bull; Wed, June 24 &bull; 10:00 AM ET
              </p>
              <h3 className="font-display text-3xl md:text-4xl font-black text-[#1a365d] leading-tight mb-1">
                The Activation Blueprint
              </h3>
              <p className="text-sm text-[#1a365d]/60 font-medium">90 minutes</p>
            </div>

            <p className="text-sm font-bold uppercase tracking-wider text-[#1a365d]/70 mb-4">
              What you&apos;ll learn:
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#F26B4E] font-extrabold flex-shrink-0 mt-1">&rarr;</span>
                <span className="font-serif text-base md:text-lg text-[#1a365d]/90 leading-snug">
                  The real reason your distance is fading. Hint: it&apos;s not your age, and it&apos;s not your swing.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F26B4E] font-extrabold flex-shrink-0 mt-1">&rarr;</span>
                <span className="font-serif text-base md:text-lg text-[#1a365d]/90 leading-snug">
                  The exact mobility restrictions wrecking your swing &mdash; and how to spot them in your own body
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F26B4E] font-extrabold flex-shrink-0 mt-1">&rarr;</span>
                <span className="font-serif text-base md:text-lg text-[#1a365d]/90 leading-snug">
                  How The Activation Method generates real distance without changing a single thing about your swing
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F26B4E] font-extrabold flex-shrink-0 mt-1">&rarr;</span>
                <span className="font-serif text-base md:text-lg text-[#1a365d]/90 leading-snug">
                  Off the chair, on camera with Jake: the first wave of fixes you can do in your living room
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F26B4E] font-extrabold flex-shrink-0 mt-1">&rarr;</span>
                <span className="font-serif text-base md:text-lg text-[#1a365d]/90 leading-snug">
                  Your homework before Day 2 &mdash; short, specific, designed to give you an early win
                </span>
              </li>
            </ul>
          </div>

          {/* Day 2 */}
          <div className="bg-[#1a365d] text-[#f5ede0] p-8 md:p-10">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-widest text-[#F26B4E] mb-2">
                Day 2 &bull; Thu, June 25 &bull; 10:00 AM ET
              </p>
              <h3 className="font-display text-3xl md:text-4xl font-black leading-tight mb-1">
                Implementation &amp; Refinement
              </h3>
              <p className="text-sm text-[#f5ede0]/70 font-medium">90 minutes</p>
            </div>

            <p className="text-sm font-bold uppercase tracking-wider text-[#f5ede0]/80 mb-4">
              What you&apos;ll do:
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#F26B4E] font-extrabold flex-shrink-0 mt-1">&rarr;</span>
                <span className="font-serif text-base md:text-lg leading-snug">
                  Report back: what changed in 24 hours of doing the work (most golfers are surprised)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F26B4E] font-extrabold flex-shrink-0 mt-1">&rarr;</span>
                <span className="font-serif text-base md:text-lg leading-snug">
                  The full implementation &mdash; Jake hits the fixes harder, sharper, and deeper
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F26B4E] font-extrabold flex-shrink-0 mt-1">&rarr;</span>
                <span className="font-serif text-base md:text-lg leading-snug">
                  The 3 most common stumbling blocks, and exactly how to push through each
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F26B4E] font-extrabold flex-shrink-0 mt-1">&rarr;</span>
                <span className="font-serif text-base md:text-lg leading-snug">
                  Your take-home protocol: immediately actionable, built for a legitimate shot at 20 more yards
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F26B4E] font-extrabold flex-shrink-0 mt-1">&rarr;</span>
                <span className="font-serif text-base md:text-lg leading-snug">
                  Live Q&amp;A &mdash; Jake answers <strong className="font-bold">your</strong> specific questions, not the ones from a script
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
