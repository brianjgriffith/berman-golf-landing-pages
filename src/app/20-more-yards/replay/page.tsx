import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Replay | 20 More Yards Live Event with Dr. Jake Berman",
  description:
    "The 20 More Yards 2-day live event replay with Dr. Jake Berman has ended. See what's next inside the Senior Golf Mastery Cohort.",
  robots: { index: false, follow: false },
};

// ── REPLAY STATE ────────────────────────────────────────────────
// The free replay window has closed (came down at 12 AM ET, Wed July 1).
// To bring the replay BACK: set REPLAY_EXPIRED = false. Everything below
// (video IDs, embeds, day copy) is preserved and will render again.
const REPLAY_EXPIRED: boolean = true;

// YouTube video IDs (the part after youtu.be/ or watch?v=).
const DAY_1_VIDEO_ID = "pF_yRTIzQPQ";
const DAY_2_VIDEO_ID = "D2jmjCPH30s";

// When the free replay came down. Used in both the live banner and the
// "window closed" notice.
const REPLAY_DEADLINE = "Wednesday, July 1 at midnight ET";

const days = [
  {
    label: "Day 1",
    title: "The Activation Method",
    blurb: "Where it all starts — firing up the right muscles to unlock distance you already have.",
    videoId: DAY_1_VIDEO_ID,
    published: true,
  },
  {
    label: "Day 2",
    title: "Putting It Into Your Swing",
    blurb: "Turning activation into real clubhead speed — and the path to keep gaining after today.",
    videoId: DAY_2_VIDEO_ID,
    published: true,
  },
];

function VideoEmbed({
  videoId,
  title,
}: {
  videoId: string;
  title: string;
}) {
  if (!videoId) {
    // Placeholder until the YouTube recording is uploaded.
    return (
      <div className="relative w-full aspect-video rounded-xl overflow-hidden border-2 border-[#1a365d] bg-[#1a365d] shadow-[0_30px_80px_rgba(26,54,93,0.3)]">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-[#f5ede0]/80 gap-3 px-6 text-center">
          <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M8 5v14l11-7z" />
          </svg>
          <p className="text-sm font-bold uppercase tracking-[0.2em]">{title}</p>
          <p className="text-xs uppercase tracking-[0.2em] text-[#f5ede0]/50">
            Replay uploading soon
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden border-2 border-[#1a365d] bg-[#1a365d] shadow-[0_30px_80px_rgba(26,54,93,0.3)]">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}

export default function TwentyMoreYardsReplayPage() {
  const publishedDays = days.filter((day) => day.published);
  const day2Pending = days.some((day) => day.label === "Day 2" && !day.published);

  return (
    <main className="min-h-screen bg-[#f5ede0] text-[#1a365d]">
      <Header />

      {/* Urgency banner */}
      <div className="bg-[#F26B4E] text-white text-center px-4 py-3 mt-16 md:mt-[68px]">
        <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.15em]">
          {REPLAY_EXPIRED ? (
            <>
              &#9203; The replay has ended &mdash; the Senior Golf Mastery Cohort closes tonight at midnight ET.
            </>
          ) : (
            <>
              &#9203; Replay available through {REPLAY_DEADLINE} &mdash; then it comes down.
            </>
          )}
        </p>
      </div>

      {/* Hero */}
      <section className="pt-12 md:pt-16 pb-10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px flex-1 bg-[#1a365d]/30 max-w-[100px]" />
            <p className="text-[11px] md:text-xs font-bold tracking-[0.35em] uppercase text-[#1a365d]">
              {REPLAY_EXPIRED ? "Replay Ended" : "Event Replay"}
            </p>
            <div className="h-px flex-1 bg-[#1a365d]/30 max-w-[100px]" />
          </div>

          {REPLAY_EXPIRED ? (
            <>
              <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-black leading-[0.95] tracking-tight text-[#1a365d] mb-6">
                That&apos;s a wrap. <br />
                <span className="text-[#F26B4E]">The replay has ended.</span>
              </h1>
              <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#1a365d]/80 leading-relaxed max-w-xl mx-auto">
                The free 2-day 20 More Yards replay came down at midnight ET. But you
                haven&apos;t missed your shot at the yards &mdash; the next step is still open.
              </p>
            </>
          ) : (
            <>
              <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-black leading-[0.95] tracking-tight text-[#1a365d] mb-6">
                20 More Yards. <br />
                <span className="text-[#F26B4E]">The Replay.</span>
              </h1>
              <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#1a365d]/80 leading-relaxed max-w-xl mx-auto">
                {day2Pending
                  ? "Missed Day 1, or want to watch it again? It's below. Grab a club, find some space, and follow along with Dr. Jake — then meet us LIVE for Day 2."
                  : "Missed it live, or want to watch again? Both days are below. Grab a club, find some space, and follow along with Dr. Jake."}
              </p>
            </>
          )}
        </div>
      </section>

      {REPLAY_EXPIRED ? (
        /* Replay-ended notice */
        <section className="pb-8">
          <div className="max-w-2xl mx-auto px-4">
            <div className="rounded-2xl border-2 border-[#1a365d]/15 bg-white/60 px-6 py-12 sm:py-16 text-center shadow-[0_20px_60px_rgba(26,54,93,0.08)]">
              <div className="text-5xl mb-5" aria-hidden>
                &#9203;
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#1a365d] mb-4">
                The replay window has closed
              </h2>
              <p className="font-serif text-lg text-[#1a365d]/75 leading-relaxed">
                The free 2-day replay came down <strong>{REPLAY_DEADLINE}</strong>. Thanks to
                everyone who showed up, grabbed a club, and put in the reps &mdash; nearly 70
                senior golfers live from all over the world.
              </p>
              <p className="font-serif text-lg text-[#1a365d]/75 leading-relaxed mt-4">
                Didn&apos;t get to finish &mdash; or ready to make these moves permanent? That&apos;s
                exactly what comes next. 👇
              </p>
            </div>
          </div>
        </section>
      ) : (
        /* Videos */
        <section className="pb-8">
          <div className="max-w-4xl mx-auto px-4 space-y-14">
            {publishedDays.map((day) => (
              <div key={day.label}>
                <div className="flex items-baseline gap-4 mb-5">
                  <span className="font-display text-4xl sm:text-5xl font-black text-[#F26B4E] leading-none">
                    {day.label}
                  </span>
                  <div>
                    <h2 className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight text-[#1a365d] leading-tight">
                      {day.title}
                    </h2>
                    <p className="font-serif italic text-[#1a365d]/70 text-sm sm:text-base">
                      {day.blurb}
                    </p>
                  </div>
                </div>
                <VideoEmbed videoId={day.videoId} title={`20 More Yards — ${day.label}`} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Cohort CTA */}
      <section className="py-16 md:py-20 bg-[#1a365d] text-[#f5ede0] mt-8">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-[11px] md:text-xs font-bold tracking-[0.35em] uppercase text-[#f5ede0]/60 mb-4">
            {REPLAY_EXPIRED ? "Your Last Chance" : "Ready For The Next Step?"}
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-black mb-6 leading-tight">
            {REPLAY_EXPIRED
              ? "The replay's gone. This isn't — yet."
              : "Don't let it stop at the replay."}
          </h2>
          <p className="font-serif text-lg md:text-xl text-[#f5ede0]/80 leading-relaxed mb-4 max-w-2xl mx-auto">
            You saw what&apos;s possible. The <strong className="text-[#f5ede0]">Senior Golf
            Mastery Cohort</strong> is where you actually do it &mdash; six weeks live with Dr. Jake,
            the full course, every bonus, and a year in the Berman Clubhouse.
          </p>
          <p className="font-serif italic text-[#f5ede0]/65 mb-10">
            Small group. Limited seats. Real coaching, not another video to watch alone.
          </p>

          <a
            href="/senior-golf-mastery-cohort"
            className="inline-block bg-[#F26B4E] text-white px-10 sm:px-14 py-5 rounded-md font-extrabold text-lg sm:text-xl uppercase tracking-wider hover:bg-[#e05a3d] shadow-[0_10px_30px_rgba(242,107,78,0.4)] hover:-translate-y-0.5 transition-all"
          >
            See the Cohort &rarr;
          </a>

          <p className="mt-6 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#f5ede0]/60">
            {REPLAY_EXPIRED
              ? "Enrollment closes tonight — Wednesday, July 1 at midnight ET"
              : `Replay comes down ${REPLAY_DEADLINE}`}
          </p>
        </div>
      </section>

      <Footer variant="poster" />
    </main>
  );
}
