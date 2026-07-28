"use client";

import { motion } from "framer-motion";
import { Folder, ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="glass-panel p-6 rounded-xl h-full flex flex-col group"
    >
      <div className="flex justify-between items-center mb-5">
        <Folder className="w-9 h-9 text-primary group-hover:scale-110 transition-transform duration-300" />

        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="text-muted-foreground hover:text-primary transition-colors"
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
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      <h3 className="font-sans text-lg font-bold text-foreground mb-2.5 group-hover:text-primary transition-colors">
        {project.title}
      </h3>

      <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-grow">
        {project.description}
      </p>

      <ul className="flex flex-wrap gap-2 mt-auto">
        {project.techStack.map((tech) => (
          <li
            key={tech}
            className="px-2 py-0.5 text-[11px] font-mono rounded bg-secondary/70 text-muted-foreground border border-border"
          >
            {tech}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
