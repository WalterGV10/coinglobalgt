"use client";

import ScrollReveal from "@/components/effects/ScrollReveal";
import AnimatedCounter from "@/components/effects/AnimatedCounter";
import { useTranslations } from "next-intl";

interface CapabilityItem {
  title: string;
  desc: string;
}

export default function About() {
  const t = useTranslations("About");
  const rawCapabilities = t.raw("capabilities_items");
  const capabilities = Array.isArray(rawCapabilities) ? (rawCapabilities as CapabilityItem[]) : [];

  return (
    <section id="nosotros" className="relative z-10 py-16 sm:py-20 lg:py-24 2xl:py-32 cv-auto overflow-hidden">
      {/* Gold section edge */}
      <div className="gold-section-edge" />

      {/* Subtle background glow for this section */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-neon-600/5 blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Narrative (Spans 5 cols) */}
          <div className="lg:col-span-5">
            <ScrollReveal>
              <div className="sticky top-32">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-px bg-neon-500/50" />
                  <p className="text-neon-400 text-xs font-semibold tracking-[0.2em] uppercase">
                    {t("eyebrow")}
                  </p>
                </div>
                
                <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-star-100 mb-6 leading-[1.15]">
                  {t("title_white")}
                  <br />
                  <span className="text-shimmer-gold">{t("title_gold")}</span>
                </h2>
                
                <p className="text-star-300 text-base leading-relaxed mb-6">
                  {t("p1")}
                </p>
                <p className="text-star-300/80 text-sm leading-relaxed mb-10">
                  {t("p2")}
                </p>

                {/* Vertical Trust Indicators */}
                <div className="space-y-6 mb-10 pl-4 border-l-2 border-neon-500/20">
                  <div className="flex items-center gap-4">
                    <div className="w-12 text-2xl font-bold font-[family-name:var(--font-heading)] text-star-100">
                      <AnimatedCounter target={180} suffix="+" />
                    </div>
                    <div>
                      <p className="text-star-100 text-sm font-semibold">{t("stat1_title")}</p>
                      <p className="text-star-300/60 text-xs">{t("stat1_desc")}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 flex items-center text-neon-500">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        <path d="M9 12l2 2 4-4"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-star-100 text-sm font-semibold">{t("stat2_title")}</p>
                      <p className="text-star-300/60 text-xs">{t("stat2_desc")}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 flex items-center text-neon-500">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-star-100 text-sm font-semibold">{t("stat3_title")}</p>
                      <p className="text-star-300/60 text-xs">{t("stat3_desc")}</p>
                    </div>
                  </div>
                </div>

                <a href="#contacto" className="inline-flex items-center gap-2 text-neon-400 hover:text-neon-300 font-medium text-sm transition-colors group">
                  {t("cta_team")}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Capabilities Index (Spans 7 cols) */}
          <div className="lg:col-span-7 lg:pt-16">
            <div className="glass gold-border rounded-2xl p-6 sm:p-10">
              <ScrollReveal direction="up">
                <h3 className="text-star-100 font-semibold tracking-wide mb-8 font-[family-name:var(--font-heading)] flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-neon-500" />
                  {t("capabilities_title")}
                </h3>
              </ScrollReveal>

              <div className="space-y-1">
                {capabilities.map((cap, i) => (
                  <ScrollReveal key={i} direction="up" delay={i * 60}>
                    <div className="group relative py-6 border-t border-white/5 hover:border-neon-500/30 transition-colors duration-300">
                      {/* Decorative hover sweep */}
                      <div className="absolute inset-0 bg-gradient-to-r from-neon-500/0 via-neon-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      
                      <div className="relative z-10 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 pt-2">
                        <div>
                          <h4 className="font-[family-name:var(--font-heading)] text-lg text-star-100 mb-2 group-hover:text-shimmer-gold transition-colors duration-300">
                            {cap.title}
                          </h4>
                          <p className="text-star-300/80 text-sm leading-relaxed">
                            {cap.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
            
            {/* Location card relocated below the index */}
            <ScrollReveal direction="up" delay={300}>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-neon-500/10 flex items-center justify-center text-neon-400 border border-neon-500/20">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-star-100">{t("footer_title")}</p>
                    <p className="text-xs text-star-300 mt-1">{t("footer_desc")}</p>
                  </div>
                </div>
                <div className="text-right hidden sm:block">
                  <p className="text-xs font-mono text-neon-500/60">LATAM / GLOBAL</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
