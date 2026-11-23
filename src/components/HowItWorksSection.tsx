"use client";

import { useEffect, useRef } from "react";
import { ChefHat, Smartphone, UtensilsCrossed } from "lucide-react";

function clamp01(value: number): number {
  return value < 0 ? 0 : value > 1 ? 1 : value;
}

function progressInRange(p: number, start: number, end: number): number {
  return clamp01((p - start) / (end - start));
}

function easeOutCubic(t: number): number {
  const inv = 1 - t;
  return 1 - inv * inv * inv;
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export default function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stage1Ref = useRef<HTMLDivElement>(null);
  const stage2Ref = useRef<HTMLDivElement>(null);

  // Stage 1 refs
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const accentRef = useRef<HTMLDivElement>(null);

  // Stage 2 refs
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const card0Ref = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let cachedTop = 0;
    let cachedScrollable = 1;
    let targetP = -0.45;
    let currentP = -0.45;
    let rafId = 0;
    let lastTime = performance.now();

    const measure = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      cachedTop = rect.top + window.scrollY;
      cachedScrollable = Math.max(containerRef.current.offsetHeight - window.innerHeight, 1);
    };

    const computeRawP = () => {
      // Allows p to run continuously from -0.45 (as the beige sheet enters the viewport)
      // through 0.00 (docking at sticky top-0) to 1.00 (end of sticky sequence)
      const raw = (window.scrollY - cachedTop) / cachedScrollable;
      return Math.max(-0.45, Math.min(1.05, raw));
    };

    const renderFrame = (p: number) => {
      // ─────────────────────────────────────────────────────────────────
      // STAGE 1: "Il ristorante sceglie. Tu gusti in sala."
      // Continuous 3-phase trajectory:
      //   1. Entrance as sheet rises into viewport (p: -0.36 -> 0.04)
      //   2. Living reading plateau with subtle upward drift (p: 0.04 -> 0.24)
      //   3. Upward relay exit into Stage 2 (p: 0.22 -> 0.46)
      // ─────────────────────────────────────────────────────────────────
      const l1In = easeOutCubic(progressInRange(p, -0.36, -0.06));
      const l1Drift = progressInRange(p, -0.06, 0.22);
      const l1Out = easeInOutCubic(progressInRange(p, 0.22, 0.42));
      const l1Opacity = l1In * (1 - l1Out);
      const l1Y = (1 - l1In) * 44 - l1Drift * 8 - l1Out * 58;
      const l1Scale = 0.96 + 0.04 * l1In - 0.04 * l1Out;
      const l1Blur = l1Out * 2.5;

      if (line1Ref.current) {
        line1Ref.current.style.opacity = l1Opacity.toFixed(4);
        line1Ref.current.style.transform = `translate3d(0, ${l1Y.toFixed(2)}px, 0) scale3d(${l1Scale.toFixed(4)}, ${l1Scale.toFixed(4)}, 1)`;
        line1Ref.current.style.filter = l1Blur > 0.15 ? `blur(${l1Blur.toFixed(2)}px)` : "none";
      }

      const l2In = easeOutCubic(progressInRange(p, -0.26, 0.02));
      const l2Drift = progressInRange(p, 0.02, 0.26);
      const l2Out = easeInOutCubic(progressInRange(p, 0.26, 0.46));
      const l2Opacity = l2In * (1 - l2Out);
      const l2Y = (1 - l2In) * 44 - l2Drift * 8 - l2Out * 54;
      const l2Scale = 0.96 + 0.04 * l2In - 0.04 * l2Out;
      const l2Blur = l2Out * 2.5;

      if (line2Ref.current) {
        line2Ref.current.style.opacity = l2Opacity.toFixed(4);
        line2Ref.current.style.transform = `translate3d(0, ${l2Y.toFixed(2)}px, 0) scale3d(${l2Scale.toFixed(4)}, ${l2Scale.toFixed(4)}, 1)`;
        line2Ref.current.style.filter = l2Blur > 0.15 ? `blur(${l2Blur.toFixed(2)}px)` : "none";
      }

      const accIn = easeOutCubic(progressInRange(p, -0.16, 0.06));
      const accDrift = progressInRange(p, 0.06, 0.28);
      const accOut = easeInOutCubic(progressInRange(p, 0.28, 0.45));
      const accOpacity = accIn * (1 - accOut);
      const accY = (1 - accIn) * 24 - accDrift * 6 - accOut * 46;
      const accScaleX = Math.max(0.1, accIn * (1 - 0.75 * accOut));

      if (accentRef.current) {
        accentRef.current.style.opacity = accOpacity.toFixed(4);
        accentRef.current.style.transform = `translate3d(0, ${accY.toFixed(2)}px, 0) scale3d(${accScaleX.toFixed(4)}, 1, 1)`;
      }

      if (stage1Ref.current) {
        const s1Active = p < 0.44;
        stage1Ref.current.style.pointerEvents = s1Active ? "auto" : "none";
        stage1Ref.current.setAttribute("aria-hidden", s1Active ? "false" : "true");
      }

      // ─────────────────────────────────────────────────────────────────
      // STAGE 2: "Come funziona" Header & 3 Step Cards
      // Continuous vertical relay rising along the same upward vector
      // right as Stage 1 clears the center (p: 0.35 -> 0.72)
      // ─────────────────────────────────────────────────────────────────
      const titleIn = easeOutCubic(progressInRange(p, 0.35, 0.54));
      const titleY = (1 - titleIn) * 54;
      const titleBlur = (1 - titleIn) * 2.5;
      if (titleRef.current) {
        titleRef.current.style.opacity = titleIn.toFixed(4);
        titleRef.current.style.transform = `translate3d(0, ${titleY.toFixed(2)}px, 0)`;
        titleRef.current.style.filter = titleBlur > 0.15 && titleIn > 0.01 ? `blur(${titleBlur.toFixed(2)}px)` : "none";
      }

      const subIn = easeOutCubic(progressInRange(p, 0.39, 0.58));
      const subY = (1 - subIn) * 46;
      if (subtitleRef.current) {
        subtitleRef.current.style.opacity = subIn.toFixed(4);
        subtitleRef.current.style.transform = `translate3d(0, ${subY.toFixed(2)}px, 0)`;
      }

      const cardRanges: [React.RefObject<HTMLDivElement | null>, number, number][] = [
        [card0Ref, 0.43, 0.64],
        [card1Ref, 0.48, 0.68],
        [card2Ref, 0.53, 0.72],
      ];

      for (const [ref, start, end] of cardRanges) {
        if (!ref.current) continue;
        const cIn = easeOutCubic(progressInRange(p, start, end));
        const cY = (1 - cIn) * 60;
        const cScale = 0.96 + 0.04 * cIn;
        ref.current.style.opacity = cIn.toFixed(4);
        ref.current.style.transform = `translate3d(0, ${cY.toFixed(2)}px, 0) scale3d(${cScale.toFixed(4)}, ${cScale.toFixed(4)}, 1)`;
      }

      if (stage2Ref.current) {
        const s2Active = p >= 0.42;
        stage2Ref.current.style.pointerEvents = s2Active ? "auto" : "none";
        stage2Ref.current.setAttribute("aria-hidden", s2Active ? "false" : "true");
      }
    };

    const tick = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.064);
      lastTime = now;

      if (reducedMotion) {
        currentP = targetP;
      } else {
        // Frame-rate independent exponential smoothing (lambda = 14 -> zero overshoot, silk interpolation)
        const alpha = 1 - Math.exp(-14 * dt);
        currentP += (targetP - currentP) * alpha;
      }

      renderFrame(currentP);

      if (Math.abs(targetP - currentP) > 0.0003) {
        rafId = requestAnimationFrame(tick);
      } else {
        currentP = targetP;
        renderFrame(currentP);
        rafId = 0;
      }
    };

    const onScroll = () => {
      targetP = computeRawP();
      if (!rafId) {
        lastTime = performance.now();
        rafId = requestAnimationFrame(tick);
      }
    };

    const onResize = () => {
      measure();
      targetP = computeRawP();
      currentP = targetP;
      renderFrame(currentP);
    };

    measure();
    targetP = computeRawP();
    currentP = targetP;
    renderFrame(currentP);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const steps = [
    {
      number: "01",
      icon: ChefHat,
      badge: "Il locale decide",
      title: "Il ristorante sceglie cosa e quando",
      description:
        "Il locale decide quali piatti proporre, a quale prezzo promozionale e in quali fasce orarie meno affollate, valorizzando gli ingredienti freschi già presenti in cucina.",
      ref: card0Ref,
    },
    {
      number: "02",
      icon: Smartphone,
      badge: "Trasparenza totale",
      title: "Tu consulti e blocchi l'offerta",
      description:
        "Scopri le proposte del giorno vicino a te, verifichi in anteprima il piatto, l'orario e il prezzo esatto. Sai quanto spendi prima ancora di uscire di casa.",
      ref: card1Ref,
    },
    {
      number: "03",
      icon: UtensilsCrossed,
      badge: "Esperienza al tavolo",
      title: "Gusti il piatto direttamente in sala",
      description:
        "Niente asporto frettoloso o contenitori freddi: ti accomodi al tavolo del ristorante e gusti il piatto con l'accoglienza, la qualità e il servizio di sempre.",
      ref: card2Ref,
    },
  ];

  return (
    <div
      ref={containerRef}
      id="come-funziona"
      className="relative h-[225vh] -mt-10 sm:-mt-14 pointer-events-auto scroll-mt-20"
    >
      {/* Sticky Full-Viewport Stage — rises natively on the GPU Compositor Thread */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-end pointer-events-none">
        <div className="relative w-full h-full bg-[#EFE6D8] rounded-t-[40px] md:rounded-t-[64px] border-t border-resty-stone/15 shadow-[0_-16px_40px_rgba(45,45,42,0.10)] overflow-hidden pointer-events-auto isolate">
          {/* ─────────────────────────────────────────────────────────────
              STAGE 1: "Il ristorante sceglie. Tu gusti in sala."
              Pure positioning wrapper (no duplicate parent opacity/transform)
             ───────────────────────────────────────────────────────────── */}
          <div
            ref={stage1Ref}
            aria-hidden="false"
            className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-6 text-center"
          >
            <div className="max-w-4xl mx-auto">
              {/* Line 1: Il ristorante sceglie. */}
              <div ref={line1Ref} className="will-change-[transform,opacity]">
                <h2 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl text-resty-stone tracking-tight leading-[1.12]">
                  Il ristorante sceglie.
                </h2>
              </div>

              {/* Line 2: Tu gusti in sala. */}
              <div ref={line2Ref} className="mt-1 sm:mt-2 will-change-[transform,opacity]">
                <h2 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl text-resty-orange tracking-tight leading-[1.12]">
                  Tu gusti in sala.
                </h2>
              </div>

              {/* Accent Underline */}
              <div
                ref={accentRef}
                className="w-16 h-1 rounded-full bg-resty-orange/40 mx-auto mt-6 sm:mt-8 origin-center will-change-[transform,opacity]"
              />
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              STAGE 2: "Come funziona" Header & 3 Cards
              Pure positioning wrapper (no duplicate parent opacity/transform)
             ───────────────────────────────────────────────────────────── */}
          <div
            ref={stage2Ref}
            aria-hidden="true"
            className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pointer-events-none"
          >
            <div className="w-full max-w-6xl mx-auto">
              {/* Header Above Cards */}
              <div className="text-center mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto">
                <h2
                  ref={titleRef}
                  className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-resty-stone tracking-tight leading-tight mb-2 sm:mb-3 will-change-[transform,opacity]"
                >
                  Come funziona
                </h2>

                <p
                  ref={subtitleRef}
                  className="text-xs sm:text-sm md:text-base text-resty-stone-light font-sans font-normal leading-relaxed max-w-2xl mx-auto will-change-[transform,opacity]"
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
                      ref={step.ref}
                      className="will-change-[transform,opacity] flex"
                    >
                      {/* Inner card handles pointer hover independently from outer scroll transform */}
                      <div className="group relative overflow-hidden w-full bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 border border-resty-stone-border/80 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-[translate,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] flex flex-col justify-between">
                        {/* Sfondo con icona filigrana */}
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute -right-4 -top-4 text-resty-orange/[0.08] group-hover:text-resty-orange/[0.13] group-hover:scale-105 transition-all duration-500 ease-out select-none"
                        >
                          <Icon className="w-36 h-36 sm:w-44 sm:h-44" strokeWidth={1.2} />
                        </div>

                        <div className="relative z-10">
                          {/* Numero e Titolo (ex pillow) */}
                          <div className="flex items-center gap-3 mb-3">
                            <span className="font-heading font-black text-2xl sm:text-3xl text-resty-orange/35 group-hover:text-resty-orange transition-colors shrink-0">
                              {step.number}
                            </span>
                            <h3 className="font-heading font-bold text-base sm:text-lg lg:text-xl text-resty-stone leading-tight tracking-tight">
                              {step.badge}
                            </h3>
                          </div>

                          {/* Subtitle & Description */}
                          <p className="font-sans font-semibold text-xs sm:text-sm text-resty-stone/90 mb-1.5 sm:mb-2 leading-snug">
                            {step.title}
                          </p>
                          <p className="text-xs sm:text-sm text-resty-stone-light leading-relaxed font-sans">
                            {step.description}
                          </p>
                        </div>
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
