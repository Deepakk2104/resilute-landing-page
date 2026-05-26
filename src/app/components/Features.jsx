const features = [
  {
    title: "Real-World Verification",
    description: "Verify visits and interactions with multi-layer signals.",
    image: "/images/features/verification.png",
    highlighted: false,
  },
  {
    title: "Portable Reputation",
    description: "Build a reputation you own across platforms.",
    image: "/images/features/reputation.png",
    highlighted: true,
  },
  {
    title: "Network-Powered Insights",
    description: "Track real engagement and unlock valuable insights.",
    image: "/images/features/insights.png",
    highlighted: false,
  },
];

function FeatureCard({ title, description, image, highlighted }) {
  const card = (
    <article className="card-hover flex h-full flex-col overflow-hidden rounded-[32px] bg-white shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
      <div className="h-[200px] w-full shrink-0 overflow-hidden md:h-[220px]">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col px-7 pb-8 pt-6 md:px-8 md:pb-9 md:pt-7">
        <h3 className="text-[22px] font-bold leading-snug text-black md:text-[24px]">
          {title}
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
          {description}
        </p>
      </div>
    </article>
  );

  if (!highlighted) {
    return card;
  }

  return (
    <div className="rounded-[34px] bg-gradient-to-br from-[#5A7CEB] via-[#7B6FEB] to-[#9B6CF6] p-[3px] shadow-[0_0_48px_rgba(90,124,235,0.35)] transition-shadow duration-300 hover:shadow-[0_0_64px_rgba(90,124,235,0.5)]">
      {card}
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="section-padding grid-bg">
      <div className="section-container">
        <header className="mx-auto max-w-[900px] text-center">
          <h2 className="text-[32px] font-bold leading-tight tracking-tight text-black md:text-[44px] lg:text-[52px]">
            The infrastructure for real-world reputation
          </h2>
          <p className="mx-auto mt-5 max-w-[640px] text-[16px] leading-relaxed text-[#666666] md:text-[18px]">
            Verify real-world interactions, build portable reputation, and unlock
            value from genuine participation.
          </p>
        </header>

        <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
