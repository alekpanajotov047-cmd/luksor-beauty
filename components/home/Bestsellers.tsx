import { SectionHeading } from "@/components/home/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { bestsellers } from "@/data/products";

export function Bestsellers() {
  return (
    <section id="bestsellers" className="container-px mt-16 scroll-mt-24">
      <SectionHeading
        eyebrow="Любими на клиентите"
        title="Бестселъри"
        link={{ label: "Виж всички", href: "/category/perfumes" }}
      />

      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-3 lg:grid-cols-4">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
