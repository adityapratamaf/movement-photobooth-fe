import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import type { Feature } from "@/modules/landing-page/types";

interface FeatureCardProps {
  feature: Feature;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <Card className="flex h-full flex-col items-center gap-4 p-7 text-center">
      <IconBadge name={feature.icon} className="h-16 w-16" iconClassName="h-8 w-8" />
      <h3 className="text-lg font-semibold text-ink">{feature.title}</h3>
      <p className="text-[15px] text-ink-muted">{feature.description}</p>
    </Card>
  );
}
