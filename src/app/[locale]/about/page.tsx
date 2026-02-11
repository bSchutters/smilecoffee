import type { Metadata } from "next";
import { StorySection } from "@/components/about/story-section";
import { ThemeTimeline } from "@/components/about/theme-timeline";

const siteUrl = "https://smilecoffee.fr";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const title =
    locale === "en"
      ? "Our Story — Founded by Léa & Maxime in 2020"
      : "Notre Histoire — Fondé par Léa & Maxime en 2020";
  const description =
    locale === "en"
      ? "Discover how Léa and Maxime founded Smile Coffee in 2020 with a simple idea: world-inspired drinks and pastries, a new country every month. Read our story and explore past themes."
      : "Découvrez comment Léa et Maxime ont fondé Smile Coffee en 2020 avec une idée simple : des boissons et pâtisseries du monde entier, un nouveau pays chaque mois. Lisez notre histoire et explorez les thèmes passés.";
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/about`,
      languages: { fr: "/fr/about", en: "/en/about" },
    },
    openGraph: {
      title: `${title} | Smile Coffee`,
      description,
      url: `${siteUrl}/${locale}/about`,
      images: [
        {
          url: `${siteUrl}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: "Smile Coffee — Our Story",
        },
      ],
    },
  };
}

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24">
      <StorySection />
      <ThemeTimeline />
    </div>
  );
}
