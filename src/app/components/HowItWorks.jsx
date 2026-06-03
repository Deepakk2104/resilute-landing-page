const steps = [
  {
    number: "01",
    title: "Visit & Engage",
    description:
      "Go to participating locations and interact in the real world.",
  },
  {
    number: "02",
    title: "Get Verified",
    description:
      "Resilute confirms your activity using secure multi layer signals.",
  },
  {
    number: "03",
    title: "Build Reputation",
    description:
      "Every verified interaction grows your portable reputation.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section-padding relative overflow-hidden bg-white"
    >
      {/* BACKGROUND */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        {/* TOP LEFT BLUE GLOW */}
        <div
          className="
            absolute
            left-[-120px]
            top-[-120px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#7EA1FF]/20
            blur-[90px]
          "
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
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.35) 55%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.35) 55%, transparent 100%)",
          }}
        />
      </div>

      <div className="section-container relative z-10 grid items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        
        {/* LEFT */}
       <div className="max-w-[800px] lg:pt-6">
  <h2
    className="
      text-[30px]
      font-medium
      leading-[0.95]
      tracking-[-0.05em]
      text-black

      md:text-[38px]
      lg:text-[40px]
      xl:text-[42px]
    "
  >
    The infrastructure for real world reputation
  </h2>

          <p className="mt-4 text-[15px] leading-relaxed text-[#666666]">
            Turn real-world activity into trusted reputation
          </p>

          <ol className="mt-10 space-y-10 md:mt-12 md:space-y-12">
            {steps.map((step) => (
              <li
                key={step.number}
                className="group flex gap-5 transition-transform duration-300 hover:translate-x-1 md:gap-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F3F4F6] text-[15px] font-bold text-black transition-colors duration-300 group-hover:bg-[#E8EEFF] md:h-14 md:w-14 md:rounded-2xl md:text-[16px]">
                  {step.number}
                </div>

                <div className="pt-0.5">
                  <h3 className="text-[20px] font-bold text-black md:text-[22px]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* RIGHT */}
        <div className="relative mx-auto w-full max-w-[620px] lg:max-w-none lg:pt-30">
          <div className="panel-hover rounded-[40px] bg-[#ECECEF] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.08)] md:rounded-[48px] md:p-8">
            <img
              src="/images/how-it-works/dashboard.png"
              alt="Reputation dashboard preview"
              className="w-full rounded-[24px] md:rounded-[28px]"
            />
          </div>
        </div>

      </div>
    </section>
  );
}