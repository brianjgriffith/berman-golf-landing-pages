export default function EventLogistics() {
  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#F26B4E] font-semibold tracking-widest uppercase text-sm mb-3">
            How It Works
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Everything You Need to Know
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
          {/* WHEN */}
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-200">
            <div className="text-3xl md:text-4xl mb-3">⏰</div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#F26B4E] mb-2">When</p>
            <p className="text-gray-900 font-bold text-sm md:text-base leading-tight">
              June 24 + 25, 2026
            </p>
            <p className="text-gray-700 text-sm mt-1">
              10:00 AM ET both days
            </p>
            <p className="text-gray-700 text-sm">
              90 min per session
            </p>
          </div>

          {/* WHERE */}
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-200">
            <div className="text-3xl md:text-4xl mb-3">💻</div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#F26B4E] mb-2">Where</p>
            <p className="text-gray-900 font-bold text-sm md:text-base leading-tight">
              Online via Zoom
            </p>
            <p className="text-gray-700 text-sm mt-1">
              Link sent to your inbox after registration
            </p>
          </div>

          {/* COST */}
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-200">
            <div className="text-3xl md:text-4xl mb-3">💰</div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#F26B4E] mb-2">Cost</p>
            <p className="text-gray-900 font-bold text-sm md:text-base leading-tight">
              $0. Completely free.
            </p>
            <p className="text-gray-700 text-sm mt-1">
              The 2-day method is yours to keep, no strings.
            </p>
          </div>

          {/* LIVE ONLY */}
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm border-2 border-[#F26B4E]">
            <div className="text-3xl md:text-4xl mb-3">⚠️</div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#F26B4E] mb-2">Live Only</p>
            <p className="text-gray-900 font-bold text-sm md:text-base leading-tight">
              No replays. No recordings.
            </p>
            <p className="text-gray-700 text-sm mt-1">
              Show up live or miss it.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-200">
          <p className="text-sm font-bold uppercase tracking-widest text-[#F26B4E] mb-6 text-center">
            What to have ready:
          </p>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <div className="flex items-start gap-3">
              <span className="text-[#F26B4E] font-extrabold flex-shrink-0 mt-1">&rarr;</span>
              <span className="text-gray-800 text-base">
                A space to stand and move (no equipment needed)
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#F26B4E] font-extrabold flex-shrink-0 mt-1">&rarr;</span>
              <span className="text-gray-800 text-base">
                Pen and paper for the Day 1 homework
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#F26B4E] font-extrabold flex-shrink-0 mt-1">&rarr;</span>
              <span className="text-gray-800 text-base">
                Your questions for Jake on Day 2
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
