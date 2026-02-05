import Image from "next/image";

export default function Instructor() {
  const credentials = [
    "Doctor of Physical Therapy with 15+ years helping aging golfers",
    "Trusted by thousands of golfers over 60",
    "Specializes in core, glute, and spine activation for safer, stronger swings",
  ];

  const results = [
    "Gain real distance off the tee",
    "Improve consistency",
    "Play more often, with less pain",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0f4c81] via-[#1565c0] to-[#1e88e5] text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header - Centered */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hey, I&apos;m Dr. Jake!
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/jake-solo.png"
                alt="Dr. Jake Berman"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <div className="space-y-4 text-blue-100 text-lg">
              <p>
                Dr. Jake Berman, PT, DPT, started out as a physical therapist helping golfers overcome back pain. What he discovered changed everything:
              </p>
              <p className="bg-white/10 p-4 rounded-lg border-l-4 border-[#F26B4E] text-white">
                <strong>The key to distance, consistency, and injury prevention isn&apos;t swing tips — it&apos;s how your body moves.</strong>
              </p>
              <p>
                That&apos;s why he developed the <strong>Berman Method of Golf Performance</strong> — a biomechanics-first approach designed specifically for aging golfers over 60.
              </p>
              <p>
                Jake&apos;s method isn&apos;t based on theory or &quot;pro tour technique.&quot; It&apos;s grounded in how the body actually functions — especially after age 60 — and it&apos;s helped every single golfer who&apos;s gone through his programs:
              </p>
            </div>

            {/* Results */}
            <div className="mt-6 space-y-2">
              {results.map((result, index) => (
                <div key={index} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white font-medium">{result}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-white font-semibold text-lg">
              100% success rate. No gimmicks. Just science-backed movement.
            </p>
          </div>
        </div>

        {/* Credentials - Full Width Below */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="grid md:grid-cols-3 gap-6">
            {credentials.map((credential, index) => (
              <div key={index} className="flex items-start gap-3 bg-white rounded-xl p-5 shadow-lg">
                <svg className="w-6 h-6 text-[#F26B4E] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-800 font-medium">{credential}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
