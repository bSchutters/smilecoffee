import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { MenuTabs } from "@/components/menu/menu-tabs";
import { BlurFade } from "@/components/magicui/blur-fade";

const siteUrl = "https://smilecoffee.fr";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const title =
    locale === "en"
      ? "Our Menu — Coffee, Pastries & Beans"
      : "Notre Menu — Cafés, Pâtisseries & Grains";
  const description =
    locale === "en"
      ? "Explore the full Smile Coffee menu: artisan coffees, fresh pastries and premium single-origin beans. World-inspired flavors, crafted in Paris."
      : "Explorez le menu complet de Smile Coffee : cafés artisanaux, pâtisseries fraîches et grains d'origine unique. Des saveurs du monde entier, préparées à Paris.";
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/menu`,
      languages: { fr: "/fr/menu", en: "/en/menu" },
    },
    openGraph: {
      title: `${title} | Smile Coffee`,
      description,
      url: `${siteUrl}/${locale}/menu`,
      images: [
        {
          url: `${siteUrl}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: "Smile Coffee Menu",
        },
      ],
    },
  };
}

export default function MenuPage() {
  const t = useTranslations("menu");

  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <BlurFade>
          <h1 className="text-center font-display text-4xl text-cream md:text-5xl">
            {t("title")}
          </h1>
        </BlurFade>

        <div className="mt-16">
          <MenuTabs />
        </div>
      </div>
    </div>
  );
}
