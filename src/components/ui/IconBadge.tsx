import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/modules/landing-page/types";

interface IconBadgeProps {
  name: IconName;
  className?: string;
  iconClassName?: string;
}

export function IconBadge({ name, className, iconClassName }: IconBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-500",
        className,
      )}
    >
      <Icon name={name} className={cn("h-6 w-6", iconClassName)} />
    </span>
  );
}
