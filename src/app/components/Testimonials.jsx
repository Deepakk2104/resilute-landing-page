import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Finally, a system that connects real-world actions with digital trust.",
    name: "Toni MacGyver",
    role: "Early User",
    variant: "light",
    offset: "md:ml-12",
    avatar: "from-[#f97316] to-[#ea580c]",
    initials: "TM",
  },
  {
    quote:
      "Resilute makes it possible to measure real engagement — not just clicks.",
    name: "Cak Mukidi",
    role: "Merchant Partner",
    variant: "blue",
    offset: "md:-ml-4 md:z-10",
    avatar: "from-[#1e3a8a] to-[#312e81]",
    initials: "CM",
  },
  {
    quote:
      "A new standard for reputation built on verified interactions.",
    name: "Homer Pollich",
    role: "Beta Tester",
    variant: "light",
    offset: "md:ml-12",
    avatar: "from-[#64748b] to-[#475569]",
    initials: "HP",
  },
];

function StarRating({ light }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={
            light
              ? "fill-white text-white"
              : "fill-[#F2994A] text-[#F2994A]"
          }
          strokeWidth={0}
        />
      ))}
    </div>
  );
}

function TestimonialCard({
  quote,
  name,
  role,
  variant,
  offset,
  avatar,
  initials,
}) {
  const isBlue = variant === "blue";

  return (
    <article className={`relative ${offset} pl-14 md:pl-16`}>
      <div
        className={`absolute left-0 top-1/2 z-20 flex h-[72px] w-[72px] -translate-y-1/2 items-center justify-center rounded-full border-4 bg-gradient-to-br text-lg font-semibold text-white shadow-lg transition-transform duration-300 group-hover:scale-105 md:h-[80px] md:w-[80px] ${avatar} ${
          isBlue ? "border-[#7dd3fc]" : "border-white"
        }`}
      >
        {initials}
      </div>

      <div
        className={`group card-hover relative rounded-2xl px-6 py-6 md:rounded-[20px] md:px-8 md:py-7 ${
          isBlue
            ? "bg-[#38bdf8] text-white hover:brightness-105"
            : "bg-white text-[#374151]"
        }`}
      >
        <p
          className={`pr-2 text-[15px] leading-relaxed md:text-[16px] ${
            isBlue ? "text-white/95" : "text-[#6b7280]"
          }`}
        >
          &ldquo;{quote}&rdquo;
        </p>

        <div className="mt-5 flex items-end justify-between gap-4">
          <div>
            <p
              className={`text-[16px] font-bold md:text-[17px] ${
                isBlue ? "text-white" : "text-black"
              }`}
            >
              {name}
            </p>
            <p
              className={`mt-0.5 text-[13px] md:text-[14px] ${
                isBlue ? "text-white/80" : "text-[#9ca3af]"
              }`}
            >
              {role}
            </p>
          </div>
          <StarRating light={isBlue} />
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding grid-bg">
      <div className="section-container grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
        <div className="max-w-[520px]">
          <h2 className="text-[32px] font-bold leading-tight tracking-tight text-black md:text-[44px] lg:text-[48px]">
            Built on trust. Backed by real world activity.
          </h2>
          <p className="mt-6 text-[16px] leading-relaxed text-[#666666] md:text-[18px]">
            Resilute is designed to bring trust to real-world interactions
            helping users and businesses rely on verified data, not assumptions.
          </p>
        </div>

        <div className="relative mx-auto flex w-full max-w-[520px] flex-col gap-5 md:max-w-[560px] md:gap-6">
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
