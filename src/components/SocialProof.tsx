export default function SocialProof() {
  const stats = [
    { number: "1,000+", label: "Senior Golfers Trained" },
    { number: "100%", label: "Success Rate" },
    { number: "20-50", label: "Yards Gained" },
    { number: "60+", label: "Ages into 80s/90s" },
  ];

  return (
    <section className="bg-gray-900 py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-2 text-white">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">{stat.number}</span>
              <span className="text-gray-300 text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
