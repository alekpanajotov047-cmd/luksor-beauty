import { Lock, RotateCcw, ShieldCheck, Truck } from "lucide-react";
import { perks } from "@/data/siteContent";

const icons = [Truck, ShieldCheck, RotateCcw, Lock];

export function Perks() {
  return (
    <section className="container-px mt-8">
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {perks.map((perk, index) => {
          const Icon = icons[index % icons.length];
          return (
            <div key={perk.title} className="flex items-start gap-3 bg-background p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink-soft text-pink">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">{perk.title}</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">{perk.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
