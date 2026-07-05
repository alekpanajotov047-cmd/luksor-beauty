// ────────────────────────────────────────────────────────────────
//  ЦЕНТРАЛНО МЯСТО ЗА ТЕКСТОВЕ НА САЙТА
//  Промени каквото искаш тук — заглавия, банери, навигация, footer.
// ────────────────────────────────────────────────────────────────

export const site = {
  name: "Luksor Beauty",
  tagline: "Парфюмерия & Козметика",
  description:
    "Подбрана селекция от нишови парфюми, грим и грижа за кожата. Премиум красота, доставена до вашата врата.",
  currency: "лв.",
};

/** Горна лента над хедъра */
export const announcement = "Безплатна доставка за поръчки над 80 лв. · Връщане до 30 дни";

/** Малки служебни линкове горе вдясно */
export const utilityLinks: { label: string; href: string }[] = [
  { label: "Проследи поръчка", href: "#" },
  { label: "Магазини", href: "#" },
  { label: "Помощ", href: "#" },
  { label: "BG", href: "#" },
];

/** Главна навигация (категории) — първият е с розов hightlight (Notino стил) */
export const navLinks: { label: string; href: string; highlight?: boolean }[] = [
  { label: "Промоции", href: "/category/offers", highlight: true },
  { label: "Парфюми", href: "/category/perfumes" },
  { label: "Грим", href: "/category/makeup" },
  { label: "Коса", href: "/category/hair-care" },
  { label: "Лице", href: "/category/face" },
  { label: "Тяло", href: "/category/body" },
  { label: "Зъби", href: "/category/teeth" },
  { label: "Майка и дете", href: "/category/mother-baby" },
  { label: "Мъже", href: "/category/men" },
  { label: "Специална козметика", href: "/category/pharmacy" },
  { label: "Слънце", href: "/category/sun" },
  { label: "Електро", href: "/category/electronics" },
  { label: "Салони", href: "/category/salon" },
  { label: "Luxury", href: "/category/luxury" },
  { label: "Марки", href: "/category/brands" },
  { label: "Вдъхновение", href: "/category/inspiration" },
];

/** Hero банер */
export const hero = {
  eyebrow: "Нова колекция",
  title: "Ароматът на изтънчеността",
  subtitle:
    "Открийте нишови парфюми и премиум козметика, подбрани с внимание към всеки детайл.",
  primaryCta: { label: "Разгледай парфюмите", href: "/category/perfumes" },
  secondaryCta: { label: "Виж бестселърите", href: "#bestsellers" },
  image: "/images/hero.jpg",
};

/** Промо банер (средна секция) */
export const promo = {
  eyebrow: "Лимитирано",
  title: "Колекция „Champagne Nights“",
  text: "До -30% на избрани аромати за вечерта. Само този сезон.",
  cta: { label: "Към офертите", href: "/category/offers" },
  image: "/images/promo.jpg",
};

/** Промо плочки (grid от банери, в стил Notino) */
export const promoTiles: {
  title: string;
  text: string;
  cta: { label: string; href: string };
  image?: string;
  tone: "dark" | "pink" | "light";
}[] = [
  {
    title: "До -30% на нишови парфюми",
    text: "Открийте новата селекция аромати на специални цени.",
    cta: { label: "Пазарувай сега", href: "/category/perfumes" },
    image: "/images/promo/parfyumi.jpg",
    tone: "dark",
  },
  {
    title: "Седмица на грижата за кожа",
    text: "Серуми и кремове от водещи марки с до -25%.",
    cta: { label: "Виж офертите", href: "/category/skincare" },
    image: "/images/promo/skincare.jpg",
    tone: "pink",
  },
  {
    title: "Подаръчни комплекти",
    text: "Подбрани сетове за всеки повод.",
    cta: { label: "Разгледай", href: "/category/gifts" },
    image: "/images/promo/gifts.jpg",
    tone: "light",
  },
];

/** Брандове за секцията с акценти */
export const brands: { name: string; href: string }[] = [
  { name: "Armani", href: "#" },
  { name: "Versace", href: "#" },
  { name: "Dior", href: "#" },
  { name: "Chanel", href: "#" },
  { name: "Yves Saint Laurent", href: "#" },
  { name: "Lancôme", href: "#" },
  { name: "Hugo Boss", href: "#" },
  { name: "Calvin Klein", href: "#" },
  { name: "Paco Rabanne", href: "#" },
  { name: "Dolce & Gabbana", href: "#" },
  { name: "Givenchy", href: "#" },
  { name: "Gucci", href: "#" },
];

/** Доверие / предимства (под хероя) */
export const perks: { title: string; text: string }[] = [
  { title: "Безплатна доставка", text: "за поръчки над 80 лв." },
  { title: "Оригинални продукти", text: "100% автентични брандове" },
  { title: "Лесно връщане", text: "до 30 дни без въпроси" },
  { title: "Сигурно плащане", text: "защитени транзакции" },
];

export const newsletter = {
  title: "Присъединете се към Luksor Beauty",
  text: "Абонирайте се за -10% на първата поръчка и ексклузивни оферти.",
  placeholder: "Вашият имейл адрес",
  cta: "Абонирай се",
};

/** Footer */
export const footer = {
  columns: [
    {
      title: "Магазин",
      links: [
        { label: "Парфюми", href: "/category/perfumes" },
        { label: "Грим", href: "/category/makeup" },
        { label: "Грижа за кожата", href: "/category/skincare" },
        { label: "Подаръци", href: "/category/gifts" },
      ],
    },
    {
      title: "Помощ",
      links: [
        { label: "Доставка", href: "#" },
        { label: "Връщане", href: "#" },
        { label: "Често задавани въпроси", href: "#" },
        { label: "Контакти", href: "#" },
      ],
    },
    {
      title: "За нас",
      links: [
        { label: "Историята ни", href: "#" },
        { label: "Магазини", href: "#" },
        { label: "Кариери", href: "#" },
        { label: "Блог", href: "#" },
      ],
    },
  ],
  social: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "TikTok", href: "#" },
  ],
  legal: "© 2026 Luksor Beauty. Всички права запазени. Това е демо проект.",
};
