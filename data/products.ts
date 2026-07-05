// ────────────────────────────────────────────────────────────────
//  ПРОДУКТИ
//  Редактирай свободно: brand, name, price, oldPrice, rating, image…
//  - price / oldPrice: числа в лева (oldPrice = по избор, за отстъпка)
//  - image: път към /public/images (ако липсва → елегантен плейсхолдър)
//  - category: трябва да съвпада със slug от categories.ts
//  - badge: по избор ("Бестселър", "Ново" и т.н.) — процентът се смята автоматично
// ────────────────────────────────────────────────────────────────

export type Product = {
  id: string;
  brand: string;
  name: string;
  price: number;
  oldPrice?: number;
  rating: number; // 0–5
  reviews: number;
  category: string;
  image?: string;
  badge?: string;
  bestseller?: boolean;
};

export const products: Product[] = [
  {
    id: "p1",
    brand: "Versace",
    name: "Eros — Парфюмна вода 100 мл",
    price: 149.9,
    oldPrice: 189.9,
    rating: 4.8,
    reviews: 212,
    category: "perfumes",
    image: "/images/products/versace-eros.jpg",
    badge: "Бестселър",
    bestseller: true,
  },
  {
    id: "p2",
    brand: "Dior",
    name: "Sauvage — Тоалетна вода 100 мл",
    price: 159.0,
    rating: 4.9,
    reviews: 538,
    category: "perfumes",
    image: "/images/products/dior-sauvage.jpg",
    badge: "Ново",
    bestseller: true,
  },
  {
    id: "p3",
    brand: "Lancôme",
    name: "Advanced Génifique — Серум 30 мл",
    price: 64.9,
    oldPrice: 79.9,
    rating: 4.9,
    reviews: 421,
    category: "skincare",
    image: "/images/products/lancome-serum.jpg",
    bestseller: true,
  },
  {
    id: "p4",
    brand: "Yves Saint Laurent",
    name: "Rouge Pur Couture — Червило",
    price: 32.5,
    rating: 4.5,
    reviews: 96,
    category: "makeup",
    image: "/images/products/ysl-rouge.jpg",
    badge: "Бестселър",
    bestseller: true,
  },
  {
    id: "p5",
    brand: "Armani",
    name: "Acqua di Giò — Парфюмна вода 50 мл",
    price: 134.0,
    oldPrice: 159.0,
    rating: 4.7,
    reviews: 274,
    category: "men",
    image: "/images/products/armani-acqua.jpg",
    bestseller: true,
  },
  {
    id: "p6",
    brand: "Chanel",
    name: "Hydra Beauty — Хидратиращ крем 50 мл",
    price: 49.9,
    rating: 4.8,
    reviews: 305,
    category: "skincare",
    image: "/images/products/chanel-hydra.jpg",
    bestseller: true,
  },
  {
    id: "p7",
    brand: "Hugo Boss",
    name: "Bottled — Парфюм за мъже 100 мл",
    price: 119.0,
    oldPrice: 139.0,
    rating: 4.6,
    reviews: 188,
    category: "men",
    image: "/images/products/boss-bottled.jpg",
    bestseller: true,
  },
  {
    id: "p8",
    brand: "Dolce & Gabbana",
    name: "The Only One — Палитра сенки",
    price: 58.0,
    oldPrice: 72.0,
    rating: 4.4,
    reviews: 142,
    category: "makeup",
    image: "/images/products/dg-shadows.jpg",
    bestseller: true,
  },
  {
    id: "p9",
    brand: "K18",
    name: "Leave-In Маска за коса 50 мл",
    price: 88.0,
    rating: 4.7,
    reviews: 167,
    category: "hair-care",
    image: "/images/products/k18-mask.jpg",
    badge: "Салон",
  },
  {
    id: "p10",
    brand: "Maison Luksor",
    name: "Discovery — Подаръчен сет мини парфюми",
    price: 74.0,
    oldPrice: 92.0,
    rating: 4.8,
    reviews: 82,
    category: "gifts",
    image: "/images/products/discovery-set.jpg",
    badge: "Подарък",
  },
];

/** Помощни функции */
export const bestsellers = products.filter((p) => p.bestseller);
export const deals = products.filter(
  (p) => typeof p.oldPrice === "number" && p.oldPrice > p.price,
);

export function formatPrice(value: number): string {
  return value.toFixed(2).replace(".", ",");
}
