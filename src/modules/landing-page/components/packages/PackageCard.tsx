import Image from "next/image";
import { RiCheckLine } from "@remixicon/react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { brand } from "@/modules/landing-page/data/dummy";
import type { PackageItem } from "@/modules/landing-page/types";

interface PackageCardProps {
  item: PackageItem;
}

export function PackageCard({ item }: PackageCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-2xl bg-surface p-4 transition-shadow",
        item.isPopular
          ? "shadow-xl ring-1 ring-brand-100"
          : "shadow-md hover:shadow-lg",
      )}
    >
      {item.isPopular ? (
        <Badge className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">Most Popular</Badge>
      ) : null}

      <div className="flex flex-1 flex-col gap-5 sm:flex-row sm:gap-6">
        <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-xl sm:aspect-auto sm:min-h-[22rem] sm:w-[48%] sm:self-stretch">
          <Image
            src={item.image}
            alt={`Suasana paket ${item.name}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 48vw, 22vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col gap-4 py-2 sm:pr-2">
          <div>
            <h3 className="text-xl font-semibold text-ink">{item.name}</h3>
            <p className="mt-1.5 text-2xl font-bold text-brand-500">{item.price}</p>
          </div>

          <ul className="flex flex-col gap-3">
            {item.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2.5 text-[15px] text-ink-muted">
                <RiCheckLine className="h-5 w-5 shrink-0 text-brand-500" aria-hidden />
                {feature}
              </li>
            ))}
          </ul>

          <Button
            href={brand.whatsappUrl}
            variant={item.isPopular ? "filled" : "outline"}
            className="mt-auto w-full"
          >
            Lihat Detail
          </Button>
        </div>
      </div>
    </div>
  );
}
