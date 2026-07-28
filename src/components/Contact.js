"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "2024uce0050@iitjammu.ac.in",
    href: "mailto:2024uce0050@iitjammu.ac.in",
    external: false,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "hrshagarwal",
    href: "https://github.com/hrshagarwal/",
    external: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "harshagarwal22",
    href: "https://www.linkedin.com/in/harshagarwal22/",
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 px-6 md:px-20 lg:px-32 overflow-hidden"
    >
      {/* Soft glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[120px] -z-10 opacity-40"
        style={{ background: "hsla(248, 70%, 60%, 0.28)" }}
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="font-mono text-sm text-primary mb-3 uppercase tracking-[0.2em]">
          What&apos;s Next
        </p>
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-5">
          Get In Touch
        </h2>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
          I&apos;m currently open to SDE internship opportunities and
          collaborations. Whether you have a question, a project in mind, or
          just want to say hi — my inbox is always open.
        </p>

        <a
          href="mailto:2024uce0050@iitjammu.ac.in"
          className="shimmer inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 transition-all duration-300"
        >
          Say Hello
          <ArrowUpRight className="w-4 h-4" />
        </a>

        {/* Contact channels */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-14 text-left">
          {channels.map(({ icon: Icon, label, value, href, external }, i) => (
            <motion.a
              key={label}
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="glass-panel rounded-xl p-4 flex items-center gap-3.5 group"
            >
              <div className="p-2.5 rounded-lg bg-secondary/60 border border-border group-hover:border-primary/30 transition-colors">
                <Icon className="w-4 h-4 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground">
                  {label}
                </p>
                <p className="text-sm text-foreground font-medium truncate group-hover:text-primary transition-colors">
                  {value}
                </p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all flex-shrink-0" />
            </motion.a>
          ))}
        </div>
      </motion.div>

      <footer className="mt-24 pt-8 border-t border-border text-center">
        <p className="text-xs font-mono text-muted-foreground">
          Designed &amp; built by Harsh Agarwal · Next.js &amp; Tailwind CSS
        </p>
        <p className="text-[11px] font-mono text-muted-foreground/70 mt-2">
          © {new Date().getFullYear()} Harsh Agarwal
        </p>
      </footer>
    </section>
  );
}
