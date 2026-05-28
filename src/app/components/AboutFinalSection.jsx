import Image from "next/image";
import JoinWaitlistButton from "./JoinWaitlistButton";

export default function AboutFinalSection() {
  return (
    <section className="px-4 py-10">
      
      <div className="relative overflow-hidden rounded-[42px] bg-[#f7f8fb]">
        
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8f9fc] via-[#f8f7fb] to-[#eef4ff]" />

        {/* LEFT TOP PURPLE LINES */}
        <div className="absolute left-[-140px] top-[-140px] h-[420px] w-[420px] opacity-90">
          <div className="absolute inset-0 rounded-full border border-fuchsia-500/70 scale-[1.0]" />
          <div className="absolute inset-0 rounded-full border border-fuchsia-500/70 scale-[1.08]" />
          <div className="absolute inset-0 rounded-full border border-fuchsia-500/70 scale-[1.16]" />
          <div className="absolute inset-0 rounded-full border border-fuchsia-500/70 scale-[1.24]" />
          <div className="absolute inset-0 rounded-full border border-fuchsia-500/70 scale-[1.32]" />
          <div className="absolute inset-0 rounded-full border border-fuchsia-500/70 scale-[1.40]" />
          <div className="absolute inset-0 rounded-full border border-fuchsia-500/70 scale-[1.48]" />
        </div>

        {/* RIGHT BLUE LINES */}
        <div className="absolute bottom-[-180px] right-[-120px] h-[520px] w-[520px] opacity-90">
          <div className="absolute inset-0 rounded-full border border-cyan-400/70 scale-[1.0]" />
          <div className="absolute inset-0 rounded-full border border-cyan-400/70 scale-[1.08]" />
          <div className="absolute inset-0 rounded-full border border-cyan-400/70 scale-[1.16]" />
          <div className="absolute inset-0 rounded-full border border-cyan-400/70 scale-[1.24]" />
          <div className="absolute inset-0 rounded-full border border-cyan-400/70 scale-[1.32]" />
          <div className="absolute inset-0 rounded-full border border-cyan-400/70 scale-[1.40]" />
          <div className="absolute inset-0 rounded-full border border-cyan-400/70 scale-[1.48]" />
          <div className="absolute inset-0 rounded-full border border-cyan-400/70 scale-[1.56]" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 grid min-h-[620px] items-center gap-10 px-8 py-16 md:px-14 lg:grid-cols-2">
          
          {/* LEFT SIDE */}
          <div className="max-w-[760px]">
            
            {/* HEADING */}
            <h2 className="text-[58px] font-medium leading-[0.92] tracking-[-0.06em] text-black md:text-[92px]">
              
              Build with
              <span className="text-black/45">
                {" "}real world
              </span>

              <br />

              <span className="text-[#4D73E6]">
                proof
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-10 max-w-[720px] text-[24px] leading-relaxed text-[#666]">
              Whether you&apos;re a business, partner, or just curious we&apos;d love to connect.
            </p>

            {/* BUTTON */}
            <div className="mt-12">
              <JoinWaitlistButton />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-end">
            
            {/* GLOW */}
            <div className="absolute bottom-20 right-20 h-[300px] w-[300px] rounded-full bg-cyan-400/20 blur-[120px]" />

            <Image
              src="/images/final-robot.png"
              alt="Final CTA Robot"
              width={760}
              height={900}
              priority
              className="relative z-10 w-full max-w-[760px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}