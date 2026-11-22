"use client";

import { useEffect, useRef, useState } from "react";
import { ChefHat, Smartphone, UtensilsCrossed, ArrowRight } from "lucide-react";

export default function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState<1 | 2>(1);
  const stageRef = useRef<1 | 2>(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let cachedTop = 0;
    let cachedScrollable = 1;

    const measure = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      cachedTop = rect.top + window.scrollY;
      cachedScrollable = Math.max(containerRef.current.offsetHeight - window.innerHeight, 1);
    };

    const onScroll = () => {
      const scrolled = window.scrollY - cachedTop;
      const progress = scrolled / cachedScrollable;

      // Hysteresis thresholds prevent boundary flicker
      if (progress >= 0.36 && stageRef.current !== 2) {
        stageRef.current = 2;
        setStage(2);
      } else if (progress < 0.26 && stageRef.current !== 1) {
        stageRef.current = 1;
        setStage(1);
      }
    };

    measure();
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const isStage1 = stage === 1;
  const isStage2 = stage === 2;

  const steps = [
    {
      number: "01",
      icon: ChefHat,
      badge: "Il locale decide",
      title: "Il ristorante sceglie cosa e quando",
      description:
        "Il locale decide quali piatti proporre, a quale prezzo promozionale e in quali fasce orarie meno affollate, valorizzando gli ingredienti freschi già presenti in cucina.",
      delayClass: "delay-[140ms]",
    },
    {
      number: "02",
      icon: Smartphone,
      badge: "Trasparenza totale",
      title: "Tu consulti e blocchi l'offerta",
      description:
        "Scopri le proposte del giorno vicino a te, verifichi in anteprima il piatto, l'orario e il prezzo esatto. Sai quanto spendi prima ancora di uscire di casa.",
      delayClass: "delay-[220ms]",
    },
    {
      number: "03",
      icon: UtensilsCrossed,
      badge: "Esperienza al tavolo",
      title: "Gusti il piatto direttamente in sala",
      description:
        "Niente asporto frettoloso o contenitori freddi: ti accomodi al tavolo del ristorante e gusti il piatto con l'accoglienza, la qualità e il servizio di sempre.",
      delayClass: "delay-[300ms]",
    },
  ];

  return (
    <div
      ref={containerRef}
      id="come-funziona"
      className="relative h-[215vh] -mt-10 sm:-mt-14 pointer-events-auto"
    >
      {/* Sticky Full-Viewport Stage — rises natively on the GPU Compositor Thread */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-end pointer-events-none">
        <div className="relative w-full h-full bg-[#EFE6D8] rounded-t-[40px] md:rounded-t-[64px] border-t border-resty-stone/15 shadow-[0_-16px_40px_rgba(45,45,42,0.10)] overflow-hidden pointer-events-auto isolate">
          {/* ─────────────────────────────────────────────────────────────
              STAGE 1: "Il ristorante sceglie. Tu gusti in sala."
              100% Off-Thread CSS Compositor Transitions (transform + opacity)
             ───────────────────────────────────────────────────────────── */}
          <div
            aria-hidden={!isStage1}
            className={`absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-6 text-center transition-[transform,opacity] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isStage1
                ? "opacity-100 translate-y-0 duration-600 pointer-events-auto"
                : "opacity-0 -translate-y-10 duration-350 pointer-events-none"
            }`}
          >
            <div className="max-w-4xl mx-auto">
              {/* Line 1: Il ristorante sceglie. */}
              <div
                className={`transition-[transform,opacity] duration-550 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isStage1 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
                }`}
              >
                <h2 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl text-resty-stone tracking-tight leading-[1.12]">
                  Il ristorante sceglie.
                </h2>
              </div>

              {/* Line 2: Tu gusti in sala. */}
              <div
                className={`mt-1 sm:mt-2 transition-[transform,opacity] duration-550 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isStage1
                    ? "opacity-100 translate-y-0 delay-[90ms]"
                    : "opacity-0 -translate-y-5 delay-0"
                }`}
              >
                <h2 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl text-resty-orange tracking-tight leading-[1.12]">
                  Tu gusti in sala.
                </h2>
              </div>

              {/* Accent Underline */}
              <div
                className={`w-16 h-1 rounded-full bg-resty-orange/40 mx-auto mt-6 sm:mt-8 origin-center transition-[transform,opacity] duration-500 ease-out ${
                  isStage1
                    ? "opacity-100 scale-x-100 delay-[160ms]"
                    : "opacity-0 scale-x-0 delay-0"
                }`}
              />
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              STAGE 2: "Come funziona" Header & 3 Cards
              100% Off-Thread CSS Compositor Transitions (Zero Main-Thread rAF)
             ───────────────────────────────────────────────────────────── */}
          <div
            aria-hidden={!isStage2}
            className={`absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 transition-[transform,opacity] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isStage2
                ? "opacity-100 translate-y-0 duration-600 pointer-events-auto"
                : "opacity-0 translate-y-8 duration-350 pointer-events-none"
            }`}
          >
            <div className="w-full max-w-6xl mx-auto">
              {/* Header Above Cards */}
              <div className="text-center mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto">
                <h2
                  className={`font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-resty-stone tracking-tight leading-tight mb-2 sm:mb-3 transition-[transform,opacity] duration-550 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isStage2
                      ? "opacity-100 translate-y-0 delay-[50ms]"
                      : "opacity-0 translate-y-5 delay-0"
                  }`}
                >
                  Come funziona
                </h2>

                <p
                  className={`text-xs sm:text-sm md:text-base text-resty-stone-light font-sans font-normal leading-relaxed max-w-2xl mx-auto transition-[transform,opacity] duration-550 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isStage2
                      ? "opacity-100 translate-y-0 delay-[100ms]"
                      : "opacity-0 translate-y-4 delay-0"
                  }`}
                >
                  Il locale decide quali piatti proporre, a quale prezzo e in quali orari. Tu consulti l&apos;offerta e gusti il piatto nel ristorante, con la qualità e il servizio di sempre.
                </p>
              </div>

              {/* 3 Step Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {steps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.number}
                      className={`group relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 border border-resty-stone-border/80 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-[transform,opacity,box-shadow] duration-550 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between ${
                        isStage2
                          ? `opacity-100 translate-y-0 ${step.delayClass}`
                          : "opacity-0 translate-y-6 delay-0"
                      }`}
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
                        <h3 className="font-sans font-bold text-base sm:text-lg text-resty-stone mb-1.5 sm:mb-2 leading-snug">
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
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
