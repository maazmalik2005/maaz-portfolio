import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export function Card({ className = "", children, ...props }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-surface p-6 transition duration-200 hover:-translate-y-0.5 hover:border-accent/40 sm:p-8 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
