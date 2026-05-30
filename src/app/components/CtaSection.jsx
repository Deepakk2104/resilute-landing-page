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
              <h2 className="max-w-[430px] text-[60px] font-medium leading-[0.9] tracking-[-0.065em]">
  <span className="text-[#222222]">
    We&apos;re not
  </span>

  <br />

  <span className="bg-[linear-gradient(90deg,#2F2F2F_0%,#8A8A8A_100%)] bg-clip-text text-transparent">
    tracking clicks,
  </span>
</h2>

              <h2 className="mt-15 max-w-[430px] text-[60px] font-medium leading-[0.9] tracking-[-0.065em]">
  <span className="bg-[linear-gradient(90deg,#4C73D8_0%,#2F5FC8_100%)] bg-clip-text text-transparent">
    We&apos;re verifying
    <br />
    reality.
  </span>
</h2>

              <JoinWaitlistButton className="mt-18" />
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