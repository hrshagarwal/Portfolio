"use client";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";

const navLinks = [
  { name: "About", to: "about" },
  { name: "Education", to: "education" },
  { name: "Experience", to: "experience" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Achievements", to: "achievements" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close the mobile menu on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      {/* Scroll progress indicator */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="scroll-progress fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-accent-indigo-light to-sage-green z-[60]"
      />

      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(248,240,227,0.82)] backdrop-blur-lg py-3 shadow-[0_1px_20px_-8px_rgba(60,45,25,0.28)] border-b border-border"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link
            to="hero"
            smooth
            duration={500}
            className="font-bold text-xl tracking-tight cursor-pointer group"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary">
              Harsh Agarwal
            </span>
            <span className="text-primary group-hover:animate-pulse">.</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy
                smooth
                offset={-80}
                duration={500}
                onSetActive={() => setActive(link.to)}
                className={`link-underline text-sm font-medium cursor-pointer transition-colors ${
                  active === link.to
                    ? "text-primary is-active"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium px-4 py-1.5 rounded-lg border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <FileText className="w-3.5 h-3.5" />
              Resume
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="md:hidden p-2 -mr-2 text-foreground hover:text-primary transition-colors"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden bg-[rgba(248,240,227,0.97)] backdrop-blur-xl flex flex-col items-center justify-center gap-2"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * i, duration: 0.35 }}
              >
                <Link
                  to={link.to}
                  smooth
                  offset={-80}
                  duration={500}
                  onClick={() => setMenuOpen(false)}
                  className="block px-8 py-3 text-2xl font-semibold text-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 * navLinks.length, duration: 0.35 }}
              className="mt-4 flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium"
            >
              <FileText className="w-4 h-4" />
              Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
