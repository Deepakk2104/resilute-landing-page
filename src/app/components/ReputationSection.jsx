import {
  FaUser,
  FaShieldHalved,
  FaCircleCheck,
} from "react-icons/fa6";

export default function ReputationSection() {
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
        <div className="relative z-10 grid items-center gap-16 lg:grid-cols-2">
          
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-8 lg:flex-row">
            
            {/* CARD 1 */}
            <div className="flex-1 rounded-[34px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(90,124,235,0.12)]">
              
              {/* TOP */}
              <div className="flex items-start justify-between">
                
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#2D5BDB] text-white">
                  <FaUser />
                </div>

                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#666]">
                  Tier 01
                </p>
              </div>

              {/* TITLE */}
              <h3 className="mt-10 text-[38px] font-semibold text-black">
                New user
              </h3>

              {/* LIST */}
              <div className="mt-8 space-y-5">
                
                {[
                  "Limited verified activity",
                  "Lower consistency",
                  "Minimal score growth",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 text-[20px] text-[#444]"
                  >
                    <span className="text-[#bbb]">—</span>
                    {item}
                  </div>
                ))}
              </div>

              {/* LINE */}
              <div className="mt-16 h-[1px] w-full bg-[#ececec]" />

              {/* SCORE */}
              <div className="mt-8">
                
                <div className="h-2 w-full rounded-full bg-[#d9d9df]">
                  <div className="h-full w-[8%] rounded-full bg-[#2D5BDB]" />
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm font-semibold uppercase text-[#444]">
                    Reputation Score
                  </p>

                  <p className="text-sm font-bold text-black">
                    12 / 1000
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="flex-1 rounded-[34px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(90,124,235,0.12)]">
              
              {/* TOP */}
              <div className="flex items-start justify-between">
                
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#2D5BDB] text-white">
                  <FaShieldHalved />
                </div>

                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#666]">
                  Elite Tier
                </p>
              </div>

              {/* TITLE */}
              <h3 className="mt-10 text-[38px] font-semibold text-black">
                Active participant
              </h3>

              {/* LIST */}
              <div className="mt-8 space-y-5">
                
                {[
                  "Frequent verified visits",
                  "High consistency",
                  "Strong score growth",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 text-[20px] text-[#444]"
                  >
                    <FaCircleCheck className="text-[#5A7CEB]" />
                    {item}
                  </div>
                ))}
              </div>

              {/* LINE */}
              <div className="mt-16 h-[1px] w-full bg-[#ececec]" />

              {/* SCORE */}
              <div className="mt-8">
                
                <div className="h-2 w-full rounded-full bg-[#d9d9df]">
                  <div className="h-full w-[84%] rounded-full bg-cyan-400" />
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm font-semibold uppercase text-[#444]">
                    Reputation Score
                  </p>

                  <p className="text-sm font-bold text-black">
                    842 / 1000
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            
            {/* LABEL */}
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#4D73E6]">
              Layer 02 — Reputation
            </p>

            {/* HEADING */}
            <h2 className="mt-6 max-w-[555px] text-[58px] font-medium leading-[0.92] tracking-[-0.06em] text-black md:text-[88px]">
              Not all participation is equal
            </h2>

            {/* DESCRIPTION */}
            <div className="mt-10 max-w-[620px] space-y-8 text-[24px] leading-relaxed text-[#666]">
              
              <p>
                Resilute builds a reputation score based on
                real-world activity. Consistent and verified
                participation increases your value over time.
              </p>

              <p>
                Frequent, verified interactions carry more
                weight than one-time actions. The system
                rewards consistency, not shortcuts.
              </p>
            </div>

            {/* FOOTER */}
            <div className="mt-14 flex items-center gap-3 text-[22px] text-black">
              
              <FaShieldHalved className="text-[#4D73E6]" />

              <p>Trust Protocol v2.4 Active</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}