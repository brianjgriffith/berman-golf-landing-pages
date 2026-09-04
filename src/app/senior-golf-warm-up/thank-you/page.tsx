import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClubhouseOffer from "@/components/ClubhouseOffer";

export default function WarmUpThankYouPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero confirmation */}
      <section className="pt-28 pb-12 bg-gradient-to-br from-[#0f4c81] via-[#1565c0] to-[#1e88e5] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          {/* Checkmark */}
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            The 5-Minute Warm-Up That Prevents<br className="hidden md:block" /> 90% of Golf Injuries
          </h1>
          <p className="text-white/80 text-lg mb-3">
            Used by thousands of golfers over 60 to loosen up, play pain-free, and hit longer shots.
          </p>
          <p className="text-white/60 text-base mb-10">
            Follow the movements in the video below. No fluff. No filler. Just press play and move.
          </p>

          {/* YouTube Video */}
          <div className="relative w-full max-w-2xl mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/Jwd28CQ23Qg?rel=0"
              title="Senior Golf 5-Minute Warm-Up"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Printable Download */}
      <section className="py-14 bg-gray-50 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Download Your Free Printable
          </h2>
          <p className="text-gray-600 mb-8">
            Take it to the course. Print it out and keep it in your golf bag so you never skip your warm-up.
          </p>

          {/* TODO: Replace /warm-up-printable.png with actual filename once provided */}
          <a
            href="/warm-up-printable.png"
            download
            className="inline-block group"
          >
            <div className="relative w-64 h-80 mx-auto rounded-lg overflow-hidden shadow-lg border border-gray-200 group-hover:shadow-xl transition-shadow">
              <Image
                src="/warm-up-printable.png"
                alt="Senior Golf Warm-Up Printable"
                fill
                className="object-cover"
              />
            </div>
            <span className="inline-flex items-center gap-2 mt-4 text-[#F26B4E] font-semibold hover:underline">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
              </svg>
              Click to Download
            </span>
          </a>
        </div>
      </section>

      {/* Clubhouse soft-sell */}
      <ClubhouseOffer
        eyebrow="Your Next Step"
        title={
          <>
            The Warm-Up Wakes the Muscles Up.
            <br />
            The Clubhouse Teaches You to <em>Use</em> Them.
          </>
        }
        intro="Five minutes of activation is step one. Turning it into yards takes someone watching how your body actually moves. Inside the Berman Clubhouse you get Dr. Jake live every month, your swing video broken down on camera, and a room full of senior golfers doing the exact same work."
      />

      <Footer />
    </main>
  );
}
