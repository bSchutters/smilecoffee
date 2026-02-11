"use client";

import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { LanguageToggle } from "./language-toggle";

const navItems = [
  { key: "home", href: "" },
  { key: "menu", href: "/menu" },
  { key: "gallery", href: "/gallery" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
] as const;

export function Navbar() {
  const t = useTranslations("nav");
  const ta = useTranslations("a11y");
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const prevLocaleRef = useRef(locale);
  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
    ready: false,
    animate: false,
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Close mobile menu on Escape
  useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === ""
      ? pathname === `/${locale}` || pathname === `/${locale}/`
      : pathname === `/${locale}${href}` || pathname.startsWith(`/${locale}${href}/`);

  // Measure the active item
  useLayoutEffect(() => {
    if (!navRef.current) return;
    const activeEl = navRef.current.querySelector<HTMLElement>(
      '[data-active="true"]'
    );
    if (!activeEl) return;

    const isLangSwitch = prevLocaleRef.current !== locale;
    prevLocaleRef.current = locale;

    setIndicator((prev) => ({
      left: activeEl.offsetLeft,
      width: activeEl.offsetWidth,
      ready: true,
      animate: !isLangSwitch && prev.ready,
    }));
  }, [pathname, locale]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
          scrolled
            ? "bg-green-dark/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav
          aria-label={ta("mainNav")}
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
        >
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-3 group shrink-0 focus-visible:ring-2 focus-visible:ring-cream focus-visible:outline-none rounded-lg"
          >
            <Image
              src="/logos/logo-smilecoffee-horizontal.svg"
              alt="Smile Coffee"
              width={180}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Right side: nav + language */}
          <div className="hidden md:flex items-center gap-6">
            {/* Desktop Nav */}
            <div
              ref={navRef}
              className="relative flex items-center gap-1 rounded-full bg-green-medium/60 backdrop-blur-sm px-2 py-1.5 border border-cream/10"
            >
              {indicator.ready && (
                <div
                  className={`absolute top-1.5 bottom-1.5 rounded-full bg-green-light/60 border border-cream/20 ${
                    indicator.animate
                      ? "transition-[left,width] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                      : ""
                  }`}
                  style={{ left: indicator.left, width: indicator.width }}
                />
              )}

              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={`/${locale}${item.href}`}
                  data-active={isActive(item.href)}
                  className={`relative px-5 py-2 text-sm font-bold uppercase tracking-wide transition-colors rounded-full focus-visible:ring-2 focus-visible:ring-cream focus-visible:outline-none ${
                    isActive(item.href)
                      ? "text-cream"
                      : "text-cream/80 hover:text-cream"
                  }`}
                >
                  <span className="relative z-10">{t(item.key)}</span>
                </Link>
              ))}
            </div>

            {/* Language */}
            <LanguageToggle />
          </div>

          {/* Mobile: language + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <LanguageToggle />
            <button
              ref={hamburgerRef}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-medium/60 text-cream focus-visible:ring-2 focus-visible:ring-cream focus-visible:outline-none"
              aria-label={ta("toggleMenu")}
            >
              {mobileOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            ref={mobileMenuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[80px] z-40 mx-4 rounded-2xl bg-green-medium/95 backdrop-blur-md p-6 shadow-xl border border-cream/10 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={`/${locale}${item.href}`}
                  className={`rounded-xl px-4 py-3 text-base font-bold uppercase tracking-wide transition-colors focus-visible:ring-2 focus-visible:ring-cream focus-visible:outline-none ${
                    isActive(item.href)
                      ? "bg-green-light/60 text-cream"
                      : "text-cream/80 hover:bg-green-light/30 hover:text-cream"
                  }`}
                >
                  {t(item.key)}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
