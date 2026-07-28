"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Layout,
  Wrench,
  BrainCircuit,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

/**
 * Skill groups mirror the resume's "Technical Skills" section.
 * Icons are Lucide components (bundled locally) rather than CDN images,
 * so the grid never renders broken tiles when a CDN is slow or blocked.
 */
const skillGroups = [
  {
    category: "Programming",
    icon: Code2,
    tone: "text-primary",
    items: ["C", "C++", "Python", "JavaScript", "SQL"],
  },
  {
    category: "Backend",
    icon: Server,
    tone: "text-sage-green",
    items: ["Node.js", "Express.js", "REST APIs", "Passport.js", "JWT / OAuth"],
  },
  {
    category: "Databases",
    icon: Database,
    tone: "text-terracotta",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Mongoose", "Supabase"],
  },
  {
    category: "Frontend",
    icon: Layout,
    tone: "text-primary",
    items: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "EJS"],
  },
  {
    category: "Machine Learning",
    icon: BrainCircuit,
    tone: "text-gold",
    items: [
      "scikit-learn",
      "NumPy",
      "Pandas",
      "OpenCV",
      "dlib",
      "Model Evaluation",
    ],
  },
  {
    category: "Tools & OS",
    icon: Wrench,
    tone: "text-sage-green",
    items: [
      "Git",
      "GitHub",
      "Linux",
      "Jupyter",
      "Postman",
      "Streamlit",
      "Mininet",
    ],
  },
];

const concepts = [
  "MVC Architecture",
  "Data Structures & Algorithms",
  "System Design Basics",
  "Supervised Learning",
  "Software Defined Networking",
  "Post-Quantum Cryptography",
  "Role-Based Access Control",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-20 lg:px-32">
      <SectionHeading
        number="04"
        title="Technical Arsenal"
        subtitle="The tools I reach for when building backends, pipelines, and interfaces."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, idx) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: idx * 0.07, duration: 0.45 }}
              whileHover={{ y: -5 }}
              className="glass-panel p-6 rounded-xl group"
            >
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-border">
                <Icon
                  className={`w-[18px] h-[18px] ${group.tone} group-hover:scale-110 transition-transform`}
                />
                <h3 className="font-mono text-base font-semibold text-foreground">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 text-xs font-mono rounded-md bg-secondary/70 text-muted-foreground border border-border hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Core concepts */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-6 glass-panel p-6 rounded-xl"
      >
        <h3 className="font-mono text-base font-semibold text-sage-green mb-4">
          Core Concepts
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {concepts.map((concept) => (
            <span
              key={concept}
              className="px-3.5 py-1.5 bg-secondary/60 rounded-full text-sm text-foreground border border-border hover:border-sage-green/50 hover:text-sage-green transition-colors cursor-default"
            >
              {concept}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
