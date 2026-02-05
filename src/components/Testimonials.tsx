"use client";

interface Testimonial {
  quote: string;
  name: string;
  age?: number;
  location?: string;
  videoId?: string; // YouTube video ID
  ageLabel?: string; // Custom age label like "80 years young"
}

const testimonials: Testimonial[] = [
  {
    quote: "I went to multiple doctors, had shots in my spine, MRIs, nothing helped. But Jake fixed the root problem — now I'm piping 200-yard drives at 69.",
    name: "Jimmy Christopher",
    age: 69,
    location: "Marco Island, FL",
    videoId: "hK_7KxT3KxM",
  },
  {
    quote: "I couldn't play two days in a row. Back pain was ruining golf for me. Now? I've got zero pain, I'm hitting it 20 yards farther, and I'm playing better at 80 than I did ten years ago.",
    name: "Ray",
    ageLabel: "80 years young",
    videoId: "K1JpsnlRZAY",
  },
  {
    quote: "I've taken lessons all over the world, and I've never learned this much about how the body actually creates power. If you want to play better and play longer, this is the place to do it.",
    name: "Richard Leebove",
    age: 71,
    location: "4-5 Handicap",
    videoId: "LeZnsDmc2Ns",
  },
  {
    quote: "I'm 90 years young, I've lost 33 pounds, I'm walking with confidence, and I'm playing more golf than I did at home.",
    name: "Dave Aull",
    age: 90,
    location: "Kansas City & Naples",
    videoId: "F2fRAc6z0a0",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-100">
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

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Video Embed */}
              {testimonial.videoId && (
                <div className="aspect-video w-full">
                  <iframe
                    src={`https://www.youtube.com/embed/${testimonial.videoId}`}
                    title={`${testimonial.name} testimonial`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              )}

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

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#register"
            className="btn-primary inline-block bg-[#F26B4E] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide"
          >
            Reserve Your Seat
          </a>
        </div>
      </div>
    </section>
  );
}
