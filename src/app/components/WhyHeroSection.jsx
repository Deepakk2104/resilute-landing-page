import Image from "next/image";

export default function WhyHeroSection() {
  return (
    <section className="px-4 py-10">
      <div className="relative overflow-hidden rounded-[42px] bg-[#F5F7FC]">
        
        {/* FLAT BACKGROUND */}
        <div className="absolute inset-0 bg-[#F5F7FC]" />

        {/* CONTENT */}
        <div className="relative z-10 flex min-h-[820px] flex-col items-center px-8 pt-[72px] text-center md:px-14">
          
          {/* LABEL */}
          <p className="flex items-center gap-2 text-[15px] font-medium text-black">
            <span className="text-[#4D73E6]">✦</span>
            Why Resilute Exists
          </p>

          {/* HEADING */}
         <h1 className="mt-10 text-[62px] font-medium leading-[1.05] tracking-[-0.06em] text-black md:text-[116px]">
  Physical trust is broken

  <span
    className="
      mt-2
      block
      pb-4
      bg-[linear-gradient(127deg,#2350AD_15%,rgba(35,80,173,0.35)_100%)]
      bg-clip-text
      italic
      font-normal
      text-transparent
    "
  >
    We&apos;re fixing it.
  </span>
</h1>

          {/* ROBOT */}
          <div className="relative mt-6 w-full flex-1">
            <Image
              src="/images/why-robot.png"
              alt="Why Resilute Robot"
              width={1400}
              height={1200}
              priority
              className="
                absolute
                bottom-[-40px]
                left-1/2
                w-full
                max-w-[1180px]
                -translate-x-1/2
                object-contain
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}