import Image from "next/image";
import JoinWaitlistButton from "./JoinWaitlistButton";

export default function ValueQuoteSection() {
  return (
    <section className="px-4 py-10">
      
      <div className="relative overflow-hidden rounded-[42px] bg-[#f7f8fb]">
        
        {/* SOFT BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8f9fc] via-[#f7f8fb] to-[#eef3ff]" />

        {/* CONTENT */}
        <div className="relative z-10 flex min-h-[950px] flex-col items-center px-8 pt-16 text-center md:px-14">
          
          {/* QUOTE */}
          <h2 className="max-w-[1350px] text-[44px] font-medium leading-[0.95] tracking-[-0.06em] text-black md:text-[92px]">
  &quot;Every verified visit, every real interaction,
  and every confirmed
  <span className="text-black/40">
    {" "}purchase becomes a permanent record of value.&quot;
  </span>
</h2>

          {/* BUTTON */}
          <div className="mt-12">
            <JoinWaitlistButton />
          </div>

          {/* BOTTOM VISUAL */}
          <div className="relative mt-auto flex w-full items-end justify-center">
            
            {/* BACKGROUND ELLIPSE */}
            <div className="absolute bottom-[-120px] h-[620px] w-[1200px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,217,255,0.28),transparent_55%)] blur-[70px]" />

            {/* WAVES */}
            <div className="absolute bottom-[-120px] h-[720px] w-[1400px] rounded-full opacity-90">
              <div
                className="h-full w-full"
                style={{
                  background: `
                    radial-gradient(circle at center,
                    transparent 48%,
                    rgba(0,217,255,0.7) 49%,
                    transparent 50%)
                  `,
                  backgroundSize: "40px 40px",
                  maskImage:
                    "radial-gradient(circle at center, black 55%, transparent 72%)",
                }}
              />
            </div>

            {/* ROBOT */}
            <Image
              src="/images/value-robot.png"
              alt="Value Robot"
              width={760}
              height={900}
              priority
              className="relative z-10 w-full max-w-[760px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}