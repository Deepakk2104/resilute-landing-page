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

          {/* HEADING */}
          <div className="mx-auto max-w-[900px] text-center">
            <h2 className="text-[42px] font-medium leading-[1.05] tracking-[-0.04em] text-black md:text-[64px]">
              The more people use it, the more valuable it becomes
            </h2>

            <p className="mx-auto mt-5 max-w-[700px] text-[16px] leading-relaxed text-[#666666]">
              Resilute is a two-sided network. Merchants and customers reinforce
              each other over time.
            </p>
          </div>

          {/* CARDS */}
          <div className="mx-auto mt-20 grid max-w-[1450px] items-center gap-8 lg:grid-cols-3">
            {cards.map((card, index) => (
              <div
                key={index}
                className="
                  rounded-[30px]
                  bg-white
                  px-8
                  py-8
                  border
                  border-transparent

                  shadow-[0_4px_24px_rgba(0,0,0,0.04)]

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-[#7A97E8]
                  hover:shadow-[0_4px_18px_-5px_#2350AD,0_4px_30px_rgba(45,30,133,0.10)]
                "
              >

                {/* ICON */}
                <div className="text-[18px] text-[#4D73E6]">
                  {card.icon}
                </div>

                {/* TITLE */}
                <h3 className="mt-8 text-[20px] font-semibold leading-[1.2] text-black">
                  {card.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-4 max-w-[320px] text-[15px] leading-[1.8] text-[#444444]">
                  {card.desc}
                </p>

                {/* FEATURED FOOTER */}
                {card.featured && (
                  <>
                    <div className="mt-10 h-px w-full bg-[#E7E7E7]" />

                    <p className="mt-6 text-[14px] font-semibold uppercase tracking-[0.16em] text-[#2D5BDB]">
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