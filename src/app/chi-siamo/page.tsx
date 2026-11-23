import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutUsSection from "@/components/AboutUsSection";
import { Mail, Coffee } from "lucide-react";

export const metadata: Metadata = {
  title: "Chi Siamo | Due ragazzi della provincia di Varese · RestyDeals",
  description:
    "Una cucina, un computer, un'idea. Siamo Emanuele, ristoratore, e Matteo, studente di informatica. Scopri perché abbiamo creato RestyDeals.",
};

export default function ChiSiamoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-resty-ivory text-resty-stone selection:bg-resty-orange selection:text-white">
      <Navbar />
      <main className="flex-1">
        {/* Title La Nostra Storia */}
        <section className="pt-12 md:pt-16 pb-2">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading font-medium text-5xl sm:text-7xl lg:text-8xl text-resty-stone tracking-tight leading-[1.06]">
              La nostra <span className="text-resty-orange">storia</span>
            </h1>
          </div>
        </section>

        {/* Full About Us Section with Emanuele and Matteo cards */}
        <AboutUsSection />

        {/* Personal Contact & Meeting Box */}
        <section className="py-16 bg-white border-t border-resty-stone-border/60">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-14 h-14 rounded-2xl bg-resty-peach flex items-center justify-center text-resty-orange mx-auto mb-5">
              <Coffee className="w-7 h-7" />
            </div>
            <h3 className="font-sans font-bold text-2xl sm:text-3xl text-resty-stone mb-3">
              Prendiamoci un caffè a Varese
            </h3>
            <p className="text-base text-resty-stone-light leading-relaxed mb-6 max-w-xl mx-auto">
              Se gestisci un ristorante a Varese o dintorni, o se vuoi darci un consiglio sul progetto, saremo felici di passare a trovarti di persona per fare due chiacchiere.
            </p>
            <div className="inline-flex flex-col sm:flex-row items-center gap-3">
              <a
                href="mailto:info@restydeals.it"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-resty-orange text-white text-sm font-semibold hover:bg-resty-orange-hover shadow-sm transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Scrivici a info@restydeals.it</span>
              </a>
              <a
                href="/per-i-ristoratori#candidatura-ristoratore"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-resty-sand border border-resty-stone-border text-resty-stone text-sm font-semibold hover:bg-resty-sand-card transition-all"
              >
                <span>Candidati al test pilota</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
