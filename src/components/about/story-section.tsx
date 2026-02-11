"use client";

import { useTranslations } from "next-intl";
import { BlurFade } from "@/components/magicui/blur-fade";


export function StorySection() {
  const t = useTranslations("about");

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <BlurFade>
          <h1 className="text-center font-display text-4xl text-cream md:text-5xl">
            {t("title")}
          </h1>
        </BlurFade>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 items-center">
          {/* Image */}
          <BlurFade delay={0.2}>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=700&q=80"
                alt="Barista"
                className="h-full w-full object-cover aspect-[4/3]"
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
              <p className="text-cream/70 leading-relaxed">
                {t("story.p1")}
              </p>
            </BlurFade>

            <BlurFade delay={0.5}>
              <p className="text-cream/70 leading-relaxed">
                {t("story.p2")}
              </p>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
