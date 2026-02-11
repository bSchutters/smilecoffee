"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Coffee, CakeSlice, Package } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { menuItems, type MenuCategory } from "@/data/menu-items";
import { ProductCard } from "./product-card";

const categories: { key: MenuCategory; icon: React.ReactNode }[] = [
  { key: "coffee", icon: <Coffee size={20} /> },
  { key: "food", icon: <CakeSlice size={20} /> },
  { key: "beans", icon: <Package size={20} /> },
];

export function MenuTabs() {
  const t = useTranslations("menu");
  const locale = useLocale();
  const [active, setActive] = useState<MenuCategory>("coffee");

  const filtered = menuItems.filter((item) => item.category === active);

  return (
    <div className="space-y-12">
      {/* Tabs */}
      <div className="flex justify-center">
        <div
          role="tablist"
          aria-label={t("title")}
          className="inline-flex gap-2 rounded-2xl bg-green-medium/60 p-2 backdrop-blur-sm border border-cream/10"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              role="tab"
              aria-selected={active === cat.key}
              aria-controls={`tabpanel-${cat.key}`}
              id={`tab-${cat.key}`}
              onClick={() => setActive(cat.key)}
              className={`relative flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold uppercase tracking-wide transition-colors focus-visible:ring-2 focus-visible:ring-orange/50 focus-visible:outline-none ${
                active === cat.key
                  ? "text-cream"
                  : "text-cream/60 hover:text-cream/80"
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
