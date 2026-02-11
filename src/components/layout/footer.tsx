"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { Coffee, MapPin, Clock, Mail, Phone } from "lucide-react";
import { Marquee } from "@/components/magicui/marquee";

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <footer className="bg-green-dark border-t border-cream/10">
      {/* Marquee */}
      <div className="overflow-hidden border-b border-cream/10 py-3">
        <Marquee className="text-cream/40 text-sm font-bold uppercase tracking-widest">
          <span className="mx-8 flex items-center gap-2">
            <Coffee size={14} />
            {t("footer.marquee")}
          </span>
          <span className="mx-8 flex items-center gap-2">
            <Coffee size={14} />
            Smile Coffee
          </span>
          <span className="mx-8 flex items-center gap-2">
            <Coffee size={14} />
            {t("footer.marquee")}
          </span>
          <span className="mx-8 flex items-center gap-2">
            <Coffee size={14} />
            Smile Coffee
          </span>
        </Marquee>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo & description */}
          <div className="space-y-4">
            <Link href={`/${locale}`} className="inline-block">
              <Image
                src="/logos/logo-smilecoffee-horizontal.svg"
                alt="Smile Coffee"
                width={200}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-cream-dark/70 leading-relaxed max-w-xs">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-cream">
              {t("footer.quickLinks")}
            </h3>
            <div className="flex flex-col gap-2">
              {["menu", "gallery", "about", "contact"].map((item) => (
                <Link
                  key={item}
                  href={`/${locale}/${item}`}
                  className="text-sm text-cream-dark/70 hover:text-orange transition-colors"
                >
                  {t(`nav.${item}`)}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-cream">
              {t("contact.info.title")}
            </h3>
            <div className="flex flex-col gap-3 text-sm text-cream-dark/70">
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-orange shrink-0" />
                {t("contact.info.address")}
              </span>
              <span className="flex items-center gap-2">
                <Phone size={14} className="text-orange shrink-0" />
                {t("contact.info.phone")}
              </span>
              <span className="flex items-center gap-2">
                <Mail size={14} className="text-orange shrink-0" />
                {t("contact.info.email")}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={14} className="text-orange shrink-0" />
                {t("contact.info.hours.weekdays")}
              </span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 flex items-center justify-between border-t border-cream/10 pt-8">
          <p className="text-xs text-cream-dark/50">
            &copy; {new Date().getFullYear()} Smile Coffee. {t("footer.rights")}.
          </p>
        </div>
      </div>
    </footer>
  );
}
