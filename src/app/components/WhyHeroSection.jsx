import Image from "next/image";

export default function WhyHeroSection() {
  return (
    <section className="px-4 py-10">
      
      <div className="relative overflow-hidden rounded-[42px] bg-[#f7f8fb]">
        
        {/* SOFT BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8f9fc] via-[#f7f8fb] to-[#eef4ff]" />

        {/* CONTENT */}
        <div className="relative z-10 flex min-h-[900px] flex-col items-center px-8 pt-16 text-center md:px-14 md:pt-20">
          
          {/* LABEL */}
          <p className="flex items-center gap-2 text-[15px] font-medium text-black">
            <span className="text-[#4D73E6]">✦</span>
            Why Resilute Exists
          </p>

          {/* HEADING */}
          <h1 className="mt-10 text-[62px] font-medium leading-[0.92] tracking-[-0.06em] text-black md:text-[110px]">
            
            Physical trust is broken

            <br />

            <span className="italic font-normal text-[#6D88DB]">
              We’re fixing it.
            </span>
          </h1>

          {/* ROBOT IMAGE */}
          <div className="relative mt-16 w-full flex-1">
            
            <Image
              src="/images/why-robot.png"
              alt="Why Resilute Robot"
              width={1400}
              height={1200}
              priority
              className="absolute bottom-[-120px] left-1/2 w-full max-w-[1200px] -translate-x-1/2 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}