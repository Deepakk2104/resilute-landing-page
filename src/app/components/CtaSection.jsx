import Image from "next/image";
import JoinWaitlistButton from "./JoinWaitlistButton";

export default function CtaSection() {
  return (
    <section
      id="cta"
      className="section-padding relative overflow-hidden bg-white"
    >
      <div className="pointer-events-none absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/4 rounded-full bg-[#93C5FD] opacity-20 blur-[120px]" />

      <div className="section-container relative z-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="flex min-h-[380px] flex-col justify-between lg:min-h-[480px]">
          <div>
            <h2 className="text-[36px] font-bold leading-[1.1] tracking-tight text-[#2D2D2D] md:text-[48px] lg:text-[56px]">
              We&apos;re not tracking clicks,
              <br />
              <span className="text-[#4470C1]">We&apos;re verifying reality.</span>
            </h2>
            <JoinWaitlistButton className="mt-10" />
          </div>
          <p className="mt-12 text-[14px] leading-relaxed text-[#9ca3af] md:mt-0 md:text-[15px]">
            Turn real-world interactions into trusted, portable reputation.
          </p>
        </div>

        <div className="relative flex items-center justify-center lg:justify-end">
          <Image
            src="/images/robot.png"
            alt="Resilute robot"
            width={560}
            height={560}
            className="relative z-10 w-full max-w-[480px] object-contain transition-transform duration-500 hover:scale-[1.02] lg:max-w-[560px]"
          />
        </div>
      </div>
    </section>
  );
}
