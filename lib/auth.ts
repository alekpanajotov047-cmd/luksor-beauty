// ────────────────────────────────────────────────────────────────
//  Демо auth: пази акаунта в localStorage (без бекенд).
//  За реален проект: замени с NextAuth / собствено API.
// ────────────────────────────────────────────────────────────────

export type Account = {
  name: string;
  email: string;
  createdAt: string;
};

const KEY = "luksor_account";

export function saveAccount(a: Account) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(a));
}

export function getAccount(): Account | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as Account;
  } catch {
    return null;
  }
}

export function clearAccount() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(KEY);
}
