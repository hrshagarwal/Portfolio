"use client";

import { motion } from "framer-motion";
import { Trophy, Code2, Award, Medal } from "lucide-react";
import SectionHeading from "./SectionHeading";

const achievements = [
  {
    icon: Trophy,
    tone: "text-gold",
    title: "Winner, Smart India Hackathon (SIH)",
    detail: "National Level — Ministry of Jal Shakti problem statement",
    year: "2025",
    featured: true,
  },
  {
    icon: Code2,
    tone: "text-sage-green",
    title: "500+ DSA Problems Solved",
    detail: "Across platforms, including 400+ on LeetCode",
    year: "2026",
  },
  {
    icon: Medal,
    tone: "text-primary",
    title: "Department Rank 1",
    detail: "Civil Engineering, IIT Jammu",
    year: "2024 – Present",
  },
  {
    icon: Award,
    tone: "text-terracotta",
    title: "Academic Excellence Award",
    detail: "Outstanding academic performance — 4 consecutive semesters",
    year: "2024 – Present",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 md:px-20 lg:px-32">
      <SectionHeading number="06" title="Achievements" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {achievements.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-xl flex items-start gap-4 group ${
                item.featured
                  ? "gradient-border md:col-span-2 shadow-[0_8px_30px_-12px_hsla(38,72%,44%,0.4)]"
                  : "glass-panel"
              }`}
            >
              <div
                className={`p-3 rounded-xl border border-border flex-shrink-0 ${
                  item.featured ? "bg-gold/10" : "bg-secondary/60"
                }`}
              >
                <Icon
                  className={`${
                    item.featured ? "w-7 h-7" : "w-5 h-5"
                  } ${item.tone} group-hover:scale-110 transition-transform`}
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <h3
                    className={`font-bold text-foreground leading-snug ${
                      item.featured ? "text-xl" : "text-base"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <span className="font-mono text-[11px] text-muted-foreground bg-secondary px-2 py-0.5 rounded whitespace-nowrap">
                    {item.year}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
