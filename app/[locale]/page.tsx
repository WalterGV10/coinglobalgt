// Server Component – composes all landing page sections
// Deployment trigger: 2026-03-15
import { setRequestLocale } from 'next-intl/server';
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Jurisdictions from "@/components/sections/Jurisdictions";
import Testimonial from "@/components/sections/Testimonial";
import Partners from "@/components/sections/Partners";
import Contact from "@/components/sections/Contact";

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'es'}];
}

export default async function Home({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Jurisdictions />
      <Testimonial />
      <Partners />
      <Contact />
    </>
  );
}
