"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const founders = [
  {
    name: "Emanuele",
    accentBorder: "border-resty-orange",
    role: "Co-founder & Ristoratore",
    description:
      "Conosce a fondo la quotidianità di un ristorante: i costi fissi, la gestione degli ordini, le fasce orarie calme e la cura con cui si scelgono gli ingredienti ogni mattina.",
    quote: "“Vogliamo ridare valore ad ogni singolo piatto preparato.”",
    image: "/images/emanuele.jpg",
    alt: "Emanuele - Co-founder & Ristoratore",
  },
  {
    name: "Matteo",
    accentBorder: "border-resty-orange",
    role: "Co-founder & Studente di Informatica",
    description:
      "Sviluppa e progetta l'applicazione con un obiettivo chiaro: interfacce veloci, chiarezza assoluta per i clienti e nessuno spreco di tempo per chi lavora dietro i fornelli.",
    quote: "“Non basta che funzioni: volevo creare un'identità di brand forte, un design curato e un prodotto che le persone amino usare ogni giorno.”",
    image: "/images/matteo.jpg",
    alt: "Matteo - Co-founder & Studente di Informatica",
  },
];

export default function AboutUsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartXRef = useRef<number | null>(null);

  const prevFounder = () => {
    setActiveIndex((prev) => (prev === 0 ? founders.length - 1 : prev - 1));
  };

  const nextFounder = () => {
    setActiveIndex((prev) => (prev === founders.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextFounder();
      } else {
        prevFounder();
      }
    }
    touchStartXRef.current = null;
  };

  const currentFounder = founders[activeIndex];

  return (
    <>
      {/* =========================================================================
          SEZIONE AGGIUNTA A TUTTO SCHERMO:
          "La forza di unire due mondi diversi"
         ========================================================================= */}
      <section
        id="la-forza-di-unire-due-mondi"
        className="min-h-screen flex items-center justify-center py-20 md:py-28 bg-white border-y border-resty-stone-border/60 relative overflow-hidden"
      >
        {/* Soft Warm Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-resty-peach/40 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Section Title */}
          <h2 className="font-heading font-medium text-4xl sm:text-6xl lg:text-7xl text-resty-stone tracking-tight leading-[1.08] mb-8">
            La forza di unire <br />
            <span className="text-resty-orange">due mondi diversi</span>
          </h2>

          {/* Paragraphs from the original card */}
          <div className="space-y-6 text-lg sm:text-xl lg:text-2xl text-resty-stone-light leading-relaxed mb-10 max-w-3xl">
            <p>
              Da una parte c&apos;è chi conosce il lavoro reale in sala e in cucina, con
              tutte le sue difficoltà quotidiane. Dall&apos;altra c&apos;è chi ama sviluppare
              strumenti digitali pensati per semplificare la vita delle persone.
            </p>
            <p className="text-resty-stone font-semibold text-xl sm:text-2xl lg:text-3xl leading-snug">
              Abbiamo unito queste due passioni per aiutare i ristoratori a vendere
              quello che preparano e dare ai clienti un&apos;occasione in più per mangiare fuori.
            </p>
          </div>

          {/* Location tag from the original card */}
          <div className="pt-8 border-t border-resty-stone-border/80 flex items-center gap-2 text-sm font-semibold text-resty-stone-muted">
            <MapPin className="w-4 h-4 text-resty-orange shrink-0" />
            <span>Nato e sviluppato tra Varese e i laghi lombardi</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SEZIONE FOUNDER:
          - A sinistra: il paragrafo che descrive la persona (cambia allo switch)
          - A destra: la card con la foto e le frecce posizionate su di essa
         ========================================================================= */}
      <section
        id="i-founder"
        className="py-20 md:py-32 bg-resty-ivory relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-resty-orange mb-2">
            <span className="w-2 h-2 rounded-full bg-resty-orange"></span>
            <span>I Founder</span>
          </div>
          <h2 className="font-heading font-medium text-3xl sm:text-4xl lg:text-5xl text-resty-stone tracking-tight">
            Chi c&apos;è dietro <span className="text-resty-orange">RestyDeals</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* =========================================================
                A SINISTRA: Testo descrittivo del founder
                Cambia dinamicamente quando si passa da una foto all'altra
               ========================================================= */}
            <div className="lg:col-span-7 flex flex-col justify-center min-h-[340px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFounder.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.24, ease: "easeOut" }}
                >
                  <h3 className="font-heading font-medium text-4xl sm:text-5xl lg:text-6xl text-resty-stone mb-2">
                    {currentFounder.name}
                  </h3>
                  <div className="text-base sm:text-lg font-semibold text-resty-orange mb-6">
                    {currentFounder.role}
                  </div>

                  <p className="text-base sm:text-lg lg:text-xl text-resty-stone-light leading-relaxed mb-8 max-w-xl">
                    {currentFounder.description}
                  </p>

                  <blockquote
                    className={`border-l-2 ${currentFounder.accentBorder} pl-4 py-1 italic font-medium text-resty-stone text-base sm:text-lg max-w-xl`}
                  >
                    {currentFounder.quote}
                  </blockquote>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* =========================================================
                A DESTRA: La card con la foto
                Le frecce sono posizionate direttamente sulla card
               ========================================================= */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="bg-white p-3 sm:p-4 rounded-3xl border border-resty-stone-border shadow-xl max-w-sm sm:max-w-md w-full relative select-none">
                <div
                  className="relative aspect-square sm:aspect-[4/5] rounded-2xl overflow-hidden bg-resty-sand"
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                >
                  {/* Foto con animazione cross-fade */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentFounder.image}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.24, ease: "easeOut" }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <Image
                        src={currentFounder.image}
                        alt={currentFounder.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 420px"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* FRECCIA SINISTRA: Direttamente sulla card con la foto */}
                  <button
                    type="button"
                    onClick={prevFounder}
                    aria-label="Founder precedente"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-resty-stone hover:text-resty-orange shadow-lg flex items-center justify-center backdrop-blur-md transition-all hover:scale-105 active:scale-95 z-20 cursor-pointer"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  {/* FRECCIA DESTRA: Direttamente sulla card con la foto */}
                  <button
                    type="button"
                    onClick={nextFounder}
                    aria-label="Founder successivo"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-resty-stone hover:text-resty-orange shadow-lg flex items-center justify-center backdrop-blur-md transition-all hover:scale-105 active:scale-95 z-20 cursor-pointer"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
