export default function WhyTwoDays() {
  return (
    <section className="py-16 md:py-24 bg-[#efe5d4]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-12 md:mb-16 max-w-4xl">
          <div className="h-[3px] w-32 bg-[#1a365d] mb-8" />
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black uppercase text-[#1a365d] leading-[0.95] mb-4 tracking-[0.005em]">
            Why two days, not one.
          </h2>
          <p className="font-serif text-lg md:text-xl text-[#1a365d]/80 max-w-2xl leading-relaxed">
            A one-hour webinar gives you information. Two days gives you a method you can actually use.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {/* Day 1 */}
          <div className="bg-white border border-[#1a365d]/15 p-6 md:p-8">
            <div className="text-[#F26B4E] font-extrabold text-sm uppercase tracking-widest mb-3">
              Day 1 &bull; June 24
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-black uppercase text-[#1a365d] mb-4 leading-tight">
              Learn
            </h3>
            <p className="font-serif text-[#1a365d]/85 leading-relaxed">
              Jake walks you through The Activation Method live. You&apos;ll learn exactly what&apos;s been blocking your distance, see it demonstrated, and leave with two specific things to work on before Day 2.
            </p>
          </div>

          {/* Between */}
          <div className="bg-white border border-[#1a365d]/15 p-6 md:p-8">
            <div className="text-[#F26B4E] font-extrabold text-sm uppercase tracking-widest mb-3">
              Between Days
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-black uppercase text-[#1a365d] mb-4 leading-tight">
              Try
            </h3>
            <p className="font-serif text-[#1a365d]/85 leading-relaxed">
              You try it. On your own. In your living room, in your backyard, or on the range. <strong className="font-bold">This is where most &ldquo;free classes&rdquo; end,</strong> and where most golfers stop making progress.
            </p>
          </div>

          {/* Day 2 */}
          <div className="bg-white border border-[#1a365d]/15 p-6 md:p-8">
            <div className="text-[#F26B4E] font-extrabold text-sm uppercase tracking-widest mb-3">
              Day 2 &bull; June 25
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-black uppercase text-[#1a365d] mb-4 leading-tight">
              Refine
            </h3>
            <p className="font-serif text-[#1a365d]/85 leading-relaxed">
              You come back with what worked, what didn&apos;t, and your questions. Jake answers live, refines your work, and gives you the playbook to keep gaining yards after the event ends.
            </p>
          </div>
        </div>

        <div className="bg-[#1a365d] text-[#f5ede0] p-8 md:p-10 text-center">
          <p className="font-display text-2xl md:text-3xl font-black uppercase leading-tight tracking-[0.005em]">
            Information doesn&apos;t change your golf game. Implementation does.
          </p>
          <p className="font-serif text-base md:text-lg text-[#f5ede0]/85 mt-3 italic">
            That&apos;s why we built this as two days.
          </p>
        </div>
      </div>
    </section>
  );
}
