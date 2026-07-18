import Image from "next/image";
import { RiCheckLine } from "@remixicon/react";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { brand } from "@/modules/landing-page/data/dummy";
import type { PackageItem } from "@/modules/landing-page/types";

interface PackageCardProps {
  item: PackageItem;
}

export function PackageCard({ item }: PackageCardProps) {
  return (
    <Card
      className={cn(
        "relative flex h-full flex-col gap-5 p-5",
        item.isPopular && "border-brand-300 shadow-lg ring-1 ring-brand-200",
      )}
    >
      {item.isPopular ? (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Paling Populer</Badge>
      ) : null}

      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
        <Image
          src={item.image}
          alt={`Suasana paket ${item.name}`}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover"
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-ink">{item.name}</h3>
        <p className="mt-1 text-2xl font-bold text-brand-500">{item.price}</p>
      </div>

      <ul className="flex flex-col gap-3">
        {item.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-ink-muted">
            <RiCheckLine className="h-4 w-4 shrink-0 text-brand-500" aria-hidden />
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
    </Card>
  );
}
