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
      <label className="text-[11px] font-bold uppercase tracking-[0.12em] text-black">
        {label}
      </label>
      {multiline ? (
        <textarea
          rows={3}
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
    <section id="contact" className="section-padding grid-bg">
      <div className="section-container grid items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-8 xl:gap-12">
        <div>
          <h2 className="text-[32px] font-bold leading-tight text-black md:text-[44px] lg:text-[48px]">
            Get in touch with us
          </h2>

          <form className="mt-10 space-y-8 md:mt-12">
            <div className="grid gap-8 md:grid-cols-2 md:gap-10">
              <FormField label="Name" placeholder="Your Name" />
              <FormField label="Subject" placeholder="Choose Subject" />
            </div>

            <div className="grid gap-8 sm:grid-cols-3 md:gap-10">
              <FormField label="Behalf of" placeholder="Personal" />
              <FormField
                label="Email"
                placeholder="Email Address"
                type="email"
              />
              <FormField label="Behalf of" placeholder="Personal" />
            </div>

            <div className="flex flex-col gap-8 md:flex-row md:items-end md:gap-10">
              <FormField
                label="Messages"
                placeholder="Start typing here"
                multiline
                className="flex-1"
              />
              <button
                type="submit"
                className="btn-gradient shrink-0 px-12 py-4 text-[16px] md:px-14"
              >
                Submit now
              </button>
            </div>
          </form>
        </div>

        <div className="relative hidden h-[480px] w-full overflow-hidden lg:block lg:h-[560px]">
          <Image
            src="/images/LooperGroup.png"
            alt=""
            fill
            className="scale-110 object-cover object-[72%_50%] transition-transform duration-700 hover:scale-[1.12]"
            sizes="45vw"
          />
        </div>
      </div>

      <div className="relative mx-auto mt-10 h-[260px] w-full max-w-[360px] overflow-hidden lg:hidden">
        <Image
          src="/images/LooperGroup.png"
          alt=""
          fill
          className="object-cover object-[72%_50%]"
          sizes="90vw"
        />
      </div>
    </section>
  );
}
