"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ArrowUpRight, Copy, Check } from "lucide-react";

const EMAIL = "2024uce0050@iitjammu.ac.in";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" className="pt-24 pb-10 px-5 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 160, damping: 20 }}
          className="brut shadow-pink bg-lime p-8 md:p-14 text-ink"
          style={{ background: "var(--lime)" }}
        >
          <p className="font-hand text-3xl -rotate-2">looking for an SDE intern?</p>
          <h2 className="font-display font-extrabold text-[clamp(4rem,14vw,10rem)] leading-[0.85] mt-2">
            say hi.
          </h2>

          <div className="flex flex-wrap items-center gap-4 mt-10">
            <a
              href={`mailto:${EMAIL}`}
              className="btn-brut bg-ink text-paper"
              style={{ boxShadow: "4px 4px 0 var(--ink)", borderColor: "var(--ink)" }}
            >
              {EMAIL} <ArrowUpRight className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={copy}
              className="btn-brut bg-lime text-ink"
              style={{ boxShadow: "4px 4px 0 var(--ink)", borderColor: "var(--ink)" }}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? "copied!" : "copy email"}
            </button>
          </div>

          <div className="flex flex-wrap gap-6 mt-8 font-mono text-sm font-bold">
            <a
              href="https://github.com/hrshagarwal/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 underline decoration-2 underline-offset-4 hover:-rotate-2 transition-transform"
            >
              <Github className="w-4 h-4" /> github.com/hrshagarwal
            </a>
            <a
              href="https://www.linkedin.com/in/harshagarwal22/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 underline decoration-2 underline-offset-4 hover:-rotate-2 transition-transform"
            >
              <Linkedin className="w-4 h-4" /> linkedin.com/in/harshagarwal22
            </a>
          </div>
        </motion.div>

        <footer className="mt-16 flex flex-wrap justify-between gap-3 font-mono text-xs text-muted-foreground">
          <p>built by Harsh Agarwal · Next.js + Tailwind</p>
          <p>© {new Date().getFullYear()}</p>
        </footer>
      </div>
    </section>
  );
}
