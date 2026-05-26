import Header from "./components/Header";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker.jsx";
import Stats from "./components/Stats";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Network from "./components/Network";
import Audience from "./components/Audience";
import CtaSection from "./components/CtaSection";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import BuildTrust from "./components/BuildTrust";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <Hero />
        <Ticker />
        <Stats />
        <Features />
        <HowItWorks />
        <Network />
        <Audience />
        <CtaSection />
        <Testimonials />
        <Faq />
        <Contact />
        <BuildTrust />
      </main>
      <Footer />
    </>
  );
}