"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Github, Linkedin, Mail, ArrowDown, Phone } from "lucide-react";

const ROLES = [
  "Backend Engineer",
  "SIH 2025 National Winner",
  "Full-Stack Developer",
  "ML Practitioner",
];

function useTypewriter(words, typeSpeed = 85, deleteSpeed = 40, pause = 1800) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];

    // Finished typing the word — hold, then start deleting.
    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }

    // Finished deleting — advance to the next word.
    if (deleting && text === "") {
      const t = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      }, 220);
      return () => clearTimeout(t);
    }

    const t = setTimeout(
      () => {
        setText((prev) =>
          deleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1)
        );
      },
      deleting ? deleteSpeed : typeSpeed
    );
    return () => clearTimeout(t);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

const socials = [
  {
    href: "https://github.com/hrshagarwal/",
    icon: Github,
    label: "GitHub",
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/harshagarwal22/",
    icon: Linkedin,
    label: "LinkedIn",
    external: true,
  },
  {
    href: "mailto:2024uce0050@iitjammu.ac.in",
    icon: Mail,
    label: "Email",
    external: false,
  },
  {
    href: "tel:+919664317039",
    icon: Phone,
    label: "Phone",
    external: false,
  },
];

export default function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-16 relative text-center overflow-hidden"
    >
      {/* Animated aurora background */}
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div
          className="aurora-blob aurora-1 w-[520px] h-[520px] top-[6%] left-[12%]"
          style={{ background: "hsla(248, 70%, 60%, 0.30)" }}
        />
        <div
          className="aurora-blob aurora-2 w-[440px] h-[440px] top-[32%] right-[10%]"
          style={{ background: "hsla(158, 55%, 48%, 0.22)" }}
        />
        <div
          className="aurora-blob aurora-3 w-[380px] h-[380px] bottom-[8%] left-[38%]"
          style={{ background: "hsla(28, 78%, 60%, 0.20)" }}
        />
      </div>

      {/* Dot grid texture */}
      <div className="absolute inset-0 -z-10 dot-grid" aria-hidden="true" />

      {/* Profile photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-7 relative"
      >
        <div className="relative w-36 h-36 md:w-48 md:h-48 mx-auto">
          {/* Rotating gradient ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-1.5 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, hsl(248,58%,52%), hsl(158,45%,42%), hsl(28,72%,55%), hsl(248,58%,52%))",
              opacity: 0.75,
            }}
          />
          <div className="absolute inset-0 rounded-full overflow-hidden border-[3px] border-[#F8F0E3] shadow-[0_8px_32px_-8px_rgba(60,45,25,0.4)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/my_photo.jpeg"
              alt="Harsh Agarwal"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>

      {/* Availability badge */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="mb-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel glass-panel-static text-xs font-mono text-muted-foreground"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage-green opacity-70" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-sage-green" />
        </span>
        Open to SDE internships &amp; collaborations
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.22 }}
        className="text-5xl md:text-7xl font-bold mb-4 font-sans tracking-tight"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-indigo-800 to-indigo-500 animate-text-gradient">
          Harsh Agarwal
        </span>
      </motion.h1>

      {/* Typewriter role line */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-xl md:text-3xl font-mono text-primary mb-4 h-10 flex items-center"
      >
        <span>{typed}</span>
        <span className="inline-block w-[2px] h-7 md:h-8 bg-primary ml-1 animate-pulse" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.38 }}
        className="text-base md:text-lg text-muted-foreground max-w-2xl mb-3"
      >
        B.Tech Civil Engineering with a Minor in CSE at{" "}
        <span className="text-foreground font-semibold">IIT Jammu</span> ·
        Department Rank 1 · CGPA 9.13
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.44 }}
        className="text-base md:text-lg text-primary/80 italic mb-9 font-light tracking-wide"
      >
        &quot;It&apos;s never about the destination, it&apos;s all about the
        journey.&quot;
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-wrap gap-4 justify-center mb-10"
      >
        <Link
          to="projects"
          smooth
          offset={-80}
          duration={600}
          className="shimmer cursor-pointer px-7 py-3 rounded-lg bg-primary text-primary-foreground font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 transition-all duration-300"
        >
          View My Work
        </Link>
        <Link
          to="contact"
          smooth
          offset={-80}
          duration={600}
          className="cursor-pointer px-7 py-3 rounded-lg border border-primary/40 text-primary font-medium hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-300"
        >
          Get In Touch
        </Link>
      </motion.div>

      {/* Social icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.56 }}
        className="flex gap-4"
      >
        {socials.map(({ href, icon: Icon, label, external }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="w-11 h-11 rounded-full border border-border bg-cream/70 flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary hover:-translate-y-1 transition-all duration-300 shadow-sm"
          >
            <Icon className="w-[18px] h-[18px]" />
          </a>
        ))}
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link
          to="about"
          smooth
          offset={-80}
          duration={600}
          aria-label="Scroll to About section"
          className="cursor-pointer flex flex-col items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.2em]">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
