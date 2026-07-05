import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SmartImage } from "@/components/SmartImage";
import { hero } from "@/data/siteContent";

export function Hero() {
  return (
    <section className="container-px pt-5">
      <div className="grid items-center gap-8 overflow-hidden rounded-xl bg-secondary lg:grid-cols-2">
        {/* Текст */}
        <div className="px-6 py-12 sm:px-12 lg:py-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-pink">
            {hero.eyebrow}
          </span>
          <h1 className="mt-4 text-4xl leading-[1.05] font-extrabold text-foreground sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            {hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              size="lg"
              className="h-12 cursor-pointer rounded-full px-7"
              render={<Link href={hero.primaryCta.href} />}
            >
              {hero.primaryCta.label}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 cursor-pointer rounded-full border-foreground/20 px-7"
              render={<Link href={hero.secondaryCta.href} />}
            >
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>

        {/* Снимка */}
        <div className="relative min-h-[320px] lg:h-full lg:min-h-[520px]">
          <SmartImage
            src={hero.image}
            alt={hero.title}
            label="Luksor Beauty"
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}
