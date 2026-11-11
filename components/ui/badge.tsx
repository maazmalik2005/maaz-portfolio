import type { HTMLAttributes } from "react";

type BadgeVariant = "default" | "accent" | "cyan" | "success" | "muted";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
  children: React.ReactNode;
};

const variantClasses: Record<BadgeVariant, string> = {
  default: "border-white/10 bg-white/[0.05] text-text-muted",
  accent: "border-accent/30 bg-accent/10 text-indigo-200",
  cyan: "border-accent-secondary/30 bg-accent-secondary/10 text-cyan-200",
  success: "border-success/30 bg-success/10 text-green-200",
  muted: "border-white/10 bg-white/[0.03] text-text-muted",
};

export function Badge({
  variant = "default",
  className = "",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
