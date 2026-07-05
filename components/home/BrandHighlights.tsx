import Link from "next/link";
import { SectionHeading } from "@/components/home/SectionHeading";
import { brands } from "@/data/siteContent";

export function BrandHighlights() {
  return (
    <section className="container-px mt-20">
      <SectionHeading eyebrow="Подбрани от нас" title="Любими брандове" />

      <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3 lg:grid-cols-6">
        {brands.map((brand) => (
          <Link
            key={brand.name}
            href={brand.href}
            className="group flex h-24 items-center justify-center bg-background px-4 transition-colors hover:bg-secondary"
          >
            <span className="text-center text-base font-semibold tracking-normal text-foreground/78 transition-colors group-hover:text-pink">
              {brand.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
