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
  // Smoothly rises from bottom to dock cleanly to top
  const panelTranslateY = useTransform(scrollYProgress, [0, 0.16], ["25%", "0%"]);

  // 2. Stage 1: Statement Title ("Il ristorante sceglie. Tu gusti in sala.")
  // Glides in, holds for comfortable reading, then glides up and dissolves cleanly
  const statementOpacity = useTransform(
    scrollYProgress,
    [0.03, 0.15, 0.35, 0.45],
    [0, 1, 1, 0]
  );
  const statementY = useTransform(
    scrollYProgress,
    [0.03, 0.15, 0.35, 0.45],
    [25, 0, 0, -60]
  );
  const statementPointerEvents = useTransform(scrollYProgress, (v) =>
    v < 0.44 ? "auto" : "none"
  );

  // 3. Stage 2: 3 Step Cards ("Come funziona")
  // Rises up gracefully from below only after Stage 1 clears, then locks in place until end
  const cardsOpacity = useTransform(scrollYProgress, [0.44, 0.58, 1], [0, 1, 1]);
  const cardsY = useTransform(scrollYProgress, [0.44, 0.58, 1], [45, 0, 0]);
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
      className="relative h-[240vh] -mt-14 sm:-mt-20 md:-mt-24 pointer-events-auto"
    >
      {/* Sticky Full-Viewport Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-end pointer-events-none">
        {/* Full-width Dark Beige Overlay Sheet (#EFE6D8) */}
        <motion.div
          style={{ y: panelTranslateY }}
          className="relative w-full h-full bg-[#EFE6D8] rounded-t-[40px] md:rounded-t-[64px] border-t border-resty-stone/15 shadow-[0_-25px_60px_rgba(45,45,42,0.14)] overflow-hidden pointer-events-auto will-change-transform"
        >
          {/* STAGE 1: Statement Title Layer (Independent, Perfectly Centered) */}
          <motion.div
            style={{
              opacity: statementOpacity,
              y: statementY,
              pointerEvents: statementPointerEvents,
            }}
            className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-6 text-center will-change-[transform,opacity]"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl text-resty-stone tracking-tight leading-[1.12]">
                Il ristorante sceglie. <br className="hidden sm:inline" />
                <span className="text-resty-orange">Tu gusti in sala.</span>
              </h2>
              <div className="w-16 h-1 rounded-full bg-resty-orange/40 mx-auto mt-8" />
            </div>
          </motion.div>

          {/* STAGE 2: "Come funziona" Cards Layer (Independent, Perfectly Centered) */}
          <motion.div
            style={{
              opacity: cardsOpacity,
              y: cardsY,
              pointerEvents: cardsPointerEvents,
            }}
            className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 will-change-[transform,opacity]"
          >
            <div className="w-full max-w-6xl mx-auto">
              {/* Header Above Cards: Cleanly centered with ample clearance */}
              <div className="text-center mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto">
                <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-resty-stone tracking-tight leading-tight mb-2 sm:mb-3">
                  Come funziona
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-resty-stone-light font-sans font-normal leading-relaxed max-w-2xl mx-auto">
                  Il locale decide quali piatti proporre, a quale prezzo e in quali orari. Tu consulti l&apos;offerta e gusti il piatto nel ristorante, con la qualità e il servizio di sempre.
                </p>
              </div>

              {/* 3 Step Cards Grid: Ergonomic compact heights that fit cleanly inside viewport */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.number}
                      className="group relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 border border-resty-stone-border/80 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-[transform,box-shadow] duration-300 flex flex-col justify-between"
                    >
                      <div>
                        {/* Top Bar with Number and Badge */}
                        <div className="flex items-center justify-between mb-3 sm:mb-4">
                          <span className="font-heading font-black text-xl sm:text-2xl text-resty-orange/30 group-hover:text-resty-orange transition-colors">
                            {step.number}
                          </span>
                          <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-resty-sand text-resty-stone-light border border-resty-stone-border/60">
                            {step.badge}
                          </span>
                        </div>

                        {/* Icon */}
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-resty-peach/70 text-resty-orange flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 group-hover:bg-resty-orange group-hover:text-white transition-[transform,background-color,color] duration-300">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>

                        {/* Title & Description */}
                        <h3 className="font-heading font-bold text-base sm:text-lg text-resty-stone mb-1.5 sm:mb-2 leading-snug">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-resty-stone-light leading-relaxed font-sans">
                          {step.description}
                        </p>
                      </div>

                      <div className="mt-4 sm:mt-6 pt-3 border-t border-resty-stone-border/50 flex items-center gap-1.5 text-xs font-semibold text-resty-orange">
                        <span>Passo {index + 1} del percorso</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
