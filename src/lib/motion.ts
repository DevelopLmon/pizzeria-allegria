import type { Variants, Transition } from "framer-motion";

export const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const baseTransition = (duration: number, delay = 0): Transition => ({
  duration,
  delay,
  ease,
});

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: baseTransition(0.6) },
};

export const fadeUpHero: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: baseTransition(0.8) },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: baseTransition(0.7) },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: baseTransition(0.65) },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: baseTransition(0.65) },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: baseTransition(0.55) },
};

export const viewportConfig = { once: true, margin: "-80px" } as const;
