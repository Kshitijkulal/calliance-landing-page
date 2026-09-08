"use client";

import React from "react";
import { motion, type Transition } from "framer-motion";

type ButtonVariant = "primary" | "secondary" | "accent" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  href?: string;
  className?: string;
  icon?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    backgroundColor: "var(--color-primary-black)",
    color: "var(--color-white)",
    border: "none",
  },
  secondary: {
    backgroundColor: "transparent",
    color: "var(--color-primary-black)",
    border: "1px solid var(--color-primary-black)",
  },
  accent: {
    backgroundColor: "var(--color-accent)",
    color: "var(--color-white)",
    border: "none",
  },
  ghost: {
    backgroundColor: "transparent",
    color: "var(--color-primary-black)",
    border: "none",
  },
};

const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
  sm: {
    padding: "var(--space-sm) var(--space-md)",
    fontSize: "var(--font-size-small)",
    borderRadius: "var(--radius-md)",
  },
  md: {
    padding: "var(--space-md) var(--space-lg)",
    fontSize: "var(--font-size-nav)",
    borderRadius: "var(--radius-lg)",
  },
  lg: {
    padding: "var(--space-md) var(--space-xl)",
    fontSize: "var(--font-size-cta)",
    borderRadius: "var(--radius-lg)",
  },
};

const hoverTransition: Transition = {
  type: "spring" as const,
  stiffness: 400,
  damping: 17,
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  className = "",
  icon,
  style,
  ...props
}: ButtonProps) {
  const combinedStyle: React.CSSProperties = {
    ...variantStyles[variant],
    ...sizeStyles[size],
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-sm)",
    fontWeight: 500,
    cursor: "pointer",
    transition: "var(--transition-base)",
    textDecoration: "none",
    whiteSpace: "nowrap" as const,
    ...style,
  };

  if (href) {
    return (
      <motion.a
        href={href}
        style={combinedStyle}
        className={className}
        whileHover={{ scale: 1.03, y: -1 }}
        whileTap={{ scale: 0.97 }}
        transition={hoverTransition}
      >
        {icon && <span>{icon}</span>}
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      style={combinedStyle}
      className={className}
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.97 }}
      transition={hoverTransition}
    >
      {icon && <span>{icon}</span>}
      {children}
    </motion.button>
  );
}
