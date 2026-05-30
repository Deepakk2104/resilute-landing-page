import Image from "next/image";
import JoinWaitlistButton from "./JoinWaitlistButton";

export default function BusinessGrowthSection() {
  return (
    <section className="px-4 py-10">
      <div className="relative overflow-hidden rounded-[42px]">

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
        <div className="absolute inset-0 flex flex-col items-center text-center">

          {/* LABEL */}
          <p className="mt-[34px] flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
            <span>✦</span>
            FOR BUSINESS OWNERS
          </p>

          {/* HEADING */}
        <h2 className="mt-6 pb-2 text-center text-[72px] font-medium leading-[1.16] tracking-[-0.055em]">
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
          <div className="mt-8">
            <JoinWaitlistButton />
          </div>

          {/* ROBOT */}
          <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2">
  <Image
    src="/images/business-growth.png"
    alt="Business Growth Robot"
    width={1800}
    height={900}
    priority
    className="w-[760px] object-contain"
  />
</div>

        </div>
      </div>
    </section>
  );
}