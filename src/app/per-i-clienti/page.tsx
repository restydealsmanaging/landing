import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomerSection from "@/components/CustomerSection";
import { CheckCircle2, UtensilsCrossed, Sparkles, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Per i Clienti | Stessa qualità, prezzo in promozione · RestyDeals",
  description:
    "Scopri le offerte dei ristoranti a Varese e provincia. Piatto al tavolo preparato espresso, prezzi trasparenti e zero spreco alimentare.",
};

export default function ClientiPage() {
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
                <span>Esperienza al Tavolo · Zero Spreco</span>
              </div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-resty-stone tracking-tight mb-4 leading-[1.1]">
                Stessa qualità, <br />
                <span className="text-resty-orange">prezzo in promozione.</span>
              </h1>
              <p className="text-lg sm:text-xl text-resty-stone-light leading-relaxed mb-6">
                Il piatto che scegli, al tavolo. Scopri le offerte dei ristoranti
                aderenti nella provincia di Varese, controlla il prezzo e la fascia
                oraria e gusta il piatto direttamente nel locale con la qualità di sempre.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-resty-stone-light">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-resty-green" /> Prezzo chiaro prima di andare
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-resty-green" /> Servizio autentico in sala
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-resty-green" /> Aiuti a ridurre lo spreco
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Full Customer Section with 3 Advantages and Waitlist Form */}
        <CustomerSection />

        {/* Why Seated Dining Matters (Differenziazione da TGTG e Takeaway) */}
        <section className="py-16 bg-white border-t border-resty-stone-border/60">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-resty-stone mb-3">
                Non una busta da asporto, ma una vera cena
              </h3>
              <p className="text-sm sm:text-base text-resty-stone-light leading-relaxed">
                Crediamo che il cibo vada gustato appena fatto, nel calore e nell&apos;atmosfera del ristorante.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-3xl bg-resty-sand/50 border border-resty-stone-border/60">
                <div className="w-10 h-10 rounded-xl bg-resty-peach flex items-center justify-center text-resty-orange font-bold mb-4">
                  01
                </div>
                <h4 className="font-heading font-bold text-base text-resty-stone mb-2">
                  Sai esattamente cosa mangi
                </h4>
                <p className="text-xs sm:text-sm text-resty-stone-light leading-relaxed">
                  Nessuna sorpresa: visualizzi il nome del piatto, gli ingredienti principali e il ristorante prima di prenotare.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-resty-sand/50 border border-resty-stone-border/60">
                <div className="w-10 h-10 rounded-xl bg-resty-peach flex items-center justify-center text-resty-orange font-bold mb-4">
                  02
                </div>
                <h4 className="font-heading font-bold text-base text-resty-stone mb-2">
                  Cucinato al momento
                </h4>
                <p className="text-xs sm:text-sm text-resty-stone-light leading-relaxed">
                  Il piatto viene preparato dalla cucina del ristorante solo quando ti accomodi in sala, con la stessa cura del servizio di punta.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-resty-sand/50 border border-resty-stone-border/60">
                <div className="w-10 h-10 rounded-xl bg-resty-peach flex items-center justify-center text-resty-orange font-bold mb-4">
                  03
                </div>
                <h4 className="font-heading font-bold text-base text-resty-stone mb-2">
                  Un prezzo che invoglia
                </h4>
                <p className="text-xs sm:text-sm text-resty-stone-light leading-relaxed">
                  Offerte vantaggiose che ti permettono di uscire a cena più spesso e scoprire nuovi locali della provincia.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
