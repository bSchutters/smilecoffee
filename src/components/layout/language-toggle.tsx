"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

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
      <Button
        variant="ghost"
        size="sm"
        onClick={() => switchTo("fr")}
        aria-label="Passer en français"
        aria-current={locale === "fr" ? "true" : undefined}
        className={`cursor-pointer px-2 py-1 h-auto rounded-md hover:bg-transparent ${
          locale === "fr"
            ? "text-cream underline underline-offset-4 decoration-2"
            : "text-cream/60 hover:text-cream/80"
        }`}
      >
        FR
      </Button>
      <span className="text-cream/20" aria-hidden="true">|</span>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => switchTo("en")}
        aria-label="Switch to English"
        aria-current={locale === "en" ? "true" : undefined}
        className={`cursor-pointer px-2 py-1 h-auto rounded-md hover:bg-transparent ${
          locale === "en"
            ? "text-cream underline underline-offset-4 decoration-2"
            : "text-cream/60 hover:text-cream/80"
        }`}
      >
        EN
      </Button>
    </div>
  );
}
