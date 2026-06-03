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
        {/* MAIN CONTENT */}
{/* MAIN CONTENT */}
<div className="relative z-10 mt-20">

  {/* CENTER ROBOT — full width, sits behind */}
  <div className="relative flex justify-center">
    <div className="absolute bottom-10 h-[340px] w-[340px] rounded-full bg-[#7c8cff]/20 blur-[100px]" />
    <Image
      src="/images/rewards-robot.png"
      alt="Rewards Robot"
      width={1000}
      height={1200}
      className="
        relative
        w-full
        max-w-[500px]
        sm:max-w-[600px]
        lg:max-w-[700px]
        xl:max-w-[800px]
        object-contain
      "
      priority
    />
  </div>

  {/* TEXT COLUMNS — pulled up over the robot with negative margin */}
  <div className="
    absolute inset-0
    flex items-center justify-between
    px-4 lg:px-8
    pointer-events-none
  ">

    {/* LEFT */}
    <div className="pointer-events-auto max-w-[260px] xl:max-w-[300px] mb-52">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#dfe3ee] bg-white text-[#4D73E6] shadow-sm">
        <FaUser />
      </div>
      <h3 className="mt-8 text-[28px] font-semibold leading-[1.05] text-black md:text-[34px]">
        The Customer
      </h3>
      <p className="mt-5 text-[16px] leading-relaxed text-[#666] md:text-[18px]">
        Earns points toward their reputation profile and
        airdrop allocation. Consistent, genuine visits
        compound in value. Reputation is portable across
        every Resilute merchant.
      </p>
    </div>

    {/* RIGHT */}
    <div className="pointer-events-auto max-w-[260px] xl:max-w-[300px] text-left mb-52">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#dfe3ee] bg-white text-[#4D73E6] shadow-sm">
        <FaStore />
      </div>
      <h3 className="mt-8 text-[28px] font-semibold leading-[1.05] text-black md:text-[34px]">
        The Business
      </h3>
      <p className="mt-5 text-[16px] leading-relaxed text-[#666] md:text-[18px]">
        Accrues airdrop points proportional to the
        verified activity their location generates.
        The more genuine participation they host,
        the greater their share of the network&apos;s
        long-term upside.
      </p>
    </div>

  </div>
</div>
      </div>
    </section>
  );
}