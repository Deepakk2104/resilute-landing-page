"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa6";

const faqData = [
  {
    question: "How does Resilute verify real-world activity?",
    answer:
      "It combines multiple signals like location, proximity, and confirmed actions to validate real interactions.",
  },
  {
    question: "Can the system be manipulated?",
    answer:
      "The protocol uses layered verification systems to reduce spoofing and fake participation attempts.",
  },
  {
    question: "What is a reputation score?",
    answer:
      "A reputation score reflects consistent verified participation and grows through genuine activity.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="px-4 py-10">
      <div className="relative overflow-hidden rounded-[42px]">

        {/* FIGMA BACKGROUND EXPORT (contains robot already) */}
        <Image
  src="/images/faq-bg.png"
  alt=""
  width={1600}
  height={1100}
  priority
  className="h-auto w-full object-cover"
/>

        {/* FAQ CONTENT ONLY */}
        {/* FAQ CONTENT ONLY */}
<div
  className="
    absolute inset-0
    flex items-center justify-end

    px-4
    sm:px-6
    md:px-10
    lg:px-16
  "
>
  <div className="w-full max-w-[650px]">

    {/* HEADING */}
    <h2
      className="
        text-[28px]
        font-medium
        tracking-[-0.04em]
        text-black

        sm:text-[34px]
        md:text-[42px]
        lg:text-[52px]
      "
    >
      Frequently asked questions
    </h2>

    {/* FAQS */}
    <div
      className="
        mt-6
        w-full
        max-w-[640px]
        space-y-4
        md:space-y-6
      "
    >
      {faqData.map((faq, index) => {
        const isActive = activeIndex === index;

        return (
          <div
            key={index}
            className={`overflow-hidden rounded-[18px] transition-all duration-300 ${
              isActive
                ? "bg-[#18AEF5]"
                : "bg-white shadow-[0_20px_40px_rgba(0,0,0,0.06)]"
            }`}
          >
            <button
              onClick={() =>
                setActiveIndex(isActive ? null : index)
              }
              className="
                flex
                w-full
                items-center
                justify-between

                px-5
                py-5

                md:px-8
                md:py-7

                text-left
              "
            >
              <h3
                className={`font-medium leading-[1.2]

                  text-[16px]
                  md:text-[18px]

                  ${
                    isActive
                      ? "text-white"
                      : "text-[#1D1D1D]"
                  }
                `}
              >
                {faq.question}
              </h3>

              <FaChevronUp
                className={`shrink-0 transition-transform duration-300

                  text-[16px]
                  md:text-[18px]

                  ${
                    isActive
                      ? "rotate-0 text-white"
                      : "rotate-180 text-[#1D1D1D]"
                  }
                `}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ${
                isActive
                  ? "grid-rows-[1fr]"
                  : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p
                  className="
                    px-5
                    pb-5

                    text-[13px]
                    leading-[1.6]
                    text-white

                    md:px-8
                    md:pb-7
                  "
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