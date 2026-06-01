import Image from "next/image";

const reasons = [
  {
    number: "01",
    title: "Technology is ready",
    desc: "Multi-layer verification systems can now confirm real-world presence reliably.",
  },
  {
    number: "02",
    title: "Infrastructure is accessible",
    desc: "Sensors and hardware are now affordable for everyday businesses.",
  },
  {
    number: "03",
    title: "Demand is growing",
    desc: "Businesses need proof of real customer activity, not assumptions.",
  },
];

export default function WhyNowSection() {
  return (
    <section className="px-4 py-10">
      
      <div className="relative overflow-hidden rounded-[42px] bg-[#f7f8fb] px-8 py-14 md:px-14">
        
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
       {/* TOP LEFT GRADIENT */}
<div
  className="absolute left-[-180px] top-[-120px]"
  style={{
    width: "530px",
    height: "179px",
    background: "#A39CEC",
    filter: "blur(239.5px)",
    opacity: 1.45,
  }}
/>

{/* BOTTOM RIGHT GRADIENT */}
<div
  className="absolute right-[-180px] bottom-[-120px]"
  style={{
    width: "530px",
    height: "179px",
    background: "#A39CEC",
    filter: "blur(239.5px)",
    opacity: 1.45,
  }}
/>

        {/* CONTENT */}
        <div className="relative z-10 grid items-center gap-16 lg:grid-cols-2">
          
          {/* LEFT SIDE */}
          <div className="relative flex justify-center">
            
            {/* SOFT GLOW */}
            <div className="absolute inset-0 rounded-[40px] bg-cyan-200/20 blur-[80px]" />

            {/* IMAGE */}
            <Image
              src="/images/why-now-dashboard.png"
              alt="Why Now Dashboard"
              width={900}
              height={700}
              priority
              className="relative z-10 w-full max-w-[700px] object-contain"
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="max-w-[620px]">
            
            {/* HEADING */}
            <h2 className="text-[52px] font-medium leading-[0.96] tracking-[-0.05em] text-black md:text-[72px]">
              Why now
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-8 max-w-[560px] text-[18px] leading-relaxed text-[#666]">
              Technology, infrastructure, and demand have aligned to make real-world verification possible.
            </p>

            {/* REASONS */}
            <div className="mt-14 space-y-10">
              
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-start gap-6"
                >
                  
                  {/* NUMBER */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#eef1f7] text-[22px] font-semibold text-black">
                    {reason.number}
                  </div>

                  {/* TEXT */}
                  <div>
                    
                    <h3 className="text-[28px] font-semibold leading-[1.1] text-black">
                      {reason.title}
                    </h3>

                    <p className="mt-4 max-w-[480px] text-[17px] leading-relaxed text-[#666]">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}