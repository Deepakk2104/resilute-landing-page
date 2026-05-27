import { FaCircleXmark } from "react-icons/fa6";

const cards = [
  {
    title: "Network-Powered Insights",
    desc: "Track real engagement and unlock valuable insights.",
  },
  {
    title: "No Real Footfall Data",
    desc: "You can’t accurately track who actually walks into your business.",
  },
  {
    title: "Misleading Metrics",
    desc: "Marketing reports often don’t match real-world performance.",
  },
  {
    title: "No Clear ROI",
    desc: "It’s hard to know what drives actual growth.",
  },
];

export default function TrustDataSection() {
  return (
    <section className="px-4 py-10">
      
      <div className="relative overflow-hidden rounded-[42px] bg-[#f7f8fb] px-8 py-14 md:px-14">
        
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
          <div className="mx-auto max-w-[900px] text-center">
            
            <h2 className="text-[42px] font-medium leading-[1] tracking-[-0.05em] text-black md:text-[64px]">
              You can’t grow with data you can’t trust
            </h2>

            <p className="mx-auto mt-6 max-w-[820px] text-[18px] leading-relaxed text-[#666]">
              Most business metrics rely on assumptions,
              not real-world activity — making it hard to
              measure what actually works.
            </p>
          </div>

          {/* CARDS */}
          <div className="mx-auto mt-16 grid max-w-[1300px] gap-6 md:grid-cols-2">
            
            {cards.map((card, index) => (
              <div
                key={index}
                className="group flex items-start gap-6 rounded-[28px] bg-white px-8 py-8 shadow-[0_20px_60px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(90,124,235,0.08)]"
              >
                
                {/* ICON */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-[#2D5BDB] text-[20px] text-[#2D5BDB] transition-transform duration-300 group-hover:scale-110">
                  <FaCircleXmark />
                </div>

                {/* TEXT */}
                <div>
                  
                  <h3 className="text-[24px] font-semibold leading-[1.1] text-black">
                    {card.title}
                  </h3>

                  <p className="mt-3 max-w-[380px] text-[17px] leading-relaxed text-[#666]">
                    {card.desc}
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