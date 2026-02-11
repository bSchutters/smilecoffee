import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { BlurFade } from "@/components/magicui/blur-fade";
import { GalleryGrid } from "@/components/gallery/gallery-grid";

const siteUrl = "https://smilecoffee.fr";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const title =
    locale === "en"
      ? "Our Gallery — Photos & Atmosphere"
      : "Notre Galerie — Photos & Ambiance";
  const description =
    locale === "en"
      ? "Step inside Smile Coffee through our photo gallery. Discover the warm atmosphere, latte art creations and cozy interior of our Parisian coffee shop."
      : "Entrez dans Smile Coffee à travers notre galerie photo. Découvrez l'ambiance chaleureuse, les créations latte art et l'intérieur cosy de notre coffee shop parisien.";
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/gallery`,
      languages: { fr: "/fr/gallery", en: "/en/gallery" },
    },
    openGraph: {
      title: `${title} | Smile Coffee`,
      description,
      url: `${siteUrl}/${locale}/gallery`,
      images: [
        {
          url: `${siteUrl}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: "Smile Coffee Gallery",
        },
      ],
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
