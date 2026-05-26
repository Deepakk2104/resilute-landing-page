import Image from "next/image";
import JoinWaitlistButton from "./JoinWaitlistButton";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-4 mb-2 mt-2 min-h-[calc(100svh-96px)] overflow-hidden rounded-[40px] bg-[#f4f7fc]"
    >
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        priority
        className="scale-110 object-cover object-center opacity-75 blur-xl"
        sizes="100vw"
      />

      <div className="relative z-10 flex min-h-[calc(100svh-96px)] flex-col items-center px-6 pb-0 pt-14 text-center md:pt-20">
        <p className="flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.14em] text-black md:text-sm">
          <span aria-hidden>✦</span>
          Business Social Mining
        </p>

        <h1 className="mt-8 max-w-[1100px] text-[52px] font-semibold leading-[0.95] tracking-[-0.04em] text-black sm:text-[72px] md:text-[88px] lg:text-[96px]">
          Your presence is{" "}
          <span className="italic font-medium text-[#5A7CEB]">proof</span>
        </h1>

        <JoinWaitlistButton className="mt-10" />

        <div className="relative mt-auto flex w-full max-w-[820px] flex-1 items-end justify-center">
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-[30%] left-1/2 h-[260px] w-[260px] -translate-x-1/2 rounded-full border border-[#e9d5ff]/70 md:h-[340px] md:w-[340px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-[24%] left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full border border-[#ddd6fe]/60 md:h-[460px] md:w-[460px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-[18%] left-1/2 h-[460px] w-[460px] -translate-x-1/2 rounded-full border border-[#c4b5fd]/50 md:h-[580px] md:w-[580px]"
          />

          <Image
            src="/images/robot.png"
            alt="Resilute robot"
            width={720}
            height={720}
            className="relative z-10 w-full max-w-[min(92vw,720px)] object-contain object-bottom transition-transform duration-500 hover:scale-[1.02]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
