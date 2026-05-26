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
        <div className="rounded-[32px] bg-black px-4 py-10 md:rounded-[40px] md:px-8 md:py-12">
          <div className="grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-4 lg:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="card-hover flex min-h-[140px] cursor-default flex-col items-center justify-center rounded-[24px] bg-gradient-to-br from-[#eef3ff] via-[#f7f9ff] to-white px-6 py-10 md:min-h-[160px] md:rounded-[28px] md:py-12"
              >
                <p className="text-[40px] font-bold leading-none tracking-tight text-[#1a1a1a] md:text-[48px]">
                  {stat.value}
                </p>
                <p className="mt-3 text-[15px] font-normal text-[#6b7280] md:text-[16px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
