import Image from "next/image";
import JoinWaitlistButton from "./JoinWaitlistButton";

export default function BuildTrust() {
  return (
    <section className="section-padding !pb-16 !pt-10 md:!pb-20">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#f5f0ff] via-[#f0f4ff] to-[#fce7f3] px-6 py-16 md:px-12 md:py-20">
          <div className="pointer-events-none absolute -left-32 top-0 hidden h-[420px] w-[420px] overflow-hidden opacity-60 lg:block">
            <Image
              src="/images/LooperGroup.png"
              alt=""
              fill
              className="object-cover object-[25%_40%]"
              sizes="420px"
            />
          </div>
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-[360px] w-[360px] overflow-hidden opacity-50">
            <Image
              src="/images/LooperGroup.png"
              alt=""
              fill
              className="object-cover object-[80%_60%]"
              sizes="360px"
            />
          </div>

          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative flex items-center justify-center lg:justify-start">
              <Image
                src="/images/build.png"
                alt="Resilute robot"
                width={520}
                height={520}
                className="relative z-10 w-full max-w-[460px] object-contain transition-transform duration-500 hover:scale-[1.02] lg:max-w-[520px]"
              />
            </div>

            <div className="max-w-[560px] lg:justify-self-end">
              <h2 className="text-[36px] font-bold leading-[1.12] tracking-tight text-[#1a1a1a] md:text-[48px] lg:text-[56px]">
                Build trust from{" "}
                <span className="text-[#4470C1]">realworld activity</span>
              </h2>
              <p className="mt-6 text-[16px] leading-relaxed text-[#555555] md:text-[18px]">
                Join early access and be part of a new standard for verified
                interactions.
              </p>
              <JoinWaitlistButton className="mt-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
