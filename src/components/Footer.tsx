export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-xl font-bold">
            <span className="text-[#F26B4E]">BERMAN</span>
            <span className="text-white">GOLF</span>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <p className="text-sm">Questions? Email us at</p>
            <a
              href="mailto:distance@bermangolf.com"
              className="text-[#F26B4E] hover:underline"
            >
              distance@bermangolf.com
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Berman Golf. All rights reserved.</p>
          <p className="mt-2">
            Helping senior golfers add distance and play pain-free since 2010.
          </p>
        </div>
      </div>
    </footer>
  );
}
