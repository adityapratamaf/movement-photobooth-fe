import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { brand } from "@/modules/landing-page/data/dummy";

interface LogoProps {
  className?: string;
  inverted?: boolean;
}

export function Logo({ className, inverted = false }: LogoProps) {
  return (
    <a href="#beranda" className={cn("inline-flex items-center gap-2", className)}>
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500 text-white">
        <Icon name="camera" className="h-5 w-5" />
      </span>
      <span className="flex flex-col leading-tight">
        <span className={cn("text-lg font-bold", inverted ? "text-white" : "text-ink")}>
          {brand.name}
        </span>
        <span
          className={cn(
            "text-xs uppercase tracking-widest",
            inverted ? "text-white/70" : "text-ink-muted",
          )}
        >
          {brand.suffix}
        </span>
      </span>
    </a>
  );
}
