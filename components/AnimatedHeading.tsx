"use client";

import { motion } from "framer-motion";

type AnimatedHeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
};

export default function AnimatedHeading({
  as = "h2",
  children,
  className = "",
}: AnimatedHeadingProps) {
  const MotionTag = motion[as];

  return (
    <MotionTag
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      viewport={{ once: false, margin: "0px 0px -200px 0px" }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
