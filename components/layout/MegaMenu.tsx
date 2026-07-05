import Link from "next/link";
import type { MegaMenuColumn } from "@/data/megaMenu";

export function MegaMenu({ columns }: { columns: MegaMenuColumn[] }) {
  return (
    <div className="container-px py-8">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
        {columns.map((column, i) => (
          <div key={i} className="space-y-6">
            {column.map((group, j) => (
              <div key={j}>
                <h3 className="text-sm font-bold text-foreground">{group.title}</h3>
                <ul className="mt-2 space-y-1.5">
                  {group.links.map((link) => (
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
        ))}
      </div>
    </div>
  );
}
