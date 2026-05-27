import Image from "next/image";

export default function AboutHeroSection() {
  return (
    <section className="px-4 py-6">
      
      <div className="relative overflow-hidden rounded-[42px] bg-[#f7f8fb]">
        
        {/* BACKGROUND GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ffe8f8] via-[#f8f9fc] to-[#dff6ff]" />

        {/* CONTENT */}
        <div className="relative z-10 flex min-h-[1050px] flex-col items-center px-8 pt-16 text-center md:px-14">
          
          {/* TOP LABEL */}
          <p className="flex items-center gap-2 text-[14px] font-medium uppercase tracking-[0.16em] text-black">
            <span className="text-[#4D73E6]">✦</span>
            About Resilute
          </p>

          {/* HEADING */}
          <h1 className="mt-10 max-w-[1450px] text-[58px] font-medium leading-[0.92] tracking-[-0.06em] text-black md:text-[108px]">
            
            Building the participation layer for the

            <br />

            <span className="italic font-normal text-[#5A7CEB]">
              Physical Economy
            </span>
          </h1>

          {/* VISUAL */}
         {/* VISUAL */}
<div className="relative mt-auto flex w-full items-end justify-center">
  
  {/* CITY BACKGROUND */}
  <Image
    src="/images/about-city-bg.png"
    alt="About Background"
    width={1800}
    height={1200}
    priority
    className="w-full object-contain"
  />

  {/* ROBOT */}
  <Image
    src="/images/about-robot.png"
    alt="About Robot"
    width={760}
    height={920}
    priority
    className="absolute bottom-[-40px] left-1/2 z-20 w-full max-w-[620px] -translate-x-1/2 object-contain"
  />
</div>
        </div>
      </div>
    </section>
  );
}