"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchTo = (newLocale: string) => {
    if (newLocale === locale) return;
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  return (
    <div className="flex items-center gap-1 text-sm font-bold uppercase tracking-wide">
      <button
        onClick={() => switchTo("fr")}
        aria-label="Passer en français"
        aria-current={locale === "fr" ? "true" : undefined}
        className={`px-2 py-1 rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-cream focus-visible:outline-none ${
          locale === "fr"
            ? "text-cream underline underline-offset-4 decoration-2"
            : "text-cream/60 hover:text-cream/80"
        }`}
      >
        FR
      </button>
      <span className="text-cream/20" aria-hidden="true">|</span>
      <button
        onClick={() => switchTo("en")}
        aria-label="Switch to English"
        aria-current={locale === "en" ? "true" : undefined}
        className={`px-2 py-1 rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-cream focus-visible:outline-none ${
          locale === "en"
            ? "text-cream underline underline-offset-4 decoration-2"
            : "text-cream/60 hover:text-cream/80"
        }`}
      >
        EN
      </button>
    </div>
  );
}
