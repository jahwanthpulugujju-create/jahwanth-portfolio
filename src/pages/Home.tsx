import PageLoader from "../components/PageLoader";
import ScrollProgress from "../components/ScrollProgress";
import CustomCursor from "../components/CustomCursor";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MarqueeSection from "../components/MarqueeSection";
import About from "../components/About";
import ProjectGrid from "../components/ProjectGrid";
import CampaignSection from "../components/CampaignSection";
import SkillsSection from "../components/SkillsSection";
import ProcessSection from "../components/ProcessSection";
import ResumeSection from "../components/ResumeSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="jp-root">
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.6 0" />
        </filter>
      </svg>

      <PageLoader />
      <ScrollProgress />
      <CustomCursor />
      <div className="jp-noise" />

      <Header />

      <main id="main-content">
        <Hero />
        <MarqueeSection />
        <About />
        <ProjectGrid />
        <CampaignSection />
        <SkillsSection />
        <ProcessSection />
        <ResumeSection />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
