"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import { ChefHat, Smartphone, UtensilsCrossed, ArrowRight } from "lucide-react";

export default function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState<1 | 2>(1);

  // Track scroll position through the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth spatial curtain overlay rising over the hero (GPU composited)
  const panelTranslateY = useTransform(scrollYProgress, [0, 0.12], ["15%", "0%"]);

  // Decoupled stage controller with hysteresis to prevent any boundary flickering
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.38 && stage !== 2) {
      setStage(2);
    } else if (latest < 0.30 && stage !== 1) {
      setStage(1);
    }
  });

  const steps = [
    {
      number: "01",
      icon: ChefHat,
      badge: "Il locale decide",
      title: "Il ristorante sceglie cosa e quando",
      description:
        "Il locale decide quali piatti proporre, a quale prezzo promozionale e in quali fasce orarie meno affollate, valorizzando gli ingredienti freschi già presenti in cucina.",
      delay: 0.22,
    },
    {
      number: "02",
      icon: Smartphone,
      badge: "Trasparenza totale",
      title: "Tu consulti e blocchi l'offerta",
      description:
        "Scopri le proposte del giorno vicino a te, verifichi in anteprima il piatto, l'orario e il prezzo esatto. Sai quanto spendi prima ancora di uscire di casa.",
      delay: 0.32,
    },
    {
      number: "03",
      icon: UtensilsCrossed,
      badge: "Esperienza al tavolo",
      title: "Gusti il piatto direttamente in sala",
      description:
        "Niente asporto frettoloso o contenitori freddi: ti accomodi al tavolo del ristorante e gusti il piatto con l'accoglienza, la qualità e il servizio di sempre.",
      delay: 0.42,
    },
  ];

  return (
    <div
      ref={containerRef}
      id="come-funziona"
      className="relative h-[220vh] -mt-14 sm:-mt-20 md:-mt-24 pointer-events-auto"
    >
      {/* Sticky Full-Viewport Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-end pointer-events-none">
        {/* Full-width Dark Beige Overlay Sheet (#EFE6D8) */}
        <motion.div
          style={{ y: panelTranslateY }}
          className="relative w-full h-full bg-[#EFE6D8] rounded-t-[40px] md:rounded-t-[64px] border-t border-resty-stone/15 shadow-xl overflow-hidden pointer-events-auto transform-gpu"
        >
          {/* ─────────────────────────────────────────────────────────────
              STAGE 1: "Il ristorante sceglie. Tu gusti in sala."
              Animated with independent 60/120fps clock (NEVER scrubbed to mouse clicks!)
             ───────────────────────────────────────────────────────────── */}
          <motion.div
            initial={false}
            animate={
              stage === 1
                ? { opacity: 1, y: 0, pointerEvents: "auto" }
                : { opacity: 0, y: -45, pointerEvents: "none" }
            }
            transition={{
              duration: stage === 1 ? 0.65 : 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-6 text-center transform-gpu"
          >
            <div className="max-w-4xl mx-auto">
              {/* Line 1: Il ristorante sceglie. */}
              <motion.div
                initial={false}
                animate={stage === 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <h2 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl text-resty-stone tracking-tight leading-[1.12]">
                  Il ristorante sceglie.
                </h2>
              </motion.div>

              {/* Line 2: Tu gusti in sala. (Rythmic entry with warm Resty orange) */}
              <motion.div
                initial={false}
                animate={stage === 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden mt-1 sm:mt-2"
              >
                <h2 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl text-resty-orange tracking-tight leading-[1.12]">
                  Tu gusti in sala.
                </h2>
              </motion.div>

              {/* Accent Underline */}
              <motion.div
                initial={false}
                animate={stage === 1 ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                transition={{ duration: 0.55, delay: 0.22, ease: "easeOut" }}
                className="w-16 h-1 rounded-full bg-resty-orange/40 mx-auto mt-6 sm:mt-8 origin-center"
              />
            </div>
          </motion.div>

          {/* ─────────────────────────────────────────────────────────────
              STAGE 2: "Come funziona" Header & 3 Cards
              Smooth animated entry on its own 120fps curve (Zero stutter!)
             ───────────────────────────────────────────────────────────── */}
          <motion.div
            initial={false}
            animate={
              stage === 2
                ? { opacity: 1, y: 0, pointerEvents: "auto" }
                : { opacity: 0, y: 35, pointerEvents: "none" }
            }
            transition={{
              duration: stage === 2 ? 0.65 : 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 transform-gpu"
          >
            <div className="w-full max-w-6xl mx-auto">
              {/* Header Above Cards: Animated Title and Subtitle */}
              <div className="text-center mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto">
                {/* Title: Come funziona */}
                <motion.h2
                  initial={false}
                  animate={stage === 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                  transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-resty-stone tracking-tight leading-tight mb-2 sm:mb-3"
                >
                  Come funziona
                </motion.h2>

                {/* Subtitle Paragraph */}
                <motion.p
                  initial={false}
                  animate={stage === 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                  className="text-xs sm:text-sm md:text-base text-resty-stone-light font-sans font-normal leading-relaxed max-w-2xl mx-auto"
                >
                  Il locale decide quali piatti proporre, a quale prezzo e in quali orari. Tu consulti l&apos;offerta e gusti il piatto nel ristorante, con la qualità e il servizio di sempre.
                </motion.p>
              </div>

              {/* 3 Step Cards Grid: Staggered Entrance Wave (01 -> 02 -> 03) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {steps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={step.number}
                      initial={false}
                      animate={stage === 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                      transition={{
                        duration: 0.6,
                        delay: step.delay,
                        ease: [0.16, 1, 0.3, 1],
                      }}
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
                        <span>Passo {step.number} del percorso</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </motion.div>
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
