"use client";

import { useState, type FormEvent } from "react";
import ScrollReveal from "@/components/effects/ScrollReveal";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    botField: "", // Honeypot field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Security: Silent-drop bots that fill the hidden field
    if (formData.botField) {
      setSubmitted(true);
      return;
    }

    // Basic email validation regex for extra safety
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200));
    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", phone: "", message: "", botField: "" });
  };

  const whatsappUrl = `https://wa.me/50240752625?text=${encodeURIComponent(
    t("whatsapp_message")
  )}`;

  return (
    <section id="contacto" className="relative z-10 py-24 md:py-32 cv-auto">
      {/* Gold section edge */}
      <div className="gold-section-edge" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-neon-400 text-sm font-semibold tracking-widest uppercase mb-3">
              {t("eyebrow")}
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-star-100 mb-5">
              {t("title")}
            </h2>
            <div className="gold-divider mb-6">
              <span className="gold-divider-diamond" />
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Form — 3 cols */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot field hidden from humans but visible to bots */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="website_honeypot"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.botField}
                    onChange={(e) => setFormData({ ...formData, botField: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-star-300 text-sm font-medium mb-2">
                      {t("form.name")}
                    </label>
                    <input
                      id="contact-name"
                      name="user_name"
                      type="text"
                      required
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="input-glow w-full px-4 py-3 rounded-xl glass text-star-100 text-sm placeholder:text-star-300/40 focus:outline-none transition-all duration-200"
                      placeholder={t("form.name_placeholder")}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-star-300 text-sm font-medium mb-2">
                      {t("form.email")}
                    </label>
                    <input
                      id="contact-email"
                      name="user_email"
                      type="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input-glow w-full px-4 py-3 rounded-xl glass text-star-100 text-sm placeholder:text-star-300/40 focus:outline-none transition-all duration-200"
                      placeholder={t("form.email_placeholder")}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-star-300 text-sm font-medium mb-2">
                    {t("form.phone")}
                  </label>
                  <input
                    id="contact-phone"
                    name="user_phone"
                    type="tel"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="input-glow w-full px-4 py-3 rounded-xl glass text-star-100 text-sm placeholder:text-star-300/40 focus:outline-none transition-all duration-200"
                    placeholder={t("form.phone_placeholder")}
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-star-300 text-sm font-medium mb-2">
                    {t("form.message")}
                  </label>
                  <textarea
                    id="contact-message"
                    name="user_message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="input-glow w-full px-4 py-3 rounded-xl glass text-star-100 text-sm placeholder:text-star-300/40 focus:outline-none transition-all duration-200 resize-none"
                    placeholder={t("form.message_placeholder")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-press w-full sm:w-auto px-8 py-3.5 rounded-full bg-neon-600 hover:bg-neon-500 text-white font-semibold text-base transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed animate-pulse-glow"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z" />
                      </svg>
                      {t("form.sending")}
                    </span>
                  ) : submitted ? (
                    <span className="flex items-center gap-2 animate-scale-in">
                      <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {t("form.sent")}
                    </span>
                  ) : (
                    t("form.submit")
                  )}
                </button>
              </form>
            </ScrollReveal>
          </div>

          {/* Contact Info — 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            {/* Phone */}
            <ScrollReveal direction="left" delay={0}>
              <div className="glass rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-neon-600/15 flex items-center justify-center shrink-0 text-neon-400">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M2 3C2 2.45 2.45 2 3 2H7L9 6L6.5 7.5C7.57 9.57 9.43 11.43 11.5 12.5L13 10L17 12V16C17 16.55 16.55 17 16 17C8.27 17 2 10.73 2 3Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-star-100 font-semibold text-sm mb-1">{t("info.call")}</p>
                    <a
                      href="tel:+50240752625"
                      className="text-neon-400 hover:text-neon-300 text-base font-medium transition-colors"
                    >
                      +502 4075-2625
                    </a>
                    <p className="text-star-300/60 text-xs mt-1">{t("info.schedule")}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* WhatsApp */}
            <ScrollReveal direction="left" delay={100}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-xl p-5 flex items-start gap-4 group hover:border-green-500/30 transition-all duration-300 block"
              >
                <div className="w-10 h-10 rounded-lg bg-green-600/15 flex items-center justify-center shrink-0 text-green-400 group-hover:bg-green-600/25 group-hover:scale-110 transition-all duration-300">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M10 0C4.477 0 0 4.477 0 10c0 1.76.457 3.477 1.326 4.996L.05 19.486a.5.5 0 00.607.607l4.49-1.276A9.96 9.96 0 0010 20c5.523 0 10-4.477 10-10S15.523 0 10 0zm0 18.5A8.46 8.46 0 015.71 17.1l-.29-.17-3.01.79.81-2.95-.19-.3A8.46 8.46 0 011.5 10 8.5 8.5 0 0110 1.5 8.5 8.5 0 0118.5 10 8.5 8.5 0 0110 18.5zm4.65-6.35c-.25-.13-1.47-.73-1.7-.81-.23-.08-.39-.13-.56.13-.16.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.39.11-.51.12-.11.25-.29.38-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43H6.5c-.17 0-.43.06-.65.31S5 7.38 5 8.6s.85 2.37.97 2.53c.11.17 1.68 2.56 4.07 3.59.57.24 1.01.39 1.36.5.57.18 1.09.16 1.5.09.46-.07 1.4-.58 1.6-1.13.2-.55.2-1.03.14-1.13-.06-.1-.23-.16-.48-.28z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-star-100 font-semibold text-sm mb-1 group-hover:text-green-400 transition-colors">
                    {t("info.whatsapp")}
                  </p>
                  <p className="text-star-300 text-sm">
                    {t("info.whatsapp_sub")}
                  </p>
                  <p className="text-green-400/80 text-xs mt-1">+502 4075-2625</p>
                </div>
              </a>
            </ScrollReveal>

            {/* Email */}
            <ScrollReveal direction="left" delay={200}>
              <div className="glass rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-neon-600/15 flex items-center justify-center shrink-0 text-neon-400">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M2 6L10 11L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-star-100 font-semibold text-sm mb-1">{t("info.email")}</p>
                    <a
                      href="mailto:info@coinglobalgt.com"
                      className="text-neon-400 hover:text-neon-300 text-sm font-medium transition-colors"
                    >
                      info@coinglobalgt.com
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Address */}
            <ScrollReveal direction="left" delay={300}>
              <div className="glass rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-neon-600/15 flex items-center justify-center shrink-0 text-neon-400">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M10 2C6.69 2 4 4.69 4 8C4 12.5 10 18 10 18S16 12.5 16 8C16 4.69 13.31 2 10 2Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-star-100 font-semibold text-sm mb-1">{t("info.office")}</p>
                    <p className="text-star-300 text-sm leading-relaxed whitespace-pre-line">
                      {t("info.address")}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
