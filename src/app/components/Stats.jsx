const stats = [
  { value: "150+", label: "Merchants" },
  { value: "98%", label: "Accuracy" },
  { value: "82%", label: "Interactions" },
  { value: "24/7", label: "Active" },
];

export default function Stats() {
  return (
    <section id="stats" className="section-padding !py-10 md:!py-12">
      <div className="section-container">
        <div className="grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="
                relative
                h-[180px]
                overflow-hidden
                rounded-[20px]
                bg-white
                shadow-[0_10px_40px_rgba(0,0,0,0.03)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)]
              "
            >
              {/* TOP RIGHT GLOW */}
              <div
                className="
                  absolute
                  right-[-110px]
                  top-[-110px]
                  h-[215px]
                  w-[215px]
                  rounded-full
                  bg-[#2350AD]/25
                  blur-[90px]
                "
              />

              {/* BOTTOM LEFT GLOW */}
              <div
                className="
                  absolute
                  bottom-[-110px]
                  left-[-110px]
                  h-[215px]
                  w-[215px]
                  rounded-full
                  bg-[#2350AD]/25
                  blur-[90px]
                "
              />

              {/* CONTENT */}
              <div className="relative z-10 flex h-full flex-col items-center justify-center">
                <h3
                  className="
                    text-[48px]
                    font-bold
                    leading-[60px]
                    tracking-[-1.5px]
                    text-transparent
                    bg-[linear-gradient(149.92deg,#000000_14.38%,#666666_81.66%)]
                    bg-clip-text
                  "
                >
                  {stat.value}
                </h3>

                <p className="mt-2 text-center text-[18px] font-normal text-black/60">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}