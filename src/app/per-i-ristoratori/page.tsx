import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RestaurateurSection from "@/components/RestaurateurSection";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Per i Ristoratori | Dai più valore al tuo menù · RestyDeals",
  description:
    "Promuovi i piatti che puoi servire con gli ingredienti già in cucina nelle ore più tranquille. Consumazione al tavolo, pieno controllo, zero costi di attivazione.",
};

export default function RistoratoriPage() {
  return (
    <div className="min-h-screen flex flex-col bg-resty-ivory text-resty-stone selection:bg-resty-orange selection:text-white">
      <Navbar />
      <main className="flex-1">
        {/* Dedicated Hero Banner */}
        <section className="pt-12 pb-8 md:pt-16 md:pb-12 bg-resty-sand/40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-heading font-medium text-4xl sm:text-5xl lg:text-6xl text-resty-stone tracking-tight mb-4 leading-[1.12]">
                Dai più valore <br />
                <span className="text-resty-orange">al tuo menù.</span>
              </h1>
              <p className="text-lg sm:text-xl text-resty-stone-light leading-relaxed mb-6">
                Tu scegli cosa promuovere e quando. Con RestyDeals metti in evidenza
                un piatto del menù o lo proponi nelle fasce in cui di solito arrivano
                meno clienti. I clienti consumano direttamente nel tuo locale.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-resty-stone-light">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-resty-green" /> Nessuna commissione fissa iniziale
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-resty-green" /> Consumazione sempre in sala al tavolo
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-resty-green" /> Controllo totale su piatti e orari
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Full Restaurateur Section with 3 Cards and Application Form */}
        <RestaurateurSection />

        {/* FAQ for Restaurateurs - Open Editorial Q&A */}
        <section id="faq" className="py-20 md:py-28 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
              <h2 className="font-heading font-medium text-3xl sm:text-4xl text-resty-stone tracking-tight leading-tight">
                Domande tipiche dei ristoratori
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
              <div className="flex flex-col">
                <h3 className="font-heading font-medium text-xl sm:text-2xl text-resty-stone mb-3 leading-snug tracking-tight">
                  Come imposto le mie offerte?
                </h3>
                <p className="text-sm sm:text-base text-resty-stone-light leading-relaxed font-sans">
                  Decidi tutto tu: il piatto del menù, il prezzo scontato, il numero massimo di porzioni disponibili e la fascia oraria di validità (es. 19:00 - 20:15).
                </p>
              </div>

              <div className="flex flex-col">
                <h3 className="font-heading font-medium text-xl sm:text-2xl text-resty-stone mb-3 leading-snug tracking-tight">
                  Cosa succede se il cliente ordina extra?
                </h3>
                <p className="text-sm sm:text-base text-resty-stone-light leading-relaxed font-sans">
                  I clienti si siedono al tavolo: bevande, dolci, caffè e altri piatti aggiuntivi vengono pagati a prezzo pieno di listino alla cassa del tuo locale.
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
