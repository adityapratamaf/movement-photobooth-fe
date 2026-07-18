import { Icon } from "@/components/ui/Icon";
import type { FeatureHighlight } from "@/modules/landing-page/types";

interface HeroHighlightProps {
  highlight: FeatureHighlight;
}

export function HeroHighlight({ highlight }: HeroHighlightProps) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <Icon name={highlight.icon} className="h-7 w-7 text-brand-500" />
      <span className="max-w-[8rem] text-xs font-medium leading-snug text-ink">
        {highlight.label}
      </span>
    </div>
  );
}
