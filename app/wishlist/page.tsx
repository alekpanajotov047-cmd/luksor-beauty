import Link from "next/link";
import { Heart } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

export default function WishlistPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pb-16">
        <nav className="container-px pt-4 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-pink">
            Начало
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Любими</span>
        </nav>

        <div className="container-px mt-4 border-b border-border pb-6">
          <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl">Любими</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Запазените продукти се появяват тук — лесен достъп до всичко, което харесвате.
          </p>
        </div>

        <div className="container-px mt-10">
          <div className="mx-auto max-w-md rounded-xl border border-border bg-secondary/40 p-12 text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-background text-pink">
              <Heart className="h-6 w-6" />
            </span>
            <h2 className="mt-5 text-xl font-bold text-foreground">Списъкът е празен</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Разгледайте нашите бестселъри и добавете любимите си продукти със сърцето.
            </p>
            <Button
              size="lg"
              className="mt-6 h-11 cursor-pointer rounded-full px-6"
              render={<Link href="/" />}
            >
              Разгледай продуктите
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
