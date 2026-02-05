import Image from "next/image";

export default function BookWhatYoullLearn() {
  const learnings = [
    "The #1 reason why golfers lose so much distance as they age AND how to regain some of that distance back immediately!",
    "Why 99% of the tips and tricks you've used in the past to gain distance haven't worked (and what actually does work for aging bodies)",
    "Real life testimonials including Jim's who gained OVER 65 yards on his tee shots and started winning tournaments again after going through the Berman Method of Golf Performance",
    "Immediately actionable tips to start improving your golf game today—no equipment needed!",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header with Book */}
        <div className="text-center mb-12">
          <p className="text-[#F26B4E] font-semibold tracking-wide uppercase text-sm mb-3">
            Grab your Digital Copy of The Berman Method
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            What You&apos;ll Learn In This Book
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Book Image */}
          <div className="flex justify-center">
            <div className="relative w-64 h-80 md:w-72 md:h-[360px]">
              <Image
                src="/berman-book-3d.png"
                alt="The Berman Method Book"
                fill
                className="object-contain drop-shadow-xl"
              />
            </div>
          </div>

          {/* Right - Learnings List */}
          <div className="space-y-6">
            {learnings.map((learning, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#F26B4E] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">{learning}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#get-book"
            className="btn-primary inline-block bg-[#F26B4E] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide"
          >
            Get Your Free Digital Copy
          </a>
        </div>
      </div>
    </section>
  );
}
