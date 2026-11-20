"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const schools = [
  {
    what: "B.Tech Civil Engineering + Minor in CSE",
    where: "IIT Jammu",
    when: "2024 – 2028",
    score: "CGPA 9.13",
    notes: ["Department Rank 1", "Academic Excellence Award, 4 semesters in a row"],
    c: "lime",
  },
  {
    what: "Class 12 (CBSE)",
    where: "S.G. International School",
    when: "2024",
    score: "92.2%",
    notes: ["Rank 1 in PCM", "Cleared JEE Main & Advanced in first attempt"],
    c: "teal",
  },
  {
    what: "Class 10 (CBSE)",
    where: "Emmanuel Mission Senior Secondary School",
    when: "2022",
    score: "97.6%",
    notes: ["School Rank 1"],
    c: "pink",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-5 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="06" title="school stuff" note="the boring-but-important bit" color="violet" rotate={2} />

        <div className="grid md:grid-cols-3 gap-7">
          {schools.map((s, i) => (
            <motion.div
              key={s.what}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: [-1.5, 1, -1][i] }}
              whileHover={{ rotate: 0, y: -4 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 200, damping: 20, delay: i * 0.07 }}
              className="brut p-6 flex flex-col"
              style={{ "--shadow": `var(--${s.c})` }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-muted-foreground">{s.when}</span>
                <span className="sticker" style={{ "--c": `var(--${s.c})`, "--r": "3deg" }}>
                  {s.score}
                </span>
              </div>
              <h3 className="font-display font-extrabold text-2xl text-paper leading-tight">{s.what}</h3>
              <p className="font-mono text-sm mt-1" style={{ color: `var(--${s.c})` }}>
                {s.where}
              </p>
              <ul className="mt-4 space-y-1.5 text-sm text-paper/80">
                {s.notes.map((n) => (
                  <li key={n}>→ {n}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
