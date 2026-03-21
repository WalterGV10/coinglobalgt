"use client";

import ScrollReveal from "@/components/effects/ScrollReveal";
import { useTranslations } from "next-intl";

const serviceIcons = [
  (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="4" y="8" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M4 14H36" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="20" cy="24" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M18 24L19.5 25.5L22.5 22.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="6" y="4" width="12" height="32" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="22" y="12" width="12" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M10 10H14M10 16H14M10 22H14M10 28H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M26 18H30M26 24H30M26 30H30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M16 16L20 12L24 16M16 24L20 28L24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 12V28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 20H26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M8 32V20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M16 32V14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 32V22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M32 32V10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M6 8L14 12L24 6L34 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="26" cy="26" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M20 14L20 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
    </svg>
  ),
  (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <ellipse cx="20" cy="20" rx="6" ry="14" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M6 20H34" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 12H32M8 28H32" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
    </svg>
  ),
];

interface ServiceItem {
  title: string;
  description: string;
  features: string[];
}

export default function Services() {
  const t = useTranslations("Services");
  const rawItems = t.raw("items");
  const items = Array.isArray(rawItems) ? (rawItems as ServiceItem[]) : [];

  return (
    <section id="servicios" className="relative z-10 py-24 md:py-32">
      {/* Gold section edge */}
      <div className="gold-section-edge" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <p className="text-neon-400 text-sm font-semibold tracking-widest uppercase mb-3">
              {t("eyebrow")}
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-star-100 mb-5">
              {t("title")}
            </h2>
            <div className="gold-divider mb-6">
              <span className="gold-divider-diamond" />
            </div>
            <p className="max-w-2xl mx-auto text-star-300 text-base md:text-lg leading-relaxed">
              {t("description")}
            </p>
          </div>
        </ScrollReveal>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((service, index) => (
            <ScrollReveal key={index} delay={index * 80}>
              <article
                className="glass card-glow rounded-2xl p-6 md:p-8 group cursor-default h-full flex flex-col relative"
              >
                {/* Gold corner accents */}
                <div className="gold-corners absolute inset-0 rounded-2xl pointer-events-none" />

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-neon-600/10 border border-neon-500/20 flex items-center justify-center text-neon-400 mb-5 transition-all duration-300 group-hover:bg-neon-600/20 group-hover:text-neon-300 group-hover:scale-110">
                  {serviceIcons[index]}
                </div>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-heading)] text-lg md:text-xl font-semibold text-star-100 mb-3 group-hover:text-neon-400 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-star-300 text-sm md:text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="mt-auto space-y-3 border-t border-white/5 pt-5 mb-5">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-star-300/80 group-hover:text-star-300 transition-colors">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 text-neon-500/60 shrink-0" aria-hidden="true"><path d="M11.6667 3.5L5.25001 9.91667L2.33334 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Arrow (Renamed Context) */}
                <a href="#contacto" className="inline-flex items-center gap-2 text-neon-500 hover:text-neon-400 text-sm font-medium transition-all duration-300 group-hover:translate-x-1 outline-none focus-visible:ring-2 focus-visible:ring-neon-500 rounded-sm">
                  {t("cta")}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
