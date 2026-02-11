"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";

const themes = [
  { key: "japan", emoji: "🇯🇵", image: "https://images.unsplash.com/photo-1545048702-79362596cdc9?w=400&q=80" },
  { key: "mexico", emoji: "🇲🇽", image: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=400&q=80" },
  { key: "italy", emoji: "🇮🇹", image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&q=80" },
  { key: "morocco", emoji: "🇲🇦", image: "https://images.unsplash.com/photo-1558857563-b371033873b8?w=400&q=80" },
  { key: "brazil", emoji: "🇧🇷", image: "https://images.unsplash.com/photo-1695653422259-8a74ffe90401?w=400&q=80" },
  { key: "india", emoji: "🇮🇳", image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&q=80" },
];

export function ThemeTimeline() {
  const t = useTranslations("about.timeline");
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-10">
          <BlurFade>
            <h2 className="font-display text-3xl text-cream md:text-4xl">
              {t("title")}
            </h2>
          </BlurFade>

          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-green-medium/60 border border-cream/10 text-cream/70 hover:text-cream hover:bg-green-medium transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-green-medium/60 border border-cream/10 text-cream/70 hover:text-cream hover:bg-green-medium transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel - pt/pb for hover room */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pt-2 pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {themes.map((theme, i) => (
            <BlurFade key={theme.key} delay={0.05 * i}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-[280px] h-[380px] shrink-0 snap-start overflow-hidden rounded-2xl bg-green-medium/60 border border-cream/10 flex flex-col"
              >
                <div className="relative h-44 shrink-0 overflow-hidden">
                  <img
                    src={theme.image}
                    alt={t(`items.${theme.key}.title`)}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-dark/60 to-transparent" />
                  <span className="absolute bottom-3 left-4 text-3xl">
                    {theme.emoji}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-orange">
                    {t(`items.${theme.key}.date`)}
                  </p>
                  <h3 className="mt-1 text-lg font-bold uppercase tracking-wide text-cream">
                    {t(`items.${theme.key}.title`)}
                  </h3>
                  <p className="mt-2 text-sm text-cream/50 leading-relaxed line-clamp-3">
                    {t(`items.${theme.key}.description`)}
                  </p>
                </div>
              </motion.div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
