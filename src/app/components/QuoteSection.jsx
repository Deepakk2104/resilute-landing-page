export default function QuoteSection() {
  return (
    <section className="px-4 py-10">
      
      <div className="relative overflow-hidden rounded-[42px] bg-black px-8 py-28 md:px-14">
        
        {/* DARK BLUE GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.28),transparent_40%)]" />

        {/* CENTER DARK GRADIENT */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.2),transparent_70%)]" />

        {/* LEFT PURPLE LINES */}
        <div className="absolute bottom-0 left-0 h-[420px] w-[420px] opacity-90">
          <div className="absolute inset-0 rounded-full border border-fuchsia-500/70 scale-[1.0]" />
          <div className="absolute inset-0 rounded-full border border-fuchsia-500/70 scale-[1.08]" />
          <div className="absolute inset-0 rounded-full border border-fuchsia-500/70 scale-[1.16]" />
          <div className="absolute inset-0 rounded-full border border-fuchsia-500/70 scale-[1.24]" />
          <div className="absolute inset-0 rounded-full border border-fuchsia-500/70 scale-[1.32]" />
          <div className="absolute inset-0 rounded-full border border-fuchsia-500/70 scale-[1.40]" />
          <div className="absolute inset-0 rounded-full border border-fuchsia-500/70 scale-[1.48]" />
          <div className="absolute inset-0 rounded-full border border-fuchsia-500/70 scale-[1.56]" />
        </div>

        {/* RIGHT PURPLE LINES */}
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] opacity-90">
          <div className="absolute inset-0 rounded-full border border-fuchsia-500/70 scale-[1.0]" />
          <div className="absolute inset-0 rounded-full border border-fuchsia-500/70 scale-[1.08]" />
          <div className="absolute inset-0 rounded-full border border-fuchsia-500/70 scale-[1.16]" />
          <div className="absolute inset-0 rounded-full border border-fuchsia-500/70 scale-[1.24]" />
          <div className="absolute inset-0 rounded-full border border-fuchsia-500/70 scale-[1.32]" />
          <div className="absolute inset-0 rounded-full border border-fuchsia-500/70 scale-[1.40]" />
          <div className="absolute inset-0 rounded-full border border-fuchsia-500/70 scale-[1.48]" />
          <div className="absolute inset-0 rounded-full border border-fuchsia-500/70 scale-[1.56]" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 mx-auto max-w-[1500px] text-center">
          
          <h2 className="mx-auto max-w-[1500px] text-[46px] font-medium leading-[1.2] tracking-[-0.05em] text-white md:text-[76px]">
            <span className="text-[#d1d5db]">
              “By building in Phase 1, you aren&apos;t just completing
              tasks; you are securing your foundational stake in
              the entire ecosystem&apos;s future.”
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}