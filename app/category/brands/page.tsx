import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { allBrands, brandBucket, brandLetters } from "@/data/brands";

export default function BrandsPage() {
  // Групиране по буква
  const groups = new Map<string, typeof allBrands>();
  for (const b of allBrands) {
    const letter = brandBucket(b.name);
    if (!groups.has(letter)) groups.set(letter, []);
    groups.get(letter)!.push(b);
  }
  // Сортиране на всяка група
  for (const list of groups.values()) {
    list.sort((a, b) => a.name.localeCompare(b.name, "bg"));
  }

  return (
    <>
      <Header />
      <main className="flex-1 pb-16">
        {/* Breadcrumb */}
        <nav className="container-px pt-4 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-pink">
            Начало
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Марки</span>
        </nav>

        {/* Заглавие */}
        <div className="container-px mt-4 border-b border-border pb-6">
          <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl">Марки</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Всички налични брандове по азбучен ред · {allBrands.length} марки
          </p>
        </div>

        {/* Азбучен филтър */}
        <div className="container-px mt-6">
          <div className="flex flex-wrap items-center justify-center gap-1 rounded-lg border border-border bg-secondary/40 p-3 sm:gap-2">
            {brandLetters.map((letter) => {
              const has = groups.has(letter);
              if (!has) {
                return (
                  <span
                    key={letter}
                    className="flex h-9 w-9 items-center justify-center text-sm font-semibold text-muted-foreground/40"
                    aria-disabled
                  >
                    {letter}
                  </span>
                );
              }
              return (
                <Link
                  key={letter}
                  href={`#letter-${letter}`}
                  className="flex h-9 w-9 items-center justify-center rounded-md text-sm font-bold text-foreground transition-colors hover:bg-pink hover:text-white"
                >
                  {letter}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Списък по букви */}
        <div className="container-px mt-10 space-y-10">
          {brandLetters
            .filter((l) => groups.has(l))
            .map((letter) => (
              <section key={letter} id={`letter-${letter}`} className="scroll-mt-40">
                <h2 className="border-b border-border pb-3 text-2xl font-extrabold text-foreground">
                  <span className="text-pink">{letter}</span>
                </h2>
                <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3 lg:grid-cols-4">
                  {groups.get(letter)!.map((brand) => (
                    <li key={brand.name}>
                      <Link
                        href={brand.href}
                        className="block py-1.5 text-sm text-foreground transition-colors hover:text-pink"
                      >
                        {brand.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
