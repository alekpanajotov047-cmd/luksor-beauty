import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/ProductCard";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const items = products.filter((p) => p.category === slug);

  return (
    <>
      <Header />
      <main className="flex-1 pb-12">
        {/* Breadcrumb */}
        <nav className="container-px pt-4 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-pink">
            Начало
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{category.name}</span>
        </nav>

        {/* Заглавие */}
        <div className="container-px mt-4 border-b border-border pb-6">
          <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl">{category.name}</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {category.description} · {items.length}{" "}
            {items.length === 1 ? "продукт" : "продукта"}
          </p>
        </div>

        {/* Продукти */}
        {items.length > 0 ? (
          <div className="container-px mt-8 grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-3 lg:grid-cols-4">
            {items.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="container-px mt-12">
            <div className="rounded-lg border border-border bg-secondary/40 p-12 text-center">
              <p className="text-sm text-muted-foreground">
                В тази категория още няма продукти.
              </p>
              <Link
                href="/"
                className="mt-4 inline-block text-sm font-semibold text-pink hover:underline"
              >
                ← Назад към началната
              </Link>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
