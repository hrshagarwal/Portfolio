"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

const bullets = [
  "Taking our Smart India Hackathon 2025-winning prototype to production as backend developer of a performance management system for the Board's 195 employees; drafted the SRS with Ministry stakeholders.",
  "Building REST APIs in Node.js and Express.js over PostgreSQL and MongoDB that ingest records from government platforms: eOffice (file movement), AEBAS (biometric attendance) and PFMS (finance).",
  "Designed a KPI scoring engine with separate metrics for four officer tracks (Administrative, Technical, Field, Finance) that scores officers from these system records instead of manual annual appraisals.",
  "Implementing single sign-on through e-Pramaan/eOffice OAuth, with JWT sessions and hierarchy-aware RBAC that scopes data access by an officer's position across 6+ role levels.",
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-20 lg:px-32">
      <SectionHeading number="03" title="Experience" />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="glass-panel rounded-2xl overflow-hidden"
      >
        {/* Accent rail */}
        <div className="h-1 w-full bg-gradient-to-r from-primary via-accent-indigo-light to-sage-green" />

        <div className="p-7 md:p-9">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-secondary/60 border border-border flex-shrink-0">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground leading-snug">
                  Software Developer Intern
                </h3>
                <p className="text-primary font-medium text-sm mt-1">
                  Brahmaputra Board, Ministry of Jal Shakti (Govt. of India)
                </p>
                <p className="text-muted-foreground text-xs mt-1 font-mono">
                  Backend Developer · Hybrid
                </p>
              </div>
            </div>

            <span className="font-mono text-xs text-muted-foreground bg-secondary px-3 py-1.5 rounded whitespace-nowrap self-start">
              May 2026 — Present
            </span>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <ul className="space-y-3.5 text-sm text-muted-foreground flex-1 leading-relaxed">
              {bullets.map((bullet, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>{bullet}</span>
                </motion.li>
              ))}
            </ul>

            {/* Certificate / trophy */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="lg:w-64 w-full flex-shrink-0 rounded-xl overflow-hidden border border-border shadow-lg group"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/certificate_trophy.jpg"
                alt="Smart India Hackathon certificate and trophy"
                loading="lazy"
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
