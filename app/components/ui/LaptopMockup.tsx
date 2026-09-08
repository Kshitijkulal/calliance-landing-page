"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface LaptopMockupProps {
  imageSrc: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export default function LaptopMockup({
  imageSrc,
  alt,
  className = "",
  priority = false,
}: LaptopMockupProps) {
  return (
    <motion.div
      className={className}
      style={{
        perspective: "1200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      initial={{ opacity: 0, y: 50, rotateX: 25 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 15 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.9,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {/* Laptop body */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "900px",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          borderRadius: "var(--radius-xl)",
        }}
      >
        {/* Screen bezel */}
        <div
          style={{
            backgroundColor: "var(--color-primary-black)",
            borderRadius: "var(--radius-xl) var(--radius-xl) 0 0",
            padding: "var(--space-sm) var(--space-sm) 0 var(--space-sm)",
          }}
        >
          {/* Top bar with dots */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-xs)",
              padding: "var(--space-sm) var(--space-md)",
            }}
          >
            <span
              style={{
                width: "var(--space-sm)",
                height: "var(--space-sm)",
                borderRadius: "var(--radius-full)",
                backgroundColor: "var(--color-light-grey)",
                opacity: 0.5,
              }}
            />
            <span
              style={{
                width: "var(--space-sm)",
                height: "var(--space-sm)",
                borderRadius: "var(--radius-full)",
                backgroundColor: "var(--color-light-grey)",
                opacity: 0.5,
              }}
            />
            <span
              style={{
                width: "var(--space-sm)",
                height: "var(--space-sm)",
                borderRadius: "var(--radius-full)",
                backgroundColor: "var(--color-light-grey)",
                opacity: 0.5,
              }}
            />
          </div>
          {/* Screen content */}
          <div
            style={{
              backgroundColor: "var(--color-white)",
              borderRadius: "var(--radius-sm) var(--radius-sm) 0 0",
              overflow: "hidden",
              position: "relative",
              aspectRatio: "16/10",
            }}
          >
            <Image
              src={imageSrc}
              alt={alt}
              fill
              style={{ objectFit: "cover", objectPosition: "top left" }}
              priority={priority}
            />
          </div>
        </div>
        {/* Laptop base / hinge */}
        <div
          style={{
            height: "var(--space-lg)",
            background: `linear-gradient(to bottom, #F4F4F4, #B0B0B0)`,
            borderRadius: "0 0 var(--radius-xl) var(--radius-xl)",
            position: "relative",
            borderTop: "1px solid #777",
          }}
        >
          {/* Notch */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "15%",
              height: "var(--space-xs)",
              backgroundColor: "#999",
              borderRadius: "0 0 var(--radius-sm) var(--radius-sm)",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
