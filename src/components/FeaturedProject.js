"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";

export default function FeaturedProject({ project, index }) {
  const isEven = index % 2 === 0;
  const hasMedia = Boolean(project.video || project.image);

  return (
    <motion.article
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="glass-panel rounded-2xl overflow-hidden group"
    >
      <div
        className={`grid grid-cols-1 ${
          hasMedia ? "lg:grid-cols-2" : ""
        } gap-0 items-stretch`}
      >
        {/* ── Media ──────────────────────────────────────── */}
        {hasMedia && (
          <div
            className={`relative min-h-[260px] lg:min-h-[380px] bg-secondary/60 overflow-hidden ${
              isEven ? "" : "lg:order-2"
            }`}
          >
            {project.video ? (
              <video
                src={project.video}
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            )}
          </div>
        )}

        {/* ── Content ────────────────────────────────────── */}
        <div
          className={`p-7 md:p-9 flex flex-col justify-center ${
            !hasMedia ? "lg:px-12" : ""
          } ${isEven ? "" : "lg:order-1"}`}
        >
          <div className="flex items-center gap-3 mb-3 flex-wrap">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
              Featured Project
            </span>
            {project.year && (
              <span className="font-mono text-xs text-muted-foreground">
                {project.year}
              </span>
            )}
          </div>

          <h3 className="font-sans text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
            {project.title}
          </h3>

          <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Engineering highlights */}
          {project.highlights?.length > 0 && (
            <ul className="space-y-2 mb-5">
              {project.highlights.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-sm text-muted-foreground"
                >
                  <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-sage-green flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Tech stack */}
          <ul className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech) => (
              <li
                key={tech}
                className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-secondary/70 text-muted-foreground border border-border"
              >
                {tech}
              </li>
            ))}
          </ul>

          {/* Links + status */}
          <div className="flex items-center gap-4 flex-wrap mt-auto">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} on GitHub`}
                className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                <Github className="w-[18px] h-[18px]" />
                Code
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="w-[18px] h-[18px]" />
                Live
              </a>
            )}
            {!project.github && !project.link && (
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground/70">
                <FolderGit2 className="w-[18px] h-[18px]" />
                Private repository
              </span>
            )}

            {project.status && (
              <span className="ml-auto inline-block px-3 py-1 text-[11px] font-medium rounded-full border border-primary/30 text-primary bg-primary/5">
                {project.status}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
