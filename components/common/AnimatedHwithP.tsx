"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  heading: React.ReactNode;
  paragraphs: React.ReactNode[];
  headingClassName?: string;
  paragraphClassName?: string;
};

export default function AnimatedHeadingWithParagraphs({
  heading,
  paragraphs,
  headingClassName = "text-xl md:text-4xl font-bold text-foreground mb-6",
  paragraphClassName = "text-muted-foreground leading-relaxed mb-6",
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "0px 0px -200px 0px",
  });

  return (
    <div ref={ref}>
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className={headingClassName}
      >
        {heading}
      </motion.h2>

      {/* Paragraphs */}
      <motion.div
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
      >
        {paragraphs.map((text, i) => (
          <motion.p
            key={i}
            variants={{
              hidden: { filter: "blur(6px)", opacity: 0.6 },
              show: {
                filter: "blur(0px)",
                opacity: 1,
                transition: { duration: 0.45, ease: "easeOut" },
              },
            }}
            className={paragraphClassName}
          >
            {text}
          </motion.p>
        ))}
      </motion.div>
    </div>
  );
}
