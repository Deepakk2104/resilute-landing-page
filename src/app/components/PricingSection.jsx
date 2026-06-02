import {
  FaChartColumn,
  FaCircleCheck,
} from "react-icons/fa6";

import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { FiUser } from "react-icons/fi";

export default function PricingSection() {
  return (
    <section className="px-4 py-10">
      
      <div className="relative overflow-hidden rounded-[42px] bg-[#f7f8fb] px-8 py-16 md:px-14">
        
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
        {/* LEFT SIDE GLOW */}
<div
  className="absolute left-[-220px] top-1/2 -translate-y-1/2"
  style={{
    width: "530px",
    height: "179px",
    background: "#A39CEC",
    filter: "blur(240px)",
    opacity: 0.55,
  }}
/>

{/* RIGHT SIDE GLOW */}
<div
  className="absolute right-[-220px] top-1/2 -translate-y-1/2"
  style={{
    width: "530px",
    height: "179px",
    background: "#A39CEC",
    filter: "blur(240px)",
    opacity: 0.55,
  }}
/>

        {/* CONTENT */}
        <div className="relative z-10 grid items-center gap-16 lg:grid-cols-2">
          
          {/* LEFT SIDE */}
          <div className="max-w-[520px]">
            
            {/* HEADING */}
            <h2 className="text-[48px] font-medium leading-[0.98] tracking-[-0.05em] text-black md:text-[50px]">
              Performance-based,
              <br />
              built for growth.
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-10 text-[18px] leading-relaxed text-[#666]">
              Start using Resilute at no cost. After the pilot period,
              you only pay when we deliver measurable results for your business.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center">
            
            {/* CARD */}
            <div className="w-full max-w-[620px] rounded-[34px] bg-white p-10 shadow-[0_25px_80px_rgba(0,0,0,0.06)]">
              
              {/* TOP */}
              <div>
                
                <p className="text-[18px] font-semibold text-[#444]">
                  Pilot Access
                </p>

                <div className="mt-3 flex items-end gap-3">
                  
                  <h3 className="text-[72px] font-semibold leading-none text-black">
                    Free
                  </h3>

                  <p className="mb-2 text-[18px] text-[#666]">
                    for 3 months
                  </p>
                </div>

                <p className="mt-6 max-w-[460px] text-[17px] leading-relaxed text-[#666]">
                  Full access to all enterprise features during your onboarding period.
                </p>
              </div>

              {/* FEATURES */}
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                
                {[
                  {
                    icon: <FaCircleCheck />,
                    text: "Enterprise Dashboard",
                  },
                  {
                    icon: <HiOutlineCog6Tooth />,
                    text: "API Infrastructure",
                  },
                  {
                    icon: <FaChartColumn />,
                    text: "Predictive Analytics",
                  },
                  {
                    icon: <FiUser />,
                    text: "Dedicated Success Manager",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-[15px] text-[#444]"
                  >
                    <span className="text-[#2D5BDB]">
                      {item.icon}
                    </span>

                    {item.text}
                  </div>
                ))}
              </div>

              {/* DIVIDER */}
              <div className="relative my-10 flex items-center">
                
                <div className="h-[1px] w-full bg-[#ececec]" />

                <span className="absolute left-1/2 -translate-x-1/2 bg-white px-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#999]">
                  After Pilot
                </span>
              </div>

              {/* PRICING BOX */}
              <div className="rounded-[26px] bg-[#f4f6fa] px-8 py-8 text-center">
                
                <h4 className="text-[24px] font-semibold text-black">
                  Performance-Based Pricing
                </h4>

                <p className="mt-4 text-[16px] leading-relaxed text-[#666]">
                  You only pay when measurable results are delivered
                </p>

                {/* BADGE */}
                <div className="mt-6 inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#2D5BDB] shadow-sm">
                  ● No uplift, no fee.
                </div>
              </div>

              {/* BUTTON */}
              <button className="mt-10 flex h-16 w-full items-center justify-center rounded-full bg-[#2D5BDB] text-[18px] font-semibold text-white transition-all duration-300 hover:scale-[1.01] hover:bg-[#1f4fc9]">
                Apply for Pilot Access
              </button>

              {/* FOOTER */}
              <p className="mt-6 text-center text-sm text-[#999]">
                Limited slots available for Q4. Subject to application review.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}