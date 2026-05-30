import Image from "next/image";
import JoinWaitlistButton from "./JoinWaitlistButton";

export default function BuildTrust() {
  return (
    <section className="section-padding !pt-10 !pb-16 md:!pb-20">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-[40px]">

          {/* EXPORTED FIGMA SECTION */}
          <Image
            src="/images/build-trust-bg.jpg"
            alt=""
            width={1230}
            height={560}
            priority
            className="h-auto w-full"
          />

          {/* TEXT OVERLAY */}
          <div className="absolute inset-0 flex items-center">
            <div className="ml-[53%] max-w-[440px]">

              <h2 className="text-[58px] font-bold leading-[0.92] tracking-[-0.04em] text-[#2F2F2F]">
                Build trust from
                <br />
                <span className="text-[#4470C1]">
                  real world activity
                </span>
              </h2>

              <p className="mt-7 max-w-[360px] text-[16px] leading-[2] text-[#4B4B4B]">
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