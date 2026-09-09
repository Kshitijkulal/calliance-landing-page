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

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary-black text-secondary-beige border-none hover:bg-primary-black/90",
  secondary: "bg-transparent text-primary-black border border-primary-black hover:bg-primary-black/5",
  accent: "bg-primary-black text-secondary-beige border-none hover:bg-primary-black/90",
  ghost: "bg-transparent text-primary-black border-none hover:bg-primary-black/5",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-xs sm:text-sm rounded-md",
  md: "px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base rounded-lg",
  lg: "px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg md:text-xl rounded-xl",
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
  const baseClasses = "inline-flex items-center justify-center gap-2 font-medium cursor-pointer transition-colors duration-200 no-underline whitespace-nowrap";
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClasses}
        style={style}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={hoverTransition}
      >
        {icon && <span className="flex items-center justify-center">{icon}</span>}
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={combinedClasses}
      style={style}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={hoverTransition}
      {...props}
    >
      {icon && <span className="flex items-center justify-center">{icon}</span>}
      {children}
    </motion.button>
  );
}
