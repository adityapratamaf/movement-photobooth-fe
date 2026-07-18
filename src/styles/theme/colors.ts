/**
 * Movement Photobooth — Forest Green + Lime Accent
 *
 * Single source of truth for the brand palette. These values mirror the
 * design tokens declared in `src/app/globals.css` (@theme). Components must
 * consume the semantic Tailwind tokens (e.g. `bg-brand-500`, `text-ink`,
 * `border-brand-100`) rather than raw hex values.
 */
export const colors = {
  primary: "#3B7D2A",
  primaryHover: "#2F6821",
  secondary: "#5E9F45",
  accent: "#B8E36B",
  background: "#FAFAFA",
  surface: "#FFFFFF",
  text: "#0F172A",
  textMuted: "#64748B",
  border: "#E5E7EB",
  success: "#22C55E",
  warning: "#F59E0B",
  error: "#EF4444",
} as const;

export type ColorToken = keyof typeof colors;
