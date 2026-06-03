import Image from "next/image";
import JoinWaitlistButton from "./JoinWaitlistButton";

export default function BuildTrust() {
  return (
    <section className="section-padding !pt-10 !pb-16 md:!pb-20">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-[40px]">

          {/* EXPORTED FIGMA SECTION */}
          <Image
            src="/images/build-trust-bg2.jpg"
            alt="trust"
            width={1230}
            height={560}
            priority
            className="h-auto w-full"
          />

          {/* TEXT OVERLAY */}
         {/* TEXT OVERLAY */}
<div className="absolute inset-0 flex items-center">
  <div
    className="
      ml-auto
      mr-[4%]
      max-w-[640px]

      lg:mr-[6%]
      xl:mr-[8%]
    "
  >
    <h2 className="leading-[0.92] tracking-[-0.065em]">
      <span
        className="
          bg-[linear-gradient(90deg,#1F1F1F_0%,#6E6E6E_100%)]
          bg-clip-text
          text-[34px]
          font-medium
          text-transparent

          sm:text-[42px]
          md:text-[52px]
          lg:text-[60px]
          xl:text-[68px]
        "
      >
        Build trust from
      </span>

      <br />

      <span
        className="
          bg-[linear-gradient(90deg,#4F76DA_0%,#2F5FC8_100%)]
          bg-clip-text
          text-[38px]
          font-medium
          text-transparent

          sm:text-[46px]
          md:text-[56px]
          lg:text-[64px]
          xl:text-[72px]
        "
      >
        real world activity
      </span>
    </h2>

    <p
      className="
        mt-4
        max-w-[390px]
        text-[13px]
        leading-[1.8]
        text-[#3F3F3F]

        md:mt-6
        md:text-[15px]
        md:leading-[2.2]
      "
    >
      Join early access and be part of a new standard for
      verified interactions.
    </p>

    <div className="mt-5 md:mt-8">
      <JoinWaitlistButton />
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}