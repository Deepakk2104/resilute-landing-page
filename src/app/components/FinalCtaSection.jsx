import Image from "next/image";

export default function FinalCtaSection() {
  return (
    <section className="px-4 py-10">
      <div className="relative overflow-hidden rounded-[42px]">

        {/* FIGMA EXPORT */}
        <Image
          src="/images/final-cta-bg.jpg"
          alt=""
          width={1600}
          height={800}
          priority
          className="h-auto w-full"
        />

        {/* CONTENT */}
        <div className="absolute inset-0">

          <div className="absolute left-[72px] top-1/2 -translate-y-1/2">

            {/* HEADING */}
            <h2 className="max-w-[680px] leading-[0.95] tracking-[-0.06em]">

              <div className="bg-[linear-gradient(90deg,#1F1F1F_0%,#7E7E7E_100%)] bg-clip-text text-[72px] font-medium text-transparent">
                Ready to see how it works
              </div>

              <div className="mt-1 text-[72px] font-medium">
                <span className="bg-[linear-gradient(90deg,#1F1F1F_0%,#7E7E7E_100%)] bg-clip-text text-transparent">
                  in the
                </span>

                <span className="text-[#3E67C5]">
                  {" "}real world?
                </span>
              </div>

            </h2>

            {/* DESCRIPTION */}
            <p className="mt-8 max-w-[620px] text-[16px] leading-relaxed text-[#4A4A4A]">
              Explore how Resilute verifies activity, builds reputation,
              and creates value over time.
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