"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Coffee, Cake, Globe } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";

const pillars = [
  { key: "coffee", icon: Coffee },
  { key: "baked", icon: Cake },
  { key: "themes", icon: Globe },
] as const;

export function Highlights() {
  const t = useTranslations("home");

  return (
    <section className="py-24 bg-cream">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <BlurFade>
            <h2 className="font-display text-4xl text-green-dark md:text-5xl">
              {t("secret.title")}
            </h2>
          </BlurFade>
          <BlurFade delay={0.1}>
            <p className="mt-4 text-green-dark/60">
              {t("secret.subtitle")}
            </p>
          </BlurFade>
        </div>

        {/* Three pillars */}
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <BlurFade key={pillar.key} delay={0.15 + i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-2xl bg-green-dark p-8 text-center h-full"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange/15">
                  <pillar.icon className="h-7 w-7 text-orange" />
                </div>
                <h3 className="mt-6 text-lg font-bold uppercase tracking-wide text-cream">
                  {t(`highlights.${pillar.key}.title`)}
                </h3>
                <p className="mt-3 text-sm text-cream/50 leading-relaxed">
                  {t(`highlights.${pillar.key}.description`)}
                </p>
              </motion.div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
