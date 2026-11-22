import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutUsSection from "@/components/AboutUsSection";
import { Utensils, Laptop, Sparkles, MapPin, Mail, Coffee } from "lucide-react";

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
        {/* Dedicated Hero Banner */}
        <section className="pt-12 pb-8 md:pt-16 md:pb-12 border-b border-resty-stone-border/60 bg-resty-sand/40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-resty-peach text-xs font-bold uppercase tracking-wider text-resty-orange-dark mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>La Nostra Storia · Provincia di Varese</span>
              </div>
              <h1 className="font-heading font-medium text-4xl sm:text-5xl lg:text-6xl text-resty-stone tracking-tight mb-4 leading-[1.12]">
                Due ragazzi della <br />
                <span className="text-resty-orange">provincia di Varese.</span>
              </h1>
              <p className="text-lg sm:text-xl text-resty-stone-light leading-relaxed mb-4">
                Una cucina, un computer, un&apos;idea. Abbiamo unito il mondo della ristorazione reale con lo sviluppo software per creare qualcosa di concreto e utile.
              </p>
            </div>
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
