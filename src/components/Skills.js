"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

// Mirrors the resume's Technical Skills section.
const groups = [
  { name: "languages", c: "lime", items: ["C++", "C", "Python", "JavaScript", "SQL"] },
  {
    name: "backend",
    c: "teal",
    items: ["Node.js", "Express.js", "REST APIs", "JWT", "OAuth 2.0", "RBAC", "Socket.IO"],
  },
  { name: "databases", c: "pink", items: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Mongoose"] },
  {
    name: "cloud & tools",
    c: "amber",
    items: ["AWS ECS Fargate", "ECR", "S3", "Docker", "Linux", "Git", "GitHub", "Postman"],
  },
  {
    name: "machine learning",
    c: "violet",
    items: ["PyTorch", "scikit-learn", "ONNX", "NumPy", "Pandas", "dlib", "Streamlit"],
  },
  { name: "frontend", c: "blue", items: ["React.js", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "EJS"] },
];

// Small deterministic tilt per sticker so it looks hand-placed.
const tilt = (i, j) => (((i * 7 + j * 13) % 9) - 4) * 0.8;

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-5 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="04" title="toolbox" note="stuff I actually use" color="amber" rotate={-4} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {groups.map((g, i) => (
            <motion.div
              key={g.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 220, damping: 22, delay: i * 0.05 }}
            >
              <p className="font-hand text-3xl mb-3" style={{ color: `var(--${g.c})` }}>
                {g.name}
              </p>
              <div className="flex flex-wrap gap-3">
                {g.items.map((item, j) => (
                  <span
                    key={item}
                    className="sticker"
                    style={{ "--c": `var(--${g.c})`, "--r": `${tilt(i, j)}deg` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="font-mono text-sm text-muted-foreground mt-14">
          also comfy with: DSA · MVC · graph algorithms · pub/sub · SDN basics
        </p>
      </div>
    </section>
  );
}
