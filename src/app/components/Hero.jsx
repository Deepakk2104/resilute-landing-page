import Image from "next/image";
import JoinWaitlistButton from "./JoinWaitlistButton";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-4 mt-2 overflow-hidden rounded-[39px]"
    >
      {/* FIGMA BACKGROUND */}
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* CONTENT */}
      <div className="relative z-10 flex h-[824px] flex-col items-center pt-[69px] text-center">
        
        {/* LABEL */}
        <p className="flex items-center gap-2 text-[16px] font-medium text-black">
          <span className="text-[#2350AD]">✦</span>
          Business Social Mining
        </p>

        {/* HEADING */}
      <h1 className="mt-2 max-w-[1300px] text-[96px] font-medium leading-[1] tracking-[-0.02em] text-black">
  Your presence is{" "}
  <span
    style={{
      background: "linear-gradient(to right, #1E3FA0 0%, #6B8DD6 60%, #A8B8E8 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      paddingRight: "0.25em",
      fontStyle: "italic"
    }}
  >
    proof
  </span>
</h1>

        {/* BUTTON */}
        <JoinWaitlistButton className="mt-[38px]" />
      </div>
    </section>
  );
}