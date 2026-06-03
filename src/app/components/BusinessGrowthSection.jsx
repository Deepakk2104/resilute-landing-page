import Image from "next/image";
import JoinWaitlistButton from "./JoinWaitlistButton";

export default function BusinessGrowthSection() {
  return (
    <section className="px-4 py-10 md:py-14">
      <div className="relative overflow-visible rounded-[42px]">

        {/* FIGMA BACKGROUND EXPORT */}
        <Image
          src="/images/buisness-growth-bg.png"
          alt=""
          width={1600}
          height={1000}
          priority
          className="h-auto w-full"
        />

        {/* CONTENT */}
        <div className="absolute inset-0 z-10 flex flex-col items-center text-center px-4">

          {/* LABEL */}
          <p className="mt-[34px] flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
            <span>✦</span>
            FOR BUSINESS OWNERS
          </p>

          {/* HEADING */}
       <h2 className="mt-4 pb-2 text-center text-[34px] font-medium leading-[1.1] tracking-[-0.055em] sm:text-[42px] md:mt-6 md:text-[56px] lg:text-[72px]">
  <span className="block text-white">
    Turn real-world engagement
  </span>

  <span
    className="
      block
      bg-[linear-gradient(90deg,#89A5ED_0%,#FFFFFF_100%)]
      bg-clip-text
      text-transparent
    "
  >
    into measurable growth
  </span>
</h2>

          {/* BUTTON */}
        {/* BUTTON */}
<div className="relative z-20 mt-4 md:mt-0 mb-8">
  <JoinWaitlistButton />
</div>

{/* ROBOT */}
<div
  className="
    absolute
    left-1/2
    -translate-x-1/2
    z-0

    bottom-[-30px]
    sm:bottom-[-50px]
    md:bottom-[-70px]
    lg:bottom-[-90px]
    xl:bottom-[-110px]

    w-[420px]
    sm:w-[600px]
    md:w-[760px]
    lg:w-[900px]
    xl:w-[1050px]
  "
>
  <Image
    src="/images/business-growth.png"
    alt="Business Growth Robot"
    width={2000}
    height={1200}
    priority
    className="h-auto w-full object-contain"
  />
</div>

        </div>
      </div>
    </section>
  );
}