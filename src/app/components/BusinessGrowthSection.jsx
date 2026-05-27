import Image from "next/image";
import JoinWaitlistButton from "./JoinWaitlistButton";

export default function BusinessGrowthSection() {
  return (
    <section className="px-4 py-10">
      
      <div className="relative overflow-hidden rounded-[42px] bg-[#1565F5] px-8 pt-14 md:px-14">
        
        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.16),transparent_65%)]" />

        {/* LARGE CIRCLES */}
        <div className="absolute left-1/2 top-[52%] h-[1000px] w-[1000px] -translate-x-1/2 rounded-full border border-white/10" />
        <div className="absolute left-1/2 top-[52%] h-[760px] w-[760px] -translate-x-1/2 rounded-full border border-white/10" />
        <div className="absolute left-1/2 top-[52%] h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-white/10" />

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col items-center text-center">
          
          {/* LABEL */}
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
            ✦ For Business Owners
          </p>

          {/* HEADING */}
          <h2 className="mt-6 max-w-[1100px] text-[54px] font-medium leading-[0.95] tracking-[-0.06em] text-white md:text-[88px]">
            Turn real-world engagement
            <br />

            <span className="text-white/60">
              into measurable growth
            </span>
          </h2>

          {/* BUTTON */}
          <div className="mt-10">
            <JoinWaitlistButton />
          </div>

          {/* IMAGE */}
          <div className="relative mt-14 flex justify-center">
            
            {/* BOTTOM GLOW */}
            <div className="absolute bottom-10 h-[220px] w-[220px] rounded-full bg-white/20 blur-[100px]" />

            <Image
              src="/images/business-growth.png"
              alt="Business Growth Robot"
              width={1100}
              height={800}
              priority
              className="relative z-10 w-full max-w-[980px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}