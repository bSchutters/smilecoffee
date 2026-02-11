import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { MenuTabs } from "@/components/menu/menu-tabs";
import { BlurFade } from "@/components/magicui/blur-fade";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "en" ? "Our Menu" : "Notre Menu",
    description:
      locale === "en"
        ? "Discover our coffee, food and beans selection at Smile Coffee."
        : "Découvrez notre sélection de cafés, gourmandises et grains chez Smile Coffee.",
    alternates: {
      canonical: `/${locale}/menu`,
      languages: { fr: "/fr/menu", en: "/en/menu" },
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
