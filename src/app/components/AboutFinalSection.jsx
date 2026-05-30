import Image from "next/image";
import JoinWaitlistButton from "./JoinWaitlistButton";

export default function AboutFinalSection() {
  return (
    <section className="px-4 py-10">
      <div className="relative overflow-hidden rounded-[42px]">

        {/* FIGMA BACKGROUND EXPORT */}
        <Image
          src="/images/about-final-bg.jpg"
          alt=""
          width={1600}
          height={900}
          priority
          className="h-auto w-full"
        />

        {/* CONTENT */}
        <div className="absolute inset-0">

          <div className="absolute left-[7%] top-[28%] max-w-[520px]">

            {/* HEADING */}
            <h2 className="leading-[0.92] tracking-[-0.06em]">

              <div className="text-[72px] font-medium text-[#2F2F2F]">
                Build with
              </div>

              <div
                className="
                  bg-[linear-gradient(90deg,#2F2F2F_0%,#8D8D8D_100%)]
                  bg-clip-text
                  text-[72px]
                  font-medium
                  text-transparent
                  leading-[0.92]
                "
              >
                real-world
              </div>

              <div
                className="
                  bg-[linear-gradient(90deg,#4D73E6_0%,#335FCB_55%,#4D73E6_100%)]
                  bg-clip-text
                  text-[72px]
                  font-medium
                  text-transparent
                  leading-[0.92]
                "
              >
                proof
              </div>

            </h2>

            {/* DESCRIPTION */}
            <p className="mt-8 max-w-[500px] text-[16px] leading-[1.7] text-[#4B4B4B]">
              Whether you&apos;re a business, partner, or just curious
              we&apos;d love to connect.
            </p>

            {/* BUTTON */}
            <div className="mt-10">
              <JoinWaitlistButton text="Get early access" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}