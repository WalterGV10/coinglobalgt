"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

interface MobileMenuProps {
  links: { href: string; label: string }[];
}

export default function MobileMenu({ links }: MobileMenuProps) {
  const t = useTranslations("Nav");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-[70] w-10 h-10 flex items-center justify-center text-star-100"
        aria-label={isOpen ? t("close_menu") : t("open_menu")}
        aria-expanded={isOpen}
      >
        <span className="sr-only">{isOpen ? t("close_menu") : t("open_menu")}</span>
        <div className="w-6 flex flex-col gap-1.5">
          <span
            className={`block h-0.5 w-full bg-star-100 transition-all duration-300 origin-center ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          />
          <span
            className={`block h-0.5 w-full bg-star-100 transition-all duration-300 ${
              isOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-star-100 transition-all duration-300 origin-center ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          />
        </div>
      </button>

      {/* Mobile Dropdown — animated overlay */}
      <div
        className={`fixed inset-0 top-[64px] z-[55] border-t border-neon-700/10 transition-all duration-400 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        style={{
          background: "rgba(6, 10, 20, 0.98)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <nav className="flex flex-col py-6 px-8 h-full" aria-label="Navegación móvil">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`py-4 text-star-100 hover:text-neon-400 text-lg font-medium border-b border-white/5 last:border-b-0 transition-all duration-500 ${
                isOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-3"
              }`}
              style={{
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: isOpen ? `${80 + i * 60}ms` : "0ms",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className={`mt-6 text-center py-3.5 rounded-full bg-neon-600 hover:bg-neon-500 text-white font-semibold text-lg btn-press transition-all duration-500 ${
              isOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              transitionDelay: isOpen ? `${80 + links.length * 60 + 80}ms` : "0ms",
            }}
          >
            {t("cta")}
          </a>
        </nav>
      </div>
    </div>
  );
}
