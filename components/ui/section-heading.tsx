type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <header className={`max-w-3xl ${alignment} ${className}`}>
      {label ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-secondary">
          {label}
        </p>
      ) : null}
      <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-7 text-text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  );
}
