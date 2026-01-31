"use client";

import { motion } from "framer-motion";
import { Folder, ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="glass-panel p-6 rounded-lg h-full flex flex-col group hover:border-warm-orange/30 transition-colors hover-lift"
    >
      <div className="flex justify-between items-center mb-6">
        <div className="text-warm-orange">
          <Folder className="w-10 h-10" />
        </div>
        <div className="flex items-center gap-4">
          {project.github && (
            <a href={project.github} className="text-muted-foreground hover:text-warm-orange transition-colors">
              <Github className="w-5 h-5" />
            </a>
          )}
          {project.link && (
            <a href={project.link} className="text-muted-foreground hover:text-warm-orange transition-colors">
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      <h3 className="font-sans text-xl font-bold text-foreground mb-2 group-hover:text-warm-orange transition-colors">
        {project.title}
      </h3>
      
      <div className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
         <p>{project.description}</p>
      </div>

      <ul className="flex flex-wrap gap-3 text-xs font-mono text-muted-foreground/80 mt-auto">
        {project.techStack.map((tech, i) => (
          <li key={i}>{tech}</li>
        ))}
      </ul>
    </motion.div>
  );
}
