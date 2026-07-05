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
    slug: "offers",
    name: "Промоции",
    description: "Сезонни оферти и ограничени цени",
    image: "/images/categories/offers.jpg",
  },
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
    slug: "hair-care",
    name: "Коса",
    description: "Грижа и стайлинг",
    image: "/images/categories/hair-care.jpg",
  },
  {
    slug: "face",
    name: "Лице",
    description: "Серуми, кремове, маски",
    image: "/images/categories/face.jpg",
  },
  {
    slug: "body",
    name: "Тяло",
    description: "Душ, лосиони, скрабове",
    image: "/images/categories/body.jpg",
  },
  {
    slug: "teeth",
    name: "Зъби",
    description: "Паста, четки, избелване",
    image: "/images/categories/teeth.jpg",
  },
  {
    slug: "mother-baby",
    name: "Майка и дете",
    description: "Грижа за майка и бебе",
    image: "/images/categories/mother-baby.jpg",
  },
  {
    slug: "men",
    name: "Мъже",
    description: "Парфюми и грижа за мъже",
    image: "/images/categories/men.jpg",
  },
  {
    slug: "pharmacy",
    name: "Специална козметика",
    description: "Дерматологична и лечебна",
    image: "/images/categories/pharmacy.jpg",
  },
  {
    slug: "sun",
    name: "Слънце",
    description: "Слънцезащита и афтърсън",
    image: "/images/categories/sun.jpg",
  },
  {
    slug: "electronics",
    name: "Електро",
    description: "Уреди за красота",
    image: "/images/categories/electronics.jpg",
  },
  {
    slug: "salon",
    name: "Салони",
    description: "Професионална козметика",
    image: "/images/categories/salon.jpg",
  },
  {
    slug: "luxury",
    name: "Luxury",
    description: "Луксозни марки и колекции",
    image: "/images/categories/luxury.jpg",
  },
  {
    slug: "brands",
    name: "Марки",
    description: "Разгледай по бранд",
    image: "/images/categories/brands.jpg",
  },
  {
    slug: "inspiration",
    name: "Вдъхновение",
    description: "Съвети и трендове",
    image: "/images/categories/inspiration.jpg",
  },
];
