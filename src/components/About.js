"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const stats = [
  { value: "9.13", label: "CGPA", c: "lime", r: -3 },
  { value: "Rank 1", label: "Civil dept.", c: "teal", r: 2 },
  { value: "500+", label: "DSA problems", c: "pink", r: -2 },
  { value: "SIH '25", label: "national winner", c: "amber", r: 3 },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-5 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="01" title="the short version" note="hi, I'm Harsh ✌" />

        <div className="grid lg:grid-cols-[1fr_320px] gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 200, damping: 24 }}
            className="space-y-5 text-lg md:text-xl leading-relaxed text-paper/85"
          >
            <p>
              I study <span className="hl">Civil Engineering</span> at IIT Jammu and spend
              most of my free time writing code.
            </p>
            <p>
              Started programming from zero in first year. Now I&apos;m a Software Developer
              Intern at <span className="text-paper font-bold">Brahmaputra Board</span>{" "}
              (Ministry of Jal Shakti), taking our{" "}
              <span className="hl" style={{ "--hl": "var(--amber)" }}>SIH 2025</span>-winning
              project to production.
            </p>
            <p>
              I like clean data models, auth that actually holds, and backends that
              don&apos;t fall over.
            </p>
            <p className="text-muted-foreground">
              Off the keyboard: music, trips with friends, and hunting for good food.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  whileHover={{ rotate: 0, scale: 1.06 }}
                  className="brut px-4 py-3"
                  style={{ "--shadow": `var(--${s.c})`, rotate: s.r }}
                >
                  <p className="font-display font-extrabold text-3xl" style={{ color: `var(--${s.c})` }}>
                    {s.value}
                  </p>
                  <p className="font-mono text-[11px] uppercase text-muted-foreground">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Polaroid */}
          <motion.figure
            initial={{ opacity: 0, rotate: 10, y: 40 }}
            whileInView={{ opacity: 1, rotate: 4, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 140, damping: 16 }}
            whileHover={{ rotate: 0, scale: 1.03 }}
            className="relative mx-auto w-[260px] lg:w-full bg-paper p-3 pb-14 rounded-sm shadow-[8px_8px_0_var(--pink)]"
          >
            <span className="tape -top-3 left-1/2 -translate-x-1/2 -rotate-3" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/my_photo.jpeg"
              alt="Harsh Agarwal holding the Smart India Hackathon 2025 winner certificate"
              loading="lazy"
              className="w-full aspect-square object-cover"
            />
            <figcaption className="absolute bottom-3 left-0 right-0 text-center font-hand text-2xl text-ink">
              SIH 2025, we won!
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
