import { Icon } from "@/components/ui/Icon";
import type { FeatureHighlight } from "@/modules/landing-page/types";

interface HeroHighlightProps {
  highlight: FeatureHighlight;
}

export function HeroHighlight({ highlight }: HeroHighlightProps) {
  return (
    <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-500">
        <Icon name={highlight.icon} className="h-5 w-5" />
      </span>
      <span className="text-sm font-medium text-ink">{highlight.label}</span>
    </div>
  );
}
