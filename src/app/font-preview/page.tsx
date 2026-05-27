import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Font Preview · /20-more-yards header options",
  robots: { index: false, follow: false },
};

interface SampleProps {
  fontClass: string;
  uppercaseHero?: boolean;
  uppercaseH2?: boolean;
}

function HeadlineSample({ fontClass, uppercaseHero = true, uppercaseH2 = true }: SampleProps) {
  return (
    <div className="space-y-10">
      {/* Hero H1 */}
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1a365d]/50 mb-3">
          Hero (H1) at clamp(3.5rem, 10vw, 9rem)
        </p>
        <h1
          className={`${fontClass} font-black text-[clamp(3.5rem,10vw,9rem)] leading-[0.95] tracking-[0.005em] text-[#1a365d] ${
            uppercaseHero ? "uppercase" : ""
          }`}
        >
          20 More
          <br />
          Yards.
        </h1>
      </div>

      {/* Subhead */}
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1a365d]/50 mb-3">
          Subhead
        </p>
        <p
          className={`${fontClass} text-lg sm:text-xl md:text-2xl font-bold tracking-[0.12em] text-[#1a365d] leading-tight ${
            uppercaseH2 ? "uppercase" : ""
          }`}
        >
          Two days. Live with Dr. Jake Berman.
        </p>
      </div>

      {/* Broadside H2 */}
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1a365d]/50 mb-3">
          Broadside H2 (TheAgenda)
        </p>
        <h2
          className={`${fontClass} font-black text-3xl md:text-5xl lg:text-6xl text-[#1a365d] leading-[1.0] tracking-[0.005em] ${
            uppercaseH2 ? "uppercase" : ""
          }`}
        >
          Two days. One method.
          <br />
          Twenty more yards.
        </h2>
      </div>

      {/* Mid H2 */}
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1a365d]/50 mb-3">
          Mid H2 (WhyTwoDays)
        </p>
        <h2
          className={`${fontClass} font-black text-2xl md:text-4xl text-[#1a365d] leading-[1.0] tracking-[0.005em] ${
            uppercaseH2 ? "uppercase" : ""
          }`}
        >
          Why two days, not one.
        </h2>
      </div>

      {/* Day card kicker */}
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1a365d]/50 mb-3">
          Day card H3
        </p>
        <h3
          className={`${fontClass} font-black text-2xl md:text-3xl text-[#1a365d] leading-tight ${
            uppercaseH2 ? "uppercase" : ""
          }`}
        >
          The Activation Blueprint
        </h3>
      </div>

      {/* JakeQuote broadside */}
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1a365d]/50 mb-3">
          JakeQuote (largest broadside)
        </p>
        <blockquote
          className={`${fontClass} font-black text-4xl md:text-6xl lg:text-7xl text-[#1a365d] leading-[0.92] tracking-[0.005em] ${
            uppercaseH2 ? "uppercase" : ""
          }`}
        >
          &ldquo;This isn&apos;t really about yards.&rdquo;
        </blockquote>
      </div>
    </div>
  );
}

export default function FontPreviewPage() {
  return (
    <main className="min-h-screen bg-[#f5ede0] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#F26B4E] mb-3">
            Font Preview / Internal
          </p>
          <h1 className="font-serif text-3xl md:text-4xl text-[#1a365d] leading-tight mb-2">
            Compare header treatments for <span className="italic">/20-more-yards</span>.
          </h1>
          <p className="font-serif text-base text-[#1a365d]/80 leading-relaxed">
            Same headlines, five different fonts. Pick the one that&apos;s easiest to read while still
            feeling like a launch event. (This page is not linked from anywhere and is no-index.)
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16">
          {/* Anton — current */}
          <section className="bg-white border border-[#1a365d]/15 p-8 md:p-12">
            <div className="flex items-baseline justify-between mb-8 pb-6 border-b border-[#1a365d]/15">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#F26B4E] mb-1">
                  Option 0 / Current
                </p>
                <h2 className="font-serif text-2xl text-[#1a365d]">Anton (all-caps)</h2>
                <p className="font-serif italic text-sm text-[#1a365d]/70 mt-1">
                  Highly condensed sans, 1 weight. The current state.
                </p>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1a365d]/50">
                font-display
              </p>
            </div>
            <HeadlineSample fontClass="font-display" uppercaseHero uppercaseH2 />
          </section>

          {/* Anton — sentence case */}
          <section className="bg-white border border-[#1a365d]/15 p-8 md:p-12">
            <div className="flex items-baseline justify-between mb-8 pb-6 border-b border-[#1a365d]/15">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#F26B4E] mb-1">
                  Option 1
                </p>
                <h2 className="font-serif text-2xl text-[#1a365d]">Anton, sentence case</h2>
                <p className="font-serif italic text-sm text-[#1a365d]/70 mt-1">
                  Same font, no uppercase transform. All-caps slows reading 13&ndash;20%. Lightest change.
                </p>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1a365d]/50">
                font-display + no uppercase
              </p>
            </div>
            <HeadlineSample fontClass="font-display" uppercaseHero={false} uppercaseH2={false} />
          </section>

          {/* Archivo Black */}
          <section className="bg-white border border-[#1a365d]/15 p-8 md:p-12">
            <div className="flex items-baseline justify-between mb-8 pb-6 border-b border-[#1a365d]/15">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#F26B4E] mb-1">
                  Option 2
                </p>
                <h2 className="font-serif text-2xl text-[#1a365d]">Archivo Black</h2>
                <p className="font-serif italic text-sm text-[#1a365d]/70 mt-1">
                  Heavy geometric sans, non-condensed. Round O&apos;s, open R&apos;s. Civic / public-signage feel.
                </p>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1a365d]/50">
                font-archivo
              </p>
            </div>
            <HeadlineSample fontClass="font-archivo" uppercaseHero={false} uppercaseH2={false} />
          </section>

          {/* Source Serif 4 Black */}
          <section className="bg-white border border-[#1a365d]/15 p-8 md:p-12">
            <div className="flex items-baseline justify-between mb-8 pb-6 border-b border-[#1a365d]/15">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#F26B4E] mb-1">
                  Option 3
                </p>
                <h2 className="font-serif text-2xl text-[#1a365d]">Source Serif 4 Black</h2>
                <p className="font-serif italic text-sm text-[#1a365d]/70 mt-1">
                  Editorial serif at weight 900. Reuses existing font import. Masters program / book jacket lane.
                </p>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1a365d]/50">
                font-serif + 900
              </p>
            </div>
            <div className="space-y-10">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1a365d]/50 mb-3">
                  Hero (H1)
                </p>
                <h1 className="font-serif text-[clamp(3.5rem,10vw,9rem)] font-black leading-[0.95] tracking-tight text-[#1a365d]">
                  20 More
                  <br />
                  Yards.
                </h1>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1a365d]/50 mb-3">
                  Broadside H2
                </p>
                <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-black text-[#1a365d] leading-[1.05] tracking-tight">
                  Two days. One method.
                  <br />
                  Twenty more yards.
                </h2>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1a365d]/50 mb-3">
                  Mid H2
                </p>
                <h2 className="font-serif text-2xl md:text-4xl font-black text-[#1a365d] leading-[1.05] tracking-tight">
                  Why two days, not one.
                </h2>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1a365d]/50 mb-3">
                  Day card H3
                </p>
                <h3 className="font-serif text-2xl md:text-3xl font-black text-[#1a365d] leading-tight">
                  The Activation Blueprint
                </h3>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1a365d]/50 mb-3">
                  JakeQuote
                </p>
                <blockquote className="font-serif text-4xl md:text-6xl lg:text-7xl font-black italic text-[#1a365d] leading-[0.95] tracking-tight">
                  &ldquo;This isn&apos;t really about yards.&rdquo;
                </blockquote>
              </div>
            </div>
          </section>

          {/* Alfa Slab One */}
          <section className="bg-white border border-[#1a365d]/15 p-8 md:p-12">
            <div className="flex items-baseline justify-between mb-8 pb-6 border-b border-[#1a365d]/15">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#F26B4E] mb-1">
                  Option 4
                </p>
                <h2 className="font-serif text-2xl text-[#1a365d]">Alfa Slab One</h2>
                <p className="font-serif italic text-sm text-[#1a365d]/70 mt-1">
                  Heavy slab serif. Retro poster impact. Slab serifs aid letter recognition for older eyes.
                </p>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1a365d]/50">
                font-slab
              </p>
            </div>
            <HeadlineSample fontClass="font-slab" uppercaseHero={false} uppercaseH2={false} />
          </section>
        </div>

        <div className="mt-16 pt-10 border-t-2 border-[#1a365d] max-w-3xl">
          <p className="font-serif text-[#1a365d]/80 leading-relaxed italic">
            Scroll through and pick the option that feels easiest to read at a glance while still feeling
            like a launch event. Then tell me which option number and I&apos;ll swap it into the live page.
            (This preview page can be deleted once we&apos;ve picked one.)
          </p>
        </div>
      </div>
    </main>
  );
}
