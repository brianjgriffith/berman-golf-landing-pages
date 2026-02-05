"use client";

interface VideoTransitionProps {
  overlayText?: string;
  subText?: string;
  showCTA?: boolean;
}

export default function VideoTransition({
  overlayText,
  subText,
  showCTA = false
}: VideoTransitionProps) {
  return (
    <section className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/tee-shot-background.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content (optional) */}
      {(overlayText || showCTA) && (
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          {overlayText && (
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-3xl">
              {overlayText}
            </h2>
          )}
          {subText && (
            <p className="text-xl text-white/90 mb-6 max-w-2xl">
              {subText}
            </p>
          )}
          {showCTA && (
            <a
              href="#register"
              className="btn-primary inline-block bg-[#F26B4E] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#e05a3d] uppercase tracking-wide"
            >
              Reserve Your Seat
            </a>
          )}
        </div>
      )}
    </section>
  );
}
