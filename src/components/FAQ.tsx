"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const defaultFaqs: FAQItem[] = [
  {
    question: "Is this workshop really free?",
    answer: "Yes, 100% free. No credit card required. I'm hosting this workshop because I want to show you what's possible, and give you real value upfront.",
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
    answer: "Most golf instruction is designed for 25-year-olds. The Berman Method is built on physics and biomechanics, specifically how the senior body moves. We fix the ROOT CAUSE of distance loss, not the symptoms.",
  },
  {
    question: "Do I need any special equipment?",
    answer: "No equipment needed. Just bring yourself and be ready to learn. You can do the exercises from home with no clubs, no range, and no travel required.",
  },
];

const posterFaqs: FAQItem[] = [
  {
    question: "Is this really free?",
    answer: "Yes. Zero cost, no credit card. Both days are live with Dr. Jake. The 2-day method is yours to keep, regardless of whether you ever buy anything from us.",
  },
  {
    question: "What if I miss Day 1?",
    answer: "Day 2 is structured around the work you did between Day 1 and Day 2, so missing Day 1 means missing the foundation. If you know you can't attend both days live, hold for the next cohort instead of registering for this one.",
  },
  {
    question: "Will there be a replay?",
    answer: "Yes — but with a limited window. The replay will be available through Wednesday, July 1 at midnight ET. After that, it comes down. Showing up live is still the move: you can ask Jake questions, get real-time feedback, and the work happens with you in the room.",
  },
  {
    question: "Will I be pitched something at the end?",
    answer: "Day 2 ends with an invitation to keep going in a 6-week paid program for golfers who want to go deeper. That's it. No high-pressure tactics, no countdown timer to a discount. You'll have already gotten a real method by then.",
  },
  {
    question: "I have back pain or limited mobility. Is this safe for me?",
    answer: "Dr. Jake is a Doctor of Physical Therapy. The Activation Method is built specifically for senior bodies with the limitations that come with age. You'll work within your range, not against it.",
  },
  {
    question: "What do I need to attend?",
    answer: "A Zoom link (we'll send it after registration), a space to stand and move (no clubs or equipment required), and pen and paper for Day 1 homework.",
  },
];

interface FAQProps {
  variant?: "default" | "poster";
}

export default function FAQ({ variant = "default" }: FAQProps = {}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isPoster = variant === "poster";
  const faqs = isPoster ? posterFaqs : defaultFaqs;

  if (isPoster) {
    return (
      <section className="py-20 bg-[#f5ede0]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="mb-12 max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#F26B4E] mb-4">
              V.
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-black text-[#1a365d] leading-[1.05] mb-4 tracking-tight">
              The honest answers.
            </h2>
            <p className="font-serif italic text-lg text-[#1a365d]/80 leading-relaxed">
              Everything you might be wondering, answered straight.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-[#1a365d]/15 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-[#f5ede0]/50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif italic text-[#1a365d] text-lg leading-snug">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-5 h-5 text-[#F26B4E] flex-shrink-0 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`px-6 overflow-hidden transition-all duration-300 ${
                      isOpen ? "pb-6 max-h-96" : "max-h-0"
                    }`}
                  >
                    <p className="font-serif text-[#1a365d]/90 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
        </div>

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
