import Image from "next/image";

export default function WhatYoullLearn() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What You&apos;ll Learn:
          </h2>
        </div>

        {/* Main Content Card */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Why Golf Lessons Don&apos;t Work for Seniors (And What Does)
          </h3>

          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              99% of golf instruction is designed for a 25-year-old body—strong, flexible, and athletically capable of flawless technique. <strong>That&apos;s not you anymore.</strong>
            </p>
            <p>
              The problem isn&apos;t your age. It&apos;s that you&apos;re using <strong>momentum</strong> to swing the club instead of <strong>muscles</strong>. Dr. Jake reveals the biomechanics truth behind why senior golfers lose distance and shows you how to engage your core and glutes to gain it back <strong>(without swinging harder or straining your back).</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
