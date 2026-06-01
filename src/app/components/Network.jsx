export default function Network() {
  return (
    <section className="section-padding relative overflow-hidden bg-white">
      
      {/* BACKGROUND */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        {/* FIGMA PURPLE GLOW */}
        {/* FIGMA BLUE GLOW */}
<div
  style={{
    width: "374px",
    height: "374px",
    background: "#7AA8FF",
    filter: "blur(225px)",
  }}
  className="absolute right-[-140px] top-[-180px] opacity-40"
/>

{/* FIGMA PURPLE GLOW */}
<div
  style={{
    width: "530px",
    height: "179px",
    background: "#A39CEC",
    filter: "blur(239.5px)",
  }}
  className="absolute right-[-80px] top-0 opacity-50"
/>

        {/* FADING GRID */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(90,124,235,0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(90,124,235,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
            maskImage:
              "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.35) 55%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.35) 55%, transparent 100%)",
          }}
        />
      </div>

      <div className="section-container relative z-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        
        {/* LEFT IMAGE */}
        <div className="relative mx-auto w-full max-w-[620px] lg:order-1 lg:max-w-none">
          <div className="rounded-[40px] p-6 md:rounded-[48px] md:p-8">
            <img
              src="/images/network/network-graphic.png"
              alt="Network of real-world interactions"
              className="w-full rounded-[24px] md:rounded-[28px]"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="max-w-[480px] lg:order-2 lg:pt-6">
          <h2
            className="
              text-[30px]
              font-medium
              leading-[0.95]
              tracking-[-0.05em]
              text-black
              md:text-[38px]
              lg:text-[42px]
            "
          >
            A growing network of
            <br />
            real-world interactions
          </h2>

          <p className="mt-4 text-[15px] leading-relaxed text-[#666666]">
            Verify real-world interactions, build portable reputation, and unlock
            value from genuine participation.
          </p>

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
              hover:-translate-y-1
              hover:scale-[1.03]
              hover:shadow-[0_10px_30px_rgba(61,122,255,0.35)]
              hover:brightness-110
              active:scale-[0.98]
            "
          >
            Explore the Network
          </button>
        </div>

      </div>
    </section>
  );
}