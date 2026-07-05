"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { newsletter } from "@/data/siteContent";

export function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="container-px mt-20">
      <div className="rounded-xl bg-pink-soft px-6 py-14 text-center sm:px-12 lg:py-16">
        <h2 className="mx-auto max-w-xl text-3xl font-extrabold text-foreground sm:text-4xl">
          {newsletter.title}
        </h2>
        <p className="mx-auto mt-3 max-w-md text-base text-muted-foreground">{newsletter.text}</p>

        {submitted ? (
          <p className="mx-auto mt-8 text-sm font-medium text-foreground">
            Благодарим! Проверете пощата си за потвърждение.
          </p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              {newsletter.placeholder}
            </label>
            <Input
              id="newsletter-email"
              type="email"
              required
              placeholder={newsletter.placeholder}
              className="h-12 rounded-full border-foreground/15 bg-background px-5"
            />
            <Button type="submit" size="lg" className="h-12 cursor-pointer rounded-full px-8">
              {newsletter.cta}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
