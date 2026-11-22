import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AudiencePathsSection from "@/components/AudiencePathsSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-resty-ivory text-resty-stone selection:bg-resty-orange selection:text-white">
      <Navbar />
      <main className="flex-1">
        <div className="relative">
          {/* Pinned Hero Section: Remains pinned beneath the incoming overlay */}
          <div className="sticky top-20 z-0">
            <HeroSection />
          </div>

          {/* Full-width warm beige overlay sheet climbing smoothly over the Hero */}
          <div className="relative z-20">
            <HowItWorksSection />
          </div>
        </div>

        <AudiencePathsSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
