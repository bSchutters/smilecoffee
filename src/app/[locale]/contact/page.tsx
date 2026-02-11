import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ContactForm } from "@/components/contact/contact-form";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "en" ? "Contact Us" : "Contactez-nous",
    description:
      locale === "en"
        ? "Get in touch with Smile Coffee. Visit us at 12 Rue du Bonheur, Paris."
        : "Contactez Smile Coffee. Rendez-nous visite au 12 Rue du Bonheur, Paris.",
    alternates: {
      canonical: `/${locale}/contact`,
      languages: { fr: "/fr/contact", en: "/en/contact" },
    },
  };
}

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <BlurFade>
          <h1 className="text-center font-display text-4xl text-cream md:text-5xl">
            {t("title")}
          </h1>
        </BlurFade>

        <div className="mt-16">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
