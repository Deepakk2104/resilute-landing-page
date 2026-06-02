import Image from "next/image";
import JoinWaitlistButton from "./JoinWaitlistButton";

export default function BusinessCTASection() {
  return (
    <section className="px-4 py-10">
      <div className="relative overflow-hidden rounded-[42px]">

        {/* FIGMA BACKGROUND EXPORT */}
        <Image
          src="/images/business-cta-bg.jpg"
          alt=""
          width={1600}
          height={900}
          priority
          className="h-auto w-full"
        />

        {/* CONTENT */}
        <div className="absolute inset-0">

          <div className="absolute left-[4.8%] top-[14%] max-w-[620px]">

            {/* HEADING */}
            <h2 className="leading-[0.92] tracking-[-0.065em]">

              <div className="text-[52px] font-medium text-[#2F2F2F]">
                Start
                <span
                  className="
                    bg-[linear-gradient(90deg,#454545_0%,#A3A3A3_100%)]
                    bg-clip-text
                    text-transparent
                  "
                >
                  {" "}measuring
                </span>
              </div>

              <div className="text-[52px] font-medium text-[#2F2F2F]">
                what actually
              </div>

              <div
                className="
                  mt-2
                  bg-[linear-gradient(90deg,#4D73E6_0%,#2F57C5_55%,#7E99DE_100%)]
                  bg-clip-text
                  text-[52px]
                  font-medium
                  text-transparent
                "
              >
                Drives your business
              </div>

            </h2>

            {/* DESCRIPTION */}
            <p className="mt-10 max-w-[560px] text-[16px] leading-[1.8] text-[#4B4B4B]">
              Track verified engagement and make smarter decisions with
              real-world data.
            </p>

            {/* BUTTON */}
            <div className="mt-10">
              <JoinWaitlistButton text="Request Demo" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}