"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Coffee, CakeSlice, Package } from "lucide-react";
import { menuItems, type MenuCategory } from "@/data/menu-items";
import { ProductCard } from "./product-card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const categories: { key: MenuCategory; icon: React.ReactNode }[] = [
  { key: "coffee", icon: <Coffee size={20} aria-hidden="true" /> },
  { key: "food", icon: <CakeSlice size={20} aria-hidden="true" /> },
  { key: "beans", icon: <Package size={20} aria-hidden="true" /> },
];

export function MenuTabs() {
  const t = useTranslations("menu");
  const locale = useLocale();

  return (
    <Tabs defaultValue="coffee" className="space-y-12">
      <div className="flex justify-center">
        <TabsList className="inline-flex gap-1 rounded-2xl bg-green-medium/60 p-2 backdrop-blur-sm border border-cream/10 h-auto">
          {categories.map((cat) => (
            <TabsTrigger
              key={cat.key}
              value={cat.key}
              className="flex items-center gap-2 rounded-xl px-3 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-bold uppercase tracking-wide text-cream/80 data-[state=active]:bg-green-light/60 data-[state=active]:text-cream data-[state=active]:border-cream/20 data-[state=active]:shadow-none hover:text-cream border border-transparent"
            >
              {cat.icon}
              {t(`categories.${cat.key}`)}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {categories.map((cat) => {
        const filtered = menuItems.filter((item) => item.category === cat.key);
        return (
          <TabsContent key={cat.key} value={cat.key}>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((item) => (
                <ProductCard key={item.id} item={item} locale={locale} />
              ))}
            </div>
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
