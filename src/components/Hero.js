"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const ROLES = [
  { text: "Backend Engineer", glow: "glow-lime" },
  { text: "Full-Stack Developer", glow: "glow-teal" },
  { text: "ML Practitioner", glow: "glow-violet" },
];

// Lines the terminal types on its own until the visitor types something.
const AUTO_LINES = [
  "building backends that ship → Node.js · PostgreSQL · Redis",
  "deploying containers on AWS ECS Fargate",
  "running CNNs in the browser with ONNX",
  "SIH 2025 winner · going to production",
];

// Tiny fake shell. Every answer is a fact from the resume.
const COMMANDS = {
  help: [
    "try: whoami · stack · projects · now · contact · clear",
  ],
  whoami: [
    "Harsh Agarwal. 3rd year, IIT Jammu.",
    "Civil Engineering + CS minor · Dept. Rank 1 · CGPA 9.13",
  ],
  stack: [
    "backend  → Node.js, Express.js, REST, JWT, OAuth 2.0, Socket.IO",
    "data     → PostgreSQL, MongoDB, Redis, Supabase",
    "cloud    → AWS (ECS Fargate, ECR, S3), Docker, Linux",
    "ml       → PyTorch, scikit-learn, ONNX, dlib",
  ],
  projects: [
    "podship         my own mini Vercel on AWS",
    "proxzero        attendance from one photo or a voice clip",
    "cleanpinkcity   waste sorting + garbage truck routes",
    "→ scroll down, it's all there",
  ],
  now: [
    "Software Developer Intern @ Brahmaputra Board (Ministry of Jal Shakti)",
    "taking our SIH 2025 project to production",
  ],
  contact: [
    "2024uce0050@iitjammu.ac.in",
    "github.com/hrshagarwal · linkedin.com/in/harshagarwal22",
  ],
  sudo: ["nice try."],
  ls: ["about/  experience/  projects/  skills/  receipts/  contact/"],
};

function useTypewriter(lines, paused) {
  const [lineIdx, setLineIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = setTimeout(() => setText(lines[0]), 0);
      return () => clearTimeout(id);
    }
    const full = lines[lineIdx];
    let delay = deleting ? 20 : 42;
    if (!deleting && text === full) delay = 1800;
    if (deleting && text === "") delay = 300;

    const id = setTimeout(() => {
      if (!deleting && text === full) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setLineIdx((i) => (i + 1) % lines.length);
      } else {
        setText(full.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(id);
  }, [text, deleting, lineIdx, lines, paused]);

  return text;
}

function Terminal() {
  // Start with a couple of answers already on screen so it never looks empty.
  const [history, setHistory] = useState([
    { cmd: "whoami", out: COMMANDS.whoami },
    { cmd: "now", out: COMMANDS.now },
  ]);
  const [input, setInput] = useState("");
  const [touched, setTouched] = useState(false);
  const typed = useTypewriter(AUTO_LINES, touched);
  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [history]);

  const run = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    setInput("");
    if (!cmd) return;
    if (cmd === "clear") {
      setHistory([]);
      return;
    }
    const out = COMMANDS[cmd] || [`command not found: ${cmd}. type 'help'`];
    setHistory((h) => [...h, { cmd, out }].slice(-6));
  };

  return (
    <div
      className="brut shadow-lime w-full text-left overflow-hidden cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b-2 border-paper bg-ink-3">
        <span className="w-3 h-3 rounded-full bg-pink border border-ink" />
        <span className="w-3 h-3 rounded-full bg-amber border border-ink" />
        <span className="w-3 h-3 rounded-full bg-teal border border-ink" />
        <span className="ml-2 font-mono text-[11px] text-muted-foreground">
          harsh@iitjammu: ~
        </span>
        <span className="ml-auto font-hand text-lg text-lime hidden sm:block">
          go on, type something
        </span>
      </div>

      <div
        ref={bodyRef}
        className="font-mono text-[13px] md:text-[15px] px-5 py-5 space-y-1.5 min-h-[220px] md:min-h-[300px] max-h-[360px] overflow-y-auto"
      >
        {history.map((h, i) => (
          <div key={i}>
            <p className="text-paper">
              <span className="text-lime">$</span> {h.cmd}
            </p>
            {h.out.map((line) => (
              <p key={line} className="text-teal pl-3">
                {line}
              </p>
            ))}
          </div>
        ))}

        {/* Auto-typed prompt until the visitor clicks in and types */}
        {!touched && (
          <p className="text-paper min-h-[1.5em]" aria-hidden="true">
            <span className="text-lime">$</span> {typed}
            <span className="caret" />
          </p>
        )}

        <form onSubmit={run} className={touched ? "flex items-center gap-2" : "sr-only"}>
          <span className="text-lime">$</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setTouched(true);
            }}
            onFocus={() => setTouched(true)}
            placeholder={touched ? "try 'help'" : ""}
            aria-label="Terminal input. Type help for commands."
            autoComplete="off"
            spellCheck={false}
            className="flex-1 bg-transparent outline-none text-paper placeholder:text-muted-foreground/60 caret-lime"
          />
        </form>
      </div>
    </div>
  );
}

const socials = [
  { href: "https://github.com/hrshagarwal/", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/harshagarwal22/", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:2024uce0050@iitjammu.ac.in", icon: Mail, label: "Email" },
];

const pop = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { type: "spring", stiffness: 260, damping: 22, delay },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-5 md:px-12 lg:px-24 pt-28 pb-20 overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-14 items-center">
        {/* Left: name and roles */}
        <div>
          <motion.span
            {...pop(0)}
            className="sticker"
            style={{ "--c": "var(--teal)", "--r": "-2deg" }}
          >
            ● open to SDE internships
          </motion.span>

          <motion.h1
            {...pop(0.08)}
            className="font-display font-extrabold leading-[0.85] mt-6 text-[clamp(3.6rem,11vw,8.5rem)]"
          >
            <span className="block text-paper">Harsh</span>
            <span className="block text-lime [text-shadow:4px_4px_0_var(--pink)] md:[text-shadow:6px_6px_0_var(--pink)]">
              Agarwal.
            </span>
          </motion.h1>

          <motion.div
            {...pop(0.16)}
            className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-7 font-mono text-base md:text-xl"
          >
            {ROLES.map((r, i) => (
              <span key={r.text} className="flex items-center gap-x-3">
                {i > 0 && <span className="text-muted-foreground/50">/</span>}
                <span className={r.glow}>{r.text}</span>
              </span>
            ))}
          </motion.div>

          <motion.p {...pop(0.24)} className="mt-6 text-lg md:text-xl text-paper/85 max-w-xl leading-relaxed">
            3rd year at <span className="hl">IIT Jammu</span>. Civil engineering on paper,
            CS minor by choice. Dept. Rank 1 · CGPA 9.13.
          </motion.p>

          <motion.p {...pop(0.3)} className="font-hand text-2xl text-pink mt-2 -rotate-1">
            &quot;It&apos;s never about the destination, it&apos;s all about the journey.&quot;
          </motion.p>

          <motion.div {...pop(0.36)} className="flex flex-wrap items-center gap-4 mt-9">
            <a href="#projects" className="btn-brut bg-lime text-ink">
              see my work ↓
            </a>
            <a href="#contact" className="btn-brut bg-ink text-paper">
              say hi →
            </a>
            <div className="flex gap-2 ml-1">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="w-11 h-11 rounded-full border-2 border-paper flex items-center justify-center text-paper hover:bg-paper hover:text-ink hover:-rotate-12 transition-all"
                >
                  <Icon className="w-[18px] h-[18px]" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: interactive terminal */}
        <motion.div
          initial={{ opacity: 0, rotate: 4, y: 40 }}
          animate={{ opacity: 1, rotate: 1.5, y: 0 }}
          transition={{ type: "spring", stiffness: 160, damping: 18, delay: 0.3 }}
          whileHover={{ rotate: 0 }}
          className="relative"
        >
          <span
            className="sticker absolute -top-4 -left-3 z-10 wiggle"
            style={{ "--c": "var(--amber)", "--r": "-8deg" }}
          >
            ★ SIH &apos;25 winner
          </span>
          <Terminal />
          <p className="font-hand text-xl text-muted-foreground mt-4 text-right pr-2">
            psst… type <span className="text-lime">help</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
