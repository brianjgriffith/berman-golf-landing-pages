import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { workshops } from "@/config/workshops";

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

      {/* Free Class CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#F26B4E] font-semibold uppercase tracking-wider text-sm mb-3">
              Free Live Workshop
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Turn Today&apos;s Warm-Up<br className="hidden md:block" /> Into 20+ Extra Yards?
            </h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              This warm-up activates the right muscles. The free class shows you how to <em>use</em> them to add serious distance &mdash; live, with Dr. Jake answering your questions.
            </p>
          </div>

          {/* Value bullets */}
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 max-w-2xl mx-auto mb-10 text-left">
            {[
              "The muscles-over-momentum secret to real distance",
              "Why warming up is only step one of the equation",
              "5-minute drills you can do at home between rounds",
              "How to eliminate back pain and stiffness after 18 holes",
              "Live Q&A with Dr. Jake (not a recording)",
              "Free — no pitch, no credit card required",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="text-center">
            <p className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-4">
              Pick a date that works for you:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {workshops.map((workshop, index) => (
                <a
                  key={index}
                  href={`/free-class#register-${index}`}
                  className="inline-block bg-[#F26B4E] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] transition-colors"
                >
                  <span className="block">Reserve Your Free Seat</span>
                  <span className="block text-sm font-normal opacity-90">
                    {workshop.date} at {workshop.time}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
