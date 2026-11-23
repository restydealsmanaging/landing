import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomerSection from "@/components/CustomerSection";

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
            <div className="max-w-4xl">
              <h1 className="font-heading font-medium text-5xl sm:text-7xl lg:text-8xl text-resty-stone tracking-tight leading-[1.06] mb-6 sm:mb-8">
                L&apos;esperienza unica del <span className="text-resty-orange">nostro mondo.</span>
              </h1>
              <h2 className="font-heading font-medium text-3xl sm:text-5xl text-resty-stone tracking-tight leading-[1.12]">
                Stessa qualità, <br />
                <span className="text-resty-orange">prezzo in promozione.</span>
              </h2>
            </div>
          </div>
        </section>

        {/* Full Customer Section with 3 Advantages and Waitlist Form */}
        <CustomerSection />

        {/* Why Seated Dining Matters (Differenziazione da TGTG e Takeaway) */}
        <section className="py-16 bg-white border-t border-resty-stone-border/60">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h3 className="font-sans font-bold text-2xl sm:text-3xl text-resty-stone mb-3">
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
                <h4 className="font-sans font-bold text-base text-resty-stone mb-2">
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
                <h4 className="font-sans font-bold text-base text-resty-stone mb-2">
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
                <h4 className="font-sans font-bold text-base text-resty-stone mb-2">
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
