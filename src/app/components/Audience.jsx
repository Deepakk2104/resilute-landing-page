import { ArrowRight, Check, Store, User } from "lucide-react";

const bottomFeatures = [
  {
    title: "Verified Activity",
    description: "Every visit and interaction is securely verified.",
  },
  {
    title: "Verified Footfall",
    description: "Track real visits, not fake impressions.",
  },
  {
    title: "Earn Real Value",
    description: "Unlock rewards and opportunities from participation.",
  },
];

function CtaButton({ children }) {
  return (
    <button
      type="button"
      className="btn-gradient mt-8 flex w-full items-center justify-center gap-3 rounded-2xl px-6 py-4 text-[16px] md:mt-10"
    >
      {children}
      <ArrowRight size={20} strokeWidth={2.5} />
    </button>
  );
}

export default function Audience() {
  return (
    <section id="audience" className="section-padding !py-12 md:!py-14">
      <div className="section-container">
        <div
          className="overflow-hidden rounded-[40px] px-6 py-16 md:px-10 md:py-20"
          style={{
            backgroundColor: "#0a0a0a",
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
          }}
        >
          <header className="text-center">
            <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-[#9ca3af] md:text-[13px]">
              Who Resilute is for
            </p>
            <h2 className="mx-auto mt-4 max-w-[800px] text-[32px] font-bold leading-tight text-white md:text-[44px] lg:text-[52px]">
              Built for both sides of every interaction
            </h2>
          </header>

          <div className="mt-12 grid gap-6 md:mt-14 md:grid-cols-2 md:gap-8">
            <article className="card-hover relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#0f172a] p-8 md:p-10">
              <div className="absolute -left-20 -top-20 h-[280px] w-[280px] rounded-full bg-[#3b82f6] opacity-30 blur-[80px]" />
              <div className="relative">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">
                  For Customers
                </p>
                <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#3F73D8] transition-transform duration-300 group-hover:scale-110">
                  <User className="text-white" size={22} strokeWidth={2} />
                </div>
                <h3 className="mt-6 text-[26px] font-bold leading-snug text-white md:text-[28px]">
                  Build a reputation that follows you.
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-white/70 md:text-[16px]">
                  Every verified visit and purchase builds your reputation score
                  across participating merchants.
                </p>
                <CtaButton>Start building reputation</CtaButton>
              </div>
            </article>

            <article className="card-hover relative overflow-hidden rounded-[32px] p-8 md:p-10">
              <div
                className="absolute inset-0"
                style={{
                  background: `
                    radial-gradient(ellipse 80% 60% at 20% 30%, rgba(167, 139, 250, 0.9), transparent 50%),
                    radial-gradient(ellipse 70% 50% at 80% 20%, rgba(147, 197, 253, 0.95), transparent 45%),
                    radial-gradient(ellipse 60% 70% at 60% 80%, rgba(196, 181, 253, 0.8), transparent 50%),
                    linear-gradient(135deg, #e9d5ff 0%, #bfdbfe 40%, #f0f9ff 100%)
                  `,
                }}
              />
              <div className="relative">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#4b5563]">
                  For Merchants
                </p>
                <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1e40af]">
                  <Store className="text-white" size={22} strokeWidth={2} />
                </div>
                <h3 className="mt-6 text-[26px] font-bold leading-snug text-black md:text-[28px]">
                  Prove your marketing is working.
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[#374151] md:text-[16px]">
                  Track verified footfall, confirmed purchases, and real customer
                  engagement.
                </p>
                <CtaButton>Explore merchant tools</CtaButton>
              </div>
            </article>
          </div>

          <div className="mt-14 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-8">
            {bottomFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group flex gap-4 transition-opacity duration-300 hover:opacity-90 md:block"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#3F73D8]/20 transition-colors duration-300 group-hover:bg-[#3F73D8]/35 md:mb-4">
                  <Check className="text-[#6B9AE8]" size={18} strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-[18px] font-bold text-white md:text-[20px]">
                    {feature.title}
                  </h4>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#9ca3af] md:text-[15px]">
                    {feature.description}
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
