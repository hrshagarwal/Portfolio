"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Trophy, Code2 } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <GraduationCap className="w-4 h-4 text-blue-400" />,
      label: "CGPA",
      value: "9.13 / 10",
      sub: "Dept. Rank 1 — IIT Jammu"
    },
    {
      icon: <Trophy className="w-4 h-4 text-amber-400" />,
      label: "SIH 2025",
      value: "National Winner",
      sub: "Problem ID 25250"
    },
    {
      icon: <Code2 className="w-4 h-4 text-emerald-400" />,
      label: "DSA",
      value: "500+ Problems",
      sub: "400+ on LeetCode"
    },
    {
      icon: <MapPin className="w-4 h-4 text-rose-400" />,
      label: "Based in",
      value: "Jammu, India",
      sub: "IIT Jammu Campus"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-20 lg:px-32 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-4xl font-bold text-foreground mb-2">About Me</h2>
        <div className="w-20 h-1 bg-primary rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left Column: Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-5 text-muted-foreground text-base leading-relaxed"
        >
          <p className="text-foreground text-xl font-semibold">
            I&apos;m Harsh — a civil engineering student at IIT Jammu with interest in Computer Science.
          </p>
          <p>
            My days are split between Core Engineering lectures and leetcode grind at night.
            That contrast is something I genuinely enjoy — the rigour of engineering thinking applied to software.
          </p>
          <p>
            I picked up programming from scratch in my first year and haven&apos;t stopped since. Right now
            I&apos;m interning at the Brahmaputra Board (Ministry of Jal Shakti) building the production
            backend for a government productivity system — the same project that won Smart India Hackathon 2025.
          </p>
          <p>
           Outside of work, you'll usually find me listening to music, traveling with friends, and hunting for great food.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            {["C++", "Python", "Node.js", "React", "MongoDB", "scikit-learn"].map(tag => (
              <span key={tag} className="px-3 py-1 text-xs font-mono rounded border border-white/10 bg-secondary/40 text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Stat Grid */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 gap-4"
        >
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-xl p-5 border border-slate-200 hover:border-indigo-200 hover:shadow-md transition-all group shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                {item.icon}
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{item.label}</span>
              </div>
              <p className="text-foreground font-bold text-lg leading-tight">{item.value}</p>
              <p className="text-muted-foreground text-xs mt-1">{item.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
