interface JakeQuoteProps {
  quote?: React.ReactNode;
  attribution?: string;
}

const defaultQuote = (
  <>
    &ldquo;Traditional lessons treat your body like a 25-year-old Tour pro. You don&apos;t need a swing rebuild &mdash; you need <span className="text-[#F26B4E]">activation</span>.&rdquo;
  </>
);

export default function JakeQuote({
  quote = defaultQuote,
  attribution = "Dr. Jake Berman, PT, DPT",
}: JakeQuoteProps = {}) {
  return (
    <section className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <svg
          className="w-12 h-12 md:w-14 md:h-14 text-[#F26B4E] mx-auto mb-6"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>

        <blockquote className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-8">
          {quote}
        </blockquote>

        <div className="flex items-center justify-center gap-3">
          <div className="w-10 h-px bg-[#F26B4E]" />
          <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-white/80">
            {attribution}
          </p>
          <div className="w-10 h-px bg-[#F26B4E]" />
        </div>
      </div>
    </section>
  );
}
