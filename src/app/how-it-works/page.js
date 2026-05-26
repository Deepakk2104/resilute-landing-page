import Header from "../components/Header";
import Footer from "../components/Footer";
import HowHero from "../components/HowHero";
import VerificationSection from "../components/VerificationSection";
import ReputationSection from "../components/ReputationSection";
import RewardsSection from "../components/RewardsSection";
import QuoteSection from "../components/QuoteSection";
import FaqSection from "../components/FaqSection";
import FinalCtaSection from "../components/FinalCtaSection";

export default function HowItWorksPage() {
  return (
    <>
      <Header />

      <main className="bg-[#f4f4f4] pb-10">
        <HowHero />
        <VerificationSection />
        <ReputationSection />
        <RewardsSection />
        <QuoteSection />
        <FaqSection />
        <FinalCtaSection />
      </main>

      <Footer />
    </>
  );
}