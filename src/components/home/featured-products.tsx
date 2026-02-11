"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { menuItems } from "@/data/menu-items";
import { BlurFade } from "@/components/magicui/blur-fade";

export function FeaturedProducts() {
  const locale = useLocale();
  const t = useTranslations("home.featured");
  const lang = locale as "fr" | "en";
  const featured = menuItems.filter((item) => item.featured).slice(0, 4);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-10">
          <BlurFade>
            <h2 className="font-display text-3xl text-cream md:text-4xl">
              {t("title")}
            </h2>
          </BlurFade>
          <BlurFade delay={0.1}>
            <Link
              href={`/${locale}/menu`}
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-orange hover:text-orange-light transition-colors"
            >
              {t("viewAll")}
              <ArrowRight size={16} />
            </Link>
          </BlurFade>
        </div>

        <div className="grid gap-5 grid-cols-2 lg:grid-cols-4">
          {featured.map((item, i) => (
            <BlurFade key={item.id} delay={0.1 + i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="overflow-hidden rounded-2xl bg-green-medium/60 border border-cream/10"
              >
                <div className="relative aspect-square overflow-hidden bg-green-light/20">
                  <Image
                    src={item.image}
                    alt={item.name[lang]}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold uppercase tracking-wide text-cream text-sm">
                    {item.name[lang]}
                  </h3>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-xs text-cream/50 line-clamp-1">
                      {item.description[lang]}
                    </p>
                    <span className="text-sm font-bold text-orange shrink-0 ml-2">
                      {item.price.toFixed(0)}€
                    </span>
                  </div>
                </div>
              </motion.div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
