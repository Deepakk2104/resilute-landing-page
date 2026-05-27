import Image from "next/image";
import JoinWaitlistButton from "./JoinWaitlistButton";

export default function BusinessCTASection() {
  return (
    <section className="px-4 py-10">
      
      <div className="relative overflow-hidden rounded-[42px] bg-[#f7f8fb]">
        
        {/* SOFT BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8f9fc] via-[#f7f8fb] to-[#eef4ff]" />

        {/* CONTENT */}
        <div className="relative z-10 grid min-h-[620px] items-center gap-10 lg:grid-cols-2">
          
          {/* LEFT SIDE */}
          <div className="px-8 py-16 md:px-14">
            
            <div className="max-w-[650px]">
              
              {/* HEADING */}
              <h2 className="text-[58px] font-medium leading-[0.95] tracking-[-0.06em] text-black md:text-[86px]">
                
                Start
                <span className="text-black/45">
                  {" "}measuring
                </span>

                <br />

                what actually

                <br />

                <span className="text-[#4D73E6]">
                  Drives your business
                </span>
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-10 max-w-[540px] text-[18px] leading-relaxed text-[#666]">
                Track verified engagement and make smarter decisions with real-world data.
              </p>

              {/* BUTTON */}
              <div className="mt-12">
                <JoinWaitlistButton text="Request Demo" />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          {/* RIGHT SIDE */}
<div className="relative flex min-h-[620px] items-end justify-end overflow-hidden">
  
  {/* PURPLE ELLIPSE */}
  <div className="absolute bottom-[-120px] right-[-60px] h-[520px] w-[520px] rounded-full bg-[#A855F7]/20 blur-[10px]" />

  {/* BLUE ELLIPSE */}
  <div className="absolute bottom-[10px] right-[120px] h-[360px] w-[360px] rounded-full bg-[#4D73E6]/20 blur-[10px]" />

  {/* CYAN ELLIPSE */}
  <div className="absolute bottom-[-80px] right-[260px] h-[260px] w-[260px] rounded-full bg-cyan-300/20 blur-[10px]" />

  {/* RADIAL LINES */}
  <div
    className="absolute bottom-[-260px] right-[-260px] h-[900px] w-[900px] rounded-full opacity-80"
    style={{
      background:
        "repeating-radial-gradient(circle at center, rgba(93,110,255,0.7) 0px, rgba(93,110,255,0.7) 2px, transparent 2px, transparent 10px)",
    }}
  />

  {/* ROBOT */}
  <Image
    src="/images/business-cta-robot.png"
    alt="Business Robot"
    width={1200}
    height={1200}
    priority
    className="absolute bottom-[-120px] right-[-40px] z-10 w-[720px] max-w-none object-contain"
  />
</div>
        </div>
      </div>
    </section>
  );
}