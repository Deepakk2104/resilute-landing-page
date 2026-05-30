import { ArrowRight, Check, Store, User } from "lucide-react";

const bottomFeatures = [
  {
    title: "Verified Activity",
    description: "Every visit and interaction is securely verified.",
  },
  {
    title: "Verified Footfall",
    description: "Track real visits, not fake impressions.",
  },
  {
    title: "Earn Real Value",
    description: "Unlock rewards and opportunities from participation.",
  },
];

export default function Audience() {
  return (
    <section id="audience" className=" font-inter">
      <div className="section-container max-w-7xl mx-auto px-4">
        <div
          className="overflow-hidden rounded-[40px] px-6 py-16 md:px-12 md:py-20"
          style={{
            backgroundColor: "#0a0a0a",
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
          }}
        >
          {/* Section Header */}
          <header className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500 md:text-[12px]">
              Who Resilute is for
            </p>
            <h2 className="mx-auto mt-3 max-w-[800px] text-[32px] font-bold tracking-tight text-white md:text-[42px] lg:text-[48px]">
              Built for both sides of every interaction
            </h2>
          </header>

          {/* Cards Grid Container */}
          <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 md:gap-8 items-start justify-center max-w-[1100px] mx-auto">
            
            {/* FIRST CARD: CUSTOMERS (Mapped exactly to your Figma dimensions & layout) */}
            <article className="relative overflow-hidden bg-[#000000] rounded-[16px] p-10 flex flex-col justify-between select-none border border-white/[0.03] w-full max-w-[522px] min-h-[443px]">
              
              {/* Figma: Ellipse 2464 (Bottom-Left Glow) */}
              <div 
                className="absolute rounded-full pointer-events-none mix-blend-screen"
                style={{
                  width: "384px",
                  height: "215px",
                  left: "-227px",
                  top: "277px",
                  background: "#2350AD",
                  filter: "blur(90.05px)",
                }}
              />
              
              {/* Figma: Ellipse 2465 (Top-Right Glow) */}
              <div 
                className="absolute rounded-full pointer-events-none mix-blend-screen"
                style={{
                  width: "384px",
                  height: "215px",
                  left: "276px",
                  top: "-108px",
                  background: "#2350AD",
                  filter: "blur(90.05px)",
                }}
              />

              {/* Content Context Layer */}
              <div className="relative z-10 flex flex-col h-full pl-2">
                {/* Figma: FOR CUSTOMERS */}
                <p className="font-semibold text-[12px] uppercase bg-gradient-to-tr from-white/0 via-white to-white bg-clip-text text-transparent tracking-[1.44px] leading-[16px]">
                  For Customers
                </p>

                {/* Figma: cf (Icon Wrapper) */}
                <div className="mt-6 flex h-[64px] w-[64px] items-center justify-center rounded-[14px] bg-gradient-to-b from-[#2350AD] to-[#1A3D8F] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
                  <User className="text-white" size={32} strokeWidth={2.2} />
                </div>

                {/* Figma: Title with Linear Text Clip Gradient */}
                <h3 className="mt-8 font-bold text-[24px] bg-gradient-to-tr from-white/20 via-white to-white bg-clip-text text-transparent max-w-[406px] leading-[30px]">
                  Build a reputation that follows you.
                </h3>

                {/* Figma: Description Block */}
                <p className="mt-4 text-[18px] text-white/80 font-normal max-w-[380px] leading-[29px]">
                  Every verified visit and purchase builds your reputation score across participating merchants.
                </p>

                {/* Figma: Frame 1618874019 (Button) */}
               <button
  type="button"
  className="group mt-8 flex items-center justify-center gap-[10px] bg-gradient-to-r from-[#2350AD] to-[#719AEF] rounded-[10px] w-full max-w-[402px] h-[51px] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:brightness-110 active:scale-[0.99]"
>
  <span className="text-white font-semibold text-[16px] leading-[24px]">
    Start building reputation
  </span>
  <ArrowRight
    size={16}
    className="text-white transition-transform duration-300 group-hover:translate-x-1"
    strokeWidth={2.5}
  />
</button>
              </div>
            </article>

            {/* SECOND CARD: MERCHANTS (Parity Layout with Inter font updates) */}
         <article className="relative overflow-hidden rounded-[28px] p-10 flex flex-col justify-between shadow-xl w-full max-w-[522px] min-h-[443px] border border-white/40">
      {/* Exact Premium Vibrant Mesh Background */}
      <div
        className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.01]"
        style={{
          background: `
            radial-gradient(circle at 80% 10%, #c084fc 0%, transparent 60%),
            radial-gradient(circle at 100% 70%, #6366f1 0%, transparent 50%),
            radial-gradient(circle at 10% 80%, #d8b4fe 0%, transparent 60%),
            linear-gradient(135deg, #eef2ff 0%, #ffffff 50%, #f5f3ff 100%)
          `,
        }}
      />
      
      {/* Content Layer */}
      <div className="relative z-10 flex flex-col h-full justify-between items-start">
        
        {/* Top Content Block */}
        <div className="w-full">
          {/* Subtitle */}
          <p className="font-semibold text-[13px] uppercase text-[#475569] tracking-[1.5px] leading-[16px]">
            For Merchants
          </p>
          
          {/* Icon Box */}
          <div className="mt-5 flex h-[68px] w-[68px] items-center justify-center rounded-[18px] bg-[#1d4ed8] text-white shadow-md shadow-blue-900/20">
            <Store size={30} strokeWidth={2} />
          </div>

          {/* Heading */}
          <h3 className="mt-7 font-bold text-[28px] text-black max-w-[420px] tracking-[-0.5px] leading-[34px]">
            Prove your marketing is working.
          </h3>

          {/* Paragraph */}
          <p className="mt-3 text-[16px] text-[#4b5563] font-medium max-w-[400px] leading-[26px]">
            Track verified footfall, confirmed purchases, and real customer engagement.
          </p>
        </div>

        {/* Action Button */}
       <button
  type="button"
  className="group mt-8 flex items-center justify-center gap-[8px] bg-gradient-to-r from-[#1d4ed8] to-[#60a5fa] rounded-[14px] w-full h-[54px] shadow-md shadow-blue-600/20 text-white font-medium text-[16px] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:brightness-110 hover:shadow-lg hover:shadow-blue-500/30 active:scale-[0.99]"
>
  <span>Explore merchant tools</span>
  <ArrowRight
    size={18}
    strokeWidth={2.5}
    className="transition-transform duration-300 group-hover:translate-x-1"
  />
</button>
        
      </div>
    </article>

          </div>

          {/* Bottom Features List Segment */}
          <div className="mt-16 grid gap-8 border-t border-white/[0.06] pt-12 md:grid-cols-3 md:gap-8 max-w-[1100px] mx-auto">
            {bottomFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group flex items-start gap-4 transition-opacity duration-300 md:flex-col md:gap-3"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#3F73D8]/15 text-[#6B9AE8] transition-colors duration-300 group-hover:bg-[#3F73D8]/25">
                  <Check size={15} strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-white md:text-[18px]">
                    {feature.title}
                  </h4>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}