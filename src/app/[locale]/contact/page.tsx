import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ContactForm } from "@/components/contact/contact-form";

const siteUrl = "https://smilecoffee.fr";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const title =
    locale === "en"
      ? "Contact Us — Visit Smile Coffee in Paris"
      : "Contactez-nous — Visitez Smile Coffee à Paris";
  const description =
    locale === "en"
      ? "Get in touch with Smile Coffee. Visit us at 12 Rue du Bonheur, Paris 11th. Open Mon-Fri 7:30-19:00, Sat-Sun 8:30-18:00. Reservations, catering and general inquiries welcome."
      : "Contactez Smile Coffee. Rendez-nous visite au 12 Rue du Bonheur, Paris 11e. Ouvert Lun-Ven 7h30-19h00, Sam-Dim 8h30-18h00. Réservations, traiteur et questions générales.";
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/contact`,
      languages: { fr: "/fr/contact", en: "/en/contact" },
    },
    openGraph: {
      title: `${title} | Smile Coffee`,
      description,
      url: `${siteUrl}/${locale}/contact`,
      images: [
        {
          url: `${siteUrl}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: "Contact Smile Coffee",
        },
      ],
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
