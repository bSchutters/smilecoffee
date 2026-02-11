"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";

export function ThemeSection() {
  const t = useTranslations("home.theme");
  const locale = useLocale();

  return (
    <section className="relative py-32 overflow-hidden" aria-labelledby="theme-heading">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=1920&q=80"
        alt=""
        aria-hidden="true"
        fill
        className="object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-green-dark/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <BlurFade delay={0.1}>
          <span className="inline-block rounded-full bg-cream/10 px-5 py-2 text-xs font-bold uppercase tracking-wider text-cream backdrop-blur-sm border border-cream/20">
            {t("title")}
          </span>
        </BlurFade>

        <BlurFade delay={0.2}>
          <h2
            id="theme-heading"
            className="mt-8 font-display text-6xl text-cream md:text-8xl"
          >
            {t("country")}
          </h2>
        </BlurFade>

        <BlurFade delay={0.3}>
          <p className="mt-6 text-lg text-cream/90 max-w-xl mx-auto leading-relaxed">
            {t("description")}
          </p>
        </BlurFade>

        <BlurFade delay={0.4}>
          <Link
            href={`/${locale}/menu`}
            className="mt-10 group inline-flex items-center gap-2 rounded-full border-2 border-cream/30 px-7 py-3 text-sm font-bold uppercase tracking-wider text-cream transition-all hover:bg-cream/10 hover:border-cream/50 focus-visible:ring-2 focus-visible:ring-cream focus-visible:outline-none"
          >
            {t("cta")}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </BlurFade>
      </div>
    </section>
  );
}
