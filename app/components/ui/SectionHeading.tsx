"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface SectionHeadingProps {
  children: React.ReactNode;
  as?: HeadingLevel;
  className?: string;
  align?: "left" | "center" | "right";
  subtitle?: string;
  animate?: boolean;
}

const headingStyles: Record<HeadingLevel, React.CSSProperties> = {
  h1: {
    fontSize: "var(--font-size-h1)",
    lineHeight: "var(--line-height-h1)",
    fontWeight: 700,
    letterSpacing: "-0.02em",
    textTransform: "uppercase" as const,
  },
  h2: {
    fontSize: "var(--font-size-h2)",
    lineHeight: "var(--line-height-h2)",
    fontWeight: 700,
    letterSpacing: "-0.02em",
    textTransform: "uppercase" as const,
  },
  h3: {
    fontSize: "var(--font-size-h3)",
    lineHeight: "var(--line-height-h3)",
    fontWeight: 600,
  },
  h4: {
    fontSize: "var(--font-size-h4)",
    lineHeight: "var(--line-height-h4)",
    fontWeight: 700,
  },
  h5: {
    fontSize: "var(--font-size-cta)",
    lineHeight: "var(--line-height-cta)",
    fontWeight: 600,
  },
  h6: {
    fontSize: "var(--font-size-card-body)",
    lineHeight: "var(--line-height-card-body)",
    fontWeight: 600,
  },
};

const alignStyles: Record<string, React.CSSProperties> = {
  left: { textAlign: "left" },
  center: { textAlign: "center" },
  right: { textAlign: "right" },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

const subtitleVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      delay: 0.15,
    },
  },
};

export default function SectionHeading({
  children,
  as: Tag = "h2",
  className = "",
  align = "left",
  subtitle,
  animate = true,
}: SectionHeadingProps) {
  const combinedStyle: React.CSSProperties = {
    fontFamily: "var(--font-bebas-neue), sans-serif",
    ...headingStyles[Tag],
    ...alignStyles[align],
    color: "var(--color-primary-black)",
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: "var(--font-size-body-1)",
    lineHeight: "var(--line-height-body-1)",
    color: "var(--color-light-grey)",
    marginTop: "var(--space-md)",
    ...alignStyles[align],
  };

  if (!animate) {
    return (
      <div className={className}>
        <Tag style={combinedStyle}>{children}</Tag>
        {subtitle && <p style={subtitleStyle}>{subtitle}</p>}
      </div>
    );
  }

  return (
    <div className={className}>
      <motion.div
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <Tag style={combinedStyle}>{children}</Tag>
      </motion.div>
      {subtitle && (
        <motion.p
          style={subtitleStyle}
          variants={subtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
