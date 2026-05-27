export default function WhyTwoDays() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-12 md:mb-16 max-w-4xl">
          <div className="h-[2px] w-16 bg-[#1a365d] mb-6" />
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.05] mb-4">
            Why two days, not one.
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
            A one-hour webinar gives you information. Two days gives you a method you can actually use.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {/* Day 1 */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
            <div className="text-[#F26B4E] font-extrabold text-sm uppercase tracking-widest mb-3">
              Day 1 &bull; June 24
            </div>
            <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-3">
              Learn
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Jake walks you through The Activation Method live. You&apos;ll learn exactly what&apos;s been blocking your distance, see it demonstrated, and leave with two specific things to work on before Day 2.
            </p>
          </div>

          {/* Between */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
            <div className="text-[#F26B4E] font-extrabold text-sm uppercase tracking-widest mb-3">
              Between Days
            </div>
            <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-3">
              Try
            </h3>
            <p className="text-gray-700 leading-relaxed">
              You try it. On your own. In your living room, in your backyard, or on the range. <strong>This is where most &ldquo;free classes&rdquo; end,</strong> and where most golfers stop making progress.
            </p>
          </div>

          {/* Day 2 */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
            <div className="text-[#F26B4E] font-extrabold text-sm uppercase tracking-widest mb-3">
              Day 2 &bull; June 25
            </div>
            <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-3">
              Refine
            </h3>
            <p className="text-gray-700 leading-relaxed">
              You come back with what worked, what didn&apos;t, and your questions. Jake answers live, refines your work, and gives you the playbook to keep gaining yards after the event ends.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#0f4c81] to-[#1e88e5] text-white rounded-2xl p-8 md:p-10 text-center shadow-xl">
          <p className="text-xl md:text-2xl font-extrabold leading-tight">
            Information doesn&apos;t change your golf game. Implementation does.
          </p>
          <p className="text-base md:text-lg text-white/90 mt-3">
            That&apos;s why we built this as two days.
          </p>
        </div>
      </div>
    </section>
  );
}
