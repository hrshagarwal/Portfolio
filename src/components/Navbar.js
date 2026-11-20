"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "about", to: "about" },
  { name: "now", to: "experience" },
  { name: "work", to: "projects" },
  { name: "toolbox", to: "skills" },
  { name: "receipts", to: "achievements" },
  { name: "say hi", to: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="scroll-progress fixed top-0 left-0 right-0 h-1 bg-lime z-[60]"
      />

      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-200 ${
          scrolled ? "bg-ink/95 border-b-2 border-paper py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-12 lg:px-0 flex justify-between items-center">
          <a
            href="#hero"
            className="font-display font-extrabold text-2xl text-paper hover:-rotate-6 transition-transform"
            aria-label="Back to top"
          >
            HA<span className="text-lime">.</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.to}
                href={`#${link.to}`}
                className={`font-mono text-sm px-3 py-1.5 rounded-full border-2 transition-all ${
                  link.to === "contact"
                    ? "border-paper bg-lime text-ink hover:-rotate-3"
                    : "border-transparent text-paper/80 hover:border-paper hover:text-paper"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="md:hidden p-2 -mr-2 text-paper"
          >
            {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at 95% 4%)" }}
            animate={{ clipPath: "circle(150% at 95% 4%)" }}
            exit={{ clipPath: "circle(0% at 95% 4%)" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 md:hidden bg-lime flex flex-col items-start justify-center gap-1 px-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.to}
                href={`#${link.to}`}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.12 + 0.05 * i }}
                className="font-display font-extrabold text-5xl text-ink py-1"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
