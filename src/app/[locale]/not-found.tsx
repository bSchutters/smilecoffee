"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "motion/react";
import { Coffee, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const t = useTranslations("notFound");
  const locale = useLocale();

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <Coffee size={64} className="mx-auto text-cream/40" aria-hidden="true" />

        <h1 className="font-display text-6xl text-cream md:text-8xl">404</h1>

        <p className="text-lg text-cream/90">{t("message")}</p>

        <Button asChild className="rounded-2xl bg-cream px-8 py-4 h-auto text-sm font-bold uppercase tracking-wider text-green-dark hover:bg-cream-dark">
          <Link href={`/${locale}`}>
            <ArrowLeft size={16} aria-hidden="true" />
            {t("backHome")}
          </Link>
        </Button>
      </motion.div>
    </div>
  );
}
