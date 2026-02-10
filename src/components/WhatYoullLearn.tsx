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
            The 3 Root Causes of Distance Loss After 60
          </h3>

          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              Most golfers lose 30-50 yards between age 50 and 60—and it has <strong>NOTHING to do with your age.</strong>
            </p>
            <p>
              Dr. Jake reveals the shocking biomechanics truth behind why senior golfers lose distance and shows you the exact movement patterns causing your back pain, inconsistency, and lost power <strong>(and how to fix them starting this week).</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
