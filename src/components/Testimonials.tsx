"use client";

interface Testimonial {
  quote: string;
  name: string;
  age?: number;
  location?: string;
  videoId?: string;
  ageLabel?: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "I went to multiple doctors, had shots in my spine, MRIs, nothing helped. But Jake fixed the root problem, now I'm piping 200-yard drives at 69.",
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

interface TestimonialsProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  variant?: "default" | "poster";
}

export default function Testimonials({
  eyebrow = "Testimonials",
  title = "What Others Are Saying",
  subtitle,
  variant = "default",
}: TestimonialsProps = {}) {
  const isPoster = variant === "poster";

  if (isPoster) {
    return (
      <section className="py-20 bg-[#f5ede0]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-12 max-w-4xl">
            <div className="h-[3px] w-32 bg-[#1a365d] mb-8" />
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black uppercase text-[#1a365d] leading-[0.95] mb-4 tracking-[0.005em]">
              {title}
            </h2>
            {subtitle && (
              <p className="font-serif text-lg md:text-xl text-[#1a365d]/80 max-w-2xl leading-relaxed italic">
                {subtitle}
              </p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white border border-[#1a365d]/15 overflow-hidden">
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
                <div className="p-6">
                  <blockquote className="font-serif text-[#1a365d]/90 text-lg mb-4 leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#1a365d]/70">
                    {testimonial.name}
                    {testimonial.ageLabel && `, ${testimonial.ageLabel}`}
                    {testimonial.age && !testimonial.ageLabel && `, ${testimonial.age}`}
                    {testimonial.location && ` · ${testimonial.location}`}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#register"
              className="inline-block bg-[#F26B4E] text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide"
            >
              Reserve Your Seat
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#F26B4E] font-semibold tracking-wide uppercase text-sm mb-3">
            {eyebrow}
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight max-w-3xl mx-auto">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
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
              <div className="p-6">
                <blockquote className="text-gray-800 text-lg mb-4 leading-relaxed font-medium">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <p className="text-gray-600">
                  <span className="font-semibold">{testimonial.name}</span>
                  {testimonial.ageLabel && `, ${testimonial.ageLabel}`}
                  {testimonial.age && !testimonial.ageLabel && `, ${testimonial.age}`}
                  {testimonial.location && `, ${testimonial.location}`}
                </p>
              </div>
            </div>
          ))}
        </div>

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
