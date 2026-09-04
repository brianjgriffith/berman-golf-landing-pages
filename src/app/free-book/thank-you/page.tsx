import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClubhouseOffer from "@/components/ClubhouseOffer";

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
              <h3 className="text-xl font-bold mb-3">Get Coached On It</h3>
              <p className="text-gray-400">
                Reading it is one thing. Doing it with <strong className="text-white">Dr. Jake checking your work</strong> every month is another. That&apos;s the Clubhouse &mdash; details below.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clubhouse soft-sell */}
      <ClubhouseOffer
        eyebrow="Your Next Step"
        title={
          <>
            The Book Tells You <em>What</em> to Do.
            <br />
            The Clubhouse Makes Sure It <em>Works</em>.
          </>
        }
        intro="Every senior golfer who reads The Berman Method has the same next question: am I doing this right? Inside the Berman Clubhouse you get Dr. Jake live every month, your swing video broken down on camera, and a room full of senior golfers doing the exact same work."
      />

      <Footer />
    </main>
  );
}
