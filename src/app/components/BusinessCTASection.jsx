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
           
            <button
      className="
        group
        mt-8
        flex
        h-[45px]
        items-center
        gap-2
        rounded-full
        bg-[linear-gradient(90.76deg,#2350AD_0.11%,#719AEF_99.89%)]

        pl-5
        pr-2

        text-[15px]
        font-semibold
        text-white

        shadow-[0_6px_18px_rgba(35,80,173,0.18)]

        transition-all
        duration-300

        hover:-translate-y-1
        hover:scale-[1.03]
        hover:brightness-110
        hover:shadow-[0_12px_30px_rgba(35,80,173,0.35)]

        active:scale-[0.98]

        md:mt-10
        md:text-[16px]
      "
    >
      Request Demo

      <span
        className="
          flex
          h-[32px]
          w-[32px]
          items-center
          justify-center
          rounded-full
          bg-white
          text-[20px]
          text-[#2350AD]

          transition-all
          duration-300

          group-hover:translate-x-1
          group-hover:scale-110
        "
      >
        →
      </span>
    </button>

          </div>

        </div>
      </div>
    </section>
  );
}