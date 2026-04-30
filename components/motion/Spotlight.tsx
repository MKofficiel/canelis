"use client";

import { useRef, type PointerEvent, type CSSProperties, type ReactNode } from "react";
import { useReducedMotion } from "motion/react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function Spotlight({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  function onMove(e: PointerEvent<HTMLDivElement>) {
    if (reduced || !ref.current) return;
    if (e.pointerType !== "mouse") return; // skip touch/pen
    const r = ref.current.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    ref.current.style.setProperty("--spot-x", `${x}%`);
    ref.current.style.setProperty("--spot-y", `${y}%`);
    ref.current.style.setProperty("--spot-opacity", "1");
  }

  function onLeave() {
    ref.current?.style.setProperty("--spot-opacity", "0");
  }

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={className}
      style={
        {
          position: "relative",
          "--spot-x": "50%",
          "--spot-y": "0%",
          "--spot-opacity": "0",
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
