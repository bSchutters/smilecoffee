import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { MotionProvider } from "@/components/layout/motion-provider";
import { SkipNav } from "@/components/layout/skip-nav";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "../globals.css";

const siteUrl = "https://smilecoffee.fr";

const meta = {
  fr: {
    title:
      "Smile Coffee | Coffee Shop Parisien — Boissons & Pâtisseries du Monde",
    description:
      "Smile Coffee, votre coffee shop chaleureux à Paris. Découvrez nos boissons artisanales et pâtisseries inspirées des cultures du monde. Chaque mois, un nouveau pays à savourer. Ouvert 7j/7 au 12 Rue du Bonheur, Paris 11e.",
  },
  en: {
    title:
      "Smile Coffee | Parisian Coffee Shop — World-Inspired Drinks & Pastries",
    description:
      "Smile Coffee, your cozy Parisian coffee shop. Discover our artisan drinks and pastries inspired by world cultures. Every month, a new country to taste. Open 7 days a week at 12 Rue du Bonheur, Paris 11th.",
  },
} as const;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const lang = (locale === "en" ? "en" : "fr") as keyof typeof meta;
  const { title, description } = meta[lang];

  return {
    title: {
      default: title,
      template: "%s | Smile Coffee",
    },
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        fr: "/fr",
        en: "/en",
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}`,
      siteName: "Smile Coffee",
      locale: locale === "en" ? "en_US" : "fr_FR",
      type: "website",
      images: [
        {
          url: `${siteUrl}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: "Smile Coffee — Coffee Shop Paris",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}/images/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = (await import(`../../../messages/${locale}.json`)).default;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: "Smile Coffee",
    url: siteUrl,
    logo: `${siteUrl}/logos/logo-smilecoffee-horizontal.svg`,
    image: `${siteUrl}/images/og-image.jpg`,
    telephone: "+33 1 23 45 67 89",
    email: "hello@smilecoffee.fr",
    address: {
      "@type": "PostalAddress",
      streetAddress: "12 Rue du Bonheur",
      addressLocality: "Paris",
      postalCode: "75011",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.8566,
      longitude: 2.3522,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:30",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "08:30",
        closes: "18:00",
      },
    ],
    priceRange: "€€",
    servesCuisine: "Coffee, Pastries, World-inspired beverages",
    foundingDate: "2020",
    founder: [
      { "@type": "Person", name: "Léa" },
      { "@type": "Person", name: "Maxime" },
    ],
  };

  return (
    <html lang={locale}>
      <head>
        <link
          rel="preconnect"
          href="https://images.unsplash.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <MotionProvider>
            <SkipNav />
            <Navbar />
            <main id="main-content" className="min-h-screen">
              {children}
            </main>
            <Footer />
          </MotionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
