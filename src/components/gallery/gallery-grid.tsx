"use client";

import { useState, useRef } from "react";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Lightbox } from "./lightbox";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
    key: "coffeeCup",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
    key: "interior",
    span: "col-span-2 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80",
    key: "barista",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&q=80",
    key: "latteArt",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
    key: "espressoMachine",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80",
    key: "icedCoffee",
    span: "col-span-2 row-span-1",
  },
];

export function GalleryGrid() {
  const t = useTranslations("gallery.images");
  const ta = useTranslations("a11y");
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const handleOpen = (img: { src: string; alt: string }, el: HTMLElement) => {
    triggerRef.current = el;
    setLightboxImage(img);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent,
    img: { src: string; alt: string }
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleOpen(img, e.currentTarget as HTMLElement);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[280px]">
        {galleryImages.map((img, i) => {
          const alt = t(img.key);
          return (
            <BlurFade key={i} delay={i * 0.1}>
              <motion.div
                role="button"
                tabIndex={0}
                aria-label={`${alt} — ${ta("openImage")}`}
                className={`relative overflow-hidden rounded-2xl cursor-pointer group h-full ${img.span} focus-visible:ring-2 focus-visible:ring-cream focus-visible:outline-none`}
                whileHover={{ scale: 1.02 }}
                whileFocus={{ scale: 1.02 }}
                onClick={(e) => handleOpen({ src: img.src, alt }, e.currentTarget)}
                onKeyDown={(e) => handleKeyDown(e, { src: img.src, alt })}
              >
                <img
                  src={img.src}
                  alt={alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-green-dark/0 group-hover:bg-green-dark/20 transition-colors duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="h-20 w-20 rounded-full border-2 border-cream/50 flex items-center justify-center backdrop-blur-sm bg-white/10">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="text-cream"
                      aria-hidden="true"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </BlurFade>
          );
        })}
      </div>

      <Lightbox
        src={lightboxImage?.src ?? null}
        alt={lightboxImage?.alt ?? "Gallery"}
        onClose={() => setLightboxImage(null)}
        triggerRef={triggerRef}
      />
    </>
  );
}
