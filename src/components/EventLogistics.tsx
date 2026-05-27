export default function EventLogistics() {
  return (
    <section className="py-16 md:py-24 bg-[#efe5d4]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-12 md:mb-16 max-w-4xl">
          <div className="h-[3px] w-32 bg-[#1a365d] mb-8" />
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black uppercase text-[#1a365d] leading-[0.95] tracking-[0.005em]">
            Everything you need to know.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
          {/* WHEN */}
          <div className="bg-white p-6 text-center border border-[#1a365d]/15">
            <svg className="w-10 h-10 mx-auto mb-3 text-[#1a365d]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="5" width="18" height="16" rx="2" />
              <path d="M3 9h18M8 3v4M16 3v4" strokeLinecap="round" />
            </svg>
            <p className="text-xs font-bold uppercase tracking-widest text-[#F26B4E] mb-2">When</p>
            <p className="text-[#1a365d] font-bold text-sm md:text-base leading-tight">
              June 24 + 25, 2026
            </p>
            <p className="font-serif text-[#1a365d]/80 text-sm mt-1">
              10:00 AM ET both days
            </p>
            <p className="font-serif text-[#1a365d]/80 text-sm">
              90 min per session
            </p>
          </div>

          {/* WHERE */}
          <div className="bg-white p-6 text-center border border-[#1a365d]/15">
            <svg className="w-10 h-10 mx-auto mb-3 text-[#1a365d]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="4" width="18" height="12" rx="1.5" />
              <path d="M8 20h8M12 16v4" strokeLinecap="round" />
            </svg>
            <p className="text-xs font-bold uppercase tracking-widest text-[#F26B4E] mb-2">Where</p>
            <p className="text-[#1a365d] font-bold text-sm md:text-base leading-tight">
              Online via Zoom
            </p>
            <p className="font-serif text-[#1a365d]/80 text-sm mt-1">
              Link sent to your inbox after registration
            </p>
          </div>

          {/* COST */}
          <div className="bg-white p-6 text-center border border-[#1a365d]/15">
            <svg className="w-10 h-10 mx-auto mb-3 text-[#1a365d]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 3v18M16 7H10a3 3 0 000 6h4a3 3 0 010 6H8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="text-xs font-bold uppercase tracking-widest text-[#F26B4E] mb-2">Cost</p>
            <p className="text-[#1a365d] font-bold text-sm md:text-base leading-tight">
              $0. Completely free.
            </p>
            <p className="font-serif text-[#1a365d]/80 text-sm mt-1">
              The 2-day method is yours to keep, no strings.
            </p>
          </div>

          {/* LIVE ONLY */}
          <div className="bg-white p-6 text-center border-2 border-[#F26B4E]">
            <svg className="w-10 h-10 mx-auto mb-3 text-[#F26B4E]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
            </svg>
            <p className="text-xs font-bold uppercase tracking-widest text-[#F26B4E] mb-2">Live Only</p>
            <p className="text-[#1a365d] font-bold text-sm md:text-base leading-tight">
              No replays. No recordings.
            </p>
            <p className="font-serif text-[#1a365d]/80 text-sm mt-1">
              Show up live or miss it.
            </p>
          </div>
        </div>

        <div className="bg-white p-8 md:p-10 border border-[#1a365d]/15">
          <p className="text-sm font-bold uppercase tracking-widest text-[#F26B4E] mb-6 text-center">
            What to have ready:
          </p>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <div className="flex items-start gap-3">
              <span className="text-[#F26B4E] font-extrabold flex-shrink-0 mt-1">&rarr;</span>
              <span className="font-serif text-[#1a365d]/90 text-base">
                A space to stand and move (no equipment needed)
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#F26B4E] font-extrabold flex-shrink-0 mt-1">&rarr;</span>
              <span className="font-serif text-[#1a365d]/90 text-base">
                Pen and paper for the Day 1 homework
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#F26B4E] font-extrabold flex-shrink-0 mt-1">&rarr;</span>
              <span className="font-serif text-[#1a365d]/90 text-base">
                Your questions for Jake on Day 2
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
