import Image from "next/image";

export default function GrowthNetworkSection() {
  return (
    <section className="px-4 py-10">
      
      <div className="relative overflow-hidden rounded-[42px] bg-[#f7f8fb] px-8 py-14 md:px-14">
        
        {/* GRID BACKGROUND */}
        <div className="absolute inset-0 opacity-[0.35]">
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

        {/* CONTENT */}
        <div className="relative z-10 grid items-center gap-16 lg:grid-cols-2">
          
          {/* LEFT SIDE IMAGE */}
          <div className="relative flex justify-center">
            
            {/* SOFT GLOW */}
            <div className="absolute inset-0 rounded-[40px] bg-cyan-200/20 blur-[80px]" />

            <Image
              src="/images/growth-network.png"
              alt="Growth Network"
              width={820}
              height={820}
              priority
              className="relative z-10 w-full max-w-[700px] object-contain"
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="max-w-[620px]">
            
            {/* HEADING */}
            <h2 className="text-[46px] font-medium leading-[0.95] tracking-[-0.05em] text-black md:text-[72px]">
              A network that grows with every real interaction
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-8 max-w-[520px] text-[18px] leading-relaxed text-[#666]">
              Every verified visit, interaction, and purchase adds value to the network creating a system that improves over time.
            </p>

            {/* BUTTON */}
            <button
  type="button"
  className="
    mt-10
    flex
    h-[45px]
    w-[173px]
    items-center
    justify-center
    rounded-[11px]
    bg-[linear-gradient(90.76deg,#2350AD_0.11%,#719AEF_99.89%)]

    px-[10px]

    text-[16px]
    font-semibold
    leading-[24px]
    tracking-[-0.44px]
    text-white

    transition-all
    duration-300
    hover:brightness-105
  "
>
  See how it works
</button>
          </div>
        </div>
      </div>
    </section>
  );
}