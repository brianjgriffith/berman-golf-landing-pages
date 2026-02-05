"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Is this workshop really free?",
    answer: "Yes, 100% free. No credit card required. I'm hosting this workshop because I want to show you what's possible — and give you real value upfront.",
  },
  {
    question: "I'm in my 70s/80s. Is this for me?",
    answer: "Absolutely. The Berman Method was designed specifically for senior golfers. We've helped golfers well into their 80s and 90s add distance and play pain-free. Age is not a barrier.",
  },
  {
    question: "What if I can't attend live?",
    answer: "Register anyway! We'll send you the replay link so you can watch at your convenience. But attending live means you can ask questions and get personalized feedback.",
  },
  {
    question: "What if I have back pain, hip issues, or knee problems?",
    answer: "This workshop is perfect for you. As a Doctor of Physical Therapy, I specialize in helping golfers with these exact issues. You'll learn movements that work WITH your body, not against it.",
  },
  {
    question: "I've tried everything. Why would this be different?",
    answer: "Most golf instruction is designed for 25-year-olds. The Berman Method is built on physics and biomechanics — specifically how the senior body moves. We fix the ROOT CAUSE of distance loss, not the symptoms.",
  },
  {
    question: "Do I need any special equipment?",
    answer: "No equipment needed. Just bring yourself and be ready to learn. You can do the exercises from home with no clubs, no range, and no travel required.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-[#F26B4E] flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "pb-5 max-h-96" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
