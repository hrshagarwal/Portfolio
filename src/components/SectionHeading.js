"use client";

import { motion } from "framer-motion";

/**
 * Zine-style section heading: a numbered sticker, a big chunky title,
 * and an optional handwritten note next to it.
 */
export default function SectionHeading({ number, title, note, color = "lime", rotate = -3 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      className="mb-12 md:mb-14"
    >
      {number && (
        <span
          className="sticker mb-4"
          style={{ "--c": `var(--${color})`, "--r": `${rotate}deg` }}
        >
          #{number}
        </span>
      )}
      <div className="flex flex-wrap items-end gap-x-5 gap-y-1">
        <h2 className="font-display font-extrabold text-5xl md:text-7xl leading-[0.95] text-paper">
          {title}
        </h2>
        {note && (
          <p
            className="font-hand text-2xl md:text-3xl pb-1"
            style={{ color: `var(--${color})` }}
          >
            {note}
          </p>
        )}
      </div>
    </motion.div>
  );
}
