import Link from "next/link";
import { Search as SearchIcon } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { categories } from "@/data/categories";

export const dynamic = "force-static";

function normalize(str: string) {
  return str.toLowerCase().trim();
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const query = normalize(q);

  const catMap = new Map(categories.map((c) => [c.slug, c.name]));

  const results = query
    ? products.filter((p) => {
        const haystack = [
          p.brand,
          p.name,
          p.category,
          catMap.get(p.category) ?? "",
        ]
          .map(normalize)
          .join(" ");
        return haystack.includes(query);
      })
    : [];

  const matchedCategories = query
    ? categories.filter(
        (c) =>
          normalize(c.name).includes(query) ||
          normalize(c.description).includes(query),
      )
    : [];

  return (
    <>
      <Header />
      <main className="flex-1 pb-16">
        <nav className="container-px pt-4 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-pink">
            Начало
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Търсене</span>
        </nav>

        <div className="container-px mt-4 border-b border-border pb-6">
          <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            {query ? (
              <>
                Резултати за <span className="text-pink">„{q}"</span>
              </>
            ) : (
              "Търсене"
            )}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {query
              ? `${results.length} ${results.length === 1 ? "продукт" : "продукта"}`
              : "Използвайте лентата отгоре, за да намерите продукт, бранд или категория."}
          </p>
        </div>

        {/* Съвпадения по категории */}
        {matchedCategories.length > 0 && (
          <div className="container-px mt-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Категории
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {matchedCategories.map((c) => (
                <Link
                  key={c.slug}
                  href={`/category/${c.slug}`}
                  className="rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-pink hover:text-pink"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Резултати — продукти */}
        {query && results.length > 0 ? (
          <div className="container-px mt-8 grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-3 lg:grid-cols-4">
            {results.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : query ? (
          <div className="container-px mt-10">
            <div className="mx-auto max-w-md rounded-xl border border-border bg-secondary/40 p-12 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-background text-pink">
                <SearchIcon className="h-6 w-6" />
              </span>
              <h2 className="mt-5 text-xl font-bold text-foreground">
                Няма намерени продукти
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Опитайте с по-кратка дума или разгледайте категориите.
              </p>
              <Link
                href="/"
                className="mt-4 inline-block text-sm font-semibold text-pink hover:underline"
              >
                ← Назад към началната
              </Link>
            </div>
          </div>
        ) : (
          <div className="container-px mt-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Популярни търсения
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Versace", "Dior", "Chanel", "Armani", "парфюм", "серум"].map(
                (term) => (
                  <Link
                    key={term}
                    href={`/search?q=${encodeURIComponent(term)}`}
                    className="rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-pink hover:text-pink"
                  >
                    {term}
                  </Link>
                ),
              )}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
