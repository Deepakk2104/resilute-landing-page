const features = [
  {
    title: "Real-World Verification",
    description: "Verify visits and interactions with multi-layer signals.",
    image: "/images/features/verification.png",
  },
  {
    title: "Portable Reputation",
    description: "Build a reputation you own across platforms.",
    image: "/images/features/reputation.png",
  },
  {
    title: "Network-Powered Insights",
    description: "Track real engagement and unlock valuable insights.",
    image: "/images/features/insights.png",
  },
];

function FeatureCard({ title, description, image }) {
  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-[30px]
        bg-white
        shadow-[0px_4px_18px_-5px_#2350AD,0px_4px_30px_rgba(45,30,133,0.10)]
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-[0px_10px_35px_-5px_#2350AD,0px_10px_50px_rgba(45,30,133,0.18)]
      "
    >
      {/* IMAGE */}
      <div className="p-[6px]">
        <div className="h-[299px] overflow-hidden rounded-[25px] bg-[#EDEEFF]">
          <img
            src={image}
            alt={title}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="px-5 pb-7 pt-5">
        <h3
          className="
            text-[20.5px]
            font-semibold
            leading-[24px]
            tracking-[-0.44px]
            text-[#101011]
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-3
            text-[14.9px]
            font-medium
            leading-[22px]
            tracking-[-0.32px]
            text-[#606266]
          "
        >
          {description}
        </p>
      </div>
    </article>
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
            Verify real-world interactions, build portable reputation,
            and unlock value from genuine participation.
          </p>
        </header>

        <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}