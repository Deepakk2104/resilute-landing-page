import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutHeroSection from "../components/AboutHeroSection";
import MissionSection from "../components/MissionSection";
import RoadmapSection from "../components/RoadmapSection";
import TeamSection from "../components/TeamSection";
import ValuesSection from "../components/ValuesSection";
import InfrastructureSection from "../components/InfrastructureSection";

import AboutFaqSection from "../components/AboutFaqSection";

import AboutFinalSection from "../components/AboutFinalSection";


export default function AboutUsPage() {
  return (
    <>
      <Header />

      <main className="bg-[#f7f8fb]">
        <AboutHeroSection />
        <MissionSection />
        <RoadmapSection />
        <TeamSection />
        <InfrastructureSection />
        <ValuesSection />
        <AboutFaqSection />
        <AboutFinalSection />
     
       
        

      </main>

      <Footer />
    </>
  );
}