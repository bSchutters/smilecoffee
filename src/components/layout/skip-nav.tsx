"use client";

import { useTranslations } from "next-intl";

export function SkipNav() {
  const t = useTranslations("a11y");

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:z-[100] focus:top-4 focus:left-4 focus:px-6 focus:py-3 focus:bg-cream focus:text-green-dark focus:rounded-xl focus:font-bold focus:text-sm focus:uppercase focus:tracking-wide focus:shadow-lg focus:outline-none"
    >
      {t("skipToContent")}
    </a>
  );
}
