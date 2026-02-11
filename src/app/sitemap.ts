import type { MetadataRoute } from "next";

const siteUrl = "https://smilecoffee.fr";

const pages = ["", "/menu", "/gallery", "/about", "/contact"];
const locales = ["fr", "en"];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${siteUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: page === "" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${siteUrl}/${l}${page}`])
        ),
      },
    }))
  );
}
