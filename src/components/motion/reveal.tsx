"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger index — multiplies the delay. */
  delayIndex?: number;
  as?: "div" | "li" | "span";
};

export function Reveal({ children, className, delayIndex = 0, as = "div" }: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      custom={delayIndex}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}
