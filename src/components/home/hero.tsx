"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";

export function Hero() {
  const t = useTranslations("home.hero");
  const locale = useLocale();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&q=80"
        alt=""
        aria-hidden="true"
        fill
        className="object-cover"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-green-dark/70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 -mt-16">
        <BlurFade delay={0.1}>
          <Image
            src="/logos/logo-smilecoffee-vertical.svg"
            alt="Smile Coffee"
            width={200}
            height={300}
            className="h-52 md:h-72 w-auto"
            priority
          />
        </BlurFade>

        <BlurFade delay={0.3}>
          <h1 className="sr-only">Smile Coffee</h1>
          <p className="mt-8 text-base md:text-lg text-cream/90 max-w-sm leading-relaxed font-bold uppercase tracking-wider">
            {t("subtitle")}
          </p>
        </BlurFade>

        <BlurFade delay={0.5}>
          <Link
            href={`/${locale}/menu`}
            className="mt-10 group inline-flex items-center gap-2 rounded-full bg-cream px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-green-dark transition-all hover:bg-cream-dark hover:scale-105 focus-visible:ring-2 focus-visible:ring-cream focus-visible:outline-none"
          >
            {t("cta")}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </BlurFade>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10" aria-hidden="true">
        <BlurFade delay={0.8}>
          <div className="h-12 w-px bg-gradient-to-b from-transparent via-cream/40 to-transparent animate-pulse" />
        </BlurFade>
      </div>
    </section>
  );
}
