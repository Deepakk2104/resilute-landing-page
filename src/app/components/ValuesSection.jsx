import {
  FaChartLine,
  FaDatabase,
  FaShieldHalved,
  FaGlobe,
  FaHandshake,
  FaCubes,
} from "react-icons/fa6";

const values = [
  {
    icon: <FaChartLine />,
    title: "Merchant ROI first",
    desc: "We focus on measurable impact, not vanity metrics.",
  },
  {
    icon: <FaDatabase />,
    title: "Data before tokenisation",
    desc: "Proof comes before any incentives or layers.",
  },
  {
    icon: <FaShieldHalved />,
    title: "Fraud is taken seriously",
    desc: "Trust is built by preventing manipulation at every level.",
  },
  {
    icon: <FaGlobe />,
    title: "The physical world matters",
    desc: "Real-world behavior is the foundation of everything we build.",
  },
  {
    icon: <FaHandshake />,
    title: "Aligned incentives only",
    desc: "Users and businesses should grow together.",
  },
  {
    icon: <FaCubes />,
    title: "Infrastructure, not campaigns",
    desc: "We build long-term systems, not short-term growth hacks.",
  },
];

export default function ValuesSection() {
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
          <div className="max-w-[760px]">
            
            <p className="text-[14px] font-semibold uppercase tracking-[0.22em] text-[#4D73E6]">
              FOUNDATIONAL VALUES
            </p>

            <h2 className="mt-6 text-[56px] font-medium leading-[0.95] tracking-[-0.06em] text-black md:text-[88px]">
              Four principles we won’t trade
            </h2>
          </div>

          {/* VALUES GRID */}
          <div className="mt-20 grid gap-x-14 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            
            {values.map((value, index) => (
              <div key={index}>
                
                {/* DIVIDER */}
                <div className="mb-10 h-[1px] w-full bg-[#e4e4e4]" />

                {/* ICON */}
                <div className="text-[18px] text-[#4D73E6]">
                  {value.icon}
                </div>

                {/* TITLE */}
                <h3 className="mt-8 text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] text-black">
                  {value.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-6 max-w-[360px] text-[18px] leading-relaxed text-[#666]">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}