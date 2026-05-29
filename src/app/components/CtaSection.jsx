import Image from "next/image";
import JoinWaitlistButton from "./JoinWaitlistButton";

export default function CtaSection() {
  return (
    <section id="cta" className="section-padding bg-white">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-[41px]">
          {/* Exported Figma Background */}
          <Image
            src="/images/cta-bg.png"
            alt=""
            width={1600}
            height={1000}
            className="h-auto w-full"
            priority
          />

          {/* Content Overlay */}
          <div className="absolute inset-0">
            {/* Heading */}
            <div className="absolute left-[6%] top-[13%]">
              <h2 className="max-w-[420px] text-[44px] font-bold leading-[0.92] tracking-[-0.04em] text-[#3F3F3F] md:text-[54px] lg:text-[60px]">
                We&apos;re not
                <br />
                tracking clicks,
              </h2>

              <h2 className="mt-8 max-w-[420px] text-[44px] font-bold leading-[0.92] tracking-[-0.04em] text-[#4470C1] md:text-[54px] lg:text-[60px]">
                We&apos;re verifying
                <br />
                reality.
              </h2>

              <JoinWaitlistButton className="mt-10" />
            </div>

            {/* Bottom Text */}
            <p className="absolute bottom-[8%] left-[7%] text-[13px] font-normal text-[#3F3F3F] md:text-[14px]">
              Turn real-world interactions into trusted, portable reputation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}