"use client";

import Link from "next/link";
import { Heart, Menu, Search, ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { announcement, navLinks, site, utilityLinks } from "@/data/siteContent";

function Logo() {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-2">
      <span className="text-2xl font-extrabold lowercase tracking-tight text-foreground">
        luksor<span className="text-pink">.</span>
      </span>
      <span className="hidden text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground sm:inline">
        Beauty
      </span>
    </Link>
  );
}

function SearchBar({ id = "search" }: { id?: string }) {
  return (
    <div className="relative w-full">
      <label htmlFor={id} className="sr-only">
        Търсене
      </label>
      <Input
        id={id}
        type="search"
        placeholder="Търсете продукт, марка или категория…"
        className="h-11 rounded-full border-border bg-secondary pr-12 pl-4"
      />
      <button
        type="submit"
        aria-label="Търси"
        className="absolute right-1 top-1 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-foreground text-primary-foreground transition-colors hover:bg-pink"
      >
        <Search className="h-4 w-4" />
      </button>
    </div>
  );
}

function IconAction({
  icon: Icon,
  label,
  href,
  badge,
}: {
  icon: typeof User;
  label: string;
  href: string;
  badge?: string;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="group flex cursor-pointer flex-col items-center gap-0.5 px-2 text-foreground"
    >
      <span className="relative">
        <Icon className="h-5 w-5 transition-colors group-hover:text-pink" />
        {badge && (
          <span className="absolute -right-2 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-pink px-1 text-[10px] font-semibold text-white">
            {badge}
          </span>
        )}
      </span>
      <span className="hidden text-[11px] leading-none text-muted-foreground group-hover:text-pink lg:block">
        {label}
      </span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      {/* Utility bar */}
      <div className="border-b border-border bg-secondary/60">
        <div className="container-px flex h-9 items-center justify-between text-xs text-muted-foreground">
          <p className="truncate">{announcement}</p>
          <nav className="hidden items-center gap-5 sm:flex">
            {utilityLinks.map((link) => (
              <Link key={link.label} href={link.href} className="transition-colors hover:text-pink">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-border">
        <div className="container-px flex h-16 items-center gap-3 lg:gap-6">
          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="cursor-pointer lg:hidden" aria-label="Меню" />
              }
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <SheetHeader>
                <SheetTitle className="text-xl font-extrabold lowercase">
                  {site.name}
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-2 flex flex-col px-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`border-b border-border py-3 text-sm font-medium transition-colors hover:text-pink ${
                      link.highlight ? "text-pink" : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
                  {utilityLinks.map((link) => (
                    <Link key={link.label} href={link.href} className="hover:text-pink">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          <Logo />

          {/* Search (desktop) */}
          <div className="hidden flex-1 md:block">
            <SearchBar />
          </div>

          {/* Actions */}
          <div className="ml-auto flex items-center gap-1 sm:gap-2">
            <IconAction icon={User} label="Профил" href="/account" />
            <IconAction icon={Heart} label="Любими" href="/wishlist" />
            <IconAction icon={ShoppingBag} label="Кошница" href="/cart" badge="0" />
          </div>
        </div>
      </div>

      {/* Category nav — Notino style: тъмна лента със скрол */}
      <nav className="hidden bg-charcoal text-primary-foreground lg:block">
        <div className="container-px overflow-x-auto scrollbar-thin">
          <ul className="flex items-center gap-1 py-2 whitespace-nowrap">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.highlight ? (
                  <Link
                    href={link.href}
                    className="inline-flex items-center rounded-full bg-pink px-3.5 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-pink/90"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <Link
                    href={link.href}
                    className="rounded-md px-3 py-1.5 text-sm font-medium text-primary-foreground/90 transition-colors hover:text-pink"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Search (mobile) */}
      <div className="container-px py-2.5 md:hidden">
        <SearchBar id="search-mobile" />
      </div>
    </header>
  );
}
