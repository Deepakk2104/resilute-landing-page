import Image from "next/image";
import JoinWaitlistButton from "./JoinWaitlistButton";

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
          className="h-auto w-full"
        />

        {/* CONTENT */}
        <div className="absolute inset-0">

          <div className="absolute left-[7%] top-[28%] max-w-[720px]">

            {/* HEADING */}
            <h2 className="leading-[0.92] tracking-[-0.06em]">

              <div className="text-[58px] font-medium text-[#2F2F2F]">
                Build with
              </div>

              <div
                className="
                  bg-[linear-gradient(90deg,#2F2F2F_0%,#8D8D8D_100%)]
                  bg-clip-text
                  text-[58px]
                  font-medium
                  text-transparent
                  leading-[0.92]
                "
              >
                real-world
              </div>

              <div
                className="
                  bg-[linear-gradient(90deg,#4D73E6_0%,#335FCB_55%,#4D73E6_100%)]
                  bg-clip-text
                  text-[58px]
                  font-medium
                  text-transparent
                  leading-[0.92]
                "
              >
                proof
              </div>

            </h2>

            {/* DESCRIPTION */}
            <p className="mt-8 max-w-[500px] text-[16px] leading-[1.7] text-[#4B4B4B]">
              Whether you&apos;re a business, partner, or just curious
              we&apos;d love to connect.
            </p>

            {/* BUTTON */}
            <button
  className="
    group
    mt-10
    flex
    h-[45px]
    items-center
    gap-2
    rounded-full
    bg-[linear-gradient(90.76deg,#2350AD_0.11%,#719AEF_99.89%)]

    pl-5
    pr-2

    text-[16px]
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