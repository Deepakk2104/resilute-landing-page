import {
  FaChartLine,
  FaStore,
} from "react-icons/fa6";

import { HiMiniSparkles } from "react-icons/hi2";

const cards = [
  {
    icon: <FaStore />,
    title: "More merchants join",
    desc: "Each new location increases the value of the network.",
  },
  {
    icon: <HiMiniSparkles />,
    title: "More users participate",
    desc: "Verified activity grows, strengthening the data layer.",
    featured: true,
  },
  {
    icon: <FaChartLine />,
    title: "The network compounds",
    desc: "The more you participate, the more valuable your reputation becomes.",
  },
];

export default function NetworkEffectSection() {
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
            
            <h2 className="text-[42px] font-medium leading-[1] tracking-[-0.05em] text-black md:text-[64px]">
              The more people use it, the more valuable it becomes
            </h2>

            <p className="mx-auto mt-6 max-w-[850px] text-[18px] leading-relaxed text-[#666]">
              Resilute is a two-sided network. Merchants and customers reinforce each other over time.
            </p>
          </div>

          {/* CARDS */}
          <div className="mx-auto mt-20 grid max-w-[1450px] items-center gap-8 lg:grid-cols-3">
            
            {cards.map((card, index) => (
              <div
                key={index}
                className={`group rounded-[32px] bg-white px-8 py-8 transition-all duration-500 hover:-translate-y-2 ${
                  card.featured
                    ? "scale-[1.04] border border-[#4D73E6]/30 shadow-[0_25px_80px_rgba(77,115,230,0.15)]"
                    : "shadow-[0_20px_60px_rgba(0,0,0,0.04)]"
                }`}
              >
                
                {/* ICON */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4f7ff] text-[20px] text-[#2D5BDB]">
                  {card.icon}
                </div>

                {/* TITLE */}
                <h3 className="mt-8 text-[28px] font-semibold leading-[1.1] text-black">
                  {card.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-5 max-w-[340px] text-[17px] leading-relaxed text-[#666]">
                  {card.desc}
                </p>

                {/* FEATURED FOOTER */}
                {card.featured && (
                  <>
                    <div className="mt-8 h-[1px] w-full bg-[#e7e7e7]" />

                    <p className="mt-6 text-sm font-semibold uppercase tracking-[0.12em] text-[#2D5BDB]">
                      Core Synergy ↗
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}