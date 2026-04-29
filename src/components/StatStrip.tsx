export default function StatStrip() {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center">
          <div>
            <div className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#F26B4E] tracking-tight leading-none mb-3">
              Thousands
            </div>
            <p className="text-sm md:text-base text-gray-700 font-bold uppercase tracking-wider">
              Senior Golfers Trained
            </p>
          </div>

          <div className="md:border-x md:border-gray-200">
            <div className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#F26B4E] tracking-tight leading-none mb-3">
              20&ndash;50<span className="text-2xl md:text-3xl lg:text-4xl ml-2 align-top">yds</span>
            </div>
            <p className="text-sm md:text-base text-gray-700 font-bold uppercase tracking-wider">
              Avg. Distance Gain
            </p>
          </div>

          <div>
            <div className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#F26B4E] tracking-tight leading-none mb-3">
              0
            </div>
            <p className="text-sm md:text-base text-gray-700 font-bold uppercase tracking-wider">
              Swing Rebuilds Required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
