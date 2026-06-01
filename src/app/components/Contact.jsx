import Image from "next/image";

function FormField({
  label,
  placeholder,
  type = "text",
  className = "",
  multiline = false,
}) {
  return (
    <div className={className}>
      <label className="text-[11px] font-semibold uppercase tracking-[0.12em] text-black">
        {label}
      </label>

      {multiline ? (
        <textarea
          rows={2}
          placeholder={placeholder}
          className="input-underline resize-none"
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="input-underline"
        />
      )}
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-[32px]">

          {/* EXPORTED FIGMA BACKGROUND */}
          <Image
            src="/images/contact-bg.jpg"
            alt=""
            width={1600}
            height={900}
            className="h-auto w-full"
            priority
          />

          {/* CONTENT OVERLAY */}
          <div className="absolute inset-0 px-[7%] py-[8%]">

            {/* HEADING */}
            <h2 className="text-[32px] font-bold tracking-[-0.03em] text-black md:text-[44px]">
              Get in touch with us
            </h2>

            {/* FORM */}
            <form className="mt-10 max-w-[620px]">
              <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                <FormField label="Name" placeholder="Your Name" />
                <FormField label="Subject" placeholder="Choose Subject" />
              </div>

              <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-8">
                <FormField label="Behalf Of" placeholder="Personal" />
                <FormField
                  label="Email"
                  placeholder="Email Address"
                  type="email"
                />
                <FormField label="Behalf Of" placeholder="Personal" />
              </div>

              <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end">
                <FormField
                  label="Messages"
                  placeholder="Start typing here"
                  multiline
                  className="flex-1"
                />

                <button
  type="submit"
  className="
    h-[45px]
    w-[140px]
    rounded-[11px]
    bg-[linear-gradient(90.76deg,#2350AD_0.11%,#719AEF_99.89%)]

    text-[16px]
    font-semibold
    text-white

    shadow-[0_6px_18px_rgba(35,80,173,0.18)]

    transition-all
    duration-300

    hover:-translate-y-1
    hover:scale-[1.03]
    hover:brightness-110
    hover:shadow-[0_12px_30px_rgba(35,80,173,0.35)]

    active:scale-[0.98]
  "
>
  Submit now
</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}