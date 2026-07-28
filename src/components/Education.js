"use client";

import { motion } from "framer-motion";
import { BookOpen, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";

const educationData = [
  {
    degree: "B.Tech in Civil Engineering (Minor in CSE)",
    institute: "Indian Institute of Technology, Jammu",
    year: "2024 – 2028",
    score: "CGPA: 9.13 (Current)",
    details: [
      "Department Rank 1",
      "Academic Excellence Award — 4 consecutive semesters",
    ],
  },
  {
    degree: "Class 12th (CBSE)",
    institute: "S.G. International School",
    year: "2024",
    score: "92.2%",
    details: ["Rank 1 in PCM", "Qualified JEE Mains & Advanced in first attempt"],
  },
  {
    degree: "Class 10th (CBSE)",
    institute: "Emmanuel Mission Senior Secondary School",
    year: "2022",
    score: "97.6%",
    details: ["School Rank 1"],
  },
];

const codingStats = [
  {
    value: "400+",
    label: "LeetCode Problems",
    tone: "text-primary",
  },
  {
    value: "500+",
    label: "Total Solved",
    sub: "LeetCode · GFG · Coding Ninjas",
    tone: "text-sage-green",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 md:px-20 lg:px-32">
      <SectionHeading number="02" title="Education" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Timeline */}
        <div className="relative space-y-6">
          {/* Vertical rail */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent hidden sm:block" />

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.institute}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative sm:pl-10"
            >
              {/* Timeline node */}
              <span className="absolute left-0 top-6 hidden sm:flex items-center justify-center">
                <span className="w-[15px] h-[15px] rounded-full bg-primary ring-4 ring-[#F8F0E3]" />
              </span>

              <div className="glass-panel p-6 rounded-xl hover-lift">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                  <h3 className="text-lg font-bold text-foreground">
                    {edu.institute}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground bg-secondary px-2.5 py-1 rounded whitespace-nowrap self-start">
                    {edu.year}
                  </span>
                </div>
                <p className="text-primary font-medium text-sm mb-2">
                  {edu.degree}
                </p>
                <p className="font-mono text-sm text-foreground mb-3">
                  {edu.score}
                </p>
                <ul className="text-sm text-muted-foreground space-y-1.5">
                  {edu.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-gold mt-0.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coding profile */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="glass-panel p-8 rounded-xl h-fit"
        >
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-sage-green" /> Coding Profile
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {codingStats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4 }}
                className="p-5 bg-secondary/60 rounded-lg text-center border border-border"
              >
                <div className={`text-4xl font-bold ${stat.tone}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-foreground mt-2 font-medium">
                  {stat.label}
                </div>
                {stat.sub && (
                  <div className="text-[11px] text-muted-foreground mt-1">
                    {stat.sub}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Consistent problem-solving across data structures, algorithms, and
              system design fundamentals — the groundwork behind every backend I
              build.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
