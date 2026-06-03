import { ArrowRight, Check, Store, User } from "lucide-react";
import Image from "next/image";

const bottomFeatures = [
  {
    title: "Verified Activity",
    description: "Every visit and interaction is securely verified.",
  },
  {
    title: "Verified Footfall",
    description: "Track real visits, not fake impressions.",
  },
  {
    title: "Earn Real Value",
    description: "Unlock rewards and opportunities from participation.",
  },
];

export default function Audience() {
  return (
    <section id="audience" className=" font-inter">
      <div className="section-container max-w-7xl mx-auto px-4">
        <div
          className="overflow-hidden rounded-[40px] px-6 py-16 md:px-12 md:py-20"
          style={{
            backgroundColor: "#0a0a0a",
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
          }}
        >
          {/* Section Header */}
          <header className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white md:text-[12px]">
              Who Resilute is for
            </p>
            <h2 className="mx-auto mt-3 max-w-[1200px] text-[32px] semi-bold tracking-tight text-white md:text-[42px] lg:text-[48px]">
              Built for both sides of every interaction
            </h2>
          </header>

          {/* Cards Grid Container */}
          <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 md:gap-8 items-start justify-center max-w-[1100px] mx-auto">
            
            {/* FIRST CARD: CUSTOMERS (Mapped exactly to your Figma dimensions & layout) */}
            <article
  className="
    relative
    overflow-hidden
    rounded-[16px]
    p-10
    flex
    flex-col
    justify-between
    select-none
    border
    border-white/[0.03]
    w-full
    max-w-[522px]
    min-h-[443px]
  "
  style={{
    background: "#000000",
  }}
>
              
              {/* Figma: Ellipse 2464 (Bottom-Left Glow) */}
              <div 
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: "384px",
                  height: "215px",
                  left: "-227px",
                  top: "277px",
                  background: "#2350AD",
                  filter: "blur(90.05px)",
                }}
              />
              
              {/* Figma: Ellipse 2465 (Top-Right Glow) */}
              <div 
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: "384px",
                  height: "215px",
                  left: "276px",
                  top: "-108px",
                  background: "#2350AD",
                  filter: "blur(90.05px)",
                }}
              />

              {/* Content Context Layer */}
              <div className="relative z-10 flex flex-col h-full pl-2">
                {/* Figma: FOR CUSTOMERS */}
                <p className="font-semibold text-[12px] uppercase bg-gradient-to-tr from-white/0 via-white to-white bg-clip-text text-transparent tracking-[1.44px] leading-[16px]">
                  For Customers
                </p>

                {/* Figma: cf (Icon Wrapper) */}
                <div className="mt-6">
  <img
    src="/images/cf.png"
    alt="Customer"
    className="h-[84px] w-[84px] object-contain"
  />
</div>

                {/* Figma: Title with Linear Text Clip Gradient */}
                <h3 className="mt-8 font-bold text-[24px] bg-gradient-to-tr from-white/20 via-white to-white bg-clip-text text-transparent max-w-[406px] leading-[30px]">
                  Build a reputation that follows you.
                </h3>

                {/* Figma: Description Block */}
                <p className="mt-4 text-[18px] text-white/80 font-normal max-w-[380px] leading-[29px]">
                  Every verified visit and purchase builds your reputation score across participating merchants.
                </p>

                {/* Figma: Frame 1618874019 (Button) */}
               <button
  type="button"
  className="group mt-8 flex items-center justify-center gap-[10px] bg-gradient-to-r from-[#2350AD] to-[#719AEF] rounded-[10px] w-full max-w-[402px] h-[51px] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:brightness-110 active:scale-[0.99]"
>
  <span className="text-white font-semibold text-[16px] leading-[24px]">
    Start building reputation
  </span>
  <ArrowRight
    size={16}
    className="text-white transition-transform duration-300 group-hover:translate-x-1"
    strokeWidth={2.5}
  />
</button>
              </div>
            </article>

            {/* SECOND CARD: MERCHANTS (Parity Layout with Inter font updates) */}
      {/*  <article
  className="relative overflow-hidden rounded-[16px] p-10 flex flex-col justify-between w-full max-w-[522px] min-h-[443px]"
  style={{
    background: "#F8F4FF",
  }}
>
  <div
    className="absolute inset-0"
    style={{
      background: "#B557FA",
      opacity: 0.18,
    }}
  />

  
  <div
    className="absolute pointer-events-none"
    style={{
      width: "520px",
      height: "520px",
      left: "-110px",
      top: "-130px",
      background: "#B557FA",
      filter: "blur(128px)",
      opacity: 0.55,
    }}
  />


  <div
    className="absolute pointer-events-none"
    style={{
      width: "420px",
      height: "420px",
      left: "80px",
      top: "20px",
      background: "#FFFFFF",
      filter: "blur(50px)",
      opacity: 0.9,
    }}
  />

  <div
    className="absolute pointer-events-none"
    style={{
      width: "384px",
      height: "215px",
      left: "365px",
      top: "277px",
      background: "#2350AD",
      filter: "blur(90px)",
    }}
  />


  <div
    className="absolute pointer-events-none"
    style={{
      width: "384px",
      height: "215px",
      left: "-138px",
      top: "-108px",
      background: "#2350AD",
      filter: "blur(90px)",
    }}
  />
  

 
  <div className="relative z-10 flex flex-col h-full justify-between items-start">

  
    <div className="w-full">
     
      <p className="text-[12px] font-semibold uppercase tracking-[1.44px] text-white">
        FOR MERCHANTS
      </p>

    
      <div className="mt-5">
        <img
          src="/images/cfc.png"
          alt="Merchant"
          className="h-[84px] w-[84px] object-contain"
        />
      </div>

    
      <h3 className="mt-7 font-bold text-[28px] text-black max-w-[420px] tracking-[-0.5px] leading-[34px]">
        Prove your marketing is working.
      </h3>

     
      <p className="mt-3 text-[16px] text-[#4b5563] font-medium max-w-[400px] leading-[26px]">
        Track verified footfall, confirmed purchases, and real customer engagement.
      </p>
    </div>

    <button
      type="button"
      className="group mt-8 flex items-center justify-center gap-[8px] rounded-[14px] w-full h-[54px] shadow-md shadow-blue-600/20 text-white font-medium text-[16px] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:brightness-110 hover:shadow-lg hover:shadow-blue-500/30 active:scale-[0.99]"
      style={{
        background: "linear-gradient(90.76deg, #2350AD 0.11%, #719AEF 99.89%)",
      }}
    >
      <span>Explore merchant tools</span>
      <ArrowRight
        size={18}
        strokeWidth={2.5}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </button>

  </div>
</article> */}
<article className="relative overflow-hidden rounded-[16px] w-full max-w-[522px] min-h-[443px]">

  {/* BACKGROUND PNG */}
  <Image
    src="/images/card.png"
    alt=""
    fill
    className="object-cover"
  />

  {/* CONTENT */}
  <div className="relative z-10 flex h-full min-h-[443px] flex-col justify-between p-10">

    {/* TOP CONTENT */}
    <div>

      {/* SUBTITLE */}
      <p className="text-[12px] font-semibold uppercase tracking-[1.44px] text-white">
        FOR MERCHANTS
      </p>

      {/* ICON */}
      <div className="mt-5">
        <img
          src="/images/cfc.png"
          alt="Merchant"
          className="h-[84px] w-[84px] object-contain"
        />
      </div>

      {/* HEADING */}
      <h3 className="mt-7 max-w-[420px] text-[28px] font-bold leading-[34px] tracking-[-0.5px] text-black">
        Prove your marketing is working.
      </h3>

      {/* DESCRIPTION */}
      <p className="mt-3 max-w-[400px] text-[16px] font-medium leading-[26px] text-[#4B5563]">
        Track verified footfall, confirmed purchases, and real customer
        engagement.
      </p>

    </div>

    {/* BUTTON */}
    <button
      type="button"
      className="
        group
        mt-8
        flex
        h-[54px]
        w-full
        items-center
        justify-center
        gap-2
        rounded-[14px]

        text-[16px]
        font-medium
        text-white

        shadow-md
        shadow-blue-600/20

        transition-all
        duration-300

        hover:-translate-y-1
        hover:scale-[1.02]
        hover:brightness-110
        hover:shadow-lg
        hover:shadow-blue-500/30

        active:scale-[0.99]
      "
      style={{
        background:
          "linear-gradient(90.76deg,#2350AD 0.11%,#719AEF 99.89%)",
      }}
    >
      <span>Explore merchant tools</span>

      <ArrowRight
        size={18}
        strokeWidth={2.5}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </button>

  </div>
</article>

          </div>

          {/* Bottom Features List Segment */}
          <div className="mt-16 grid gap-8 border-t border-white/[0.06] pt-12 md:grid-cols-3 md:gap-8 max-w-[1100px] mx-auto">
            {bottomFeatures.map((feature) => (
              <div
  key={feature.title}
  className="group transition-opacity duration-300"
>
  <div className="flex items-center gap-3">
    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#2350AD] bg-[#2350AD]/10 text-[#3F73D8]">
      <Check size={14} strokeWidth={3} />
    </div>

    <h4
      className="
        text-[16px]
        font-bold
        bg-[linear-gradient(238.38deg,#FFFFFF_55.63%,rgba(255,255,255,0)_110.73%)]
        bg-clip-text
        text-transparent
        md:text-[18px]
      "
    >
      {feature.title}
    </h4>
  </div>

  <p className="mt-3 pl-10 max-w-[280px] text-[14px] leading-relaxed text-white/80">
    {feature.description}
  </p>
</div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}