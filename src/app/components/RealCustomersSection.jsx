import Image from "next/image";
import JoinWaitlistButton from "./JoinWaitlistButton";

export default function RealCustomersSection() {
  return (
    <section className="px-4 py-10">
      <div className="relative overflow-hidden rounded-[42px]">

        {/* FIGMA EXPORT */}
        <Image
          src="/images/real-customers-section-bg.jpg"
          alt=""
          width={1600}
          height={900}
          priority
          className="h-auto w-full"
        />

        {/* CONTENT */}
        <div className="absolute inset-0">

          <div className="absolute right-[5%] top-[10%] max-w-[600px]">

            {/* HEADING */}
            <h2 className="leading-[0.92] tracking-[-0.06em]">

              <div className="text-[72px] font-medium text-[#2F2F2F]">
                We’re not
              </div>

              <div className="text-[72px] font-medium text-[#7A7A7A]">
                tracking clicks,
              </div>

              <div
                className="
                  mt-4
                  bg-[linear-gradient(90deg,#4B6FD8_0%,#2F57C5_100%)]
                  bg-clip-text
                  text-[72px]
                  font-medium
                  text-transparent
                "
              >
                We’re
              </div>

              <div
                className="
                  bg-[linear-gradient(90deg,#4B6FD8_0%,#2F57C5_100%)]
                  bg-clip-text
                  text-[72px]
                  font-medium
                  leading-[0.95]
                  text-transparent
                "
              >
                measuring real
              </div>

              <div
                className="
                  bg-[linear-gradient(90deg,#4B6FD8_0%,#2F57C5_100%)]
                  bg-clip-text
                  text-[72px]
                  font-medium
                  leading-[0.95]
                  text-transparent
                "
              >
                customers.
              </div>
            </h2>

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