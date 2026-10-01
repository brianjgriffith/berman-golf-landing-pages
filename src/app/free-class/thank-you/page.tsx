import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { workshops, googleCalendarUrl } from "@/config/workshops";

// Where the free-class GHL form lands after submit. The redirect itself is
// set on the form in GHL ("(TM) 10.15.26 Webclass Sign Up Page" → On Submit →
// Open URL → gaindistance.com/free-class/thank-you); nothing in this repo
// sends people here.
//
// Date, time and calendar link all read config/workshops.ts, so re-dating the
// class re-dates this page.

const workshop = workshops[0];

export const metadata: Metadata = {
  title: "You're Registered | Free Live Class with Dr. Jake Berman",
  description: `Your seat for the free live class with Dr. Jake Berman on ${workshop.date} at ${workshop.time} is saved.`,
  robots: { index: false, follow: false },
};

// Step 01 promises the confirmation, not a join link — whether the link is in
// that email is decided in GHL. If it is, say so here; if it isn't, the
// reminder emails have to carry it. Don't promise a link the email lacks.
const steps = [
  {
    num: "01",
    title: "Check Your Email",
    body:
      "We just sent your confirmation. If you don't see it in a few minutes, check spam and add distance@bermangolf.com to your contacts — that's where your class link comes from.",
  },
  {
    num: "02",
    title: "Save the Date",
    body: `${workshop.date} at ${workshop.time}. Put it on your calendar now — showing up live is where you get your questions answered.`,
  },
  {
    num: "03",
    title: "Come Ready to Move",
    body:
      "Have a club nearby (a broomstick works) and a little space. You're moving with Jake, not just watching him.",
  },
];

export default function FreeClassThankYouPage() {
  return (
    <main className="min-h-screen bg-[#f5ede0] text-[#1a365d]">
      <Header />

      {/* Confirmation hero */}
      <section className="pt-28 md:pt-32 pb-12 md:pb-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px flex-1 bg-[#1a365d]/30 max-w-[100px]" />
            <p className="text-[11px] md:text-xs font-bold tracking-[0.35em] uppercase text-[#1a365d]">
              You&apos;re Registered
            </p>
            <div className="h-px flex-1 bg-[#1a365d]/30 max-w-[100px]" />
          </div>

          <div className="w-16 h-16 bg-[#1a365d] rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-8 h-8 text-[#f5ede0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="font-display text-[clamp(2.5rem,7vw,5rem)] font-black leading-[0.95] tracking-tight text-[#1a365d] mb-6">
            Your Seat Is Saved.
          </h1>

          <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#1a365d]/80 leading-relaxed max-w-xl mx-auto mb-8">
            You&apos;re in for the <strong className="text-[#1a365d]">free live class</strong> with Dr. Jake
            Berman &mdash; how senior golfers gain distance by fixing the body, not rebuilding the swing.
          </p>

          {/* Date card + calendar */}
          <div className="inline-block bg-white border-2 border-[#1a365d] px-8 py-6 shadow-[0_10px_30px_rgba(26,54,93,0.12)]">
            <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#F26B4E] mb-2">
              Live On Zoom
            </p>
            <p className="font-display text-2xl sm:text-3xl font-black text-[#1a365d] leading-tight">
              {workshop.date}
            </p>
            <p className="font-display text-xl sm:text-2xl font-black text-[#1a365d]/80 mb-5">
              {workshop.time}
            </p>
            <a
              href={googleCalendarUrl(workshop)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#F26B4E] text-white px-8 py-4 rounded-md font-extrabold text-base sm:text-lg uppercase tracking-wider hover:bg-[#e05a3d] shadow-[0_10px_30px_rgba(242,107,78,0.4)] hover:-translate-y-0.5 transition-all"
            >
              Add To My Calendar &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="h-[3px] bg-[#1a365d] mb-10 w-32 mx-auto" />
          <h2 className="font-display text-3xl md:text-4xl font-black text-center text-[#1a365d] mb-3">
            What Happens Next
          </h2>
          <p className="font-serif italic text-center text-[#1a365d]/70 mb-12 max-w-xl mx-auto">
            Three simple steps so you get the most out of the class.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-white border-2 border-[#1a365d] p-6 shadow-[0_10px_30px_rgba(26,54,93,0.12)]"
              >
                <p className="font-display text-5xl font-black text-[#F26B4E] leading-none mb-4">
                  {step.num}
                </p>
                <h3 className="font-display text-xl font-black uppercase tracking-tight text-[#1a365d] mb-2">
                  {step.title}
                </h3>
                <p className="font-serif text-[#1a365d]/75 leading-relaxed text-[15px]">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center mt-12 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#1a365d]/70">
            See you live &middot; {workshop.date} &middot; {workshop.time}
          </p>
        </div>
      </section>

      <Footer variant="poster" />
    </main>
  );
}
