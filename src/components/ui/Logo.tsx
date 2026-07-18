import Image from "next/image";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <a
      href="#beranda"
      aria-label="Movement Photobooth — Beranda"
      className={cn("inline-flex items-center", className)}
    >
      <Image
        src="/images/general/logo.png"
        alt="Movement Photobooth"
        width={175}
        height={48}
        priority
        className="h-9 w-auto sm:h-10"
      />
    </a>
  );
}
