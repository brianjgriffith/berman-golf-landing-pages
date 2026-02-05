"use client";

interface VideoTestimonial {
  name: string;
  videoId: string;
  quote: string;
  age?: number;
  ageLabel?: string;
  location?: string;
}

const testimonials: VideoTestimonial[] = [
  {
    name: "Jimmy Christopher",
    videoId: "hK_7KxT3KxM",
    quote: "I went to multiple doctors, had shots in my spine, MRIs, nothing helped. But Jake fixed the root problem — now I'm piping 200-yard drives at 69.",
    age: 69,
    location: "Marco Island, FL",
  },
  {
    name: "Ray",
    videoId: "K1JpsnlRZAY",
    quote: "I couldn't play two days in a row. Back pain was ruining golf for me. Now? I've got zero pain, I'm hitting it 20 yards farther, and I'm playing better at 80 than I did ten years ago.",
    ageLabel: "80 years young",
  },
  {
    name: "Richard Leebove",
    videoId: "LeZnsDmc2Ns",
    quote: "I've taken lessons all over the world, and I've never learned this much about how the body actually creates power. If you want to play better and play longer, this is the place to do it.",
    age: 71,
    location: "4-5 Handicap",
  },
  {
    name: "Dave Aull",
    videoId: "F2fRAc6z0a0",
    quote: "I'm 90 years young, I've lost 33 pounds, I'm walking with confidence, and I'm playing more golf than I did at home.",
    age: 90,
    location: "Kansas City & Naples",
  },
];

export default function BookTestimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#F26B4E] font-semibold tracking-wide uppercase text-sm mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Others Are Saying
          </h2>
        </div>

        {/* Video Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* YouTube Embed */}
              <div className="relative w-full pt-[56.25%]">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${testimonial.videoId}`}
                  title={`${testimonial.name} Testimonial`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Quote and Attribution */}
              <div className="p-6">
                <blockquote className="text-gray-800 text-lg mb-4 leading-relaxed font-medium">
                  &quot;{testimonial.quote}&quot;
                </blockquote>

                <p className="text-gray-600">
                  — <span className="font-semibold">{testimonial.name}</span>
                  {testimonial.ageLabel && `, ${testimonial.ageLabel}`}
                  {testimonial.age && !testimonial.ageLabel && `, ${testimonial.age}`}
                  {testimonial.location && `, ${testimonial.location}`}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="text-center mt-12">
          <p className="text-xl text-gray-700 font-medium mb-8">
            If any of these success stories sound remotely familiar to what you are currently experiencing, this book is for you!
          </p>
          <a
            href="#get-book"
            className="btn-primary inline-block bg-[#F26B4E] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide"
          >
            <span className="block">Grab your Digital Copy of The Berman Method</span>
            <span className="block text-sm font-normal opacity-90">Add Distance Back to Your Drives, Pain-Free</span>
          </a>
        </div>
      </div>
    </section>
  );
}
