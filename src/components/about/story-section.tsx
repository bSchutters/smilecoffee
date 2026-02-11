"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { BlurFade } from "@/components/magicui/blur-fade";

export function StorySection() {
  const t = useTranslations("about");

  return (
    <section className="py-16" aria-labelledby="about-title">
      <div className="mx-auto max-w-7xl px-6">
        <BlurFade>
          <h1
            id="about-title"
            className="text-center font-display text-4xl text-cream md:text-5xl"
          >
            {t("title")}
          </h1>
        </BlurFade>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 items-center">
          {/* Image */}
          <BlurFade delay={0.2}>
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=700&q=80"
                alt={t("story.imageAlt")}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </BlurFade>

          {/* Text */}
          <div className="space-y-6">
            <BlurFade delay={0.3}>
              <h2 className="font-display text-3xl text-cream">
                {t("story.heading")}
              </h2>
            </BlurFade>

            <BlurFade delay={0.4}>
              <p className="text-cream/90 leading-relaxed">
                {t("story.p1")}
              </p>
            </BlurFade>

            <BlurFade delay={0.5}>
              <p className="text-cream/90 leading-relaxed">
                {t("story.p2")}
              </p>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
