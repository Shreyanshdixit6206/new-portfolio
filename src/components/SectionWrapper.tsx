"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  noBorder?: boolean;
}

export function SectionWrapper({ children, id, className = "", noBorder = false }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 mx-auto max-w-[1400px] ${
        noBorder ? "" : "border-t border-[#222]"
      } ${className}`}
    >
      {children}
    </motion.section>
  );
}
