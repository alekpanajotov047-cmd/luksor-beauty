import Link from "next/link";
import { SmartImage } from "@/components/SmartImage";
import { SectionHeading } from "@/components/home/SectionHeading";
import { categories } from "@/data/categories";

export function CategoryGrid() {
  return (
    <section className="container-px mt-12">
      <SectionHeading title="Пазарувай по категория" />

      <div className="mt-6 grid grid-cols-3 gap-4 sm:grid-cols-6">
        {categories.slice(0, 6).map((cat) => (
          <Link
            key={cat.slug}
            href={`/category/${cat.slug}`}
            className="group flex flex-col items-center gap-3"
          >
            <div className="relative aspect-square w-full max-w-[120px] overflow-hidden rounded-full border border-border bg-secondary transition-shadow group-hover:shadow-md">
              <SmartImage
                src={cat.image}
                alt={cat.name}
                label={cat.name}
                className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
            <p className="text-center text-sm font-semibold text-foreground transition-colors group-hover:text-pink">
              {cat.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
