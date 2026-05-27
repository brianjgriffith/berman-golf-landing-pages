import Image from "next/image";

interface InstructorProps {
  variant?: "default" | "poster";
}

export default function Instructor({ variant = "default" }: InstructorProps = {}) {
  const isPoster = variant === "poster";

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

  if (isPoster) {
    return (
      <section className="py-20 bg-[#f5ede0]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            {/* Left: Image with formal frame */}
            <div className="md:col-span-5 flex justify-center md:justify-start">
              <div className="relative w-full max-w-md bg-white p-3 shadow-[0_25px_70px_rgba(26,54,93,0.15)]">
                <div className="relative aspect-square overflow-hidden bg-[#1a365d]/10">
                  <Image
                    src="/jake-solo.png"
                    alt="Dr. Jake Berman, PT, DPT"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="pt-4 pb-2 text-center border-t border-[#1a365d]/10 mt-3">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#1a365d]">
                    Dr. Jake Berman
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#1a365d]/60 mt-1.5">
                    PT, DPT
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="md:col-span-7">
              <div className="h-[3px] w-32 bg-[#1a365d] mb-8" />
              <h2 className="font-display text-4xl md:text-6xl font-black uppercase text-[#1a365d] leading-[0.95] mb-6 tracking-[0.005em]">
                Hey, I&apos;m Dr. Jake.
              </h2>

              <div className="space-y-5 font-serif text-[#1a365d]/90 text-lg leading-relaxed">
                <p>
                  I started out as a physical therapist helping golfers overcome back pain. What I discovered changed everything.
                </p>
                <p className="bg-white border border-[#1a365d]/15 p-5 text-[#1a365d]">
                  <strong className="font-bold">The key to distance, consistency, and injury prevention isn&apos;t swing tips. It&apos;s how your body moves.</strong>
                </p>
                <p>
                  That&apos;s why I developed <strong className="font-bold">The Activation Method</strong>, a biomechanics-first approach designed specifically for aging golfers over 60.
                </p>
                <p>
                  This isn&apos;t based on theory or &ldquo;pro tour technique.&rdquo; It&apos;s grounded in how the body actually functions, especially after age 60, and it&apos;s helped every single golfer who&apos;s gone through my programs:
                </p>
              </div>

              <div className="mt-6 space-y-2">
                {results.map((result, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#F26B4E] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-serif text-[#1a365d]/90 text-base">{result}</span>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-[#1a365d] font-bold uppercase tracking-[0.15em] text-sm">
                100% success rate. No gimmicks. Just science-backed movement.
              </p>
            </div>
          </div>

          <div className="mt-16 pt-10 border-t border-[#1a365d]/15">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#F26B4E] mb-6">
              Credentials
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="font-display text-2xl text-[#1a365d] flex-shrink-0 leading-none w-8">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-[#1a365d]/90 text-base leading-snug pt-1">{credential}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-[#0f4c81] via-[#1565c0] to-[#1e88e5] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hey, I&apos;m Dr. Jake!
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
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

          <div>
            <div className="space-y-4 text-blue-100 text-lg">
              <p>
                Dr. Jake Berman, PT, DPT, started out as a physical therapist helping golfers overcome back pain. What he discovered changed everything:
              </p>
              <p className="bg-white/10 p-4 rounded-lg border border-white/20 text-white">
                <strong>The key to distance, consistency, and injury prevention isn&apos;t swing tips. It&apos;s how your body moves.</strong>
              </p>
              <p>
                That&apos;s why he developed <strong>The Activation Method</strong>, a biomechanics-first approach designed specifically for aging golfers over 60.
              </p>
              <p>
                Jake&apos;s method isn&apos;t based on theory or &quot;pro tour technique.&quot; It&apos;s grounded in how the body actually functions, especially after age 60, and it&apos;s helped every single golfer who&apos;s gone through his programs:
              </p>
            </div>

            <div className="mt-6 space-y-2">
              {results.map((result, index) => (
                <div key={index} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
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

        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="grid md:grid-cols-3 gap-6">
            {credentials.map((credential, index) => (
              <div key={index} className="flex items-start gap-3 bg-white rounded-xl p-5 shadow-lg">
                <svg className="w-6 h-6 text-[#F26B4E] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
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
