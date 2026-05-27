import Image from "next/image";
import JoinWaitlistButton from "./JoinWaitlistButton";

export default function RealCustomersSection() {
  return (
    <section className="px-4 py-10">
      
      <div className="relative overflow-hidden rounded-[42px] bg-[#f7f8fb]">
        
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8f9fc] via-[#f7f8fb] to-[#eef4ff]" />

        {/* CONTENT */}
        <div className="relative z-10 grid min-h-[700px] items-center gap-10 lg:grid-cols-2">
          
          {/* LEFT SIDE */}
          <div className="relative flex h-full items-end">
            
            {/* BACKGROUND WAVE IMAGE */}
            <Image
              src="/images/real-customers-bg.png"
              alt=""
              fill
              className="object-cover object-left-bottom"
              priority
            />

            {/* ROBOT IMAGE */}
            <div className="relative z-10">
              <Image
                src="/images/real-customers-robot.png"
                alt="Real Customers Robot"
                width={900}
                height={900}
                priority
                className="w-full max-w-[900px] object-contain"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative z-10 flex justify-center px-8 py-16 md:px-12">
            
            <div className="max-w-[620px]">
              
              {/* HEADING */}
              <h2 className="text-[56px] font-medium leading-[0.92] tracking-[-0.06em] text-black md:text-[88px]">
                
                We’re not
                <span className="text-black/45">
                  {" "}tracking clicks,
                </span>

                <br />

                <span className="text-[#4D73E6]">
                  We’re
                  <br />
                  measuring real
                  <br />
                  customers.
                </span>
              </h2>

              {/* BUTTON */}
              <div className="mt-12">
                <JoinWaitlistButton text="See It in Action" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}