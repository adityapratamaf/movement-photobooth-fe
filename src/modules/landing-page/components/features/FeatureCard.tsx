import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import type { Feature } from "@/modules/landing-page/types";

interface FeatureCardProps {
  feature: Feature;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <Card className="flex h-full flex-col items-center gap-3 p-6 text-center">
      <IconBadge name={feature.icon} className="h-14 w-14" iconClassName="h-7 w-7" />
      <h3 className="text-base font-semibold text-ink">{feature.title}</h3>
      <p className="text-sm text-ink-muted">{feature.description}</p>
    </Card>
  );
}
