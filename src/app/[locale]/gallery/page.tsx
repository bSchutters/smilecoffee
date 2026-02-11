import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { BlurFade } from "@/components/magicui/blur-fade";
import { GalleryGrid } from "@/components/gallery/gallery-grid";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "en" ? "Our Gallery" : "Notre Galerie",
    description:
      locale === "en"
        ? "Explore the atmosphere and creations of Smile Coffee through our photo gallery."
        : "Explorez l'ambiance et les créations de Smile Coffee à travers notre galerie photo.",
    alternates: {
      canonical: `/${locale}/gallery`,
      languages: { fr: "/fr/gallery", en: "/en/gallery" },
    },
  };
}

export default function GalleryPage() {
  const t = useTranslations("gallery");

  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <BlurFade>
          <h1 className="text-center font-display text-4xl text-cream md:text-5xl">
            {t("title")}
          </h1>
        </BlurFade>

        <div className="mt-16">
          <GalleryGrid />
        </div>
      </div>
    </div>
  );
}
