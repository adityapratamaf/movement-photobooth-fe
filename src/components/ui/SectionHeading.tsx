import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  titleBefore?: string;
  highlight?: string;
  titleAfter?: string;
  breakBeforeHighlight?: boolean;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  titleBefore,
  highlight,
  titleAfter,
  breakBeforeHighlight = false,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <span className="text-sm font-semibold uppercase tracking-widest text-brand-500">
          {eyebrow}
        </span>
      ) : null}

      <h2 className="max-w-2xl text-4xl font-bold leading-tight text-ink sm:text-5xl">
        {titleBefore}
        {breakBeforeHighlight ? <br /> : null}
        {highlight ? <span className="text-brand-500">{highlight}</span> : null}
        {titleAfter}
      </h2>

      {subtitle ? (
        <p className="max-w-xl text-base text-ink-muted lg:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}
