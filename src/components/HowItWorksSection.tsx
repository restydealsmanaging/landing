"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ChefHat, Smartphone, UtensilsCrossed, ArrowRight } from "lucide-react";

export default function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Emil Kowalski: Off-thread composite scroll tracking without React state re-renders
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 1. Full-width dark beige sheet panel translation
  // Smoothly rises from bottom to dock to top
  const panelTranslateY = useTransform(scrollYProgress, [0, 0.22], ["20%", "0%"]);

  // 2. Stage 1: Statement Title ("Il ristorante sceglie. Tu gusti in sala.")
  // Centered with massive breathing room, fades in, holds, then lifts and dissolves
  const statementOpacity = useTransform(
    scrollYProgress,
    [0.05, 0.18, 0.36, 0.46],
    [0, 1, 1, 0]
  );
  const statementY = useTransform(
    scrollYProgress,
    [0.05, 0.18, 0.36, 0.46],
    [30, 0, 0, -40]
  );
  const statementPointerEvents = useTransform(scrollYProgress, (v) =>
    v < 0.44 ? "auto" : "none"
  );

  // 3. Stage 2: 3 Step Cards
  // Slides up gracefully with generous spacing, then remains fully interactive
  const cardsOpacity = useTransform(scrollYProgress, [0.44, 0.58, 1], [0, 1, 1]);
  const cardsY = useTransform(scrollYProgress, [0.44, 0.58, 1], [50, 0, 0]);
  const cardsPointerEvents = useTransform(scrollYProgress, (v) =>
    v >= 0.44 ? "auto" : "none"
  );

  const steps = [
    {
      number: "01",
      icon: ChefHat,
      badge: "Il locale decide",
      title: "Il ristorante sceglie cosa e quando",
      description:
        "Il locale decide quali piatti proporre, a quale prezzo promozionale e in quali fasce orarie meno affollate, valorizzando gli ingredienti freschi già presenti in cucina.",
    },
    {
      number: "02",
      icon: Smartphone,
      badge: "Trasparenza totale",
      title: "Tu consulti e blocchi l'offerta",
      description:
        "Scopri le proposte del giorno vicino a te, verifichi in anteprima il piatto, l'orario e il prezzo esatto. Sai quanto spendi prima ancora di uscire di casa.",
    },
    {
      number: "03",
      icon: UtensilsCrossed,
      badge: "Esperienza al tavolo",
      title: "Gusti il piatto direttamente in sala",
      description:
        "Niente asporto frettoloso o contenitori freddi: ti accomodi al tavolo del ristorante e gusti il piatto con l'accoglienza, la qualità e il servizio di sempre.",
    },
  ];

  return (
    <div
      ref={containerRef}
      id="come-funziona"
      className="relative h-[230vh] -mt-14 sm:-mt-20 md:-mt-24 pointer-events-auto"
    >
      {/* Sticky Full-Viewport Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-end pointer-events-none">
        {/* Full-width Dark Beige Overlay Sheet (#EFE6D8) */}
        <motion.div
          style={{ y: panelTranslateY }}
          className="relative w-full h-full bg-[#EFE6D8] rounded-t-[40px] md:rounded-t-[64px] border-t border-resty-stone/15 shadow-[0_-25px_60px_rgba(45,45,42,0.14)] flex flex-col justify-center items-center pointer-events-auto px-4 sm:px-6 lg:px-8 will-change-transform"
        >
          {/* STAGE 1: Statement Title with Visual Impact & Editorial Spacing */}
          <motion.div
            style={{
              opacity: statementOpacity,
              y: statementY,
              pointerEvents: statementPointerEvents,
            }}
            className="absolute max-w-4xl mx-auto text-center px-4 will-change-[transform,opacity]"
          >
            <h2 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl text-resty-stone tracking-tight leading-[1.12]">
              Il ristorante sceglie. <br className="hidden sm:inline" />
              <span className="text-resty-orange">Tu gusti in sala.</span>
            </h2>
            <div className="w-16 h-1 rounded-full bg-resty-orange/40 mx-auto mt-8" />
          </motion.div>

          {/* STAGE 2: The 3 Cards that take its place with generous breathing room */}
          <motion.div
            style={{
              opacity: cardsOpacity,
              y: cardsY,
              pointerEvents: cardsPointerEvents,
            }}
            className="w-full max-w-6xl mx-auto will-change-[transform,opacity]"
          >
            {/* Header Above Cards */}
            <div className="text-center mb-10 sm:mb-14 max-w-3xl mx-auto">
              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-resty-stone tracking-tight leading-tight mb-4">
                Come funziona
              </h2>
              <p className="text-base sm:text-lg text-resty-stone-light font-sans font-normal leading-relaxed">
                Il locale decide quali piatti proporre, a quale prezzo e in quali orari. Tu consulti l&apos;offerta e gusti il piatto nel ristorante, con la qualità e il servizio di sempre.
              </p>
            </div>

            {/* 3 Step Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.number}
                    className="group relative bg-white rounded-3xl p-6 sm:p-8 border border-resty-stone-border/80 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-[transform,box-shadow] duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Bar with Number and Badge */}
                      <div className="flex items-center justify-between mb-5 sm:mb-6">
                        <span className="font-heading font-black text-2xl sm:text-3xl text-resty-orange/30 group-hover:text-resty-orange transition-colors">
                          {step.number}
                        </span>
                        <span className="text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-full bg-resty-sand text-resty-stone-light border border-resty-stone-border/60">
                          {step.badge}
                        </span>
                      </div>

                      {/* Icon */}
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-resty-peach/70 text-resty-orange flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 group-hover:bg-resty-orange group-hover:text-white transition-[transform,background-color,color] duration-300">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                      </div>

                      {/* Title & Description */}
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-resty-stone mb-2 sm:mb-3 leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-resty-stone-light leading-relaxed font-sans">
                        {step.description}
                      </p>
                    </div>

                    <div className="mt-6 sm:mt-8 pt-4 border-t border-resty-stone-border/50 flex items-center gap-1.5 text-xs font-semibold text-resty-orange">
                      <span>Passo {index + 1} del percorso</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
