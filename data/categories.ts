// ────────────────────────────────────────────────────────────────
//  КАТЕГОРИИ
//  Промени име, slug или снимка. `image` е път към /public/images.
//  Ако оставиш image празен, ще се покаже елегантен плейсхолдър.
// ────────────────────────────────────────────────────────────────

export type Category = {
  slug: string;
  name: string;
  description: string;
  image?: string;
};

export const categories: Category[] = [
  {
    slug: "perfumes",
    name: "Парфюми",
    description: "Нишови и дизайнерски аромати",
    image: "/images/categories/perfumes.jpg",
  },
  {
    slug: "makeup",
    name: "Грим",
    description: "Тен, очи, устни",
    image: "/images/categories/makeup.jpg",
  },
  {
    slug: "skincare",
    name: "Грижа за кожата",
    description: "Серуми, кремове, маски",
    image: "/images/categories/skincare.jpg",
  },
  {
    slug: "hair-care",
    name: "Коса",
    description: "Грижа и стайлинг",
    image: "/images/categories/hair-care.jpg",
  },
  {
    slug: "men",
    name: "За мъже",
    description: "Парфюми и грижа",
    image: "/images/categories/men.jpg",
  },
  {
    slug: "gifts",
    name: "Подаръци",
    description: "Комплекти и ваучери",
    image: "/images/categories/gifts.jpg",
  },
];
