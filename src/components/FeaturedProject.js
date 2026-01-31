"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";
import Image from "next/image";

export default function FeaturedProject({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={`relative grid grid-cols-12 gap-y-8 items-center mb-32 ${isEven ? "" : "text-right"}`}
    >
      {/* Project Image Content */}
      {!project.hideImage && (
        <div className={`col-span-12 md:col-span-7 relative ${isEven ? "md:col-start-1" : "md:col-start-6 z-10"}`}>
           <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden glass-panel group shadow-2xl hover-glow">
              {/* Overlay - Hidden for videos to allow interaction */}
              <div className={`absolute inset-0 bg-background/40 group-hover:bg-transparent transition-all duration-300 z-10 ${project.video && typeof project.video === 'string' ? 'hidden' : ''}`} />
              
              {/* Placeholder for project image/video */}
               <div className="w-full h-full bg-secondary flex items-center justify-center border border-white/5 overflow-hidden">
                  {project.image ? (
                      /* Project Image */
                      // eslint-disable-next-line @next/next/no-img-element
                      <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                  ) : project.video ? (
                    typeof project.video === 'string' ? (
                        <video 
                            src={project.video} 
                            controls
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <div className="text-muted-foreground flex flex-col items-center gap-2">
                            <FolderGit2 className="w-12 h-12 opacity-50" />
                            <span className="text-sm font-mono">Demo Video Placeholder</span>
                        </div>
                    )
                  ) : project.research ? (
                      /* Abstract Pattern for Research Projects */
                      <div className="w-full h-full relative opacity-20">
                           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sage-green/40 to-transparent" />
                           <pre className="text-[0.6rem] text-sage-green font-mono p-4 leading-none select-none">
                              {`
  class PostQuantumSDN {
    constructor() {
      this.topology = new Graph();
      this.controller = new SecureController();
    }
  
    optimizeTraffic(flow) {
      const route = this.dijkstra(flow);
      return this.encrypt(route);
    }
  
    encrypt(data) {
      // CRYSTALS-Kyber Implementation
      return quantumSafeParams.encap(data);
    }
  }
                              `.repeat(3)}
                           </pre>
                      </div>
                  ) : (
                      <div className="text-muted-foreground font-mono text-4xl font-bold opacity-10">
                          {project.title}
                      </div>
                  )}
               </div>
           </div>
        </div>
      )}
  
      {/* Project Text Content - Expands if hideImage is true */}
      <div className={`relative z-20 ${project.hideImage ? "col-span-12 text-left" : `col-span-12 md:col-span-6 ${isEven ? "md:col-start-7 md:text-right" : "md:col-start-1 md:row-start-1 md:text-left"}`}`}>
        <p className="font-mono text-warm-orange text-sm mb-2">Featured Project</p>
        <h3 className="font-sans text-3xl font-bold text-foreground mb-6 hover:text-warm-orange transition-colors">
            {project.title}
        </h3>
        
        <div className="glass-panel p-6 rounded-lg text-muted-foreground text-sm leading-relaxed shadow-xl mb-6 hover-lift">
            <p>{project.description}</p>
        </div>

        {project.engineering && (
            <div className={`flex flex-wrap gap-2 mb-6 text-xs font-mono text-muted-foreground ${isEven ? "justify-end" : "justify-start"}`}>
                {project.engineering.map((tech, i) => (
                    <span key={i} className="text-sage-green">• {tech}</span>
                ))}
            </div>
        )}

        <ul className={`flex flex-wrap gap-4 text-xs font-mono text-muted-foreground/80 mb-8 ${isEven ? "justify-end" : "justify-start"}`}>
            {project.techStack.map((tech, i) => (
                <li key={i}>{tech}</li>
            ))}
        </ul>

        <div className={`flex items-center gap-4 ${isEven ? "justify-end" : "justify-start"}`}>
            {project.github && (
                <a href={project.github} className="text-foreground hover:text-warm-orange transition-colors">
                    <Github className="w-6 h-6" />
                </a>
            )}
            {project.link && (
                <a href={project.link} className="text-foreground hover:text-warm-orange transition-colors">
                    <ExternalLink className="w-6 h-6" />
                </a>
            )}
        </div>
        
        {project.status && (
             <div className={`mt-4 ${isEven ? "text-right" : "text-left"}`}>
                <span className="inline-block px-3 py-1 text-xs border border-warm-orange/30 text-warm-orange rounded-full bg-warm-orange/5">
                    {project.status}
                </span>
             </div>
        )}
      </div>
    </motion.div>
  );
}
