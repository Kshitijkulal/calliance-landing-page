"use client";

import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export default function Container({
  children,
  className = "",
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={`w-full ${className}`}
      style={{
        maxWidth: "var(--container-max-width)",
        paddingLeft: "var(--container-padding)",
        paddingRight: "var(--container-padding)",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      {children}
    </Component>
  );
}
