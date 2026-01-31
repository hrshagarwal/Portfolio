"use client";

import { motion } from "framer-motion";

export default function Skills() {
    // Using Simple Icons CDN for reliable logos
    const skills = {
        "Languages": [
            { name: "C", icon: "https://cdn.simpleicons.org/c/A8B9CC" },
            { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus/00599C" },
            { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
            { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
            { name: "SQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" } // Generic SQL or Postgres
        ],
        "Backend": [
            { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
            { name: "Express", icon: "https://cdn.simpleicons.org/express/000000/ffffff" }, // Invert color for dark mode
            { name: "Passport.js", icon: "https://cdn.simpleicons.org/passport/34E27A" },
            { name: "REST API", icon: null } // No specific logo
        ],
        "Database": [
            { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
            { name: "Mongoose", icon: "https://cdn.simpleicons.org/mongoose/880000" }
        ],
        "Frontend": [
            { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
            { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
            { name: "CSS3", icon: "https://cdn.simpleicons.org/css3/1572B6" },
            { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
            { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap/7952B3" }
        ],
        "Tools & Platforms": [
            { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
            { name: "GitHub", icon: "https://cdn.simpleicons.org/github/181717/ffffff" },
            { name: "Linux", icon: "https://cdn.simpleicons.org/linux/FCC624" },
            { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
            { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/000000/ffffff" }
        ],
        "Data Science": [
            { name: "Pandas", icon: "https://cdn.simpleicons.org/pandas/150458" },
            { name: "NumPy", icon: "https://cdn.simpleicons.org/numpy/013243" },
            { name: "Matplotlib", icon: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg" },
            { name: "Seaborn", icon: null } // Seaborn often lacks a simple icon, standard fallback
        ]
    };

    return (
        <section id="skills" className="py-20 px-6 md:px-20 lg:px-32">
            <h2 className="font-sans text-3xl font-bold text-foreground mb-12 flex items-center animate-slide-in-left">
                <span className="text-warm-orange mr-2">03.</span> Technical Arsenal
                <span className="h-px bg-muted flex-grow ml-6 max-w-xs"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(skills).map(([category, items], idx) => (
                    <motion.div 
                        key={category}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="glass-panel p-6 rounded-lg hover:border-warm-orange/30 transition-colors"
                    >
                        <h3 className="font-mono text-warm-orange text-lg mb-6 border-b border-white/5 pb-2">{category}</h3>
                        <div className="flex flex-wrap gap-4">
                            {items.map((skill, i) => (
                                <div key={i} className="flex flex-col items-center gap-2 group">
                                    {skill.icon ? (
                                        <div className="w-10 h-10 p-2 bg-secondary rounded-lg flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src={skill.icon} alt={skill.name} className="w-6 h-6 object-contain" />
                                        </div>
                                    ) : (
                                       <div className="w-10 h-10 p-2 bg-secondary rounded-lg flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                            <span className="text-xs font-bold text-muted-foreground">API</span>
                                       </div>
                                    )}
                                    <span className="text-xs text-muted-foreground font-mono group-hover:text-foreground transition-colors">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
            
            {/* Concepts Section - Text Based */}
            <div className="mt-8 glass-panel p-6 rounded-lg animate-fade-in">
                 <h3 className="font-mono text-sage-green text-lg mb-4">Core Concepts</h3>
                 <div className="flex flex-wrap gap-3">
                    {["MVC Architecture", "Data Structures & Algorithms", "System Design Basics", "Software Defined Networking", "Post-Quantum Cryptography"].map((concept, i) => (
                        <span key={i} className="px-3 py-1 bg-secondary/50 rounded-full text-sm text-foreground border border-white/5 hover:border-sage-green/50 transition-colors cursor-default">
                            {concept}
                        </span>
                    ))}
                 </div>
            </div>
        </section>
    );
}
