"use client";

import { motion } from "framer-motion";
import { cn } from "./cn";

type ButtonVariant = "primary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-base",
  lg: "px-9 py-4 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-body font-medium tracking-wide rounded-sm transition-all duration-200 cursor-pointer select-none";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-terracotta text-cream-warm border border-terracotta hover:bg-terracotta-dark hover:border-terracotta-dark active:scale-[0.98]",
    ghost:
      "bg-transparent text-terracotta border border-terracotta hover:bg-terracotta/10 active:scale-[0.98]",
  };

  const classes = cn(base, variants[variant], sizeClasses[size], className);

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileTap={{ scale: 0.97 }}
        whileHover={{ y: -1 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(classes, disabled && "opacity-60 cursor-not-allowed")}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      whileHover={{ y: disabled ? 0 : -1 }}
    >
      {children}
    </motion.button>
  );
}
