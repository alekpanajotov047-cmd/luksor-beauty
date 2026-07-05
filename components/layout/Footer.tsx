import Link from "next/link";
import { footer, site } from "@/data/siteContent";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-secondary/55">
      <div className="container-px grid grid-cols-2 gap-8 py-14 md:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <span className="text-2xl font-extrabold lowercase tracking-tight text-foreground">
            luksor<span className="text-pink">.</span>
          </span>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {site.description}
          </p>
        </div>

        {footer.columns.map((column) => (
          <div key={column.title}>
            <h3 className="text-sm font-semibold text-foreground">{column.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-pink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Separator />

      <div className="container-px flex flex-col items-center justify-between gap-4 py-5 sm:flex-row">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
          <span className="mr-1 text-xs text-muted-foreground">Сигурно плащане</span>
          {["VISA", "Mastercard", "PayPal", "Apple Pay"].map((method) => (
            <span
              key={method}
              className="rounded-md border border-border bg-background px-2.5 py-1 text-[10px] font-semibold text-muted-foreground shadow-sm"
            >
              {method}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-5">
          {footer.social.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              className="text-xs font-semibold text-muted-foreground transition-colors hover:text-pink"
            >
              {social.label}
            </Link>
          ))}
        </div>
      </div>

      <Separator />

      <div className="container-px py-5">
        <p className="text-xs text-muted-foreground">{footer.legal}</p>
      </div>
    </footer>
  );
}
