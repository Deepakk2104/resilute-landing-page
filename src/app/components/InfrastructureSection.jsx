import Image from "next/image";
import JoinWaitlistButton from "./JoinWaitlistButton";

export default function InfrastructureSection() {
  return (
    <section className="px-4 py-10">
      <div className="relative overflow-hidden rounded-[42px]">

        {/* FIGMA BACKGROUND EXPORT */}
        <Image
          src="/images/infrastructure-bg.png"
          alt=""
          width={1600}
          height={900}
          priority
          className="h-auto w-full"
        />

        {/* CONTENT */}
        <div className="absolute inset-0">

          <div className="absolute right-[8%] top-[16%] max-w-[520px]">

            {/* HEADING */}
            <h2 className="leading-[0.92] tracking-[-0.06em]">

              <div className="text-[72px] font-medium text-[#2F2F2F]">
                We&apos;re not
              </div>

              <div
                className="
                  bg-[linear-gradient(90deg,#2F2F2F_0%,#8F8F8F_100%)]
                  bg-clip-text
                  text-[72px]
                  font-medium
                  text-transparent
                "
              >
                chasing trends,
              </div>

              <div
                className="
                  mt-8
                  bg-[linear-gradient(90deg,#4D73E6_0%,#335FCB_55%,#5E7FD7_100%)]
                  bg-clip-text
                  text-[72px]
                  font-medium
                  leading-[0.95]
                  text-transparent
                "
              >
                We&apos;re building real
              </div>

              <div
                className="
                  bg-[linear-gradient(90deg,#4D73E6_0%,#335FCB_55%,#5E7FD7_100%)]
                  bg-clip-text
                  text-[72px]
                  font-medium
                  leading-[0.95]
                  text-transparent
                "
              >
                infrastructure.
              </div>

            </h2>

            {/* BUTTON */}
            <div className="mt-10">
              <JoinWaitlistButton />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}