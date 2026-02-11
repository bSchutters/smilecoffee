import { Hero } from "@/components/home/hero";
import { Highlights } from "@/components/home/highlights";
import { FeaturedProducts } from "@/components/home/featured-products";
import { ThemeSection } from "@/components/home/theme-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Highlights />
      <FeaturedProducts />
      <ThemeSection />
    </>
  );
}
