"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { UserPlus } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { saveAccount } from "@/lib/auth";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (name.trim().length < 2) return setError("Моля, въведете име (поне 2 символа).");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError("Невалиден имейл адрес.");
    if (password.length < 6) return setError("Паролата трябва да е поне 6 символа.");
    if (password !== confirm) return setError("Паролите не съвпадат.");
    if (!terms) return setError("Моля, приемете условията за ползване.");

    setLoading(true);
    saveAccount({ name: name.trim(), email: email.trim(), createdAt: new Date().toISOString() });
    setTimeout(() => router.push("/account"), 400);
  }

  return (
    <>
      <Header />
      <main className="flex-1 pb-16">
        <nav className="container-px pt-4 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-pink">
            Начало
          </Link>
          <span className="mx-2">/</span>
          <Link href="/account" className="hover:text-pink">
            Профил
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Регистрация</span>
        </nav>

        <div className="container-px mt-6">
          <div className="mx-auto max-w-lg rounded-xl border border-border bg-background p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-soft text-pink">
                <UserPlus className="h-5 w-5" />
              </span>
              <h1 className="text-2xl font-extrabold text-foreground">Създай профил</h1>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Отнема по-малко от минута. Получавате <span className="font-semibold text-pink">-10%</span>{" "}
              на първата поръчка.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
              <div>
                <label htmlFor="name" className="mb-1 block text-xs font-semibold text-foreground">
                  Име
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Вашето име"
                  autoComplete="name"
                  className="h-11"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1 block text-xs font-semibold text-foreground">
                  Имейл
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="h-11"
                />
              </div>

              <div>
                <label htmlFor="password" className="mb-1 block text-xs font-semibold text-foreground">
                  Парола
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Поне 6 символа"
                  autoComplete="new-password"
                  className="h-11"
                />
              </div>

              <div>
                <label htmlFor="confirm" className="mb-1 block text-xs font-semibold text-foreground">
                  Потвърди паролата
                </label>
                <Input
                  id="confirm"
                  type="password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  placeholder="Повтори паролата"
                  autoComplete="new-password"
                  className="h-11"
                />
              </div>

              <label className="mt-2 flex items-start gap-2 text-xs text-muted-foreground">
                <input
                  type="checkbox"
                  checked={terms}
                  onChange={(e) => setTerms(e.target.checked)}
                  className="mt-0.5 h-4 w-4 cursor-pointer accent-pink"
                />
                <span>
                  Съгласявам се с{" "}
                  <Link href="#" className="text-pink hover:underline">
                    условията за ползване
                  </Link>{" "}
                  и{" "}
                  <Link href="#" className="text-pink hover:underline">
                    политиката за поверителност
                  </Link>
                  .
                </span>
              </label>

              {error && (
                <p className="rounded-md bg-sale/10 px-3 py-2 text-xs font-medium text-sale">
                  {error}
                </p>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="mt-2 h-11 cursor-pointer rounded-full"
              >
                {loading ? "Създаване…" : "Създай профил"}
              </Button>

              <p className="mt-2 text-center text-xs text-muted-foreground">
                Вече имате профил?{" "}
                <Link href="/account" className="font-semibold text-pink hover:underline">
                  Вход
                </Link>
              </p>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
