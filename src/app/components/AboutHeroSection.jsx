import Image from "next/image";

export default function AboutHeroSection() {
  return (
    <section className="px-4 py-6">
      <div className="relative overflow-hidden rounded-[42px]">

        {/* FIGMA BACKGROUND EXPORT */}
        <Image
          src="/images/about-hero-bg.jpg"
          alt=""
          width={1800}
          height={1200}
          priority
          className="h-auto w-full object-cover"
        />

        {/* CONTENT */}
        <div
          className="
            absolute inset-0
            flex flex-col items-center
            px-4
            pt-6
            sm:pt-8
            md:pt-10
            lg:pt-12
            text-center
          "
        >

          {/* LABEL */}
          <p className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[#111111]">
            <span className="text-[#4D73E6]">✦</span>
            ABOUT RESILUTE
          </p>

          {/* HEADING */}
         <h1
  className="
    mt-4
    md:mt-6
    leading-[1.2]
    tracking-[-0.065em]
    text-center
  "
>
  <div
    className="
      bg-[linear-gradient(90deg,#2F2F2F_0%,#707070_100%)]
      bg-clip-text
      text-transparent
      font-medium

      text-[34px]
      sm:text-[44px]
      md:text-[56px]
      lg:text-[68px]
      xl:text-[78px]
    "
  >
    Building the participation layer for the
  </div>

  <div
    className="
      mt-2
      bg-[linear-gradient(90deg,#4D73E6_0%,#7F9CE4_100%)]
      bg-clip-text
      text-transparent
      italic
      font-normal

      text-[42px]
      sm:text-[56px]
      md:text-[72px]
      lg:text-[88px]
      xl:text-[96px]
    "
  >
    Physical Economy
  </div>
</h1>

        </div>

      </div>
    </section>
  );
}