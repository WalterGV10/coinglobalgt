"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

export default function Header() {
  const t = useTranslations("Nav");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { href: "#inicio", label: t("inicio") },
    { href: "#servicios", label: t("servicios") },
    { href: "#nosotros", label: t("nosotros") },
    { href: "#ubicacion", label: t("jurisdicciones") },
    { href: "#contacto", label: t("contacto") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-void-950/98 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-neon-500/10 md:glass-strong"
          : "bg-void-950/95 backdrop-blur-xl md:bg-transparent md:backdrop-blur-none border-b border-white/10 md:border-transparent"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2.5 group">
            {/* Network Icon */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
              aria-hidden="true"
            >
              <circle cx="16" cy="6" r="3" fill="url(#logoGrad)" />
              <circle cx="6" cy="24" r="3" fill="url(#logoGrad)" />
              <circle cx="26" cy="24" r="3" fill="url(#logoGrad)" />
              <circle cx="16" cy="16" r="2.5" fill="url(#logoGrad)" />
              <line x1="16" y1="9" x2="16" y2="13.5" stroke="url(#logoGrad)" strokeWidth="1.2" />
              <line x1="8.5" y1="22.5" x2="13.5" y2="17" stroke="url(#logoGrad)" strokeWidth="1.2" />
              <line x1="23.5" y1="22.5" x2="18.5" y2="17" stroke="url(#logoGrad)" strokeWidth="1.2" />
              <defs>
                <linearGradient id="logoGrad" x1="0" y1="0" x2="32" y2="32">
                  <stop stopColor="#f0d078" />
                  <stop offset="1" stopColor="#8fb8d8" />
                </linearGradient>
              </defs>
            </svg>
            <span className="font-[family-name:var(--font-heading)] text-xl md:text-2xl font-bold tracking-tight">
              <span className="text-gradient-primary">Coin</span>
              <span className="text-star-300 font-light">Global</span>
              <span className="text-neon-400 font-medium">Gt</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-star-300 hover:text-star-100 text-sm font-medium tracking-wide transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-neon-500 after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-6">
            <LanguageSwitcher />
            <a
              href="#contacto"
              className="btn-press inline-flex items-center px-5 py-2.5 rounded-full bg-neon-600 hover:bg-neon-500 text-white text-sm font-semibold transition-all duration-300 animate-pulse-glow"
            >
              {t("cta")}
            </a>
          </div>

          {/* Mobile Menu — Client Component leaf */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <MobileMenu links={navLinks} />
          </div>
        </div>
      </div>
    </header>
  );
}
