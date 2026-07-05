"use client";

import { useState } from "react";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SmartImage } from "@/components/SmartImage";
import { formatPrice, type Product } from "@/data/products";
import { site } from "@/data/siteContent";

export function ProductCard({ product }: { product: Product }) {
  const [wished, setWished] = useState(false);
  const discounted = typeof product.oldPrice === "number" && product.oldPrice > product.price;
  const discountPct = discounted
    ? Math.round((1 - product.price / product.oldPrice!) * 100)
    : 0;

  return (
    <div className="group relative flex flex-col rounded-lg border border-transparent p-2 transition-all hover:border-border hover:shadow-sm">
      {/* Снимка */}
      <div className="relative aspect-3/4 w-full overflow-hidden rounded-md bg-white">
        <SmartImage
          src={product.image}
          alt={`${product.brand} ${product.name}`}
          label={product.brand}
          className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Баджове (отстъпка + етикет) */}
        <div className="absolute left-3 top-3 flex flex-col items-start gap-1.5">
          {discounted && (
            <Badge className="rounded-md bg-sale px-2 py-1 text-[11px] font-semibold tracking-wide text-white">
              -{discountPct}%
            </Badge>
          )}
          {product.badge && (
            <Badge className="rounded-md bg-charcoal px-2 py-1 text-[11px] font-medium tracking-wide text-primary-foreground">
              {product.badge}
            </Badge>
          )}
        </div>

        {/* Wishlist */}
        <button
          type="button"
          onClick={() => setWished((v) => !v)}
          aria-label={wished ? "Премахни от любими" : "Добави в любими"}
          aria-pressed={wished}
          className="absolute right-3 top-3 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur transition-colors hover:text-pink"
        >
          <Heart className={`h-4 w-4 ${wished ? "fill-pink text-pink" : ""}`} />
        </button>

        {/* Add to cart — появява се на hover (desktop), винаги видим на mobile */}
        <div className="absolute inset-x-3 bottom-3 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 max-sm:translate-y-0 max-sm:opacity-100">
          <Button className="w-full cursor-pointer gap-2 rounded-full" size="sm">
            <ShoppingBag className="h-4 w-4" />В количката
          </Button>
        </div>
      </div>

      {/* Текст */}
      <div className="mt-3 flex flex-col gap-1">
        <span className="text-sm font-bold text-foreground">{product.brand}</span>
        <h3 className="text-sm leading-snug text-muted-foreground line-clamp-2">{product.name}</h3>

        {/* Рейтинг */}
        <div className="flex items-center gap-1.5">
          <span className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${i < Math.round(product.rating) ? "fill-current text-amber-400" : "text-border"}`}
              />
            ))}
          </span>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>

        {/* Цена */}
        <div className="mt-1 flex items-baseline gap-2">
          <span className={`text-base font-semibold ${discounted ? "text-sale" : "text-foreground"}`}>
            {formatPrice(product.price)} {site.currency}
          </span>
          {discounted && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(product.oldPrice!)} {site.currency}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
