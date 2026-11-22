import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RestaurateurSection from "@/components/RestaurateurSection";
import { CheckCircle2, ShieldCheck, Sparkles, TrendingUp, Users, Clock, ArrowRight } from "lucide-react";

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
        <section className="pt-12 pb-8 md:pt-16 md:pb-12 border-b border-resty-stone-border/60 bg-resty-sand/40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-resty-peach text-xs font-bold uppercase tracking-wider text-resty-orange-dark mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Programma Pilota Gratuito · Provincia di Varese</span>
              </div>
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

        {/* Extra FAQ for Restaurateurs */}
        <section className="py-16 bg-white border-t border-resty-stone-border/60">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="font-sans font-bold text-2xl text-resty-stone mb-8 text-center">
              Domande tipiche dei ristoratori
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-resty-sand/50 border border-resty-stone-border/60">
                <h4 className="font-sans font-bold text-base text-resty-stone mb-2">
                  Come imposto le mie offerte?
                </h4>
                <p className="text-sm text-resty-stone-light leading-relaxed">
                  Decidi tutto tu: il piatto del menù, il prezzo scontato, il numero massimo di porzioni disponibili e la fascia oraria di validità (es. 19:00 - 20:15).
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-resty-sand/50 border border-resty-stone-border/60">
                <h4 className="font-sans font-bold text-base text-resty-stone mb-2">
                  Cosa succede se il cliente ordina extra?
                </h4>
                <p className="text-sm text-resty-stone-light leading-relaxed">
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
