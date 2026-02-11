"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { MenuItem } from "@/data/menu-items";

interface ProductCardProps {
  item: MenuItem;
  locale: string;
  index: number;
}

export function ProductCard({ item, locale, index }: ProductCardProps) {
  const lang = locale as "fr" | "en";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ scale: 1.03, y: -4 }}
      className="group relative overflow-hidden rounded-2xl bg-green-medium border border-cream/10 transition-shadow hover:shadow-xl hover:shadow-orange/5"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-green-light/30">
        <Image
          src={item.image}
          alt={item.name[lang]}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-orange/0 group-hover:bg-orange/10 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold uppercase tracking-wide text-cream text-base">
            {item.name[lang]}
          </h3>
          <span className="shrink-0 text-lg font-bold text-orange">
            {item.price.toFixed(0)}€
          </span>
        </div>
        <p className="mt-2 text-xs text-cream-dark/70 leading-relaxed line-clamp-2">
          {item.description[lang]}
        </p>
        {item.tags && item.tags.length > 0 && (
          <div className="mt-3 flex gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-orange/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-orange"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
