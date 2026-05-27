interface FooterProps {
  variant?: "default" | "poster";
}

export default function Footer({ variant = "default" }: FooterProps = {}) {
  const isPoster = variant === "poster";

  if (isPoster) {
    return (
      <footer className="bg-[#f5ede0] text-[#1a365d] pt-16 pb-12 border-t-2 border-[#1a365d]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10 md:gap-6">
            <div>
              <a href="/20-more-yards" className="flex items-baseline gap-2 mb-4">
                <span className="font-display text-3xl md:text-4xl font-black uppercase tracking-tight text-[#F26B4E] leading-none">
                  Berman
                </span>
                <span className="font-display text-3xl md:text-4xl font-black uppercase tracking-tight text-[#1a365d] leading-none">
                  Golf
                </span>
              </a>
              <p className="font-serif text-[#1a365d]/80 italic max-w-md leading-relaxed">
                Helping senior golfers add distance and play pain-free since 2010.
              </p>
            </div>

            <div className="text-left md:text-right">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#1a365d]/60 mb-2">
                Questions
              </p>
              <a
                href="mailto:distance@bermangolf.com"
                className="font-serif text-[#1a365d] hover:text-[#F26B4E] transition-colors text-lg"
              >
                distance@bermangolf.com
              </a>
            </div>
          </div>

          <div className="h-[2px] bg-[#1a365d] mt-12 mb-6 w-full" />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs uppercase tracking-[0.2em] text-[#1a365d]/60">
            <p>&copy; {new Date().getFullYear()} Berman Golf. All rights reserved.</p>
            <p className="font-bold text-[#1a365d]/80">20 More Yards &middot; Live Event &middot; June 24 + 25, 2026</p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xl font-bold">
            <span className="text-[#F26B4E]">BERMAN</span>
            <span className="text-white">GOLF</span>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm">Questions? Email us at</p>
            <a
              href="mailto:distance@bermangolf.com"
              className="text-[#F26B4E] hover:underline"
            >
              distance@bermangolf.com
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Berman Golf. All rights reserved.</p>
          <p className="mt-2">
            Helping senior golfers add distance and play pain-free since 2010.
          </p>
        </div>
      </div>
    </footer>
  );
}
