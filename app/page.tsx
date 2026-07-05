import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Perks } from "@/components/home/Perks";
import { PromoTiles } from "@/components/home/PromoTiles";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { Bestsellers } from "@/components/home/Bestsellers";
import { PromoBanner } from "@/components/home/PromoBanner";
import { Deals } from "@/components/home/Deals";
import { BrandHighlights } from "@/components/home/BrandHighlights";
import { Newsletter } from "@/components/home/Newsletter";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1 pb-4">
        <Hero />
        <Perks />
        <PromoTiles />
        <CategoryGrid />
        <Bestsellers />
        <PromoBanner />
        <Deals />
        <BrandHighlights />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
