"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const COLORS = ["pink", "teal", "amber", "blue", "violet", "lime"];

export default function ProjectCard({ project, index = 0 }) {
  const c = COLORS[index % COLORS.length];
  const tilt = [-1.5, 1, -0.8][index % 3];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: tilt }}
      whileHover={{ rotate: 0, y: -4 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", stiffness: 220, damping: 20, delay: index * 0.06 }}
      className="brut p-6 h-full flex flex-col"
      style={{ "--shadow": `var(--${c})` }}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display font-extrabold text-2xl text-paper leading-tight">{project.title}</h3>
        <div className="flex gap-2 shrink-0 pt-1">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="text-paper/70 hover:text-paper transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="text-paper/70 hover:text-paper transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
      <p className="font-mono text-xs mt-1" style={{ color: `var(--${c})` }}>
        {project.tagline}
      </p>
      <p className="text-paper/80 text-sm leading-relaxed mt-4 flex-grow">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-5">
        {project.techStack.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
