import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="bg-[#f4f4f4] px-4 py-4">
        
        {/* HERO CARD */}
        <section className="relative overflow-hidden rounded-[36px]">
          
          {/* BACKGROUND IMAGE */}
          <Image
            src="/images/contact-bgs.png"
            alt="Contact Background"
            width={1600}
            height={900}
            className="h-auto w-full object-cover"
            priority
          />

          {/* TEXT OVERLAY */}
         {/*
<div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12">
  
  <h1 className="max-w-[320px] text-[72px] font-medium leading-[0.9] tracking-[-0.05em] text-[#3a3a3a] md:text-[92px]">
    Get in touch
  </h1>

  <div className="flex justify-end">
    <h2 className="text-[56px] italic font-medium text-[#5A7CEB] md:text-[72px]">
      Let’s talk
    </h2>
  </div>
</div>
*/}
        </section>
        <ContactForm />
      </main>

      <Footer />
    </>
  );
}