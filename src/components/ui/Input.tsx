import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "w-full rounded-full border border-brand-100 bg-surface px-5 py-3 text-sm text-ink placeholder:text-ink-muted focus-visible:border-brand-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-200",
        className,
      )}
      {...props}
    />
  );
}
