import Image from "next/image";

export default function QuoteSection() {
  return (
    <section className="px-4 py-10">
      <div className="relative overflow-hidden rounded-[42px]">

        {/* FIGMA BACKGROUND EXPORT */}
        <Image
          src="/images/quote-bg.png"
          alt=""
          width={1600}
          height={700}
          priority
          className="h-auto w-full"
        />

        {/* CONTENT */}
        <div className="absolute inset-0 flex items-center justify-center">

          <div className="max-w-[980px] text-center">

            <h2 className="text-[38px] font-medium leading-[1.18] tracking-[-0.04em] text-white">

              “By building in Phase 1, you aren&apos;t just completing

              <span className="bg-[linear-gradient(90deg,#C9CDD5_0%,#8F97A8_100%)] bg-clip-text text-transparent">
                {" "}tasks; you are securing your foundational stake in
              </span>

              <br />

              <span className="bg-[linear-gradient(90deg,#C9CDD5_0%,#8F97A8_100%)] bg-clip-text text-transparent">
                the entire ecosystem&apos;s future.”
              </span>

            </h2>

          </div>

        </div>
      </div>
    </section>
  );
}