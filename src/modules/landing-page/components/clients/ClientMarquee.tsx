"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import type { ClientLogo } from "@/modules/landing-page/types";

interface ClientMarqueeProps {
  logos: ClientLogo[];
  durationSeconds?: number;
}

export function ClientMarquee({ logos, durationSeconds = 24 }: ClientMarqueeProps) {
  const filled = Array.from({ length: 6 }, () => logos).flat();
  const track = [...filled, ...filled];

  return (
    <div className="overflow-hidden">
      <motion.ul
        aria-hidden
        className="flex w-max items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: durationSeconds, ease: "linear", repeat: Infinity }}
      >
        {track.map((logo, index) => (
          <li key={`${logo.id}-${index}`} className="flex shrink-0 items-center px-8 sm:px-12">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-7 w-auto opacity-70 sm:h-9"
            />
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
