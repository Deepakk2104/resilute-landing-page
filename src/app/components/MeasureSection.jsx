import {
  FaArrowRight,
  FaChartLine,
  FaLocationDot,
} from "react-icons/fa6";

import { HiOutlineCursorClick } from "react-icons/hi";
import { IoTrendingUpOutline } from "react-icons/io5";

const cards = [
  {
    icon: <FaLocationDot />,
    title: "Verified Visits",
    desc: "Know exactly when customers visit your business. Our proprietary geo-fencing technology ensures 99.9% accuracy in physical traffic attribution.",
    link: "Learn More",
  },
  {
    icon: <HiOutlineCursorClick />,
    title: "Real Engagement Data",
    desc: "Track actual interactions — not just clicks. Understand the depth of customer curiosity through dwell time and sequential behavior patterns.",
    link: "Explore Data",
  },
  {
    icon: <FaChartLine />,
    title: "Accurate Insights",
    desc: "Understand what drives real customer behavior. Our AI engine deciphers complex journey paths into simple, visual narratives you can act on.",
    link: "View Samples",
  },
  {
    icon: <IoTrendingUpOutline />,
    title: "Clear ROI",
    desc: "See what’s working and make better decisions. Attribute every dollar of spend to a specific customer action with absolute confidence.",
    link: "Calculate Impact",
  },
];

export default function MeasureSection() {
  return (
    <section className="px-4 py-10">
      
      <div className="relative overflow-hidden rounded-[42px] bg-[#f7f8fb] px-8 py-14 md:px-14">
        
        {/* GRID BACKGROUND */}
        <div className="absolute inset-0 opacity-[0.85]">
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
        {/* LEFT PURPLE GLOW */}
<div
  className="absolute left-[-180px] top-[320px]"
  style={{
    width: "530px",
    height: "179px",
    background: "#A39CEC",
    filter: "blur(239.5px)",
    opacity: 0.45,
  }}
/>

{/* RIGHT PURPLE GLOW */}
<div
  className="absolute right-[-180px] top-[320px]"
  style={{
    width: "530px",
    height: "179px",
    background: "#A39CEC",
    filter: "blur(239.5px)",
    opacity: 0.45,
  }}
/>

{/* BOTTOM CENTER BLUE */}
<div
  className="absolute left-1/2 bottom-[-120px] -translate-x-1/2"
  style={{
    width: "374px",
    height: "374px",
    background: "#7AA8FF",
    filter: "blur(225px)",
    opacity: 0.22,
  }}
/>

{/* BOTTOM CENTER PURPLE */}
<div
  className="absolute left-1/2 bottom-[-80px] -translate-x-1/2"
  style={{
    width: "530px",
    height: "179px",
    background: "#A39CEC",
    filter: "blur(239.5px)",
    opacity: 0.32,
  }}
/>

        {/* CONTENT */}
        <div className="relative z-10">
          
          {/* TOP */}
          <div className="mx-auto max-w-[950px] text-center">
            
            <h2 className="text-[42px] font-medium leading-[1] tracking-[-0.05em] text-black md:text-[50px]">
              Measure what actually happens
            </h2>

            <p className="mx-auto mt-6 max-w-[900px] text-[18px] leading-relaxed text-[#666]">
              Resilute verifies real-world interactions and turns them
              into actionable business insights you can trust.
            </p>
          </div>

          {/* CARDS */}
          <div className="mx-auto mt-16 grid max-w-[1400px] gap-8 md:grid-cols-2">
            
            {cards.map((card, index) => (
              <div
                key={index}
                className="group rounded-[34px] bg-white px-8 py-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(90,124,235,0.08)]"
              >
                
                {/* ICON */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f1f4fb] text-[20px] text-[#2D5BDB] transition-transform duration-300 group-hover:scale-110">
                  {card.icon}
                </div>

                {/* TITLE */}
                <h3 className="mt-8 text-[26px] font-semibold leading-[1.1] text-black">
                  {card.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-5 max-w-[520px] text-[17px] leading-relaxed text-[#666]">
                  {card.desc}
                </p>

                {/* LINK */}
                <button className="mt-8 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-[#2D5BDB] transition-all duration-300 hover:gap-3">
                  
                  {card.link}

                  <FaArrowRight />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}