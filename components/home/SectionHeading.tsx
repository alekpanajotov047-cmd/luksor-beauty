import Link from "next/link";

type Props = {
  eyebrow?: string;
  title: string;
  link?: { label: string; href: string };
};

export function SectionHeading({ eyebrow, title, link }: Props) {
  return (
    <div className="flex items-end justify-between gap-4 border-b border-border pb-3">
      <div>
        {eyebrow && (
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-pink">{eyebrow}</span>
        )}
        <h2 className="mt-0.5 text-2xl font-extrabold text-foreground sm:text-3xl">{title}</h2>
      </div>
      {link && (
        <Link
          href={link.href}
          className="shrink-0 text-sm font-semibold text-pink underline-offset-4 transition-colors hover:underline"
        >
          {link.label} →
        </Link>
      )}
    </div>
  );
}
