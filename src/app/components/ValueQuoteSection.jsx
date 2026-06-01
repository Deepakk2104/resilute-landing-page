import Image from "next/image";
import JoinWaitlistButton from "./JoinWaitlistButton";

export default function ValueQuoteSection() {
  return (
    <section className="px-4 py-10">
      <div className="relative overflow-hidden rounded-[42px]">

        {/* FIGMA BACKGROUND EXPORT */}
        <Image
          src="/images/value-quote-bg.jpg"
          alt=""
          width={1600}
          height={1200}
          priority
          className="h-auto w-full rounded-[42px]"
        />

        {/* CONTENT */}
        <div className="absolute inset-0 flex flex-col items-center pt-[55px] text-center">

          {/* QUOTE */}
          <h2 className="max-w-[1500px] text-[24px] font-medium leading-[0.99] tracking-[-0.06em] md:text-[30px] lg:text-[58px]">
  <span className="text-[#2B2B2B]">
    &quot;Every verified visit,
  </span>{" "}

  <span className="bg-[linear-gradient(90deg,#3F3F3F_0%,#A8A8A8_100%)] bg-clip-text text-transparent">
    every real interaction,
    <br />
    and every confirmed purchase becomes a
    <br />
    permanent record of value.&quot;
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