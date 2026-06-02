import Header from "../components/Header";
import Footer from "../components/Footer";

import BusinessGrowthSection from "../components/BusinessGrowthSection";
import TrustDataSection from "../components/TrustDataSection";
import MeasureSection from "../components/MeasureSection";
import BusinessWorkflowSection from "../components/BusinessWorkflowSection";
import RealCustomersSection from "../components/RealCustomersSection";
import PricingSection from "../components/PricingSection";
import AboutFaqSection from "../components/AboutFaqSection";
import BusinessCTASection from "../components/BusinessCTASection";
export default function ForMerchantsPage() {
  return (
    <>
      <Header />

      <main>
        <BusinessGrowthSection />
        <TrustDataSection />
        <MeasureSection />
        <BusinessWorkflowSection />
        <RealCustomersSection />
        <PricingSection />
       <AboutFaqSection />
        <BusinessCTASection />
      </main>

      <Footer />
    </>
  );
}