"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const roles = [
  {
    title: "Portal Head",
    org: "Training & Placement Cell (CDS), IIT Jammu",
    period: "Apr 2026 – now",
    desc: "Building and looking after the placement portal for the T&P cell.",
    c: "lime",
  },
  {
    title: "Sponsorship & Outreach Head",
    org: "Coding Club, IIT Jammu",
    period: "Jul 2025 – Jun 2026",
    desc: "Brought in sponsors and partners to fund club events and hackathons.",
    c: "teal",
  },
  {
    title: "CP Mentor",
    org: "Coding Club, IIT Jammu",
    period: "Jul 2025 – Jun 2026",
    desc: "Taught juniors DSA and contest strategy through sessions and problem walkthroughs.",
    c: "pink",
  },
];

export default function Responsibilities() {
  return (
    <section id="responsibilities" className="py-24 px-5 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="07" title="side quests" note="campus roles" color="teal" rotate={3} />

        <div className="grid md:grid-cols-3 gap-7">
          {roles.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 220, damping: 22, delay: i * 0.07 }}
              className="brut brut-hover p-6"
              style={{ "--shadow": `var(--${r.c})` }}
            >
              <span className="font-mono text-xs text-muted-foreground">{r.period}</span>
              <h3 className="font-display font-extrabold text-2xl text-paper mt-2">{r.title}</h3>
              <p className="font-mono text-sm mt-1" style={{ color: `var(--${r.c})` }}>
                {r.org}
              </p>
              <p className="text-paper/80 text-sm mt-4 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
