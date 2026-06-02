import Image from "next/image";


export default function AboutFinalSection() {
  return (
    <section className="px-4 py-10">
      <div className="relative overflow-hidden rounded-[42px]">

        {/* FIGMA BACKGROUND EXPORT */}
        <Image
  src="/images/about-final-bg.jpg"
  alt=""
  width={1600}
  height={900}
  priority
  className="h-auto w-full object-cover"
/>

        {/* CONTENT */}
       {/* CONTENT */}
<div
  className="
    absolute inset-0
    flex items-center
    px-6
    sm:px-8
    md:px-12
    lg:px-16
  "
>
  <div className="max-w-[720px]">

    {/* HEADING */}
    <h2 className="leading-[0.92] tracking-[-0.06em]">

      <div
        className="
          text-[32px]
          font-medium
          text-[#2F2F2F]

          sm:text-[40px]
          md:text-[48px]
          lg:text-[58px]
        "
      >
        Build with
      </div>

      <div
        className="
          bg-[linear-gradient(90deg,#2F2F2F_0%,#8D8D8D_100%)]
          bg-clip-text
          text-[32px]
          font-medium
          text-transparent
          leading-[0.92]

          sm:text-[40px]
          md:text-[48px]
          lg:text-[58px]
        "
      >
        real-world
      </div>

      <div
        className="
          bg-[linear-gradient(90deg,#4D73E6_0%,#335FCB_55%,#4D73E6_100%)]
          bg-clip-text
          text-[32px]
          font-medium
          text-transparent
          leading-[0.92]

          sm:text-[40px]
          md:text-[48px]
          lg:text-[58px]
        "
      >
        proof
      </div>

    </h2>

    {/* DESCRIPTION */}
    <p
      className="
        mt-6
        max-w-[500px]
        text-[14px]
        leading-[1.7]
        text-[#4B4B4B]

        md:mt-8
        md:text-[16px]
      "
    >
      Whether you&apos;re a business, partner, or just curious
      we&apos;d love to connect.
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
      Get early access

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