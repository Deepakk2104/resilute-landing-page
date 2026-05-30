import Image from "next/image";
import JoinWaitlistButton from "./JoinWaitlistButton";

export default function RealCustomersSection() {
  return (
    <section className="px-4 py-10">
      <div className="relative overflow-hidden rounded-[42px]">

        {/* FIGMA EXPORT */}
        <Image
          src="/images/real-customers-section-bg.jpg"
          alt=""
          width={1600}
          height={900}
          priority
          className="h-auto w-full"
        />

        {/* CONTENT */}
        <div className="absolute inset-0">

          <div className="absolute right-[8%] top-[10%] max-w-[420px]">

            {/* HEADING */}
            <h2 className="leading-[0.92] tracking-[-0.06em]">

              <div className="text-[72px] font-medium text-[#2F2F2F]">
                We’re not
              </div>

              <div className="text-[72px] font-medium text-[#7A7A7A]">
                tracking clicks,
              </div>

              <div
                className="
                  mt-4
                  bg-[linear-gradient(90deg,#4B6FD8_0%,#2F57C5_100%)]
                  bg-clip-text
                  text-[72px]
                  font-medium
                  text-transparent
                "
              >
                We’re
              </div>

              <div
                className="
                  bg-[linear-gradient(90deg,#4B6FD8_0%,#2F57C5_100%)]
                  bg-clip-text
                  text-[72px]
                  font-medium
                  leading-[0.95]
                  text-transparent
                "
              >
                measuring real
              </div>

              <div
                className="
                  bg-[linear-gradient(90deg,#4B6FD8_0%,#2F57C5_100%)]
                  bg-clip-text
                  text-[72px]
                  font-medium
                  leading-[0.95]
                  text-transparent
                "
              >
                customers.
              </div>
            </h2>

            {/* BUTTON */}
            <div className="mt-8">
              <JoinWaitlistButton text="See It in Action" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}