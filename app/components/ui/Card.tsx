"use client";

import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  variant?: "default" | "outlined" | "filled";
  padding?: "sm" | "md" | "lg";
}

const variantStyles: Record<string, React.CSSProperties> = {
  default: {
    backgroundColor: "var(--color-secondary-beige)",
    border: "1px solid var(--color-off-white)",
    boxShadow: "var(--shadow-card)",
  },
  outlined: {
    backgroundColor: "transparent",
    border: "1px solid var(--color-off-white)",
  },
  filled: {
    backgroundColor: "var(--color-primary-beige)",
    border: "1px solid var(--color-off-white)",
  },
};

const paddingStyles: Record<string, React.CSSProperties> = {
  sm: { padding: "var(--space-md)" },
  md: { padding: "var(--space-lg)" },
  lg: { padding: "var(--space-xl)" },
};

export default function Card({
  children,
  className = "",
  hoverable = true,
  variant = "default",
  padding = "md",
}: CardProps) {
  const combinedStyle: React.CSSProperties = {
    ...variantStyles[variant],
    ...paddingStyles[padding],
    borderRadius: "var(--radius-xl)",
    transition: "var(--transition-base)",
    overflow: "hidden",
  };

  if (hoverable) {
    return (
      <motion.div
        style={combinedStyle}
        className={className}
        whileHover={{
          y: -4,
          boxShadow: "var(--shadow-card-hover)",
          transition: { duration: 0.25 },
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div style={combinedStyle} className={className}>
      {children}
    </div>
  );
}
