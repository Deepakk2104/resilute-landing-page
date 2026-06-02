import Image from "next/image";
import { FaStore, FaUser } from "react-icons/fa6";

export default function RewardsSection() {
  return (
    <section className="px-4 py-10">
      
      <div className="relative overflow-hidden rounded-[42px] bg-[#f7f8fb] px-6 py-12 md:px-10 md:py-16 lg:px-14">
        
        {/* GRID BACKGROUND */}
        <div className="absolute inset-0 opacity-[0.95]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(90,124,235,0.08) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(90,124,235,0.08) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
            }}
          />
        </div>
        {/* BOTTOM RIGHT PURPLE GRADIENT */}
<div
  className="absolute right-[-180px] bottom-[-80px]"
  style={{
    width: "530px",
    height: "179px",
    background: "#A39CEC",
    filter: "blur(239.5px)",
    opacity: 0.95,
  }}
/>

        {/* TOP CONTENT */}
        <div className="relative z-10 mx-auto max-w-[1100px] text-center">
          
          {/* LABEL */}
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4D73E6]">
            Layer 03 Rewards
          </p>

          {/* HEADING */}
          <h2 className="mt-4 text-[34px] font-medium leading-[0.95] tracking-[-0.06em] text-black sm:text-[42px] md:text-[52px] lg:text-[62px]">
  Everyone earns. Both sides grow
</h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-6 max-w-[900px] text-[16px] leading-relaxed text-[#666] md:text-[18px] lg:text-[20px]">
  When a verified interaction happens at a Resilute location,
  both parties receive participation points that count toward
  the token airdrop
</p>
        </div>

        {/* MAIN CONTENT */}
        <div className="relative z-10 mt-20 grid items-center gap-10 lg:grid-cols-[1fr_700px_1fr]">
          
          {/* LEFT CARD */}
          <div className="mx-auto max-w-[360px] text-center lg:mx-0 lg:text-left">
            
            {/* ICON */}
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#dfe3ee] bg-white text-[#4D73E6] shadow-sm">
              <FaUser />
            </div>

            {/* TITLE */}
            <h3 className="mt-8 text-[28px] font-semibold leading-[1.05] text-black md:text-[34px] lg:text-[42px]">
              The Customer
            </h3>

            {/* TEXT */}
           <p className="mt-5 text-[16px] leading-relaxed text-[#666] md:text-[18px] lg:text-[22px]">
              Earns points toward their reputation profile and
              airdrop allocation. Consistent, genuine visits
              compound in value. Reputation is portable across
              every Resilute merchant.
            </p>
          </div>

          {/* CENTER IMAGE */}
          <div className="relative flex justify-center">
            
            {/* GLOW */}
            <div className="absolute bottom-10 h-[340px] w-[340px] rounded-full bg-[#7c8cff]/20 blur-[100px]" />

           <Image
  src="/images/rewards-robot.png"
  alt="Rewards Robot"
  width={760}
  height={900}
  className="
    relative z-10
    w-full
    max-w-[320px]
    sm:max-w-[450px]
    md:max-w-[600px]
    lg:max-w-[760px]
    object-contain
  "
  priority
/>
          </div>

          {/* RIGHT CARD */}
         <div className="mx-auto max-w-[360px] text-center lg:mx-0 lg:justify-self-end lg:text-left">
            
            {/* ICON */}
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#dfe3ee] bg-white text-[#4D73E6] shadow-sm">
              <FaStore />
            </div>

            {/* TITLE */}
           <h3 className="mt-8 text-[28px] font-semibold leading-[1.05] text-black md:text-[34px] lg:text-[42px]">
              The Business
            </h3>

            {/* TEXT */}
            <p className="mt-5 text-[16px] leading-relaxed text-[#666] md:text-[18px] lg:text-[22px]">
              Accrues airdrop points proportional to the
              verified activity their location generates.
              The more genuine participation they host,
              the greater their share of the network&apos;s
              long-term upside
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}