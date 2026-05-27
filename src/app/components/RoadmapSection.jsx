import {
  FaChartLine,
  FaCube,
  FaRocket,
  FaShieldHalved,
  FaTimeline,
} from "react-icons/fa6";

const roadmap = [
  {
    quarter: "Q1 2026",
    title: "Infrastructure foundations",
    desc: "Core systems, verification engine, and merchant dashboard.",
    icon: <FaCube />,
    side: "left",
  },
  {
    quarter: "Q2 2026",
    title: "Pilot launch",
    desc: "Initial rollout across selected locations and early merchants.",
    icon: <FaRocket />,
    side: "right",
  },
  {
    quarter: "Q3 2026",
    title: "Validation & data",
    desc: "Performance insights, fraud resistance, and system refinement.",
    icon: <FaChartLine />,
    side: "left",
  },
  {
    quarter: "Q1 2027",
    title: "Protocol expansion",
    desc: "Token layer, payment integrations, and ecosystem growth.",
    icon: <FaTimeline />,
    side: "right",
  },
  {
    quarter: "BEYOND",
    title: "The reputation layer",
    desc: "A global, portable record of real-world participation.",
    icon: <FaShieldHalved />,
    side: "left",
  },
];

export default function RoadmapSection() {
  return (
    <section className="px-4 py-10">
      
      <div className="relative overflow-hidden rounded-[42px] bg-[#f7f8fb] px-8 py-16 md:px-14">
        
        {/* GRID BACKGROUND */}
        <div className="absolute inset-0 opacity-[0.35]">
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

        {/* CONTENT */}
        <div className="relative z-10">
          
          {/* TOP */}
          <div className="mx-auto max-w-[1100px] text-center">
            
            <p className="text-[14px] font-semibold uppercase tracking-[0.22em] text-[#4D73E6]">
              OUR ROADMAP
            </p>

            <h2 className="mt-6 text-[48px] font-medium leading-[1] tracking-[-0.05em] text-black md:text-[72px]">
              Where we’re going
            </h2>

            <p className="mx-auto mt-8 max-w-[1050px] text-[20px] leading-relaxed text-[#666]">
              A strategic trajectory towards building a permanent infrastructure of trust and real-world participation.
            </p>
          </div>

          {/* TIMELINE */}
          <div className="relative mx-auto mt-24 max-w-[1400px]">
            
            {/* CENTER LINE */}
            <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-[#d8d8d8] lg:block" />

            <div className="space-y-24">
              
              {roadmap.map((item, index) => (
                <div
                  key={index}
                  className={`relative grid items-center gap-10 lg:grid-cols-2 ${
                    item.side === "right" ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  
                  {/* TEXT */}
                  <div
                    className={`${
                      item.side === "left"
                        ? "text-right pr-20"
                        : "text-left pl-20"
                    }`}
                  >
                    
                    <h3 className="text-[42px] font-medium leading-[0.95] tracking-[-0.05em] text-black">
                      {item.title}
                    </h3>

                    <p className="mt-6 text-[18px] leading-relaxed text-[#666]">
                      {item.desc}
                    </p>
                  </div>

                  {/* DATE */}
                  <div
                    className={`${
                      item.side === "left"
                        ? "pl-20 text-left"
                        : "pr-20 text-right"
                    }`}
                  >
                    <p className="text-[22px] font-semibold uppercase tracking-[0.12em] text-black">
                      {item.quarter}
                    </p>
                  </div>

                  {/* CENTER ICON */}
                  <div className="absolute left-1/2 top-1/2 hidden h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-[#2D5BDB] text-[22px] text-white shadow-[0_15px_40px_rgba(45,91,219,0.25)] lg:flex">
                    {item.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM */}
          <div className="mx-auto mt-28 max-w-[1200px] text-center">
            
            <p className="text-[14px] font-semibold uppercase tracking-[0.24em] text-[#4D73E6]">
              LONG-TERM VISION
            </p>

            <p className="mx-auto mt-8 max-w-[1100px] text-[28px] leading-relaxed text-[#555] md:text-[40px]">
              Establishing the bedrock of autonomous coordination and verified identity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}