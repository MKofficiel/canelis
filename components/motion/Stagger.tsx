"use client";

import { m, useReducedMotion, type HTMLMotionProps } from "motion/react";
import { DURATION, EASE_OUT_QUINT, STAGGER, VIEWPORT } from "@/lib/motion/config";

type GroupProps = HTMLMotionProps<"div"> & {
  stagger?: number;
  delayChildren?: number;
};

/* Même parti pris que FadeUp : pas de `filter: blur()` animé — trop coûteux
   en compositing sur mobile bas de gamme, pour un gain visuel marginal. */
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.reveal, ease: EASE_OUT_QUINT },
  },
};

export function StaggerGroup({
  stagger = STAGGER,
  delayChildren = 0,
  children,
  ...rest
}: GroupProps) {
  const reduced = useReducedMotion();
  const variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduced ? 0 : stagger,
        delayChildren: reduced ? 0 : delayChildren,
      },
    },
  };

  return (
    <m.div
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={variants}
      {...rest}
    >
      {children}
    </m.div>
  );
}

type ItemProps = HTMLMotionProps<"div">;

export function StaggerItem({ children, ...rest }: ItemProps) {
  return (
    <m.div variants={itemVariants} {...rest}>
      {children}
    </m.div>
  );
}
