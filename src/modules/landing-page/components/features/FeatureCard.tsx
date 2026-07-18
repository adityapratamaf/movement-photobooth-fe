import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import type { Feature } from "@/modules/landing-page/types";

interface FeatureCardProps {
  feature: Feature;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <Card className="flex flex-col gap-4">
      <IconBadge name={feature.icon} />
      <h3 className="text-lg font-semibold text-ink">{feature.title}</h3>
      <p className="text-sm text-ink-muted">{feature.description}</p>
    </Card>
  );
}
