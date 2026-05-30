import Image from "next/image";
import JoinWaitlistButton from "./JoinWaitlistButton";

export default function HowHero() {
  return (
    <section className="px-4 pt-4">
      <div className="relative overflow-hidden rounded-[39px]">

        {/* FIGMA BACKGROUND EXPORT */}
        <Image
          src="/images/how-hero-bg.jpg"
          alt=""
          width={1600}
          height={900}
          priority
          className="h-auto w-full"
        />

        {/* CONTENT */}
        <div className="absolute inset-0">

          <div className="absolute left-[48px] top-[82px]">

            {/* LABEL */}
            <p className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.01em] text-[#111111]">
              <span className="text-[#4D73E6]">✦</span>
              HOW RESILUTE WORKS
            </p>

            {/* HEADING */}
            <h1 className="mt-8 leading-[0.9] tracking-[-0.08em]">

              <div className="text-[86px] mt-8 font-normal text-black">
                Real places.
              </div>

              <div className="text-[86px] mt-12 font-normal text-black">
                Real people.
              </div>

              <div
                className="
                  mt-12
                  text-[82px]
                  font-normal
                  italic
                  bg-[linear-gradient(90deg,#3560C8_0%,#A8B8E5_100%)]
                  bg-clip-text
                  text-transparent
                "
              >
                Verified.
              </div>

            </h1>

            {/* BUTTON */}
            <div className="mt-15">
              <JoinWaitlistButton />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}