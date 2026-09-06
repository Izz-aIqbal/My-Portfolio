"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeUp as defaultVariant, viewport } from "@/lib/animations";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  id,
}: AnimatedSectionProps) {
  return (
    <section id={id} className={`relative ${className}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={{
          hidden: { opacity: 0, y: 24 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut", delay },
          },
        }}
      >
        {children}
      </motion.div>
    </section>
  );
}
