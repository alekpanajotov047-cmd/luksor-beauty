"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LogOut, User } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { clearAccount, getAccount, saveAccount, type Account } from "@/lib/auth";

export default function AccountPage() {
  const [account, setAccount] = useState<Account | null>(null);
  const [ready, setReady] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setAccount(getAccount());
    setReady(true);
  }, []);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const existing = getAccount();
    if (existing && existing.email === email.trim() && password.length >= 6) {
      setAccount(existing);
      return;
    }
    // Демо: ако няма профил, създай минимален от имейла
    if (!existing && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && password.length >= 6) {
      const a: Account = {
        name: email.split("@")[0],
        email: email.trim(),
        createdAt: new Date().toISOString(),
      };
      saveAccount(a);
      setAccount(a);
      return;
    }
    setError("Невалиден имейл или парола (минимум 6 символа).");
  }

  function handleLogout() {
    clearAccount();
    setAccount(null);
  }

  if (!ready) {
    return (
      <>
        <Header />
        <main className="flex-1" />
        <Footer />
      </>
    );
  }

  // ── Влезли: показваме профила ───────────────────────────────
  if (account) {
    return (
      <>
        <Header />
        <main className="flex-1 pb-16">
          <nav className="container-px pt-4 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-pink">
              Начало
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Профил</span>
          </nav>

          <div className="container-px mt-6">
            <div className="rounded-xl border border-border bg-background p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-soft text-pink">
                    <User className="h-6 w-6" />
                  </span>
                  <div>
                    <h1 className="text-2xl font-extrabold text-foreground">
                      Здравей, {account.name}!
                    </h1>
                    <p className="text-sm text-muted-foreground">{account.email}</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  onClick={handleLogout}
                  className="cursor-pointer rounded-full border-foreground/20"
                >
                  <LogOut className="h-4 w-4" />
                  Изход
                </Button>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { title: "Поръчки", text: "Все още нямате поръчки." },
                  { title: "Адреси", text: "Добавете адрес за доставка." },
                  { title: "Настройки", text: "Смяна на парола и известия." },
                ].map((card) => (
                  <div key={card.title} className="rounded-lg border border-border bg-secondary/40 p-5">
                    <p className="text-sm font-bold text-foreground">{card.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{card.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // ── Гост: вход + промо за регистрация ───────────────────────
  return (
    <>
      <Header />
      <main className="flex-1 pb-16">
        <nav className="container-px pt-4 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-pink">
            Начало
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Профил</span>
        </nav>

        <div className="container-px mt-6 grid gap-8 lg:grid-cols-2">
          {/* Вход */}
          <section className="rounded-xl border border-border bg-background p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-soft text-pink">
                <User className="h-5 w-5" />
              </span>
              <h1 className="text-2xl font-extrabold text-foreground">Вход в профила</h1>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Влезте, за да проследите поръчките си и запазените продукти.
            </p>

            <form onSubmit={handleLogin} className="mt-6 flex flex-col gap-3">
              <label htmlFor="email" className="sr-only">
                Имейл
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Имейл адрес"
                className="h-11"
                required
              />
              <label htmlFor="password" className="sr-only">
                Парола
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Парола"
                className="h-11"
                required
              />
              {error && (
                <p className="rounded-md bg-sale/10 px-3 py-2 text-xs font-medium text-sale">
                  {error}
                </p>
              )}
              <Button type="submit" size="lg" className="h-11 cursor-pointer rounded-full">
                Вход
              </Button>
              <Link href="#" className="text-center text-xs text-muted-foreground hover:text-pink">
                Забравена парола?
              </Link>
            </form>
          </section>

          {/* Регистрация */}
          <section className="rounded-xl border border-border bg-secondary/50 p-8">
            <h2 className="text-2xl font-extrabold text-foreground">Нов клиент?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Създайте профил за секунди и получете <span className="font-semibold text-pink">-10%</span>{" "}
              на първата поръчка.
            </p>

            <ul className="mt-6 space-y-2.5 text-sm text-foreground">
              <li>· Бърза поръчка без повторно въвеждане на данни</li>
              <li>· Проследяване на поръчки и връщания</li>
              <li>· Списък с любими продукти</li>
              <li>· Ексклузивни оферти и промоции</li>
            </ul>

            <Button
              size="lg"
              variant="outline"
              className="mt-8 h-11 w-full cursor-pointer rounded-full border-foreground/20"
              render={<Link href="/register" />}
            >
              Създай профил
            </Button>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
