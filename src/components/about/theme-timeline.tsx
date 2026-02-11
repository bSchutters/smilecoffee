"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { BlurFade } from "@/components/magicui/blur-fade";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const themes = [
  { key: "japan", emoji: "\u{1F1EF}\u{1F1F5}", emojiLabel: "Japan", image: "https://images.unsplash.com/photo-1545048702-79362596cdc9?w=400&q=80" },
  { key: "mexico", emoji: "\u{1F1F2}\u{1F1FD}", emojiLabel: "Mexico", image: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=400&q=80" },
  { key: "italy", emoji: "\u{1F1EE}\u{1F1F9}", emojiLabel: "Italy", image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&q=80" },
  { key: "morocco", emoji: "\u{1F1F2}\u{1F1E6}", emojiLabel: "Morocco", image: "https://images.unsplash.com/photo-1558857563-b371033873b8?w=400&q=80" },
  { key: "brazil", emoji: "\u{1F1E7}\u{1F1F7}", emojiLabel: "Brazil", image: "https://images.unsplash.com/photo-1695653422259-8a74ffe90401?w=400&q=80" },
  { key: "india", emoji: "\u{1F1EE}\u{1F1F3}", emojiLabel: "India", image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&q=80" },
];

export function ThemeTimeline() {
  const t = useTranslations("about.timeline");

  return (
    <section className="py-24" aria-labelledby="timeline-title">
      <div className="mx-auto max-w-7xl px-6">
        <Carousel
          opts={{ align: "start", dragFree: true }}
          className="w-full"
        >
          <div className="flex items-end justify-between mb-10">
            <BlurFade>
              <h2
                id="timeline-title"
                className="font-display text-3xl text-cream md:text-4xl"
              >
                {t("title")}
              </h2>
            </BlurFade>
            <div className="flex items-center gap-2">
              <CarouselPrevious className="static translate-y-0 size-10 rounded-full bg-green-medium/60 border-cream/10 text-cream/80 hover:text-cream hover:bg-green-medium" />
              <CarouselNext className="static translate-y-0 size-10 rounded-full bg-green-medium/60 border-cream/10 text-cream/80 hover:text-cream hover:bg-green-medium" />
            </div>
          </div>

          <CarouselContent className="-ml-5">
            {themes.map((theme, i) => (
              <CarouselItem key={theme.key} className="pl-5 basis-[280px]">
                <BlurFade delay={0.05 * i} className="h-full">
                  <Card className="group h-full overflow-hidden rounded-2xl bg-green-medium border-cream/15 p-0 gap-0">
                    <div className="relative h-44 shrink-0 overflow-hidden">
                      <Image
                        src={theme.image}
                        alt={t(`items.${theme.key}.title`)}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="280px"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-green-dark/60 to-transparent" />
                      <span
                        className="absolute bottom-3 left-4 text-3xl"
                        role="img"
                        aria-label={theme.emojiLabel}
                      >
                        {theme.emoji}
                      </span>
                    </div>
                    <CardContent className="p-5 flex flex-col flex-1">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-cream/80">
                        {t(`items.${theme.key}.date`)}
                      </p>
                      <h3 className="mt-1 text-lg font-bold uppercase tracking-wide text-cream">
                        {t(`items.${theme.key}.title`)}
                      </h3>
                      <p className="mt-2 text-sm text-cream/90 leading-relaxed">
                        {t(`items.${theme.key}.description`)}
                      </p>
                    </CardContent>
                  </Card>
                </BlurFade>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
