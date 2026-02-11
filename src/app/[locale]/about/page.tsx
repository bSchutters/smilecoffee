import type { Metadata } from "next";
import { StorySection } from "@/components/about/story-section";
import { ThemeTimeline } from "@/components/about/theme-timeline";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "en" ? "Our Story" : "Notre Histoire",
    description:
      locale === "en"
        ? "Discover the story of Smile Coffee, founded in 2020 by Léa and Maxime, and our monthly world themes."
        : "Découvrez l'histoire de Smile Coffee, fondé en 2020 par Léa et Maxime, et nos thèmes mensuels du monde.",
    alternates: {
      canonical: `/${locale}/about`,
      languages: { fr: "/fr/about", en: "/en/about" },
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
