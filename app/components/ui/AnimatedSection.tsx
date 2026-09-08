"use client";

import React, { useRef } from "react";
import { motion, useInView, type Variants, type Transition } from "framer-motion";

type AnimationVariant =
  | "fadeUp"
  | "fadeDown"
  | "fadeLeft"
  | "fadeRight"
  | "fadeIn"
  | "scaleUp"
  | "staggerChildren";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  style?: React.CSSProperties;
  once?: boolean;
  margin?: string;
}

const easeDefault: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const animationVariants: Record<AnimationVariant, { hidden: Record<string, number>; visible: Record<string, number> }> = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  staggerChildren: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

export default function AnimatedSection({
  children,
  className = "",
  variant = "fadeUp",
  delay = 0,
  duration = 0.7,
  style,
  once = true,
  margin = "-80px",
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: margin as `${number}px` });

  const selected = animationVariants[variant];

  const variants: Variants = {
    hidden: selected.hidden,
    visible: {
      ...selected.visible,
      transition: {
        duration,
        delay,
        ease: easeDefault,
        ...(variant === "staggerChildren"
          ? { staggerChildren: 0.1, delayChildren: delay }
          : {}),
      } as Transition,
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

/* Stagger child — wrap individual items inside a staggerChildren parent */
export function AnimatedChild({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const childVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: easeDefault,
      } as Transition,
    },
  };

  return (
    <motion.div className={className} style={style} variants={childVariants}>
      {children}
    </motion.div>
  );
}
