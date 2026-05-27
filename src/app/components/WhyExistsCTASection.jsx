import JoinWaitlistButton from "./JoinWaitlistButton";

export default function WhyExistsCTASection() {
  return (
    <section className="px-4 py-10">
      
      <div className="relative overflow-hidden rounded-[42px] bg-[#f7f8fb] px-8 py-20 md:px-14">
        
        {/* SOFT GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8f9fc] via-[#f7f8fb] to-[#eef3ff]" />

        {/* LEFT WAVE */}
        <div className="absolute left-[-120px] top-[-60px] h-[700px] w-[700px] rounded-full opacity-90">
          <div
            className="h-full w-full"
            style={{
              background: `
                radial-gradient(circle at center,
                transparent 48%,
                rgba(0,217,255,0.8) 49%,
                transparent 50%)
              `,
              backgroundSize: "34px 34px",
              maskImage:
                "radial-gradient(circle at center, black 55%, transparent 72%)",
            }}
          />
        </div>

        {/* RIGHT WAVE */}
        <div className="absolute bottom-[-120px] right-[-120px] h-[760px] w-[760px] rounded-full opacity-90">
          <div
            className="h-full w-full"
            style={{
              background: `
                radial-gradient(circle at center,
                transparent 48%,
                rgba(0,217,255,0.8) 49%,
                transparent 50%)
              `,
              backgroundSize: "34px 34px",
              maskImage:
                "radial-gradient(circle at center, black 55%, transparent 72%)",
            }}
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center text-center">
          
          {/* TITLE */}
          <h2 className="max-w-[1100px] text-[50px] font-medium leading-[0.95] tracking-[-0.06em] text-black md:text-[88px]">
            Ready to see how it works
            <br />

            <span className="text-black/45">
              in the
            </span>

            <span className="text-[#4D73E6]">
              {" "}real world?
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-10 text-[18px] text-[#555]">
            See how real-world verification actually works
          </p>

          {/* BUTTON */}
          <div className="mt-12">
            <JoinWaitlistButton text="See it in action" />
          </div>
        </div>
      </div>
    </section>
  );
}