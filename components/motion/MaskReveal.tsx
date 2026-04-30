"use client";

import { m, useReducedMotion } from "motion/react";
import { DURATION, EASE_OUT_QUINT } from "@/lib/motion/config";

type Props = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
};

export function MaskReveal({ children, delay = 0, duration = DURATION.reveal, className }: Props) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <span className={className}>{children}</span>;
  }

  return (
    <span
      className={className}
      style={{ display: "inline-block", overflow: "hidden", paddingBottom: "0.12em" }}
    >
      <m.span
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration, ease: EASE_OUT_QUINT, delay }}
        style={{ display: "inline-block", willChange: "transform" }}
      >
        {children}
      </m.span>
    </span>
  );
}
