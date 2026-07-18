import { iconMap } from "@/modules/landing-page/utils/iconMap";
import type { IconName } from "@/modules/landing-page/types";

interface IconProps {
  name: IconName;
  className?: string;
  "aria-hidden"?: boolean;
}

export function Icon({ name, className, "aria-hidden": ariaHidden = true }: IconProps) {
  const RemixIcon = iconMap[name];

  return (
    <RemixIcon
      className={className}
      aria-hidden={ariaHidden}
    />
  );
}
