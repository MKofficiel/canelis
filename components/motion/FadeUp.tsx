"use client";

import { m, useReducedMotion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";
import { DURATION, EASE_OUT_QUINT, VIEWPORT } from "@/lib/motion/config";

/* Volontairement limité à opacity + translate : animer `filter: blur()`
   force la recomposition d'une couche à chaque frame, ce qui saccade le
   scroll sur les Android d'entrée de gamme du public cible. */
type Props = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
  as?: "div" | "section" | "article" | "span";
};

export function FadeUp({
  delay = 0,
  y = 28,
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
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: DURATION.reveal, ease: EASE_OUT_QUINT, delay }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
