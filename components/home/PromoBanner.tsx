import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SmartImage } from "@/components/SmartImage";
import { promo } from "@/data/siteContent";

export function PromoBanner() {
  return (
    <section className="container-px mt-20">
      <div className="relative overflow-hidden rounded-xl bg-charcoal">
        <SmartImage
          src={promo.image}
          alt={promo.title}
          label="Champagne"
          className="absolute inset-0 h-full w-full opacity-40"
        />
        <div className="relative max-w-xl px-6 py-16 sm:px-12 lg:py-24">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-pink">
            {promo.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-medium text-primary-foreground sm:text-4xl lg:text-5xl">
            {promo.title}
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-primary-foreground/80">
            {promo.text}
          </p>
          <Button
            size="lg"
            className="mt-8 h-12 cursor-pointer rounded-full bg-background px-7 text-foreground hover:bg-background/90"
            render={<Link href={promo.cta.href} />}
          >
            {promo.cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
