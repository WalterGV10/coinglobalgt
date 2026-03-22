"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import StarField from "@/components/effects/StarField";

export default function Hero() {
  const t = useTranslations("Hero");
  const sectionRef = useRef<HTMLElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger stagger cascade after mount
    requestAnimationFrame(() => setMounted(true));
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      // Normalized -1 to 1
      const nx = (clientX / innerWidth - 0.5) * 2;
      const ny = (clientY / innerHeight - 0.5) * 2;

      if (orb1Ref.current) {
        orb1Ref.current.style.transform = `translate(${nx * 30}px, ${ny * 20}px)`;
      }
      if (orb2Ref.current) {
        orb2Ref.current.style.transform = `translate(${nx * -20}px, ${ny * -15}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Star Field Background */}
      <StarField />

      {/* Neon Arc Overlay */}
      <div className="neon-arc" />

      {/* Parallax Glow Orbs */}
      <div
        ref={orb1Ref}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] pointer-events-none z-[1]"
        style={{
          background: "radial-gradient(circle, rgba(212,168,83,0.25) 0%, transparent 70%)",
          transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        aria-hidden="true"
      />
      <div
        ref={orb2Ref}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-15 blur-[100px] pointer-events-none z-[1]"
        style={{
          background: "radial-gradient(circle, rgba(106,156,192,0.2) 0%, transparent 70%)",
          transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Eyebrow */}
        <p
          className={`group relative overflow-hidden inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-neon-500/20 bg-neon-500/5 backdrop-blur-md text-neon-400 text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-6 sm:mb-8 transition-all duration-700 ${
            mounted
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
          style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          <span className="w-2 h-2 rounded-full bg-neon-500 animate-pulse-glow shrink-0" />
          <span>{t("eyebrow")}</span>
          <span className="opacity-40 select-none">·</span>
          <span className="text-star-100/90">{t("location")}</span>
          {/* Shimmer sweep */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
        </p>

        {/* H1 — LCP element */}
        <h1
          className={`font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold leading-[1.08] tracking-tight mb-4 sm:mb-6 transition-all duration-700 ${
            mounted
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            transitionDelay: "150ms",
          }}
        >
          <span className="text-gradient-primary">{t("title1")}</span>
          <br />
          <span className="text-star-100">{t("title2")}</span>
        </h1>

        {/* Subtitle */}
        <p
          className={`max-w-2xl 2xl:max-w-3xl mx-auto text-base sm:text-lg md:text-xl 2xl:text-2xl text-star-300 leading-relaxed mb-6 sm:mb-10 transition-all duration-700 ${
            mounted
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            transitionDelay: "300ms",
          }}
        >
          {t("subtitle")}
        </p>

        {/* Gold Ornamental Divider */}
        <div
          className={`gold-divider mb-6 sm:mb-10 transition-all duration-700 ${mounted ? "opacity-100" : "opacity-0"}`}
          style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)", transitionDelay: "370ms" }}
        >
          <span className="gold-divider-diamond" />
        </div>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ${
            mounted
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            transitionDelay: "450ms",
          }}
        >
          <a
            href="#contacto"
            className="btn-press group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-neon-700 via-neon-600 to-neon-700 hover:from-neon-600 hover:via-neon-500 hover:to-neon-600 text-white font-semibold text-base transition-all duration-300 animate-pulse-glow gold-border"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">
              <path d="M7 3L14 10L7 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {t("cta_primary")}
          </a>

          <a
            href="#servicios"
            className="btn-press inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-neon-500/40 hover:border-neon-400 text-neon-400 hover:text-neon-300 font-semibold text-base transition-all duration-300 hover:bg-neon-500/5"
          >
            {t("cta_secondary")}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true">
              <path d="M8 3V13M8 13L4 9M8 13L12 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Trust Indicators */}
        <div
          className={`mt-16 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)", transitionDelay: "650ms" }}
        >
          {/* Gold flanking lines */}
          <div className="gold-divider mb-5">
            <span className="gold-divider-diamond" />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-star-300/50 text-xs sm:text-sm tracking-wider uppercase">
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-neon-500/60" aria-hidden="true"><path d="M7 0L8.5 5H14L9.5 8L11 13L7 10L3 13L4.5 8L0 5H5.5L7 0Z" fill="currentColor"/></svg>
              FATCA
            </span>
            <span className="w-px h-3 bg-neon-500/20" />
            <span>CRS</span>
            <span className="w-px h-3 bg-neon-500/20" />
            <span>AML / CFT</span>
            <span className="w-px h-3 bg-neon-500/20" />
            <span>ISO 9001</span>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-void-950 to-transparent z-10 pointer-events-none" />
    </section>
  );
}
