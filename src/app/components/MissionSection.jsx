import {
  FaBullseye,
  FaShieldHalved,
} from "react-icons/fa6";

const cards = [
  {
    icon: <FaBullseye />,
    label: "OUR MISSION",
    title: "Make real-world participation count",
    desc: "Resilute gives real-world actions the same value and visibility as digital ones. Every visit, purchase, and interaction should be measurable and meaningful.",
    button: "Explore Mission",
  },
  {
    icon: <FaShieldHalved />,
    label: "OUR APPROACH",
    title: "Proof before promises",
    desc: "We focus on verified data first. No assumptions, no speculation just real participation captured and measured accurately.",
    button: "View Methodology",
  },
];

export default function MissionSection() {
  return (
    <section className="px-4 py-10">
      <div className="relative overflow-hidden rounded-[42px] bg-[#f7f8fb] px-8 py-16 md:px-14">

        {/* GRID BACKGROUND */}
        <div className="absolute inset-0 opacity-[0.75]">
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
        {/* CENTER BLUE GLOW */}
<div
  className="absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2"
  style={{
    width: "374px",
    height: "374px",
    background: "#7AA8FF",
    filter: "blur(225px)",
    opacity: 0.22,
  }}
/>

{/* CENTER PURPLE GLOW */}
<div
  className="absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2"
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

          {/* TOP CONTENT */}
          <div className="mx-auto max-w-[1100px] text-center">
            <p className="text-[14px] font-semibold uppercase tracking-[0.22em] text-[#4D73E6]">
              OUR MISSION
            </p>

            <h2 className="mt-6 text-[44px] font-medium leading-[1] tracking-[-0.05em] text-black md:text-[52px]">
              Make real-world participation count
            </h2>

            <p className="mx-auto mt-8 max-w-[980px] text-[18px] leading-relaxed text-[#666666]">
              Resilute gives real-world actions the same value and visibility
              as digital ones. Every visit, purchase, and interaction should be
              measurable and meaningful.
            </p>
          </div>

          {/* CARDS */}
          <div className="mx-auto mt-20 grid max-w-[1450px] gap-6 lg:grid-cols-2">
            {cards.map((card, index) => (
              <div
                key={index}
                className="
                  rounded-[28px]
                  bg-white
                  px-9
                  pt-16
                  pb-5
                  min-h-[420px]

                  shadow-[0_8px_30px_rgba(0,0,0,0.04)]

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:shadow-[0_12px_40px_rgba(77,115,230,0.08)]
                "
              >
                {/* ICON */}
                <div
                  className="
                    flex
                    h-[36px]
                    w-[36px]
                    items-center
                    justify-center
                    rounded-[6px]
                    bg-[#2D5BDB]
                    text-[14px]
                    text-white
                  "
                >
                  {card.icon}
                </div>

                {/* LABEL */}
                <p
                  className="
                    mt-9
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-[#4D73E6]
                  "
                >
                  {card.label}
                </p>

                {/* TITLE */}
                <h3
                  className="
                    mt-4
                    max-w-[720px]
                    text-[34px]
                    font-medium
                    leading-[1]
                    tracking-[-0.05em]
                    text-black
                  "
                >
                  {card.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    mt-8
                    max-w-[700px]
                    text-[16px]
                    leading-[1.55]
                    text-[#666666]
                  "
                >
                  {card.desc}
                </p>

                {/* DIVIDER */}
                <div className="mt-14 h-px w-full bg-[#ECECEC]" />

                {/* BUTTON */}
                <button
                  className="
                    mt-8
                    text-[15px]
                    font-semibold
                    text-[#2D5BDB]
                    transition-all
                    duration-300
                    hover:translate-x-1
                  "
                >
                  {card.button} →
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}