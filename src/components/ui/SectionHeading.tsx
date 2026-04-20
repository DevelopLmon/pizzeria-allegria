import { cn } from "./cn";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "font-body text-sm font-semibold tracking-[0.15em] uppercase",
            light ? "text-cream-muted" : "text-olive"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-display font-bold leading-tight",
          "text-[clamp(2rem,4vw,3rem)]",
          light ? "text-cream-warm" : "text-brown"
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "w-10 h-[3px] rounded-full",
          light ? "bg-terracotta-light" : "bg-terracotta",
          align === "center" && "mx-auto"
        )}
      />
      {subtitle && (
        <p
          className={cn(
            "font-body text-base leading-relaxed mt-1",
            light ? "text-cream/80" : "text-brown-mid",
            align === "center" && "max-w-xl"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
