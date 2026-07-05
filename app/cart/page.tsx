import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pb-16">
        <nav className="container-px pt-4 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-pink">
            Начало
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Кошница</span>
        </nav>

        <div className="container-px mt-4 border-b border-border pb-6">
          <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl">Кошница</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Прегледайте продуктите и завършете поръчката за минути.
          </p>
        </div>

        <div className="container-px mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
          {/* Продукти */}
          <div className="rounded-xl border border-border bg-background p-10 text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-pink-soft text-pink">
              <ShoppingBag className="h-6 w-6" />
            </span>
            <h2 className="mt-5 text-xl font-bold text-foreground">Кошницата е празна</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Добавете продукти и се върнете тук, за да завършите поръчката си.
            </p>
            <Button
              size="lg"
              className="mt-6 h-11 cursor-pointer rounded-full px-6"
              render={<Link href="/" />}
            >
              Продължи пазаруването
            </Button>
          </div>

          {/* Обобщение */}
          <aside className="h-fit rounded-xl border border-border bg-secondary/40 p-6">
            <h3 className="text-sm font-bold text-foreground">Обобщение</h3>
            <dl className="mt-4 space-y-2.5 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <dt>Междинна сума</dt>
                <dd>0,00 лв.</dd>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <dt>Доставка</dt>
                <dd>—</dd>
              </div>
              <div className="mt-3 flex justify-between border-t border-border pt-3 text-base font-bold text-foreground">
                <dt>Общо</dt>
                <dd>0,00 лв.</dd>
              </div>
            </dl>
            <Button
              size="lg"
              disabled
              className="mt-5 h-11 w-full cursor-not-allowed rounded-full opacity-50"
            >
              Към плащане
            </Button>
            <p className="mt-3 text-center text-[11px] text-muted-foreground">
              Безплатна доставка над 80 лв.
            </p>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
