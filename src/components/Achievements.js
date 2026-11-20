"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const receipts = [
  {
    big: "WINNER",
    title: "Smart India Hackathon 2025",
    detail: "National level · Ministry of Jal Shakti problem statement",
    year: "2025",
    c: "amber",
  },
  {
    big: "500+",
    title: "DSA problems solved",
    detail: "400+ of them on LeetCode",
    year: "2026",
    c: "lime",
  },
  {
    big: "#1",
    title: "Department Rank",
    detail: "Civil Engineering, IIT Jammu",
    year: "2024 – now",
    c: "teal",
  },
  {
    big: "×4",
    title: "Academic Excellence Award",
    detail: "4 semesters in a row",
    year: "2024 – now",
    c: "pink",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-5 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="05" title="the receipts" note="proof, not vibes" color="pink" rotate={-2} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {receipts.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ rotate: i % 2 ? 1.5 : -1.5 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 240, damping: 18, delay: i * 0.06 }}
              className={`brut p-6 md:p-7 flex items-center gap-6 ${i === 0 ? "sm:col-span-2 lg:col-span-3" : ""}`}
              style={{ "--shadow": `var(--${r.c})` }}
            >
              <p
                className={`font-display font-extrabold leading-none shrink-0 ${
                  i === 0 ? "text-6xl md:text-8xl" : "text-5xl md:text-6xl"
                }`}
                style={{ color: `var(--${r.c})` }}
              >
                {r.big}
              </p>
              <div className="min-w-0">
                <h3 className="font-display font-bold text-xl md:text-2xl text-paper">{r.title}</h3>
                <p className="text-paper/70 text-sm mt-1">{r.detail}</p>
                <p className="font-mono text-xs text-muted-foreground mt-2">{r.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
