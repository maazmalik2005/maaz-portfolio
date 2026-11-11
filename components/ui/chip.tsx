import type { HTMLAttributes } from "react";

type ChipProps = HTMLAttributes<HTMLSpanElement> & {
  children: React.ReactNode;
};

export function Chip({ className = "", children, ...props }: ChipProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-text-muted ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
