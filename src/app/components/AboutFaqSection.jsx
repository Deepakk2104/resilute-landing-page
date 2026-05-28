"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa6";

const faqData = [
  {
    question: "What is Resilute?",
    answer:
      "Resilute is building a system to verify and measure real-world participation.",
  },
  {
    question: "Why does this matter?",
    answer:
      "Most real-world activity today is invisible online. Resilute creates proof of genuine participation that businesses and users can benefit from.",
  },
  {
    question: "Who is Resilute for?",
    answer:
      "Resilute is designed for both businesses and users who want trusted, measurable, and verified real-world engagement.",
  },
];

export default function AboutFaqSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="px-4 py-10">
      
      <div className="relative overflow-hidden rounded-[42px]">
        
        {/* BACKGROUND IMAGE */}
        <Image
          src="/images/faq-bg.png"
          alt=""
          fill
          className="object-cover"
          priority
        />

        {/* CONTENT */}
        <div className="relative z-10 grid min-h-[950px] items-center gap-16 px-8 py-16 md:px-14 lg:grid-cols-2">
          
          {/* LEFT SIDE */}
          <div className="relative flex items-end justify-center">
            
            <Image
              src="/images/faq-robot.png"
              alt="FAQ Robot"
              width={700}
              height={900}
              className="w-full max-w-[620px] object-contain"
              priority
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="max-w-[760px]">
            
            {/* HEADING */}
            <h2 className="text-[56px] font-medium leading-[0.95] tracking-[-0.05em] text-black md:text-[82px]">
              Frequently asked questions
            </h2>

            {/* FAQ LIST */}
            <div className="mt-14 space-y-6">
              
              {faqData.map((faq, index) => {
                const isActive = activeIndex === index;

                return (
                  <div
                    key={index}
                    className={`overflow-hidden rounded-[28px] transition-all duration-300 ${
                      isActive
                        ? "bg-[#18AEF5] text-white"
                        : "bg-white text-black shadow-[0_15px_40px_rgba(0,0,0,0.04)]"
                    }`}
                  >
                    <button
                      onClick={() =>
                        setActiveIndex(isActive ? null : index)
                      }
                      className="flex w-full items-center justify-between px-8 py-8 text-left"
                    >
                      <h3 className="max-w-[520px] text-[32px] font-semibold leading-[1.05]">
                        {faq.question}
                      </h3>

                      <FaChevronUp
                        className={`text-xl transition-transform duration-300 ${
                          isActive ? "rotate-0" : "rotate-180"
                        }`}
                      />
                    </button>

                    {/* ANSWER */}
                    <div
                      className={`grid transition-all duration-300 ${
                        isActive
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p
                          className={`px-8 pb-8 text-[20px] leading-relaxed ${
                            isActive
                              ? "text-white/90"
                              : "text-[#666]"
                          }`}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}