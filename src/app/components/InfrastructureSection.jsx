import Image from "next/image";
import JoinWaitlistButton from "./JoinWaitlistButton";

export default function InfrastructureSection() {
  return (
    <section className="px-4 py-10">
      
      <div className="relative overflow-hidden rounded-[42px] bg-[#f7f8fb]">
        
        {/* SOFT BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8f9fc] via-[#f7f8fb] to-[#eef3ff]" />

        {/* CONTENT */}
        <div className="relative z-10 grid min-h-[760px] items-center gap-10 lg:grid-cols-2">
          
          {/* LEFT SIDE */}
          <div className="relative flex h-full items-end justify-start overflow-visible">
            
            {/* BLUE GLOW */}
            <div className="absolute bottom-[-120px] left-[-100px] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,217,255,0.22),transparent_70%)] blur-[80px]" />

            {/* SWIRL */}
            <div className="absolute bottom-[-80px] left-[-120px] h-[520px] w-[720px] rounded-full border-[2px] border-[#4D73E6]/30 blur-[1px]" />

            {/* ROBOT */}
            <Image
              src="/images/infrastructure-robot.png"
              alt="Infrastructure Robot"
              width={900}
              height={900}
              priority
              className="relative z-10 w-full max-w-[760px] object-contain"
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="px-8 py-16 md:px-10">
            
            <div className="max-w-[620px]">
              
              {/* TITLE */}
              <h2 className="text-[58px] font-medium leading-[0.92] tracking-[-0.06em] text-black md:text-[92px]">
                
                We’re not
                <span className="text-black/45">
                  {" "}chasing trends,
                </span>

                <br />
                <br />

                <span className="text-[#4D73E6]">
                  We’re building real infrastructure.
                </span>
              </h2>

              {/* BUTTON */}
              <div className="mt-14">
                <JoinWaitlistButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}