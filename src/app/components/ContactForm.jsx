import {
  FaEnvelope,
  FaChartLine,
  FaNewspaper,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

export default function ContactForm() {
  return (
    <section className="px-4 pb-10">
      
      <div className="mx-auto max-w-[1400px] rounded-[40px] bg-[#f5f7fb] px-6 py-14 md:px-10">
        
        {/* TOP */}
        <div className="text-center">
          
          <p className="text-[15px] font-medium uppercase tracking-[0.2em] text-[#8b7a7a]">
            ✦ GET IN TOUCH
          </p>

          <h2 className="mt-6 text-[40px] font-medium tracking-[-0.05em] text-black md:text-[52px]">
            Let&apos;s build something real together
          </h2>
        </div>

        {/* GRID */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          
          {/* LEFT FORM */}
          <div className="rounded-[32px] bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(90,124,235,0.12)]">
            
            <form className="space-y-8">
              
              {/* ROW */}
              <div className="grid gap-6 md:grid-cols-2">
                
                <div>
                  <label className="mb-3 block text-lg font-medium text-black">
                    First Name
                  </label>

                  <input
                    type="text"
                    placeholder="John"
                    className="h-14 w-full rounded-2xl border border-[#e5e7eb] bg-[#fafafa] px-5 text-lg outline-none transition-all duration-300 hover:border-[#c7d2fe] focus:border-[#5A7CEB] focus:ring-4 focus:ring-[#5A7CEB]/10"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-lg font-medium text-black">
                    Last Name
                  </label>

                  <input
                    type="text"
                    placeholder="Doe"
                    className="h-14 w-full rounded-2xl border border-[#e5e7eb] bg-[#fafafa] px-5 text-lg outline-none transition-all duration-300 hover:border-[#c7d2fe] focus:border-[#5A7CEB] focus:ring-4 focus:ring-[#5A7CEB]/10"
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label className="mb-3 block text-lg font-medium text-black">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="john@example.com"
                  className="h-14 w-full rounded-2xl border border-[#e5e7eb] bg-[#fafafa] px-5 text-lg outline-none transition-all duration-300 hover:border-[#c7d2fe] focus:border-[#5A7CEB] focus:ring-4 focus:ring-[#5A7CEB]/10"
                />
              </div>

              {/* ROW */}
              <div className="grid gap-6 md:grid-cols-2">
                
                <div>
                  <label className="mb-3 block text-lg font-medium text-black">
                    I am a...
                  </label>

                  <select className="h-14 w-full rounded-2xl border border-[#e5e7eb] bg-[#fafafa] px-5 text-lg outline-none transition-all duration-300 hover:border-[#c7d2fe] focus:border-[#5A7CEB] focus:ring-4 focus:ring-[#5A7CEB]/10">
                    <option>Merchant</option>
                    <option>Investor</option>
                    <option>Developer</option>
                  </select>
                </div>

                <div>
                  <label className="mb-3 block text-lg font-medium text-black">
                    Business Name (Optional)
                  </label>

                  <input
                    type="text"
                    placeholder="Company Inc."
                    className="h-14 w-full rounded-2xl border border-[#e5e7eb] bg-[#fafafa] px-5 text-lg outline-none transition-all duration-300 hover:border-[#c7d2fe] focus:border-[#5A7CEB] focus:ring-4 focus:ring-[#5A7CEB]/10"
                  />
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="mb-3 block text-lg font-medium text-black">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="How can we help?"
                  className="w-full rounded-2xl border border-[#e5e7eb] bg-[#fafafa] px-5 py-4 text-lg outline-none transition-all duration-300 hover:border-[#c7d2fe] focus:border-[#5A7CEB] focus:ring-4 focus:ring-[#5A7CEB]/10"
                />
              </div>

              {/* BUTTON */}
              <button className="h-16 w-full rounded-2xl bg-gradient-to-r from-[#2D5BDB] to-[#79A2FF] text-xl font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(90,124,235,0.35)]">
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            
            {[
              {
                icon: <FaEnvelope />,
                title: "GENERAL ENQUIRIES",
                email: "hello@resilute.com",
              },
              {
                icon: <FaChartLine />,
                title: "INVESTOR RELATIONS",
                email: "investors@resilute.com",
              },
              {
                icon: <FaNewspaper />,
                title: "PRESS AND MEDIA",
                email: "press@resilute.com",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group flex items-center gap-5 rounded-[28px] bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(90,124,235,0.12)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f2f5ff] text-2xl text-[#4D73E6] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  {item.icon}
                </div>

                <div>
                  <p className="text-[15px] font-semibold tracking-[0.14em] text-[#4D73E6]">
                    {item.title}
                  </p>

                  <h3 className="mt-2 text-[18px] font-medium text-black">
                    {item.email}
                  </h3>
                </div>
              </div>
            ))}

            {/* RESPONSE CARD */}
            <div className="rounded-[28px] bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(90,124,235,0.12)]">
              
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />

                <h3 className="text-[20px] font-semibold text-black">
                  We respond within 24 hours.
                </h3>
              </div>

              <p className="mt-5 text-xl leading-relaxed text-[#666]">
                Every message is reviewed by a real person.
                Merchant applications are reviewed within one business day.
              </p>
            </div>

            {/* SOCIALS */}
            <div>
              <p className="mb-5 text-sm font-semibold tracking-[0.25em] text-[#7a7a7a]">
                FOLLOW THE BUILD
              </p>

              <div className="grid grid-cols-2 gap-4">
                
                <button className="flex h-16 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#2D5BDB] to-[#79A2FF] text-lg font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(90,124,235,0.35)]">
                  <FaLinkedin />
                  LinkedIn
                </button>

                <button className="flex h-16 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#2D5BDB] to-[#79A2FF] text-lg font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(90,124,235,0.35)]">
                  <FaXTwitter />
                  X / Twitter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}