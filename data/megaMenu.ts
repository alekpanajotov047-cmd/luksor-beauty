// ────────────────────────────────────────────────────────────────
//  МЕГА МЕНЮТА — подкатегории, които се появяват при hover в лентата.
//  Ключът е slug на главна категория (същият като в navLinks).
//  Всеки запис = списък от колони, всяка колона има заглавие и линкове.
//  Промени свободно — заглавия, линкове, редове.
// ────────────────────────────────────────────────────────────────

export type MegaMenuLink = { label: string; href: string };
export type MegaMenuGroup = { title: string; links: MegaMenuLink[] };
export type MegaMenuColumn = MegaMenuGroup[];

/** Колона „Промоции и нови" — една и съща за всички менюта */
const promoColumn: MegaMenuGroup[] = [
  {
    title: "Промоции и нови",
    links: [
      { label: "Промоции", href: "/category/offers" },
      { label: "Ново", href: "/category/offers" },
      { label: "Разпродажба", href: "/category/offers" },
      { label: "Най-продавани", href: "/category/offers" },
      { label: "До 40 лв.", href: "/category/offers" },
    ],
  },
];

export const megaMenus: Record<string, MegaMenuColumn[]> = {
  // ─── ПАРФЮМИ ────────────────────────────────────────────────
  perfumes: [
    promoColumn,
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
    [
      {
        title: "Аромати за дома",
        links: [
          { label: "Арома дифузери", href: "#" },
          { label: "Свещи", href: "#" },
        ],
      },
      { title: "Подаръчни комплекти", links: [{ label: "Виж всички", href: "/category/perfumes" }] },
    ],
    [
      {
        title: "Услуги",
        links: [
          { label: "Луксозни кутии", href: "#" },
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

  // ─── ГРИМ ───────────────────────────────────────────────────
  makeup: [
    promoColumn,
    [
      {
        title: "Лице",
        links: [
          { label: "Фон дьо тен", href: "/category/makeup" },
          { label: "Коректори", href: "/category/makeup" },
          { label: "Пудри", href: "/category/makeup" },
          { label: "Основи за грим", href: "/category/makeup" },
          { label: "BB и CC кремове", href: "/category/makeup" },
          { label: "Бронзанти", href: "/category/makeup" },
          { label: "Ружове", href: "/category/makeup" },
          { label: "Хайлайтъри", href: "/category/makeup" },
          { label: "Фиксиране на грим", href: "/category/makeup" },
        ],
      },
    ],
    [
      {
        title: "Очи",
        links: [
          { label: "Спирали", href: "/category/makeup" },
          { label: "Сенки за очи", href: "/category/makeup" },
          { label: "Очна линия", href: "/category/makeup" },
          { label: "Моливи за очи", href: "/category/makeup" },
          { label: "Изкуствени мигли", href: "/category/makeup" },
        ],
      },
      {
        title: "Вежди",
        links: [
          { label: "Бои за вежди", href: "/category/makeup" },
          { label: "Моливи за вежди", href: "/category/makeup" },
          { label: "Гелове за вежди", href: "/category/makeup" },
        ],
      },
      {
        title: "Устни",
        links: [
          { label: "Червила", href: "/category/makeup" },
          { label: "Гланцове за устни", href: "/category/makeup" },
        ],
      },
    ],
    [
      {
        title: "Нокти",
        links: [
          { label: "Лакове за нокти", href: "/category/makeup" },
          { label: "Грижа за ноктите", href: "/category/makeup" },
          { label: "Маникюр и пили", href: "/category/makeup" },
        ],
      },
      {
        title: "Аксесоари",
        links: [
          { label: "Четки и гъби", href: "/category/makeup" },
          { label: "Почистване на четки", href: "/category/makeup" },
          { label: "Козметични чанти", href: "/category/makeup" },
        ],
      },
    ],
    [
      {
        title: "Съвети за красота",
        links: [
          { label: "Избор на грим онлайн", href: "#" },
          { label: "Водоустойчив грим", href: "/category/makeup" },
          { label: "Натурален грим", href: "/category/makeup" },
          { label: "Вегански грим", href: "/category/makeup" },
          { label: "Луксозен грим", href: "/category/luxury" },
        ],
      },
      {
        title: "Любими марки",
        links: [
          { label: "Estée Lauder", href: "#" },
          { label: "L'Oréal Paris", href: "#" },
          { label: "essence", href: "#" },
          { label: "Rimmel", href: "#" },
          { label: "Lancôme", href: "#" },
        ],
      },
    ],
  ],

  // ─── КОСА ───────────────────────────────────────────────────
  "hair-care": [
    promoColumn,
    [
      {
        title: "Грижа за косата",
        links: [
          { label: "Шампоани", href: "/category/hair-care" },
          { label: "Балсами", href: "/category/hair-care" },
          { label: "Маски за коса", href: "/category/hair-care" },
          { label: "Масла за коса", href: "/category/hair-care" },
          { label: "Грижа без отмиване", href: "/category/hair-care" },
        ],
      },
      {
        title: "Целенасочена грижа",
        links: [
          { label: "Растеж на косата", href: "/category/hair-care" },
          { label: "Косопад", href: "/category/hair-care" },
          { label: "Увредена коса", href: "/category/hair-care" },
          { label: "Мазна коса", href: "/category/hair-care" },
          { label: "Против пърхот", href: "/category/hair-care" },
          { label: "Руса коса", href: "/category/hair-care" },
        ],
      },
    ],
    [
      {
        title: "Стилизиране",
        links: [
          { label: "Лакове за коса", href: "/category/hair-care" },
          { label: "Пени за коса", href: "/category/hair-care" },
          { label: "Термозащита", href: "/category/hair-care" },
        ],
      },
      {
        title: "Гребени и четки",
        links: [
          { label: "Гребени", href: "/category/hair-care" },
          { label: "Плоски четки", href: "/category/hair-care" },
          { label: "Кръгли четки", href: "/category/hair-care" },
        ],
      },
      {
        title: "Бои за коса",
        links: [
          { label: "Домашно боядисване", href: "/category/hair-care" },
          { label: "Професионални бои", href: "/category/salon" },
        ],
      },
    ],
    [
      {
        title: "Електроуреди",
        links: [
          { label: "Сешоари", href: "/category/electronics" },
          { label: "Маши", href: "/category/electronics" },
          { label: "Преси за коса", href: "/category/electronics" },
        ],
      },
      {
        title: "Специална грижа",
        links: [
          { label: "Луксозна козметика", href: "/category/luxury" },
          { label: "Натурална козметика", href: "/category/hair-care" },
          { label: "Професионална", href: "/category/salon" },
        ],
      },
    ],
    [
      {
        title: "Помощ при избора",
        links: [
          { label: "Рутина за косата", href: "#" },
          { label: "Съветник за подаръци", href: "#" },
          { label: "Къдрава коса", href: "/category/hair-care" },
          { label: "Себорея", href: "/category/hair-care" },
        ],
      },
      {
        title: "Любими марки",
        links: [
          { label: "Kérastase", href: "#" },
          { label: "Wella Professionals", href: "#" },
          { label: "L'Oréal Professionnel", href: "#" },
          { label: "Moroccanoil", href: "#" },
        ],
      },
    ],
  ],

  // ─── ЛИЦЕ ───────────────────────────────────────────────────
  face: [
    promoColumn,
    [
      {
        title: "Премахване на грим",
        links: [
          { label: "Премахване от лицето", href: "/category/face" },
          { label: "Око и вежди", href: "/category/face" },
          { label: "Почистване на лицето", href: "/category/face" },
        ],
      },
      {
        title: "Грижа за лицето",
        links: [
          { label: "Тоници", href: "/category/face" },
          { label: "Серуми", href: "/category/face" },
          { label: "Дневни кремове", href: "/category/face" },
          { label: "Нощни кремове", href: "/category/face" },
          { label: "Тониращи кремове", href: "/category/face" },
          { label: "SPF защита", href: "/category/sun" },
        ],
      },
      {
        title: "Допълнителна грижа",
        links: [
          { label: "Маски за лице", href: "/category/face" },
          { label: "Платнени маски", href: "/category/face" },
          { label: "Пилинг за лице", href: "/category/face" },
        ],
      },
    ],
    [
      {
        title: "Грижа за околоочна зона",
        links: [
          { label: "Кремове и гелове", href: "/category/face" },
          { label: "Маски", href: "/category/face" },
          { label: "Серуми за мигли", href: "/category/face" },
        ],
      },
      {
        title: "Грижа за устни",
        links: [
          { label: "Балсами за устни", href: "/category/face" },
          { label: "Маски за устни", href: "/category/face" },
          { label: "Пилинги за устни", href: "/category/face" },
        ],
      },
      {
        title: "Специална грижа",
        links: [
          { label: "Корейска козметика", href: "/category/face" },
          { label: "Луксозна козметика", href: "/category/luxury" },
          { label: "Натурална", href: "/category/face" },
          { label: "Дермокозметика", href: "/category/pharmacy" },
          { label: "Веганска", href: "/category/face" },
        ],
      },
    ],
    [
      {
        title: "Тип кожа",
        links: [
          { label: "Проблемна", href: "/category/face" },
          { label: "Суха", href: "/category/face" },
          { label: "Бръчки и зряла", href: "/category/face" },
          { label: "Мазна", href: "/category/face" },
        ],
      },
      {
        title: "Целенасочена грижа",
        links: [
          { label: "Бръчки", href: "/category/face" },
          { label: "Белези от акне", href: "/category/face" },
          { label: "Разширени пори", href: "/category/face" },
          { label: "Сухи устни", href: "/category/face" },
        ],
      },
    ],
    [
      {
        title: "Помощ при избора",
        links: [
          { label: "Диагностика на кожата", href: "#" },
          { label: "Рутинна грижа", href: "#" },
          { label: "Съветник за подаръци", href: "#" },
        ],
      },
      {
        title: "Любими марки",
        links: [
          { label: "Shiseido", href: "#" },
          { label: "Clinique", href: "#" },
          { label: "La Roche-Posay", href: "#" },
          { label: "Guerlain", href: "#" },
        ],
      },
    ],
  ],

  // ─── ТЯЛО ───────────────────────────────────────────────────
  body: [
    promoColumn,
    [
      {
        title: "Грижа за тялото",
        links: [
          { label: "Млека за тяло", href: "/category/body" },
          { label: "Кремове за тяло", href: "/category/body" },
          { label: "Грижа за деколте и бюст", href: "/category/body" },
          { label: "Кремове за ръце", href: "/category/body" },
        ],
      },
      {
        title: "Душ и вана",
        links: [
          { label: "Душ гелове", href: "/category/body" },
          { label: "Продукти за вана", href: "/category/body" },
        ],
      },
      {
        title: "Сапуни",
        links: [
          { label: "Течни сапуни", href: "/category/body" },
          { label: "Твърди сапуни", href: "/category/body" },
        ],
      },
    ],
    [
      {
        title: "Дезодоранти",
        links: [
          { label: "Антиперспиранти", href: "/category/body" },
          { label: "Натурални дезодоранти", href: "/category/body" },
        ],
      },
      {
        title: "Стрии и целулит",
        links: [
          { label: "Против стрии", href: "/category/body" },
          { label: "Против целулит", href: "/category/body" },
        ],
      },
      {
        title: "Слънце",
        links: [
          { label: "Слънцезащитни", href: "/category/sun" },
          { label: "Автобронзанти", href: "/category/sun" },
        ],
      },
      {
        title: "Специална козметика",
        links: [
          { label: "Дермокозметика", href: "/category/pharmacy" },
          { label: "Натурална", href: "/category/body" },
          { label: "Веганска", href: "/category/body" },
          { label: "Луксозна", href: "/category/luxury" },
        ],
      },
    ],
    [
      {
        title: "Депилация и епилация",
        links: [
          { label: "Самобръсначки", href: "/category/body" },
          { label: "Кремове за депилация", href: "/category/body" },
          { label: "Епилатори", href: "/category/electronics" },
          { label: "IPL епилатори", href: "/category/electronics" },
        ],
      },
      {
        title: "Интимна хигиена",
        links: [{ label: "Продукти за хигиена", href: "/category/body" }],
      },
    ],
    [
      {
        title: "Проблеми",
        links: [{ label: "Миризливи крака", href: "/category/body" }],
      },
      {
        title: "Любими марки",
        links: [
          { label: "Sol de Janeiro", href: "#" },
          { label: "Lancaster", href: "#" },
          { label: "CeraVe", href: "#" },
          { label: "Gillette", href: "#" },
          { label: "Dove", href: "#" },
        ],
      },
    ],
  ],

  // ─── ЗЪБИ ───────────────────────────────────────────────────
  teeth: [
    promoColumn,
    [
      {
        title: "Електрически четки",
        links: [
          { label: "Осцилиращи", href: "/category/teeth" },
          { label: "Звукови", href: "/category/teeth" },
          { label: "Магнитни", href: "/category/teeth" },
          { label: "Резервни глави", href: "/category/teeth" },
        ],
      },
      {
        title: "Ръчни четки",
        links: [
          { label: "Обикновени четки", href: "/category/teeth" },
          { label: "С един сноп власинки", href: "/category/teeth" },
        ],
      },
      {
        title: "Грижа за междузъбното",
        links: [
          { label: "Интердентални четки", href: "/category/teeth" },
          { label: "Конци за зъби", href: "/category/teeth" },
          { label: "Душове за уста", href: "/category/teeth" },
        ],
      },
    ],
    [
      {
        title: "Пасти за зъби",
        links: [
          { label: "Избелващи", href: "/category/teeth" },
          { label: "За чувствителни зъби", href: "/category/teeth" },
          { label: "За зъбен емайл", href: "/category/teeth" },
          { label: "Против пародонтоза", href: "/category/teeth" },
          { label: "Натурални", href: "/category/teeth" },
        ],
      },
      {
        title: "Избелване на зъбите",
        links: [
          { label: "Пасти за избелване", href: "/category/teeth" },
          { label: "Води за уста", href: "/category/teeth" },
          { label: "Комплекти за избелване", href: "/category/teeth" },
        ],
      },
      {
        title: "Води и спрейове за уста",
        links: [{ label: "Виж всички", href: "/category/teeth" }],
      },
    ],
    [
      {
        title: "Специална грижа",
        links: [{ label: "Миризма от устата", href: "/category/teeth" }],
      },
      {
        title: "За деца",
        links: [
          { label: "Четки за зъби", href: "/category/mother-baby" },
          { label: "Пасти за зъби", href: "/category/mother-baby" },
        ],
      },
      { title: "Комплекти", links: [{ label: "Виж всички", href: "/category/teeth" }] },
    ],
    [
      {
        title: "Любими марки",
        links: [
          { label: "MEDIBLANC", href: "#" },
          { label: "Oral-B", href: "#" },
          { label: "Marvis", href: "#" },
          { label: "Philips", href: "#" },
          { label: "Curaprox", href: "#" },
        ],
      },
    ],
  ],

  // ─── МЪЖЕ ───────────────────────────────────────────────────
  men: [
    promoColumn,
    [
      {
        title: "Мъжки парфюми",
        links: [
          { label: "Парфюмни води", href: "/category/men" },
          { label: "Тоалетни води", href: "/category/men" },
          { label: "Одеколони", href: "/category/men" },
        ],
      },
      {
        title: "Коса",
        links: [
          { label: "Шампоани", href: "/category/hair-care" },
          { label: "Стилизиране", href: "/category/hair-care" },
          { label: "Косопад при мъжете", href: "/category/hair-care" },
        ],
      },
      {
        title: "Тяло",
        links: [
          { label: "Дезодоранти", href: "/category/body" },
          { label: "Продукти за баня", href: "/category/body" },
        ],
      },
      {
        title: "Лице",
        links: [
          { label: "Дневна и нощна грижа", href: "/category/face" },
          { label: "Кремове за очи", href: "/category/face" },
        ],
      },
    ],
    [
      {
        title: "Бръснене",
        links: [
          { label: "Класическо бръснене", href: "/category/men" },
          { label: "Резервни ножчета", href: "/category/men" },
          { label: "Продукти за бръснене", href: "/category/men" },
          { label: "След бръснене", href: "/category/men" },
          { label: "Самобръсначки", href: "/category/men" },
          { label: "Електрически самобръсначки", href: "/category/electronics" },
          { label: "Тримери за брада", href: "/category/electronics" },
        ],
      },
      {
        title: "Грижа за брадата",
        links: [
          { label: "Масла", href: "/category/men" },
          { label: "Балсами и восъци", href: "/category/men" },
          { label: "Сапуни и шампоани", href: "/category/men" },
        ],
      },
    ],
    [
      {
        title: "Специална козметика",
        links: [
          { label: "Дермокозметика", href: "/category/pharmacy" },
          { label: "Луксозна козметика", href: "/category/luxury" },
          { label: "Козметика за пътуване", href: "/category/men" },
        ],
      },
      {
        title: "Комплекти",
        links: [{ label: "Козметични комплекти", href: "/category/men" }],
      },
    ],
    [
      {
        title: "Любими марки",
        links: [
          { label: "Gillette", href: "#" },
          { label: "Biotherm", href: "#" },
          { label: "Kérastase", href: "#" },
          { label: "Proraso", href: "#" },
          { label: "Braun", href: "#" },
        ],
      },
    ],
  ],

  // ─── СПЕЦИАЛНА КОЗМЕТИКА (ДЕРМО) ────────────────────────────
  pharmacy: [
    promoColumn,
    [
      {
        title: "Почистване на лицето",
        links: [
          { label: "Премахване на грим от очите", href: "/category/pharmacy" },
          { label: "Почистване на кожата", href: "/category/pharmacy" },
          { label: "Тоници за лице", href: "/category/pharmacy" },
          { label: "Термални води", href: "/category/pharmacy" },
        ],
      },
      {
        title: "Грижа за лицето",
        links: [
          { label: "Грижа за околоочна зона", href: "/category/pharmacy" },
          { label: "Серуми за лице", href: "/category/pharmacy" },
          { label: "Кремове за лице", href: "/category/pharmacy" },
          { label: "Маски за лице", href: "/category/pharmacy" },
        ],
      },
      {
        title: "Грижа за тялото",
        links: [
          { label: "Дезодоранти", href: "/category/pharmacy" },
          { label: "Душ гелове и масла", href: "/category/pharmacy" },
          { label: "Млека и кремове", href: "/category/pharmacy" },
        ],
      },
    ],
    [
      {
        title: "Грижа за косата",
        links: [
          { label: "Пърхот", href: "/category/pharmacy" },
          { label: "Косопад", href: "/category/pharmacy" },
          { label: "Чувствителен скалп", href: "/category/pharmacy" },
          { label: "Сух скалп", href: "/category/pharmacy" },
        ],
      },
      {
        title: "SPF защита",
        links: [
          { label: "Кожа на лицето", href: "/category/pharmacy" },
          { label: "Тяло", href: "/category/pharmacy" },
          { label: "Деца", href: "/category/pharmacy" },
        ],
      },
      {
        title: "За деца",
        links: [
          { label: "За баня", href: "/category/pharmacy" },
          { label: "Грижа за кожата", href: "/category/pharmacy" },
        ],
      },
    ],
    [
      {
        title: "Целенасочена грижа",
        links: [
          { label: "Акне", href: "/category/pharmacy" },
          { label: "Атопичен дерматит", href: "/category/pharmacy" },
          { label: "Розацея", href: "/category/pharmacy" },
          { label: "Псориазис", href: "/category/pharmacy" },
          { label: "Пигментни петна", href: "/category/pharmacy" },
        ],
      },
    ],
    [
      {
        title: "Комплекти",
        links: [{ label: "Козметични комплекти", href: "/category/pharmacy" }],
      },
    ],
    [
      {
        title: "Любими марки",
        links: [
          { label: "La Roche-Posay", href: "#" },
          { label: "Uriage", href: "#" },
          { label: "Vichy", href: "#" },
          { label: "FILORGA", href: "#" },
          { label: "Avène", href: "#" },
        ],
      },
    ],
  ],

  // ─── СЛЪНЦЕ ─────────────────────────────────────────────────
  sun: [
    promoColumn,
    [
      {
        title: "Слънцезащитни продукти",
        links: [
          { label: "Крем за лице", href: "/category/sun" },
          { label: "Крем за тяло", href: "/category/sun" },
          { label: "За бебета и деца", href: "/category/sun" },
          { label: "С минерални филтри", href: "/category/sun" },
        ],
      },
    ],
    [
      {
        title: "Козметика преди и след слънце",
        links: [
          { label: "Преди слънчеви бани", href: "/category/sun" },
          { label: "След слънчеви бани", href: "/category/sun" },
        ],
      },
      {
        title: "Козметика за солариум",
        links: [{ label: "Виж всички", href: "/category/sun" }],
      },
      {
        title: "Автобронзанти",
        links: [{ label: "Автобронзанти и бронзанти", href: "/category/sun" }],
      },
    ],
    [
      {
        title: "Слънце и коса",
        links: [{ label: "Защита за коса", href: "/category/hair-care" }],
      },
      {
        title: "Слънцезащитен фактор",
        links: [
          { label: "SPF 6–10", href: "/category/sun" },
          { label: "SPF 15–25", href: "/category/sun" },
          { label: "SPF 30–50+", href: "/category/sun" },
        ],
      },
    ],
    [
      {
        title: "Специална козметика",
        links: [
          { label: "Дермокозметика", href: "/category/pharmacy" },
          { label: "Натурални крема", href: "/category/sun" },
          { label: "Козметика за пътуване", href: "/category/sun" },
          { label: "Корейски SPF", href: "/category/sun" },
          { label: "Безопасен за корали", href: "/category/sun" },
        ],
      },
    ],
  ],

  // ─── ЕЛЕКТРО ────────────────────────────────────────────────
  electronics: [
    promoColumn,
    [
      {
        title: "Грижа за косата",
        links: [
          { label: "Сешоари", href: "/category/electronics" },
          { label: "Маши", href: "/category/electronics" },
          { label: "Преси за коса", href: "/category/electronics" },
          { label: "Парни преси", href: "/category/electronics" },
        ],
      },
      {
        title: "Грижа за лицето",
        links: [{ label: "Четки за почистване", href: "/category/electronics" }],
      },
      {
        title: "Депилация и епилация",
        links: [
          { label: "Епилатори", href: "/category/electronics" },
          { label: "IPL епилатори", href: "/category/electronics" },
        ],
      },
    ],
    [
      {
        title: "Грижа за зъбите",
        links: [
          { label: "Звукови четки", href: "/category/teeth" },
          { label: "Магнитни четки", href: "/category/teeth" },
          { label: "Осцилиращи четки", href: "/category/teeth" },
          { label: "Зъбни душове", href: "/category/teeth" },
          { label: "Детски ел. четки", href: "/category/teeth" },
        ],
      },
      {
        title: "Електроуреди за мъже",
        links: [
          { label: "Ел. самобръсначки", href: "/category/men" },
          { label: "Тримери за брада", href: "/category/men" },
          { label: "Машинки за коса", href: "/category/men" },
          { label: "Тримери за косъмчета", href: "/category/men" },
        ],
      },
      { title: "Фитнес уреди", links: [{ label: "Виж всички", href: "/category/electronics" }] },
    ],
    [
      {
        title: "Стоки за бебета",
        links: [
          { label: "Бебефони", href: "/category/mother-baby" },
          { label: "Монитори за дишане", href: "/category/mother-baby" },
          { label: "Термометри", href: "/category/mother-baby" },
        ],
      },
      {
        title: "Ароматизатори за дома",
        links: [
          { label: "Електрически дифузери", href: "/category/electronics" },
          { label: "Овлажнители за въздух", href: "/category/electronics" },
        ],
      },
    ],
    [
      {
        title: "Любими марки",
        links: [
          { label: "Oral-B", href: "#" },
          { label: "Braun", href: "#" },
          { label: "Dyson", href: "#" },
          { label: "FOREO", href: "#" },
          { label: "Philips", href: "#" },
        ],
      },
    ],
  ],

  // ─── LUXURY ─────────────────────────────────────────────────
  luxury: [
    [
      {
        title: "Не пропускайте",
        links: [
          { label: "Нови продукти", href: "/category/luxury" },
          { label: "Безплатна доставка", href: "/category/luxury" },
          { label: "Подарък към покупката", href: "/category/luxury" },
          { label: "Всичко от Luxury", href: "/category/luxury" },
        ],
      },
    ],
    [
      {
        title: "Луксозни парфюми",
        links: [{ label: "Виж всички", href: "/category/luxury" }],
      },
      {
        title: "Нишови парфюми",
        links: [{ label: "Виж всички", href: "/category/luxury" }],
      },
      {
        title: "Луксозна грижа за кожата",
        links: [{ label: "Виж всички", href: "/category/luxury" }],
      },
      { title: "Луксозен грим", links: [{ label: "Виж всички", href: "/category/luxury" }] },
    ],
    [
      {
        title: "Помощ при избора",
        links: [{ label: "Discovery комплекти", href: "/category/luxury" }],
      },
    ],
    [
      {
        title: "Вдъхновение",
        links: [
          { label: "Разкази за марки", href: "#" },
          { label: "Ателие истории", href: "#" },
        ],
      },
    ],
    [
      {
        title: "Любими марки",
        links: [
          { label: "Creed", href: "#" },
          { label: "HERMÈS", href: "#" },
          { label: "DIOR", href: "#" },
          { label: "TOM FORD", href: "#" },
          { label: "Dolce & Gabbana", href: "#" },
        ],
      },
    ],
  ],

  // ─── МАЙКА И ДЕТЕ ───────────────────────────────────────────
  "mother-baby": [
    promoColumn,
    [
      {
        title: "За бебето",
        links: [
          { label: "Бебешки шампоани", href: "/category/mother-baby" },
          { label: "Кремове и лосиони", href: "/category/mother-baby" },
          { label: "Продукти за къпане", href: "/category/mother-baby" },
          { label: "Смяна на памперси", href: "/category/mother-baby" },
          { label: "Мокри кърпи", href: "/category/mother-baby" },
        ],
      },
      {
        title: "Хигиена на бебето",
        links: [
          { label: "Клечки за уши", href: "/category/mother-baby" },
          { label: "Прах против подсичане", href: "/category/mother-baby" },
        ],
      },
    ],
    [
      {
        title: "За майката",
        links: [
          { label: "Против стрии", href: "/category/mother-baby" },
          { label: "Грижа за бюста", href: "/category/mother-baby" },
          { label: "Кремове за корема", href: "/category/mother-baby" },
          { label: "Кремове за след раждане", href: "/category/mother-baby" },
        ],
      },
      {
        title: "Хранене",
        links: [
          { label: "Помпи за кърма", href: "/category/mother-baby" },
          { label: "Аксесоари за кърмене", href: "/category/mother-baby" },
        ],
      },
    ],
    [
      {
        title: "За деца",
        links: [
          { label: "Шампоани", href: "/category/mother-baby" },
          { label: "Душ гелове", href: "/category/mother-baby" },
          { label: "Слънцезащита", href: "/category/mother-baby" },
          { label: "Балсами за устни", href: "/category/mother-baby" },
        ],
      },
      {
        title: "Специална грижа",
        links: [
          { label: "Дермокозметика", href: "/category/pharmacy" },
          { label: "Натурална", href: "/category/mother-baby" },
          { label: "Хипоалергенна", href: "/category/mother-baby" },
        ],
      },
    ],
    [
      {
        title: "Здраве",
        links: [
          { label: "Хранителни добавки", href: "/category/mother-baby" },
          { label: "Витамини за деца", href: "/category/mother-baby" },
        ],
      },
      {
        title: "Помощ при избора",
        links: [
          { label: "Съветник за родители", href: "#" },
          { label: "Подаръци за бебе", href: "#" },
        ],
      },
    ],
    [
      {
        title: "Любими марки",
        links: [
          { label: "Mustela", href: "#" },
          { label: "Nuk", href: "#" },
          { label: "Bepanthen", href: "#" },
          { label: "Weleda", href: "#" },
          { label: "Chicco", href: "#" },
        ],
      },
    ],
  ],
};
