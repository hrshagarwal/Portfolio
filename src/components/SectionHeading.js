"use client";

import { motion } from "framer-motion";

/**
 * Shared section heading so numbering and styling stay consistent
 * across every section on the page.
 */
export default function SectionHeading({ number, title, subtitle, align = "left" }) {
  const centered = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-14 ${centered ? "flex flex-col items-center text-center" : ""}`}
    >
      <h2
        className={`font-sans text-3xl md:text-4xl font-bold text-foreground flex items-center gap-3 ${
          centered ? "justify-center" : ""
        }`}
      >
        {number && (
          <span className="font-mono text-xl md:text-2xl text-primary">
            {number}.
          </span>
        )}
        {title}
        {!centered && (
          <span className="h-px bg-gradient-to-r from-border to-transparent flex-grow ml-4 max-w-xs" />
        )}
      </h2>

      {centered && (
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-sage-green rounded-full mt-3" />
      )}

      {subtitle && (
        <p
          className={`text-muted-foreground mt-3 max-w-2xl ${
            centered ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
