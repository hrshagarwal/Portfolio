"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const bullets = [
  "Taking our Smart India Hackathon 2025-winning prototype to production as backend developer, for the Board's 195 employees. Wrote the SRS with Ministry stakeholders.",
  "REST APIs in Node.js + Express.js over PostgreSQL and MongoDB, pulling records from eOffice (file movement), AEBAS (biometric attendance) and PFMS (finance).",
  "A KPI scoring engine with separate metrics for 4 officer tracks (Administrative, Technical, Field, Finance), replacing manual annual appraisals.",
  "Single sign-on through e-Pramaan/eOffice OAuth, JWT sessions, and RBAC that scopes data by an officer's position across 6+ role levels.",
];

const stack = ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "OAuth 2.0", "JWT", "RBAC"];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-5 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="02" title="right now" note="← my day job" color="teal" rotate={3} />

        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 180, damping: 22 }}
          className="brut shadow-teal p-6 md:p-9"
        >
          <div className="flex flex-wrap items-start justify-between gap-4 mb-7">
            <div>
              <h3 className="font-display font-extrabold text-3xl md:text-4xl text-paper">
                Software Developer Intern
              </h3>
              <p className="font-mono text-teal mt-1">
                Brahmaputra Board · Ministry of Jal Shakti (Govt. of India)
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className="sticker" style={{ "--c": "var(--teal)", "--r": "2deg" }}>
                May 2026 → now
              </span>
              <span className="font-mono text-xs text-muted-foreground">hybrid · backend</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_260px] gap-9 items-start">
            <ul className="space-y-4">
              {bullets.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * i }}
                  className="flex gap-3 text-paper/85 leading-relaxed"
                >
                  <span className="font-mono text-teal shrink-0">0{i + 1}</span>
                  <span>{b}</span>
                </motion.li>
              ))}
            </ul>

            <figure className="relative bg-paper p-2.5 pb-10 rotate-2 hover:rotate-0 transition-transform shadow-[6px_6px_0_var(--amber)]">
              <span className="tape -top-3 left-6 -rotate-6" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/certificate_trophy.jpg"
                alt="Smart India Hackathon 2025 certificate and trophy"
                loading="lazy"
                className="w-full h-auto"
              />
              <figcaption className="absolute bottom-2 left-0 right-0 text-center font-hand text-xl text-ink">
                SIH 2025 ✓
              </figcaption>
            </figure>
          </div>

          <div className="flex flex-wrap gap-2 mt-8">
            {stack.map((s) => (
              <span key={s} className="tag">
                {s}
              </span>
            ))}
          </div>
        </motion.article>
      </div>
    </section>
  );
}
