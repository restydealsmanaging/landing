import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import RestaurateurSection from "@/components/RestaurateurSection";
import CustomerSection from "@/components/CustomerSection";
import AboutUsSection from "@/components/AboutUsSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-resty-ivory text-resty-stone selection:bg-resty-orange selection:text-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <HowItWorksSection />
        <RestaurateurSection />
        <CustomerSection />
        <AboutUsSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
