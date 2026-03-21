"use client";

import ScrollReveal from "@/components/effects/ScrollReveal";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Nav");
  const tContact = useTranslations("Contact");
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    sitio: [
      { label: tNav("inicio"), href: "#inicio" },
      { label: tNav("servicios"), href: "#servicios" },
      { label: tNav("nosotros"), href: "#nosotros" },
      { label: tNav("jurisdicciones"), href: "#ubicacion" },
      { label: tNav("contacto"), href: "#contacto" },
    ],
    servicios: [
      { label: "Fideicomisos Privados", href: "#servicios" },
      { label: "Estructuración Corporativa", href: "#servicios" },
      { label: "Activos Digitales", href: "#servicios" },
      { label: "Fondos de Inversión", href: "#servicios" },
    ],
  };

  return (
    <footer className="relative z-10 border-t border-white/5 cv-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <ScrollReveal delay={0}>
            <div className="lg:col-span-1">
              <a href="#inicio" className="flex items-center gap-2.5 mb-5 group">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 32 32"
                  fill="none"
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                >
                  <circle cx="16" cy="6" r="3" fill="url(#footerGrad)" />
                  <circle cx="6" cy="24" r="3" fill="url(#footerGrad)" />
                  <circle cx="26" cy="24" r="3" fill="url(#footerGrad)" />
                  <circle cx="16" cy="16" r="2.5" fill="url(#footerGrad)" />
                  <line x1="16" y1="9" x2="16" y2="13.5" stroke="url(#footerGrad)" strokeWidth="1.2" />
                  <line x1="8.5" y1="22.5" x2="13.5" y2="17" stroke="url(#footerGrad)" strokeWidth="1.2" />
                  <line x1="23.5" y1="22.5" x2="18.5" y2="17" stroke="url(#footerGrad)" strokeWidth="1.2" />
                  <defs>
                    <linearGradient id="footerGrad" x1="0" y1="0" x2="32" y2="32">
                      <stop stopColor="#f0d078" />
                      <stop offset="1" stopColor="#8fb8d8" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight">
                  <span className="text-gradient-primary">Coin</span>
                  <span className="text-star-300 font-light">Global</span>
                  <span className="text-neon-400 font-medium">Gt</span>
                </span>
              </a>
              <p className="text-star-300/70 text-sm leading-relaxed mb-6">
                {t("description")}
              </p>
              <p className="text-star-300/40 text-xs">
                {t("part_of")}{" "}
                <a
                  href="https://www.grupoinfinito.com.sv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neon-400/60 hover:text-neon-400 transition-colors"
                >
                  Grupo Infinito
                </a>
              </p>
            </div>
          </ScrollReveal>

          {/* Site Links */}
          <ScrollReveal delay={100}>
            <div>
              <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-star-100 uppercase tracking-wider mb-4">
                {t("nav_title")}
              </h3>
              <ul className="space-y-2.5">
                {footerLinks.sitio.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-star-300/70 hover:text-neon-400 text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                      style={{ transition: "color 0.2s, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Service Links */}
          <ScrollReveal delay={200}>
            <div>
              <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-star-100 uppercase tracking-wider mb-4">
                {t("services_title")}
              </h3>
              <ul className="space-y-2.5">
                {footerLinks.servicios.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-star-300/70 hover:text-neon-400 text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                      style={{ transition: "color 0.2s, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Contact Column */}
          <ScrollReveal delay={300}>
            <div>
              <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-star-100 uppercase tracking-wider mb-4">
                {t("contact_title")}
              </h3>
              <div className="space-y-3 text-sm">
                <p className="text-star-300/70">
                  <span className="text-lg mr-2" role="img" aria-label="Guatemala">🇬🇹</span>
                  <a href="tel:+50240752625" className="hover:text-neon-400 transition-colors">
                    +502 4075-2625
                  </a>
                </p>
                <p className="text-star-300/70">
                  <a
                    href="mailto:info@coinglobalgt.com"
                    className="hover:text-neon-400 transition-colors"
                  >
                    info@coinglobalgt.com
                  </a>
                </p>
                <p className="text-star-300/50 text-xs leading-relaxed whitespace-pre-line">
                  {tContact("info.address")}
                </p>
                <p className="text-star-300/50 text-xs">L-V: 8am - 5pm</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Bar */}
        <ScrollReveal delay={400}>
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-star-300/40 text-xs">
              © {currentYear} Coin Global Guatemala. {t("copyright")}
              <span className="mx-2 hidden sm:inline">|</span>
              <br className="sm:hidden" />
              {t("developed_by")}{" "}
              <a
                href="https://www.walwebs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon-100 hover:text-neon-400 transition-colors"
              >
                www.walwebs.com
              </a>
            </p>
            <div className="flex items-center gap-4 text-star-300/40 text-xs">
              <a href="#" className="hover:text-neon-400 transition-colors">{t("privacy")}</a>
              <span className="w-px h-3 bg-star-300/15" />
              <a href="#" className="hover:text-neon-400 transition-colors">{t("terms")}</a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
