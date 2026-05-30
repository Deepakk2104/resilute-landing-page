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
        {/* BACKGROUND */}
        <Image
          src="/images/faq-bg.png"
          alt=""
          fill
          priority
          className="object-cover"
        />

        {/* CONTENT */}
        <div className="relative z-10 grid min-h-[820px] items-center gap-8 px-10 py-14 md:px-14 lg:grid-cols-[46%_54%]">
          
          {/* LEFT SIDE */}
          <div className="relative h-full">
            <Image
              src="/images/faq-robot.png"
              alt="FAQ Robot"
              width={650}
              height={850}
              priority
              className="
                absolute
                bottom-0
                left-[-40px]
                w-[620px]
                max-w-none
                object-contain
              "
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="max-w-[760px]">
            <h2 className="text-[48px] font-medium leading-[0.95] tracking-[-0.05em] text-black md:text-[72px]">
              Frequently asked
              <br />
              questions
            </h2>

            <div className="mt-12 space-y-6">
              {faqData.map((faq, index) => {
                const isActive = activeIndex === index;

                return (
                  <div
                    key={index}
                    className={`overflow-hidden rounded-[28px] shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-300 ${
                      isActive
                        ? "bg-[#18AEF5] text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    <button
                      onClick={() =>
                        setActiveIndex(isActive ? null : index)
                      }
                      className="flex w-full items-center justify-between px-8 py-8 text-left"
                    >
                      <h3 className="max-w-[520px] text-[24px] font-semibold leading-[1.1] md:text-[28px]">
                        {faq.question}
                      </h3>

                      <FaChevronUp
                        className={`text-xl transition-transform duration-300 ${
                          isActive ? "rotate-0" : "rotate-180"
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${
                        isActive
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p
                          className={`px-8 pb-8 text-[16px] leading-relaxed ${
                            isActive
                              ? "text-white/90"
                              : "text-[#666666]"
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