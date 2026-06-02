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
    pt-8
    sm:pt-10
    md:pt-12
    lg:pt-[42px]
    text-center
  "
>

          {/* LABEL */}
          <p className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[#111111]">
            <span className="text-[#4D73E6]">✦</span>
            ABOUT RESILUTE
          </p>

          {/* HEADING */}
         <h1 className="mt-4 md:mt-8 max-w-[1400px] leading-[1.18] tracking-[-0.065em]">

  <div
    className="
      bg-[linear-gradient(90deg,#2F2F2F_0%,#707070_100%)]
      bg-clip-text
      text-[28px]
      font-medium
      text-transparent

      sm:text-[40px]
      md:text-[56px]
      lg:text-[72px]
      xl:text-[86px]
    "
  >
    Building the participation layer
  </div>

  <div
    className="
      bg-[linear-gradient(90deg,#2F2F2F_0%,#707070_100%)]
      bg-clip-text
      text-[28px]
      font-medium
      text-transparent

      sm:text-[40px]
      md:text-[56px]
      lg:text-[72px]
      xl:text-[86px]
    "
  >
    for the
  </div>

  <div
    className="
      mt-1
      bg-[linear-gradient(90deg,#4D73E6_0%,#7F9CE4_100%)]
      bg-clip-text
      text-[32px]
      font-normal
      italic
      text-transparent

      sm:text-[46px]
      md:text-[64px]
      lg:text-[80px]
      xl:text-[92px]
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