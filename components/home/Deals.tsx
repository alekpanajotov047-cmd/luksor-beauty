import { SectionHeading } from "@/components/home/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { deals } from "@/data/products";

export function Deals() {
  if (deals.length === 0) return null;

  return (
    <section className="container-px mt-16">
      <SectionHeading
        title="Промоции на седмицата"
        link={{ label: "Всички промоции", href: "/category/perfumes" }}
      />

      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-3 lg:grid-cols-4">
        {deals.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
