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
          <div className="absolute inset-0 flex items-center">
            <div className="ml-[53%] max-w-[440px]">

              <h2 className="leading-[0.9] tracking-[-0.065em]">
  <span className="bg-[linear-gradient(90deg,#1F1F1F_0%,#6E6E6E_100%)] bg-clip-text text-[68px] font-medium text-transparent">
    Build trust from
  </span>

  <br />

  <span className="bg-[linear-gradient(90deg,#4F76DA_0%,#2F5FC8_100%)] bg-clip-text text-[68px] font-medium text-transparent">
    real world activity
  </span>
</h2>

              <p className="mt-8 max-w-[390px] text-[15px] leading-[2.2] text-[#3F3F3F]">
  Join early access and be part of a new standard for
  verified interactions.
</p>

              <JoinWaitlistButton className="mt-8" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}