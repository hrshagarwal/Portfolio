"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export default function Education() {
    const educationData = [
        {
            degree: "B.Tech in Civil Engineering (Minor in CSE)",
            institute: "Indian Institute of Technology, Jammu",
            year: "2024 - 2028",
            score: "CGPA: 9.03 (Current)",
            details: [
                "Department Rank 1",
                "Academic Excellence Award for 3 consecutive semesters"
            ]
        },
        {
            degree: "Class 12th (CBSE)",
            institute: "S.G. International School",
            year: "2024",
            score: "92.2%",
            details: ["Rank 1 in PCM", "Qualified JEE Mains & Advanced in first attempt"]
        },
        {
            degree: "Class 10th (CBSE)",
            institute: "Emmanuel Mission Senior Secondary School",
            year: "2022",
            score: "97.6%",
            details: ["School Rank 1"]
        }
    ];

    const stats = [
        { label: "LeetCode Extrapolated", value: "300+" },
        { label: "Total Problems Solved", value: "500+" },
        { label: "JEE Rank", value: "Qualified" }, // Or specific rank if provided, "Qualified" based on prompt
    ];

    return (
        <section id="education" className="py-20 px-6 md:px-20 lg:px-32">
            <h2 className="font-sans text-3xl font-bold text-foreground mb-12 flex items-center animate-slide-in-left">
                <span className="text-warm-orange mr-2">02.</span> Education & Achievements
                <span className="h-px bg-muted flex-grow ml-6 max-w-xs"></span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Education Timeline */}
                <div className="space-y-8">
                    {educationData.map((edu, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-panel p-6 rounded-lg border-l-4 border-warm-orange hover-lift"
                        >
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-foreground">{edu.institute}</h3>
                                <span className="font-mono text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">{edu.year}</span>
                            </div>
                            <p className="text-warm-orange font-medium mb-2">{edu.degree}</p>
                            <p className="font-mono text-sm text-foreground mb-4">{edu.score}</p>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                {edu.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Stats & Awards */}
                <div className="space-y-8">
                     {/* Coding Stats - Expanded to full width since highlights are removed */}
                    <div className="glass-panel p-8 rounded-lg animate-fade-in animate-delay-200">
                        <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                            <BookOpen className="mr-2 text-sage-green" /> Coding Profile
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-secondary/50 rounded-lg text-center hover-lift">
                                <div className="text-3xl font-bold text-warm-orange">300+</div>
                                <div className="text-xs text-muted-foreground mt-1">LeetCode Problems</div>
                            </div>
                            <div className="p-4 bg-secondary/50 rounded-lg text-center hover-lift">
                                <div className="text-3xl font-bold text-sage-green">500+</div>
                                <div className="text-xs text-muted-foreground mt-1">Total Solved (LeetCode, GFG, Coding Ninjas)</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
