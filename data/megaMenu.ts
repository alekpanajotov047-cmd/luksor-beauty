// ────────────────────────────────────────────────────────────────
//  МЕГА МЕНЮТА — подкатегории, които се появяват при hover в лентата.
//  Ключът е slug на главна категория (същият като в navLinks).
//  Всеки запис = списък от колони, всяка колона има заглавие и линкове.
//  Промени свободно — заглавия, линкове, редове.
// ────────────────────────────────────────────────────────────────

export type MegaMenuLink = { label: string; href: string };
export type MegaMenuGroup = { title: string; links: MegaMenuLink[] };
export type MegaMenuColumn = MegaMenuGroup[];

export const megaMenus: Record<string, MegaMenuColumn[]> = {
  perfumes: [
    // Колона 1
    [
      {
        title: "Промоции и нови",
        links: [
          { label: "Промоции", href: "/category/offers" },
          { label: "Ново", href: "/category/perfumes" },
          { label: "Разпродажба", href: "/category/offers" },
          { label: "Най-продавани", href: "/category/perfumes" },
          { label: "Безплатна доставка", href: "/category/perfumes" },
          { label: "Парфюми до 40 лв.", href: "/category/perfumes" },
        ],
      },
    ],
    // Колона 2
    [
      {
        title: "Дамски парфюми",
        links: [
          { label: "Парфюмни води", href: "/category/perfumes" },
          { label: "Тоалетни води", href: "/category/perfumes" },
          { label: "Спрейове за тяло", href: "/category/body" },
        ],
      },
      {
        title: "Мъжки парфюми",
        links: [
          { label: "Парфюмни води", href: "/category/men" },
          { label: "Тоалетни води", href: "/category/men" },
          { label: "Одеколони", href: "/category/men" },
        ],
      },
      {
        title: "Унисекс парфюми",
        links: [
          { label: "Парфюмни води", href: "/category/perfumes" },
          { label: "Тоалетни води", href: "/category/perfumes" },
        ],
      },
    ],
    // Колона 3
    [
      {
        title: "Подбрани парфюми",
        links: [
          { label: "Ориенталски", href: "/category/perfumes" },
          { label: "Луксозни", href: "/category/luxury" },
          { label: "Нишови", href: "/category/perfumes" },
          { label: "За многократно пълнене", href: "/category/perfumes" },
          { label: "Летни", href: "/category/perfumes" },
        ],
      },
      {
        title: "Парфюмна козметика",
        links: [
          { label: "Дезодоранти", href: "/category/body" },
          { label: "Душ гелове", href: "/category/body" },
          { label: "Лосиони за тяло", href: "/category/body" },
        ],
      },
    ],
    // Колона 4
    [
      {
        title: "Аромати за дома",
        links: [
          { label: "Арома дифузери", href: "#" },
          { label: "Свещи", href: "#" },
        ],
      },
      {
        title: "Аксесоари",
        links: [
          { label: "Пълнещ разпръсквач", href: "#" },
        ],
      },
      {
        title: "Подаръчни комплекти",
        links: [{ label: "Виж всички", href: "/category/perfumes" }],
      },
    ],
    // Колона 5
    [
      {
        title: "Помощ при избора",
        links: [{ label: "Съветник за подаръци", href: "#" }],
      },
      {
        title: "Нашите услуги",
        links: [
          { label: "Луксозни кутии", href: "#" },
          { label: "Опитай преди да купиш", href: "#" },
          { label: "Гравиране", href: "#" },
          { label: "Опаковане на подаръци", href: "#" },
        ],
      },
      {
        title: "Любими марки",
        links: [
          { label: "Chanel", href: "#" },
          { label: "Dior", href: "#" },
          { label: "Versace", href: "#" },
          { label: "Armani", href: "#" },
          { label: "Yves Saint Laurent", href: "#" },
        ],
      },
    ],
  ],
};
