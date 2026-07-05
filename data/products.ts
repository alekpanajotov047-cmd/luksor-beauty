// ────────────────────────────────────────────────────────────────
//  ПРОДУКТИ
//  Данните са в data/products.json — за да могат да се редактират
//  от Decap CMS без code push. Полетата остават същите.
// ────────────────────────────────────────────────────────────────

import productsData from "./products.json";

export type Product = {
  id: string;
  brand: string;
  name: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  category: string;
  image?: string;
  badge?: string;
  bestseller?: boolean;
};

export const products: Product[] = productsData.products as Product[];

/** Помощни функции */
export const bestsellers = products.filter((p) => p.bestseller);
export const deals = products.filter(
  (p) => typeof p.oldPrice === "number" && p.oldPrice > p.price,
);

export function formatPrice(value: number): string {
  return value.toFixed(2).replace(".", ",");
}
