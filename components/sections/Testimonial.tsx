"use client";

import ScrollReveal from "@/components/effects/ScrollReveal";
import { useTranslations } from "next-intl";

export default function Testimonial() {
  const t = useTranslations("Testimonials");

  return (
    <section className="relative z-10 py-16 sm:py-20 lg:py-24 2xl:py-32 cv-auto">
      <div className="max-w-4xl 2xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10">
            <p className="text-neon-400 text-sm font-semibold tracking-widest uppercase">
              {t("eyebrow")}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={100}>
          <div className="glass gold-border rounded-2xl p-8 md:p-12 text-center relative overflow-hidden group">
            {/* Decorative quote marks */}
            <div
              className="absolute top-4 left-6 text-neon-400/15 text-[120px] font-serif leading-none select-none pointer-events-none transition-transform duration-700 group-hover:scale-110"
              style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
              aria-hidden="true"
            >
              &ldquo;
            </div>
            <div
              className="absolute bottom-4 right-6 text-neon-400/15 text-[120px] font-serif leading-none select-none pointer-events-none rotate-180 transition-transform duration-700 group-hover:scale-110"
              style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
              aria-hidden="true"
            >
              &ldquo;
            </div>

            {/* Quote */}
            <blockquote className="relative z-10">
              <p className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl md:text-3xl font-semibold text-star-100 leading-relaxed mb-8">
                {t("quote")}
              </p>

              <div className="gold-divider mb-6">
                <span className="gold-divider-diamond" />
              </div>

              <footer>
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-neon-600/20 border border-neon-500/30 mx-auto mb-3 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-neon-400/50 gold-border">
                  <span className="text-neon-400 font-bold text-sm">
                    {t("author").split(/\s+/).filter(Boolean).map(n => n[0]).join("")}
                  </span>
                </div>
                <cite className="not-italic">
                  <p className="text-star-100 font-semibold text-base">
                    {t("author")}
                  </p>
                  <p className="text-star-300/70 text-sm">
                    {t("position")}
                  </p>
                </cite>
              </footer>
            </blockquote>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
