import Header from "../components/Header";
import Footer from "../components/Footer";
import Ticker from "../components/Ticker";

/* SECTIONS */
import WhyHeroSection from "../components/WhyHeroSection";
import ProblemSection from "../components/ProblemSection";
import WhyNowSection from "../components/WhyNowSection";
import NetworkEffectSection from "../components/NetworkEffectSection";
import ValueQuoteSection from "../components/ValueQuoteSection";
import GrowthNetworkSection from "../components/GrowthNetworkSection";
import FaqSection from "../components/FaqSection";
import WhyExistsCTASection from "../components/WhyExistsCTASection";

export default function WhyItExistsPage() {
  return (
    <>
      <Header />

      <main>
        <WhyHeroSection />
         <Ticker />
         <ProblemSection />
         <WhyNowSection />
         <NetworkEffectSection />
         <ValueQuoteSection />
         <GrowthNetworkSection />
         <FaqSection />
         <WhyExistsCTASection />
      </main>

      <Footer />
    </>
  );
}