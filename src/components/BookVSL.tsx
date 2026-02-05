"use client";

export default function BookVSL() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#0f4c81] via-[#1565c0] to-[#1e88e5]">
      <div className="max-w-4xl mx-auto px-4">
        {/* Video Embed */}
        <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.youtube.com/embed/MA1DZPuZF9k"
            title="The Berman Method - Free Book"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        {/* Below Video Text */}
        <div className="mt-10 text-center">
          <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto mb-6">
            You&apos;re not 20 years old anymore. But that doesn&apos;t mean you have to settle for shorter drives, switching to senior tees, or giving up the game you love.
          </p>
          <p className="text-lg text-blue-100 leading-relaxed max-w-3xl mx-auto mb-4">
            <strong className="text-white">Dr. Jake Berman</strong> is a physical therapist whose work with aging golfers in Naples and Bonita Springs, Florida has changed the game for countless clients through his Berman Method fundamental analysis. His work is scientific, replicable, and designed for people of any age.
          </p>
          <span className="inline-block bg-[#F26B4E] text-white text-2xl font-bold px-6 py-2 rounded-lg">
            Let&apos;s have some fun, baby!
          </span>
          <p className="text-lg text-blue-100 mt-2">
            Because inside The Berman Method, you&apos;ll discover:
          </p>
        </div>
      </div>
    </section>
  );
}
