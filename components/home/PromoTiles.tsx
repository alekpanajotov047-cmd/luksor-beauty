import Link from "next/link";
import { SmartImage } from "@/components/SmartImage";
import { promoTiles } from "@/data/siteContent";

const toneStyles: Record<string, { wrap: string; text: string; sub: string; btn: string }> = {
  dark: {
    wrap: "bg-foreground",
    text: "text-primary-foreground",
    sub: "text-primary-foreground/70",
    btn: "bg-background text-foreground hover:bg-background/90",
  },
  pink: {
    wrap: "bg-pink",
    text: "text-white",
    sub: "text-white/80",
    btn: "bg-white text-foreground hover:bg-white/90",
  },
  light: {
    wrap: "bg-secondary",
    text: "text-foreground",
    sub: "text-muted-foreground",
    btn: "bg-foreground text-primary-foreground hover:bg-pink",
  },
};

export function PromoTiles() {
  return (
    <section className="container-px mt-12">
      <div className="grid gap-4 md:grid-cols-3">
        {promoTiles.map((tile) => {
          const s = toneStyles[tile.tone];
          return (
            <div
              key={tile.title}
              className={`relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-xl p-6 ${s.wrap}`}
            >
              {tile.image && (
                <SmartImage
                  src={tile.image}
                  alt={tile.title}
                  label={tile.title}
                  className="absolute inset-0 h-full w-full opacity-25"
                />
              )}
              <div className="relative">
                <h3 className={`text-xl font-extrabold leading-tight ${s.text}`}>{tile.title}</h3>
                <p className={`mt-2 max-w-xs text-sm ${s.sub}`}>{tile.text}</p>
                <Link
                  href={tile.cta.href}
                  className={`mt-4 inline-flex h-9 cursor-pointer items-center rounded-full px-5 text-sm font-semibold transition-colors ${s.btn}`}
                >
                  {tile.cta.label}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
