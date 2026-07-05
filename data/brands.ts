// ────────────────────────────────────────────────────────────────
//  МАРКИ — азбучна директория (страница /category/brands)
//  Добави / премахни имена свободно. `href` е бъдещ линк към бранда.
// ────────────────────────────────────────────────────────────────

export type Brand = { name: string; href: string };

export const allBrands: Brand[] = [
  // 0
  { name: "3INA", href: "#" },
  // A
  { name: "Adidas", href: "#" },
  { name: "Alien", href: "#" },
  { name: "Angel", href: "#" },
  { name: "Aramis", href: "#" },
  { name: "Armani", href: "#" },
  { name: "Avène", href: "#" },
  { name: "Aveda", href: "#" },
  // B
  { name: "Balenciaga", href: "#" },
  { name: "Balmain", href: "#" },
  { name: "Bath & Body Works", href: "#" },
  { name: "Benefit", href: "#" },
  { name: "Biotherm", href: "#" },
  { name: "Bobbi Brown", href: "#" },
  { name: "Bottega Veneta", href: "#" },
  { name: "Braun", href: "#" },
  { name: "Bulgari", href: "#" },
  { name: "Burberry", href: "#" },
  // C
  { name: "Cacharel", href: "#" },
  { name: "Calvin Klein", href: "#" },
  { name: "Carolina Herrera", href: "#" },
  { name: "Cartier", href: "#" },
  { name: "CeraVe", href: "#" },
  { name: "Chanel", href: "#" },
  { name: "Chloé", href: "#" },
  { name: "Chopard", href: "#" },
  { name: "Clarins", href: "#" },
  { name: "Clinique", href: "#" },
  { name: "Coach", href: "#" },
  { name: "Creed", href: "#" },
  // D
  { name: "Davidoff", href: "#" },
  { name: "DIOR", href: "#" },
  { name: "Dolce & Gabbana", href: "#" },
  { name: "Dove", href: "#" },
  { name: "Dyson", href: "#" },
  // E
  { name: "Elemis", href: "#" },
  { name: "Elizabeth Arden", href: "#" },
  { name: "Escada", href: "#" },
  { name: "essence", href: "#" },
  { name: "Estée Lauder", href: "#" },
  // F
  { name: "Fenty Beauty", href: "#" },
  { name: "Fendi", href: "#" },
  { name: "FILORGA", href: "#" },
  { name: "FOREO", href: "#" },
  // G
  { name: "Garnier", href: "#" },
  { name: "ghd", href: "#" },
  { name: "Gillette", href: "#" },
  { name: "Giorgio Armani", href: "#" },
  { name: "Givenchy", href: "#" },
  { name: "Guerlain", href: "#" },
  { name: "Gucci", href: "#" },
  // H
  { name: "HERMÈS", href: "#" },
  { name: "Hugo Boss", href: "#" },
  { name: "Huda Beauty", href: "#" },
  // I
  { name: "ISDIN", href: "#" },
  // J
  { name: "Jean Paul Gaultier", href: "#" },
  { name: "Jimmy Choo", href: "#" },
  { name: "John Varvatos", href: "#" },
  { name: "Juicy Couture", href: "#" },
  // K
  { name: "Kenzo", href: "#" },
  { name: "Kérastase", href: "#" },
  { name: "Kiehl's", href: "#" },
  { name: "Kilian", href: "#" },
  { name: "K18", href: "#" },
  // L
  { name: "L'Oréal Paris", href: "#" },
  { name: "L'Oréal Professionnel", href: "#" },
  { name: "La Roche-Posay", href: "#" },
  { name: "Lacoste", href: "#" },
  { name: "Lancaster", href: "#" },
  { name: "Lancôme", href: "#" },
  { name: "Lattafa", href: "#" },
  { name: "Loewe", href: "#" },
  { name: "Lush", href: "#" },
  // M
  { name: "MAC", href: "#" },
  { name: "Maison Margiela", href: "#" },
  { name: "Mancera", href: "#" },
  { name: "Marc Jacobs", href: "#" },
  { name: "Maybelline", href: "#" },
  { name: "MEDIBLANC", href: "#" },
  { name: "Moroccanoil", href: "#" },
  { name: "Mugler", href: "#" },
  { name: "Mustela", href: "#" },
  // N
  { name: "NARS", href: "#" },
  { name: "Neutrogena", href: "#" },
  { name: "Nina Ricci", href: "#" },
  { name: "Nivea", href: "#" },
  { name: "NUXE", href: "#" },
  // O
  { name: "Olaplex", href: "#" },
  { name: "Old Spice", href: "#" },
  { name: "Oral-B", href: "#" },
  { name: "Origins", href: "#" },
  // P
  { name: "Paco Rabanne", href: "#" },
  { name: "Paula's Choice", href: "#" },
  { name: "Philips", href: "#" },
  { name: "Prada", href: "#" },
  { name: "Proraso", href: "#" },
  // R
  { name: "Rabanne", href: "#" },
  { name: "Ralph Lauren", href: "#" },
  { name: "Revlon", href: "#" },
  { name: "Rimmel", href: "#" },
  // S
  { name: "Salvatore Ferragamo", href: "#" },
  { name: "Sensai", href: "#" },
  { name: "Sisley", href: "#" },
  { name: "Shiseido", href: "#" },
  { name: "Sol de Janeiro", href: "#" },
  // T
  { name: "The Ordinary", href: "#" },
  { name: "Thierry Mugler", href: "#" },
  { name: "Tiffany & Co.", href: "#" },
  { name: "TOM FORD", href: "#" },
  { name: "Tommy Hilfiger", href: "#" },
  // U
  { name: "Ultrasun", href: "#" },
  { name: "Uriage", href: "#" },
  // V
  { name: "Valentino", href: "#" },
  { name: "Vera Wang", href: "#" },
  { name: "Versace", href: "#" },
  { name: "Vichy", href: "#" },
  { name: "Viktor & Rolf", href: "#" },
  // W
  { name: "Weleda", href: "#" },
  { name: "Wella Professionals", href: "#" },
  // Y
  { name: "Yves Saint Laurent", href: "#" },
  // Z
  { name: "Zadig & Voltaire", href: "#" },
];

/** Реда на буквите в горния филтър (Notino стил) */
export const brandLetters: string[] = [
  "0",
  "A",
  "Â",
  "B",
  "C",
  "CH",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

/** Определя в кой „буквен куп" отива дадена марка */
export function brandBucket(name: string): string {
  const first = name[0];
  if (/[0-9]/.test(first)) return "0";
  const upper = first.toUpperCase();
  if (upper === "Â") return "Â";
  if (name.slice(0, 2).toLowerCase() === "ch") return "CH";
  return upper;
}
