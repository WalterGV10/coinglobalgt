"use client";

import ScrollReveal from "@/components/effects/ScrollReveal";
import { useTranslations } from "next-intl";

const countries = [
  { name: "Guatemala", flag: "🇬🇹", highlight: true },
  { name: "El Salvador", flag: "🇸🇻" },
  { name: "Panamá", flag: "🇵🇦" },
  { name: "México", flag: "🇲🇽" },
  { name: "Colombia", flag: "🇨🇴" },
  { name: "Brasil", flag: "🇧🇷" },
  { name: "Rep. Dominicana", flag: "🇩🇴" },
  { name: "Estados Unidos", flag: "🇺🇸" },
  { name: "Francia", flag: "🇫🇷" },
  { name: "Dubái", flag: "🇦🇪" },
  { name: "Singapur", flag: "🇸🇬" },
  { name: "Qatar", flag: "🇶🇦" },
  { name: "Eslovenia", flag: "🇸🇮" },
];

export default function Jurisdictions() {
  const t = useTranslations("Jurisdictions");

  return (
    <section id="ubicacion" className="relative z-10 py-16 sm:py-20 lg:py-24 2xl:py-32 cv-auto">
      {/* Gold section edge */}
      <div className="gold-section-edge" />

      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-neon-400 text-sm font-semibold tracking-widest uppercase mb-3">
              {t("eyebrow")}
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-star-100 mb-4">
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

        {/* Country Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
          {countries.map((country, i) => (
            <ScrollReveal key={country.name} delay={i * 60} threshold={0.05}>
              <div
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  country.highlight
                    ? "glass border-neon-500/40 text-neon-400 animate-pulse-glow gold-border"
                    : "glass text-star-300 hover:text-star-100 hover:border-neon-500/20 hover:scale-105"
                }`}
              >
                <span className="text-lg" role="img" aria-label={`Bandera de ${country.name}`}>
                  {country.flag}
                </span>
                {(() => {
                  const countryKey = country.name.replace(/\./g, '').replace(/\s+/g, '');
                  return t.has(`countries.${countryKey}`) ? t(`countries.${countryKey}`) : country.name;
                })()}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Regulatory Compliance Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { acronym: "FATCA", full: "Foreign Account Tax Compliance Act" },
            { acronym: "CRS", full: "Common Reporting Standard" },
            { acronym: "AML/CFT", full: "Anti Money Laundering" },
            { acronym: "ISO 9001", full: "Quality Management System" },
          ].map((badge, i) => (
            <ScrollReveal key={badge.acronym} delay={i * 100}>
              <div
                className="glass rounded-xl p-4 text-center group hover:border-neon-500/30 transition-all duration-300 hover:scale-105"
              >
                <p className="font-[family-name:var(--font-heading)] text-lg font-bold text-neon-400 mb-1 group-hover:text-neon-300 transition-colors">
                  {badge.acronym}
                </p>
                <p className="text-star-300/60 text-[10px] leading-tight uppercase tracking-wider">
                  {badge.full}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
