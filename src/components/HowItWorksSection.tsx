"use client";

import { useEffect, useRef, useState } from "react";
import { ChefHat, Smartphone, UtensilsCrossed, ArrowRight } from "lucide-react";

export default function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;

      if (totalScrollable <= 0) return;

      // When rect.top is 0, the sticky element is pinned at top
      const scrolled = -rect.top;
      const rawProgress = scrolled / totalScrollable;
      const clamped = Math.min(Math.max(rawProgress, 0), 1);

      animationFrameId = requestAnimationFrame(() => {
        setProgress(clamped);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // 1. Panel rises from bottom (0% -> 30% scroll progress)
  const panelTranslateY =
    progress <= 0 ? 100 : progress >= 0.3 ? 0 : (1 - progress / 0.3) * 100;

  // 2. Statement text: Fades in during rise (0.15 -> 0.3), stays centered (0.3 -> 0.5), fades up & out (0.5 -> 0.65)
  let statementOpacity = 0;
  let statementY = 40;
  if (progress < 0.12) {
    statementOpacity = 0;
    statementY = 40;
  } else if (progress < 0.28) {
    const p = (progress - 0.12) / 0.16;
    statementOpacity = p;
    statementY = (1 - p) * 40;
  } else if (progress < 0.48) {
    statementOpacity = 1;
    statementY = 0;
  } else if (progress < 0.62) {
    const p = (progress - 0.48) / 0.14;
    statementOpacity = 1 - p;
    statementY = -p * 50;
  } else {
    statementOpacity = 0;
    statementY = -50;
  }

  // 3. The 3 Cards: Slide in from bottom & fade in (0.55 -> 0.75), remain in full view (0.75 -> 1.0)
  let cardsOpacity = 0;
  let cardsY = 60;
  if (progress < 0.52) {
    cardsOpacity = 0;
    cardsY = 60;
  } else if (progress < 0.72) {
    const p = (progress - 0.52) / 0.2;
    cardsOpacity = p;
    cardsY = (1 - p) * 60;
  } else {
    cardsOpacity = 1;
    cardsY = 0;
  }

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
      className="relative h-[250vh] -mt-16 sm:-mt-24 pointer-events-auto"
    >
      {/* Sticky Full-Viewport Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-end pointer-events-none">
        {/* Full-width Dark Beige Overlay Sheet (#EFE6D8) that rises from bottom */}
        <div
          style={{
            transform: `translate3d(0, ${panelTranslateY}%, 0)`,
          }}
          className="relative w-full h-full bg-[#EFE6D8] rounded-t-[36px] sm:rounded-t-[60px] border-t border-resty-stone/15 shadow-[0_-30px_70px_rgba(45,45,42,0.22)] flex flex-col justify-center items-center pointer-events-auto px-4 sm:px-6 lg:px-8 will-change-transform"
        >
          {/* STAGE 1: Statement Title with Visual Impact */}
          <div
            style={{
              opacity: statementOpacity,
              transform: `translate3d(0, ${statementY}px, 0)`,
              display: progress >= 0.65 ? "none" : "block",
            }}
            className="absolute max-w-4xl mx-auto text-center px-4 transition-all duration-100 will-change-transform"
          >
            <h2 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl text-resty-stone tracking-tight leading-[1.12]">
              Il ristorante sceglie. <br className="hidden sm:inline" />
              <span className="text-resty-orange">Tu gusti in sala.</span>
            </h2>
          </div>

          {/* STAGE 2: The 3 Cards that take its place */}
          <div
            style={{
              opacity: cardsOpacity,
              transform: `translate3d(0, ${cardsY}px, 0)`,
              display: progress < 0.5 ? "none" : "block",
            }}
            className="w-full max-w-6xl mx-auto transition-all duration-100 will-change-transform"
          >
            <div className="text-center mb-8 sm:mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-resty-orange-dark bg-white/70 px-3.5 py-1.5 rounded-full border border-resty-stone/10">
                Come Funziona · 3 Semplici Passaggi
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.number}
                    className="group relative bg-white rounded-3xl p-6 sm:p-8 border border-resty-stone-border/80 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Bar with Number and Badge */}
                      <div className="flex items-center justify-between mb-4 sm:mb-6">
                        <span className="font-heading font-black text-2xl sm:text-3xl text-resty-orange/30 group-hover:text-resty-orange transition-colors">
                          {step.number}
                        </span>
                        <span className="text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-full bg-resty-sand text-resty-stone-light border border-resty-stone-border/60">
                          {step.badge}
                        </span>
                      </div>

                      {/* Icon */}
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-resty-peach/70 text-resty-orange flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:bg-resty-orange group-hover:text-white transition-all">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                      </div>

                      {/* Title & Desc */}
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
          </div>
        </div>
      </div>
    </div>
  );
}
