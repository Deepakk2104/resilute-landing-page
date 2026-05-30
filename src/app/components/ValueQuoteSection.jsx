import Image from "next/image";
import JoinWaitlistButton from "./JoinWaitlistButton";

export default function ValueQuoteSection() {
  return (
    <section className="px-4 py-10">
      <div className="relative overflow-hidden rounded-[42px]">

        {/* FIGMA BACKGROUND EXPORT */}
        <Image
          src="/images/value-quote-bg.png"
          alt=""
          width={1600}
          height={1200}
          priority
          className="h-auto w-full rounded-[42px]"
        />

        {/* CONTENT */}
        <div className="absolute inset-0 flex flex-col items-center pt-[55px] text-center">

          {/* QUOTE */}
          <h2 className="max-w-[1500px] text-[34px] font-medium leading-[0.95] tracking-[-0.05em] md:text-[52px] lg:text-[72px]">
            <span className="text-[#2F2F2F]">
              &quot;Every verified visit, every real interaction,
              <br />
              and every confirmed
            </span>{" "}
            <span className="bg-[linear-gradient(90deg,#4A4A4A_0%,#A6A6A6_100%)] bg-clip-text text-transparent">
              purchase
              <br />
              becomes a permanent record of value.&quot;
            </span>
          </h2>

          {/* BUTTON */}
          <div className="mt-5">
            <JoinWaitlistButton />
          </div>

        </div>
      </div>
    </section>
  );
}