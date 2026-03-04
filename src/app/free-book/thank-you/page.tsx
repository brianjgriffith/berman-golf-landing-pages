import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { workshops } from "@/config/workshops";

export default function FreeBookThankYouPage() {
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
            You Did It! Your Book Is On Its Way!
          </h1>
          <p className="text-white/80 text-lg mb-10">
            Watch the short video below to get the most out of <em>The Berman Method</em>.
          </p>

          {/* YouTube Video */}
          <div className="relative w-full max-w-2xl mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/-CFdWtk_JUY?rel=0"
              title="Welcome to The Berman Method"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* 3-Column Next Steps */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Here&apos;s What to Do Next
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1: Check Email */}
            <div className="text-center">
              <div className="w-14 h-14 bg-[#F26B4E] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Check Your Email</h3>
              <p className="text-gray-400">
                Look for a message from <strong className="text-white">distance@bermangolf.com</strong> with your download link. Check spam if you don&apos;t see it.
              </p>
            </div>

            {/* Step 2: Download Book */}
            <div className="text-center">
              <div className="w-14 h-14 bg-[#F26B4E] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Download Your Book</h3>
              <p className="text-gray-400 mb-4">
                Open the email and tap the link to get your free digital copy of <em>The Berman Method</em>.
              </p>
              <div className="relative w-32 h-44 mx-auto">
                <Image
                  src="/berman-book-3d.png"
                  alt="The Berman Method book"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Step 3: Free Class */}
            <div className="text-center">
              <div className="w-14 h-14 bg-[#F26B4E] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Join the Free Class</h3>
              <p className="text-gray-400">
                Register for a <strong className="text-white">free live workshop</strong> where Dr. Jake walks you through the 7-step framework to add 20-50+ yards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#F26B4E] font-semibold uppercase tracking-wider text-sm mb-3">
              Free Live Workshop
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              The Book Tells You <em>What</em> to Do.<br />
              The Class Shows You <em>How</em>.
            </h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              In this free 60-minute class, Dr. Jake Berman walks you through the exact 7-step framework his patients use to add 20-50+ yards &mdash; live, with Q&amp;A.
            </p>
          </div>

          {/* Value bullets */}
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 max-w-2xl mx-auto mb-10 text-left">
            {[
              "Why 99% of golf instruction fails senior bodies",
              "The muscles-over-momentum secret to real distance",
              "5-minute exercises you can do in your living room",
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
