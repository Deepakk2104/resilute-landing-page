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

        {/* FIGMA BACKGROUND EXPORT */}
        <Image
          src="/images/about-faq-bg.jpg"
          alt=""
          width={1600}
          height={1100}
          priority
          className="h-auto w-full"
        />

        {/* CONTENT */}
        <div className="absolute inset-0">

          {/* HEADING */}
          <h2
            className="
              absolute
              left-[53%]
              top-[22%]
              text-[52px]
              font-medium
              tracking-[-0.04em]
              text-black
            "
          >
            Frequently asked questions
          </h2>

          {/* FAQS */}
          <div className="absolute left-[53%] top-[35%] w-[42%] space-y-6">

            {faqData.map((faq, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  className={`
                    overflow-hidden
                    rounded-[18px]
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "bg-[#18AEF5]"
                        : "bg-white shadow-[0_20px_40px_rgba(0,0,0,0.06)]"
                    }
                  `}
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
                      px-8
                      py-8
                      text-left
                    "
                  >
                    <h3
                      className={`
                        text-[22px]
                        font-medium
                        leading-[1.1]
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
                      className={`
                        text-[18px]
                        transition-transform
                        duration-300
                        ${
                          isActive
                            ? "rotate-0 text-white"
                            : "rotate-180 text-[#1D1D1D]"
                        }
                      `}
                    />
                  </button>

                  <div
                    className={`
                      grid
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="
                          px-8
                          pb-8
                          text-[14px]
                          leading-[1.5]
                          text-white
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
    </section>
  );
}