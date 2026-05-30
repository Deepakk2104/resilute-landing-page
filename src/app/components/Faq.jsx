"use client";

import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Who can use Resilute?",
    answer:
      "Resilute is built for both individuals and businesses—anyone who wants to track and benefit from real-world engagement.",
  },
  {
    question: "How does Resilute verify activity?",
    answer:
      "Resilute confirms visits and interactions using secure multi-layer signals, including location, timing, and transaction data—so reputation reflects real activity, not assumptions.",
  },
  {
    question: "What is Resilute?",
    answer:
      "Resilute is infrastructure for real-world reputation: it verifies interactions, builds portable trust scores, and helps users and merchants unlock value from genuine participation.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section-padding grid-bg">
      <div className="section-container grid items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <div className="relative flex items-center justify-center lg:justify-start">
          <div className="pointer-events-none absolute -top-2 left-[18%] z-20 text-[44px] font-bold text-[#38bdf8] md:text-[52px]">
            ?
          </div>
          <div className="pointer-events-none absolute top-6 right-[22%] z-20 text-[30px] font-bold text-[#60a5fa] md:text-[36px]">
            ?
          </div>
          <div className="pointer-events-none absolute top-0 right-[38%] z-20 text-[22px] font-bold text-[#93c5fd] md:text-[26px]">
            ?
          </div>

          <Image
            src="/images/faq.png"
            alt="Resilute robot"
            width={680}
            height={680}
            className="relative z-10 w-full max-w-[420px] object-contain transition-transform duration-500 "
          />
        </div>

        <div>
          <h2 className="text-[32px] font-bold leading-tight text-black md:text-[40px] lg:text-[44px]">
            Frequently asked questions
          </h2>

          <div className="mt-8 flex flex-col gap-4 md:mt-10 md:gap-5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl transition-all duration-300 md:rounded-[20px] ${
                    isOpen
                      ? "bg-[#38bdf8] text-white shadow-lg"
                      : "bg-white text-black shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className={`flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors md:px-8 md:py-6 ${
                      !isOpen ? "hover:bg-[#f9fafb]" : ""
                    }`}
                    aria-expanded={isOpen}
                  >
                    <span className="text-[17px] font-bold md:text-[18px]">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp
                        className="shrink-0"
                        size={22}
                        strokeWidth={2.5}
                      />
                    ) : (
                      <ChevronDown
                        className="shrink-0"
                        size={22}
                        strokeWidth={2.5}
                      />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 md:px-8 md:pb-7">
                      <p className="text-[15px] leading-relaxed text-white/95 md:text-[16px]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
