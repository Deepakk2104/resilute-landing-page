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
              OUR MISSION
            </p>

            <h2 className="mt-6 text-[44px] font-medium leading-[1] tracking-[-0.05em] text-black md:text-[68px]">
              Make real-world participation count
            </h2>

            <p className="mx-auto mt-8 max-w-[980px] text-[18px] leading-relaxed text-[#666]">
              Resilute gives real-world actions the same value and visibility as digital ones. Every visit, purchase, and interaction should be measurable and meaningful.
            </p>
          </div>

          {/* CARDS */}
          <div className="mx-auto mt-20 grid max-w-[1450px] gap-8 lg:grid-cols-2">
            
            {cards.map((card, index) => (
              <div
                key={index}
                className="rounded-[34px] bg-white px-10 py-10 shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(77,115,230,0.08)]"
              >
                
                {/* ICON */}
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#2D5BDB] text-[18px] text-white">
                  {card.icon}
                </div>

                {/* LABEL */}
                <p className="mt-8 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#4D73E6]">
                  {card.label}
                </p>

                {/* TITLE */}
                <h3 className="mt-5 max-w-[420px] text-[42px] font-medium leading-[0.95] tracking-[-0.05em] text-black">
                  {card.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-8 max-w-[520px] text-[18px] leading-relaxed text-[#666]">
                  {card.desc}
                </p>

                {/* DIVIDER */}
                <div className="mt-12 h-[1px] w-full bg-[#ececec]" />

                {/* BUTTON */}
                <button className="mt-8 text-[15px] font-semibold text-[#2D5BDB] transition-all duration-300 hover:translate-x-1">
                  {card.button} ↗
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}