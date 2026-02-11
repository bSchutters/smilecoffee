"use client";

import { useState, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Coffee, CakeSlice, Package } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { menuItems, type MenuCategory } from "@/data/menu-items";
import { ProductCard } from "./product-card";

const categories: { key: MenuCategory; icon: React.ReactNode }[] = [
  { key: "coffee", icon: <Coffee size={20} aria-hidden="true" /> },
  { key: "food", icon: <CakeSlice size={20} aria-hidden="true" /> },
  { key: "beans", icon: <Package size={20} aria-hidden="true" /> },
];

export function MenuTabs() {
  const t = useTranslations("menu");
  const locale = useLocale();
  const [active, setActive] = useState<MenuCategory>("coffee");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const filtered = menuItems.filter((item) => item.category === active);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let newIndex = index;
    if (e.key === "ArrowRight") {
      e.preventDefault();
      newIndex = (index + 1) % categories.length;
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      newIndex = (index - 1 + categories.length) % categories.length;
    } else if (e.key === "Home") {
      e.preventDefault();
      newIndex = 0;
    } else if (e.key === "End") {
      e.preventDefault();
      newIndex = categories.length - 1;
    } else {
      return;
    }
    setActive(categories[newIndex].key);
    tabRefs.current[newIndex]?.focus();
  };

  return (
    <div className="space-y-12">
      {/* Tabs */}
      <div className="flex justify-center">
        <div
          role="tablist"
          aria-label={t("title")}
          className="inline-flex gap-2 rounded-2xl bg-green-medium/60 p-2 backdrop-blur-sm border border-cream/10"
        >
          {categories.map((cat, index) => (
            <button
              key={cat.key}
              ref={(el) => { tabRefs.current[index] = el; }}
              role="tab"
              aria-selected={active === cat.key}
              aria-controls={`tabpanel-${cat.key}`}
              id={`tab-${cat.key}`}
              tabIndex={active === cat.key ? 0 : -1}
              onClick={() => setActive(cat.key)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`relative flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold uppercase tracking-wide transition-colors focus-visible:ring-2 focus-visible:ring-cream focus-visible:outline-none ${
                active === cat.key
                  ? "text-cream"
                  : "text-cream/80 hover:text-cream"
              }`}
            >
              {active === cat.key && (
                <motion.div
                  layoutId="menu-tab-active"
                  className="absolute inset-0 rounded-xl bg-green-light/60 border border-cream/20"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {cat.icon}
                {t(`categories.${cat.key}`)}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          id={`tabpanel-${active}`}
          role="tabpanel"
          aria-labelledby={`tab-${active}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((item, i) => (
            <ProductCard key={item.id} item={item} locale={locale} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
