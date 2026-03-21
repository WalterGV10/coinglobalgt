import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import "../globals.css";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

// next/font eliminates CLS from font loading
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: 'Metadata'});

  return {
    metadataBase: new URL("https://coinglobalgt.com"),
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "/",
      languages: {
        'en': '/en',
        'es': '/es'
      }
    },
    authors: [{ name: "WalWebs", url: "https://www.walwebs.com" }],
    keywords: t("keywords").split(", "),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "https://coinglobalgt.com",
      siteName: "Coin Global Guatemala",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: t("og_alt"),
        },
      ],
      locale: locale === 'en' ? 'en_US' : 'es_GT',
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}


export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'es'}];
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;

  // Validate that the incoming `locale` parameter is valid
  if (!['en', 'es'].includes(locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Coin Global Guatemala",
    "image": "https://coinglobalgt.com/og-image.png",
    "description": "Estructuración fiduciaria, corporativa y de activos digitales en Guatemala.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5.ª Avenida 5-55, Zona 14",
      "addressLocality": "Ciudad de Guatemala",
      "addressRegion": "Guatemala",
      "postalCode": "01014",
      "addressCountry": "GT"
    },
    "telephone": "+50240752625",
    "url": "https://coinglobalgt.com"
  };

  return (
    <html lang={locale} suppressHydrationWarning className={`${inter.variable} ${outfit.variable}`}>
      <body suppressHydrationWarning className="min-h-screen bg-void-950 text-star-100 font-[family-name:var(--font-body)]">
        <NextIntlClientProvider messages={messages}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
