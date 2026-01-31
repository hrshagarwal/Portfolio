"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 relative text-center">
      {/* Background Elements */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-6 relative"
      >
        {/* Profile Circle with Image - reduced glow intensity to match reference */}
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-full mx-auto shadow-[0_0_40px_rgba(59,130,246,0.4)] border-2 border-blue-500/30 overflow-hidden hover-lift p-1 bg-gradient-to-b from-blue-500/20 to-transparent">
            <div className="w-full h-full rounded-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                    src="/images/my_photo.jpeg" 
                    alt="Harsh Agarwal" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                    }}
                />
                {/* Fallback if image doesn't exist yet */}
                <div className="hidden w-full h-full bg-slate-800 items-center justify-center text-white font-bold text-4xl">
                    HA
                </div>
            </div>
        </div>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-5xl md:text-7xl font-bold mb-3 font-sans tracking-tight"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-500">
          Harsh Agarwal
        </span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-lg md:text-2xl text-slate-400 font-light mb-4"
      >
        Sophomore at IIT Jammu | SIH 2025 Winner
      </motion.div>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-lg md:text-xl text-blue-500 italic mb-10 font-light tracking-wide"
      >
        &quot;It&apos;s never about the destination, it&apos;s all about the journey.&quot;
      </motion.p>

      {/* Simplified Buttons removed to match reference cleanliness, keeping icons focused */}
      
      {/* Social Icons (Minimal circles) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex gap-6 mt-2"
      >
        <a href="https://github.com/hrshagarwal/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-slate-700 bg-slate-800/50 flex items-center justify-center text-slate-300 hover:border-blue-500 hover:text-blue-500 transition-all duration-300">
            <Github className="w-5 h-5" />
        </a>
        <a href="https://www.linkedin.com/in/harshagarwal22/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-slate-700 bg-slate-800/50 flex items-center justify-center text-slate-300 hover:border-blue-500 hover:text-blue-500 transition-all duration-300">
            <Linkedin className="w-5 h-5" />
        </a>
        <a href="mailto:harshagarwal22112005@gmail.com" className="w-12 h-12 rounded-full border border-slate-700 bg-slate-800/50 flex items-center justify-center text-slate-300 hover:border-blue-500 hover:text-blue-500 transition-all duration-300">
            <Mail className="w-5 h-5" />
        </a>
      </motion.div>

    </section>
  );
}
