import Image from "next/image";

export default function WhyExistsCTASection() {
  return (
    <section className="px-4 py-10">
      <div className="relative overflow-hidden rounded-[42px]">

        {/* FIGMA BACKGROUND EXPORT */}
        <Image
          src="/images/why-cta-bg.jpg"
          alt=""
          width={1600}
          height={700}
          priority
          className="h-auto w-full"
        />

        {/* CONTENT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">

          {/* HEADING */}
          <h2 className="max-w-[920px] text-[48px] font-medium leading-[0.95] tracking-[-0.05em] text-[#2F2F2F] md:text-[76px]">
            Ready to see how it works
            <br />

            <span className="bg-[linear-gradient(90deg,#4A4A4A_0%,#8D8D8D_100%)] bg-clip-text text-transparent">
              in the
            </span>

            <span className="text-[#3E67C5]">
              {" "}real world?
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-8 text-[15px] font-normal text-[#444444] md:text-[16px]">
            See how real-world verification actually works
          </p>

          {/* BUTTON */}
         <button
  className="
    mt-8
    flex
    h-[45px]
    items-center
    justify-center
    gap-2
    rounded-full
    bg-[linear-gradient(90.76deg,#2350AD_0.11%,#719AEF_99.89%)]

    pl-5
    pr-2

    text-[16px]
    font-semibold
    text-white

    transition-all
    duration-300

    hover:-translate-y-1
    hover:scale-[1.03]
    hover:brightness-110
    hover:shadow-[0_12px_30px_rgba(35,80,173,0.35)]

    active:scale-[0.98]
  "
>
  See it in action

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

      transition-transform
      duration-300

      group-hover:translate-x-1
    "
  >
    →
  </span>
</button>

        </div>
      </div>
    </section>
  );
}