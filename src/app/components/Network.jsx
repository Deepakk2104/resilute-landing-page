export default function Network() {
  return (
    <section className="section-padding relative overflow-hidden bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-bg"
        style={{
          maskImage:
            "linear-gradient(to left, black 0%, black 35%, transparent 60%)",
          WebkitMaskImage:
            "linear-gradient(to left, black 0%, black 35%, transparent 60%)",
        }}
      />

      <div className="section-container relative z-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <div className="relative mx-auto w-full max-w-[620px] lg:order-1 lg:max-w-none">
          <div className="panel-hover rounded-[40px] bg-[#ECECEF] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.08)] md:rounded-[48px] md:p-8">
            <img
              src="/images/network/network-graphic.png"
              alt="Network of real-world interactions"
              className="w-full rounded-[24px] md:rounded-[28px]"
            />
          </div>
        </div>

        <div className="max-w-[560px] lg:order-2">
          <h2 className="text-[32px] font-bold leading-tight tracking-tight text-black md:text-[44px] lg:text-[48px]">
            A growing network of real-world interactions
          </h2>
          <p className="mt-6 text-[16px] leading-relaxed text-[#666666] md:text-[18px]">
            Verify real-world interactions, build portable reputation, and unlock
            value from genuine participation.
          </p>
          <button
            type="button"
            className="btn-gradient mt-10 px-10 py-4 text-[17px] md:px-12 md:py-[18px] md:text-[18px]"
          >
            Explore the Network
          </button>
        </div>
      </div>
    </section>
  );
}
