"use client";

import ScrollReveal from "@/components/effects/ScrollReveal";
import { useTranslations } from "next-intl";

const partners = [
  "Grupo Infinito",
  "World Trade Center",
  "Bitcoin Alliance",
  "Fiduciary Trust Intl",
  "Global Compliance Corp",
  "Ameritrade Capital",
  "Pacific Holdings",
  "Nordic Financial Group",
];

function PartnerLogo({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center px-8 py-3 opacity-40 hover:opacity-80 transition-opacity duration-300 shrink-0">
      <span className="font-[family-name:var(--font-heading)] text-base md:text-lg font-semibold text-star-200 tracking-wide whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export default function Partners() {
  const t = useTranslations("Partners");

  return (
    <section className="relative z-10 py-16 md:py-20 border-t border-b border-white/5 cv-auto">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-star-300/50 text-xs tracking-widest uppercase mb-8">
            {t("title")}
          </p>
        </div>
      </ScrollReveal>

      {/* Marquee Container — CSS-only infinite scroll, pauses on hover */}
      <div className="relative overflow-hidden">
        {/* Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-void-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-void-950 to-transparent z-10 pointer-events-none" />

        {/* Marquee Track: duplicated for seamless loop */}
        <div className="flex animate-marquee marquee-pausable">
          {partners.map((name) => (
            <PartnerLogo key={`a-${name}`} name={name} />
          ))}
          {partners.map((name) => (
            <PartnerLogo key={`b-${name}`} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
}
