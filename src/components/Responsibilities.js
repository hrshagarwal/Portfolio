"use client";

import { motion } from "framer-motion";
import { Users, Briefcase, Code } from "lucide-react";
import SectionHeading from "./SectionHeading";

const roles = [
  {
    title: "Portal Head",
    org: "Training & Placement Cell (Career & Development Services), IIT Jammu",
    period: "Apr 2026 – Present",
    icon: Briefcase,
    tone: "text-primary",
    desc: "Leading development and maintenance of the placement portal serving the institute's student body.",
  },
  {
    title: "Sponsorship & Outreach Head",
    org: "Coding Club, IIT Jammu",
    period: "Jul 2025 – Jun 2026",
    icon: Code,
    tone: "text-sage-green",
    desc: "Led sponsorship drives and outreach initiatives, building partnerships to fund club events and hackathons.",
  },
  {
    title: "Competitive Programming Mentor",
    org: "Coding Club, IIT Jammu",
    period: "Jul 2025 – Jun 2026",
    icon: Users,
    tone: "text-terracotta",
    desc: "Mentoring juniors in algorithms, data structures, and contest strategy through sessions and problem walkthroughs.",
  },
];

export default function Responsibilities() {
  return (
    <section id="responsibilities" className="py-24 px-6 md:px-20 lg:px-32">
      <SectionHeading number="07" title="Positions of Responsibility" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roles.map((role, index) => {
          const Icon = role.icon;
          return (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.09, duration: 0.45 }}
              whileHover={{ y: -6 }}
              className="glass-panel p-6 rounded-xl group flex flex-col"
            >
              <div className="mb-4 p-3 bg-secondary/60 rounded-xl w-fit border border-border group-hover:border-primary/30 transition-colors">
                <Icon
                  className={`w-5 h-5 ${role.tone} group-hover:scale-110 transition-transform`}
                />
              </div>

              <h3 className="font-bold text-lg text-foreground mb-1.5 leading-snug">
                {role.title}
              </h3>
              <p className="text-xs font-mono text-primary mb-2 leading-relaxed">
                {role.org}
              </p>
              <span className="text-[11px] font-mono text-muted-foreground bg-secondary px-2 py-0.5 rounded w-fit mb-3">
                {role.period}
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed mt-auto">
                {role.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
