"use client";

import { m, useReducedMotion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";
import { DURATION, EASE_OUT_QUINT, VIEWPORT } from "@/lib/motion/config";

type Props = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
  blur?: boolean;
  as?: "div" | "section" | "article" | "span";
};

export function FadeUp({
  delay = 0,
  y = 28,
  blur = true,
  as = "div",
  children,
  ...rest
}: Props) {
  const reduced = useReducedMotion();
  const Comp = m[as];

  if (reduced) {
    return <Comp {...rest}>{children}</Comp>;
  }

  return (
    <Comp
      initial={{ opacity: 0, y, filter: blur ? "blur(6px)" : "blur(0px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={VIEWPORT}
      transition={{ duration: DURATION.reveal, ease: EASE_OUT_QUINT, delay }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
