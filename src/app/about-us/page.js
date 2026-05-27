import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutHeroSection from "../components/AboutHeroSection";
import MissionSection from "../components/MissionSection";
import RoadmapSection from "../components/RoadmapSection";

export default function AboutUsPage() {
  return (
    <>
      <Header />

      <main className="bg-[#f7f8fb]">
        <AboutHeroSection />
        <MissionSection />
        <RoadmapSection />
       
        

      </main>

      <Footer />
    </>
  );
}