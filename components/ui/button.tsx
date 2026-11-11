import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonProps = {
  variant?: "primary" | "secondary" | "text";
  className?: string;
  children: React.ReactNode;
} & (
  | ButtonHTMLAttributes<HTMLButtonElement>
  | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
);

const variantClasses = {
  primary:
    "bg-accent text-white shadow-[0_8px_24px_rgb(99_102_241_/_0.2)] hover:bg-accent/90",
  secondary:
    "border border-white/15 bg-transparent text-foreground hover:border-accent/60 hover:bg-white/[0.04]",
  text: "text-accent hover:text-white",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-[10px] px-5 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${variantClasses[variant]} ${className}`;

  if ("href" in props) {
    return (
      <a className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
