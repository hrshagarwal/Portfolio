"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Lock } from "lucide-react";
import ThresholdDemo from "@/components/ThresholdDemo";
import PodShipArch from "@/components/PodShipArch";

const DEMOS = {
  threshold: ThresholdDemo,
  podship: PodShipArch,
};

/**
 * One big zine card per project: huge index number, coloured hard shadow,
 * a live demo / media panel and short punchy bullets.
 */
export default function FeaturedProject({ project, index }) {
  const c = project.accent || "lime";
  const flip = index % 2 === 1;
  const Demo = project.demo ? DEMOS[project.demo] : null;
  const hasMedia = Boolean(project.image || Demo);
  const tilt = flip ? 0.6 : -0.6;

  return (
    <motion.article
      initial={{ opacity: 0, y: 60, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: tilt }}
      whileHover={{ rotate: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
      className="brut overflow-hidden"
      style={{ "--shadow": `var(--${c})` }}
    >
      <div className={`grid grid-cols-1 ${hasMedia ? "lg:grid-cols-2" : ""}`}>
        {hasMedia && (
          <div
            className={`relative overflow-hidden border-b-2 lg:border-b-0 border-paper ${
              flip ? "lg:order-2 lg:border-l-2" : "lg:border-r-2"
            } ${Demo ? "bg-ink" : "min-h-[260px] lg:min-h-[380px]"}`}
            style={project.mediaBg ? { background: project.mediaBg } : undefined}
          >
            {Demo ? (
              <Demo project={project} />
            ) : (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={project.image}
                alt={project.imageAlt || project.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-contain"
              />
            )}
          </div>
        )}

        <div className={`p-6 md:p-9 flex flex-col ${flip ? "lg:order-1" : ""}`}>
          <div className="flex items-start justify-between gap-4">
            <span
              className="font-display font-extrabold text-7xl md:text-8xl leading-none text-outline"
              style={{ WebkitTextStroke: `2px var(--${c})` }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="flex flex-col items-end gap-2 pt-2">
              {project.status && (
                <span className="sticker" style={{ "--c": `var(--${c})`, "--r": "3deg" }}>
                  {project.status}
                </span>
              )}
              <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
            </div>
          </div>

          <h3 className="font-display font-extrabold text-3xl md:text-4xl text-paper mt-4 leading-tight">
            {project.name}
          </h3>
          <p className="font-mono text-sm mt-1" style={{ color: `var(--${c})` }}>
            {project.tagline}
          </p>

          <p className="text-paper/85 mt-4 leading-relaxed">{project.description}</p>

          {project.highlights?.length > 0 && (
            <ul className="mt-5 space-y-2.5">
              {project.highlights.map((point) => (
                <li key={point} className="flex gap-2.5 text-sm text-paper/80 leading-relaxed">
                  <span style={{ color: `var(--${c})` }} className="shrink-0">
                    ✦
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap gap-2 mt-6">
            {project.techStack.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-7 pt-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} on GitHub`}
                className="btn-brut bg-ink text-paper"
              >
                <Github className="w-4 h-4" /> code
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} live demo`}
                className="btn-brut text-ink"
                style={{ background: `var(--${c})` }}
              >
                <ExternalLink className="w-4 h-4" /> live demo
              </a>
            )}
            {!project.github && !project.link && (
              <span className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
                <Lock className="w-4 h-4" /> private repo (government project)
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
