import { Icon } from "@/components/ui/Icon";
import type { FeatureHighlight } from "@/modules/landing-page/types";

interface HeroHighlightProps {
  highlight: FeatureHighlight;
}

export function HeroHighlight({ highlight }: HeroHighlightProps) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand-100 text-brand-500">
        <Icon name={highlight.icon} className="h-6 w-6" />
      </span>
      <span className="max-w-[8rem] text-xs font-medium leading-snug text-ink">
        {highlight.label}
      </span>
    </div>
  );
}
