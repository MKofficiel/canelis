export const EASE_OUT_QUINT = [0.22, 1, 0.36, 1] as const;
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;
export const EASE_OUT = [0.25, 0.46, 0.45, 0.94] as const;

export const DURATION = {
  micro: 0.2,
  short: 0.35,
  reveal: 0.7,
  long: 0.9,
} as const;

export const STAGGER = 0.07;

export const VIEWPORT = { once: true, margin: "-80px 0px -80px 0px" } as const;
