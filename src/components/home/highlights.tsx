"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Coffee, Cake, Globe } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Card, CardContent } from "@/components/ui/card";

const rotations = [-1.5, 0.8, -1] as const;

const pillars = [
  { key: "coffee", icon: Coffee },
  { key: "baked", icon: Cake },
  { key: "themes", icon: Globe },
] as const;

export function Highlights() {
  const t = useTranslations("home");

  return (
    <section className="py-24 bg-cream" aria-labelledby="highlights-heading">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <BlurFade>
            <h2
              id="highlights-heading"
              className="font-display text-4xl text-green-dark md:text-5xl"
            >
              {t("secret.title")}
            </h2>
          </BlurFade>
          <BlurFade delay={0.1}>
            <p className="mt-4 text-green-dark">
              {t("secret.subtitle")}
            </p>
          </BlurFade>
        </div>

        {/* Three pillars */}
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <BlurFade key={pillar.key} delay={0.15 + i * 0.1}>
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: rotations[i] }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-full"
              >
                <Card className="bg-green-dark p-0 h-full border-none">
                  <CardContent className="p-8 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange/15">
                      <pillar.icon className="h-7 w-7 text-orange" aria-hidden="true" />
                    </div>
                    <h3 className="mt-6 text-lg font-bold uppercase tracking-wide text-cream">
                      {t(`highlights.${pillar.key}.title`)}
                    </h3>
                    <p className="mt-3 text-sm text-cream/90 leading-relaxed">
                      {t(`highlights.${pillar.key}.description`)}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
