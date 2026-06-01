import {
  FaBullhorn,
  FaLocationDot,
  FaShieldHalved,
  FaTag,
} from "react-icons/fa6";

const problems = [
  {
    icon: "/images/icon.png",
    title: "Loyalty programs no one uses",
    desc: "Most customers forget or ignore them. There’s no lasting value.",
  },
  {
    icon: "/images/icon2.png",
    title: "Marketing with no proof",
    desc: "Businesses spend money without knowing what actually drives visits.",
  },
  {
    icon: "/images/icon3.png",
    title: "Fake check-ins",
    desc: "Location systems can be spoofed, creating false engagement.",
  },
  {
    icon: "/images/icon4.png",
    title: "No verified real-world data",
    desc: "There’s no reliable way to prove real customer activity.",
  },
];

export default function ProblemSection() {
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

{/* FIGMA CENTER GLOW */}
<div
  className="absolute left-1/2 top-[420px] -translate-x-1/2"
  style={{
    width: "380px",
    height: "380px",
    background: "#7AA8FF",
    filter: "blur(180px)",
    opacity: 0.22,
  }}
/>

<div
  className="absolute left-1/2 top-[470px] -translate-x-1/2"
  style={{
    width: "520px",
    height: "180px",
    background: "#A39CEC",
    filter: "blur(220px)",
    opacity: 0.35,
  }}
/>

        {/* CONTENT */}
        <div className="relative z-10">
          
          {/* TOP */}
          <div className="mx-auto max-w-[950px] text-center">
            
            <h2 className="text-[42px] font-medium leading-[1] tracking-[-0.05em] text-black md:text-[64px]">
              The problem we’re solving
            </h2>

            <p className="mx-auto mt-6 max-w-[850px] text-[18px] leading-relaxed text-[#666]">
              Today’s systems don’t prove real-world engagement.
              Businesses operate on assumptions, not verified interactions.
            </p>
          </div>

          {/* PROBLEM CARDS */}
          <div className="mx-auto mt-16 grid max-w-[1400px] gap-6 md:grid-cols-2">
            
            {problems.map((problem, index) => (
              <div
                key={index}
                className="rounded-[30px] bg-white px-8 py-8 shadow-[0_15px_50px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(90,124,235,0.08)]"
              >
                
                {/* ICON */}
               <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#f4f7ff]">
  <img
    src={problem.icon}
    alt={problem.title}
    className="h-9 w-9 object-contain"
  />
</div>

                {/* TITLE */}
                <h3 className="mt-8 text-[28px] font-semibold leading-[1.1] text-black">
                  {problem.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-4 max-w-[520px] text-[17px] leading-relaxed text-[#666]">
                  {problem.desc}
                </p>
              </div>
            ))}
          </div>

          {/* BOTTOM CTA */}
          <div className="relative mt-10 overflow-hidden rounded-[34px] bg-[#05070d] px-8 py-10 md:px-12">
            
            {/* GLOW */}
            <div className="absolute right-[-120px] top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-[#2D5BDB]/40 blur-[90px]" />

            {/* CONTENT */}
            <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              
              {/* LEFT */}
              <div>
                
                <div className="flex h-12 w-12 items-center justify-center">
  <img
    src="/images/iconsh.png"
    alt="Shield"
    className="h-12 w-12 object-contain"
  />
</div>

                <h3 className="mt-6 max-w-[620px] text-[40px] font-medium leading-[1] tracking-[-0.04em] text-white">
                  No one has built a verified participation layer
                </h3>

                <p className="mt-5 text-[18px] text-white">
                  That’s exactly what Resilute is solving.
                </p>
              </div>

              {/* BUTTON */}
              <button className="flex h-16 items-center justify-center rounded-full bg-[#4D73E6] px-10 text-[18px] font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-[#3762df]">
                Discover the layer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}