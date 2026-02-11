"use client";

import { motion } from "motion/react";

interface TextAnimateProps {
  children: string;
  className?: string;
  delay?: number;
}

export function TextAnimate({
  children,
  className,
  delay = 0,
}: TextAnimateProps) {
  const words = children.split(" ");

  return (
    <motion.span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.4,
            delay: delay + i * 0.1,
            ease: "easeOut",
          }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
