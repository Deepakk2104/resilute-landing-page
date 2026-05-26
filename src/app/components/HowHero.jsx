import Image from "next/image";
import JoinWaitlistButton from "./JoinWaitlistButton";

export default function HowHero() {
  return (
    <section className="px-4 pt-4">
      
      <div className="relative overflow-hidden rounded-[42px] bg-[#f5f7fb]">
        
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8f9fc] via-[#f8f7fb] to-[#edf4ff]" />

        {/* CONTENT */}
        <div className="relative z-10 flex min-h-[820px] items-center justify-between px-10 py-16 md:px-16">
          
          {/* LEFT */}
          <div className="max-w-[620px]">
            
            {/* LABEL */}
            <p className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.16em] text-black">
              <span className="text-[#5A7CEB]">✦</span>
              HOW RESILUTE WORKS
            </p>

            {/* HEADING */}
            <h1 className="mt-10 text-[84px] font-medium leading-[0.92] tracking-[-0.07em] text-black md:text-[108px]">
              
              Real places.
              <br />

              Real people.
              <br />

              <span className="italic font-normal text-[#5A7CEB]">
                Verified.
              </span>
            </h1>

            {/* BUTTON */}
            <div className="mt-10">
              <JoinWaitlistButton />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex flex-1 items-center justify-end">
            
            <Image
              src="/images/how-hero.png"
              alt="How Resilute Works"
              width={760}
              height={760}
              priority
              className="w-full max-w-[760px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}