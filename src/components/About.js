"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Trophy, Code2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

const highlights = [
  {
    icon: GraduationCap,
    tone: "text-primary",
    label: "CGPA",
    value: "9.13 / 10",
    sub: "Dept. Rank 1 — IIT Jammu",
  },
  {
    icon: Trophy,
    tone: "text-gold",
    label: "SIH 2025",
    value: "National Winner",
    sub: "Smart India Hackathon",
  },
  {
    icon: Code2,
    tone: "text-sage-green",
    label: "DSA",
    value: "500+ Problems",
    sub: "400+ on LeetCode",
  },
  {
    icon: MapPin,
    tone: "text-terracotta",
    label: "Based in",
    value: "Jammu, India",
    sub: "IIT Jammu Campus",
  },
];

const tags = [
  "C/C++",
  "Python",
  "JavaScript",
  "Node.js",
  "Express.js",
  "React.js",
  "MongoDB",
  "PostgreSQL",
  "scikit-learn",
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-20 lg:px-32 max-w-7xl mx-auto"
    >
      <SectionHeading number="01" title="About Me" align="center" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
        {/* Narrative */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-5 text-muted-foreground text-base leading-relaxed"
        >
          <p className="text-foreground text-xl font-semibold">
            I&apos;m Harsh — a Civil Engineering student at IIT Jammu who fell
            hard for Computer Science.
          </p>
          <p>
            My days are split between core engineering lectures and the LeetCode
            grind at night. That contrast is something I genuinely enjoy — the
            rigour of engineering thinking applied to software.
          </p>
          <p>
            I picked up programming from scratch in my first year and
            haven&apos;t stopped since. Right now I&apos;m a Software
            Development Intern at the{" "}
            <span className="text-foreground font-medium">
              Brahmaputra Board (Ministry of Jal Shakti)
            </span>
            , architecting the production backend for a government productivity
            system — the same project that won Smart India Hackathon 2025.
          </p>
          <p>
            I care about systems that hold up under real users: clean
            architecture, sane data models, and auth that doesn&apos;t leak.
            Outside of work you&apos;ll usually find me listening to music,
            travelling with friends, and hunting for great food.
          </p>

          <div className="pt-3 flex flex-wrap gap-2.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-mono rounded-md border border-border bg-secondary/60 text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Stat grid */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 gap-4"
        >
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09, duration: 0.45 }}
                whileHover={{ y: -5 }}
                className="glass-panel rounded-xl p-5 group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Icon
                    className={`w-4 h-4 ${item.tone} group-hover:scale-110 transition-transform`}
                  />
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.15em]">
                    {item.label}
                  </span>
                </div>
                <p className="text-foreground font-bold text-lg leading-tight">
                  {item.value}
                </p>
                <p className="text-muted-foreground text-xs mt-1">{item.sub}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
