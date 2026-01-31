"use client";

import { motion } from "framer-motion";
import { Users, Briefcase, Camera, Code, Megaphone, Utensils } from "lucide-react";

export default function Responsibilities() {
    const roles = [
        {
            title: "Branch Executive",
            org: "Training & Placement Cell, IIT Jammu",
            icon: <Briefcase className="w-6 h-6 text-warm-orange" />,
            desc: "Managed placement activities and career development services."
        },
        {
            title: "Sponsorship & Outreach Head",
            org: "Coding Club, IIT Jammu",
            icon: <Code className="w-6 h-6 text-sage-green" />,
            desc: "Led sponsorship drives and outreach initiatives."
        },
        {
            title: "Outreach & PR Lead",
            org: "Photography Club (Chitraka), IIT Jammu",
            icon: <Camera className="w-6 h-6 text-terracotta" />,
            desc: "Handled public relations and club visibility."
        },
        {
            title: "Competitive Programming Mentor",
            org: "Coding Club, IIT Jammu",
            icon: <Users className="w-6 h-6 text-warm-orange-light" />,
            desc: "Mentored juniors in algorithms and data structures."
        },
        {
            title: "Public Relations Team",
            org: "Pragyaan",
            icon: <Megaphone className="w-6 h-6 text-cream" />,
            desc: "Coordinated PR activities for the event."
        },
        {
            title: "Content Head",
            org: "Food Tinkers, IIT Jammu",
            icon: <Utensils className="w-6 h-6 text-soft-peach" />,
            desc: "Oversaw content strategy and creation."
        }
    ];

    return (
        <section id="responsibilities" className="py-20 px-6 md:px-20 lg:px-32">
            <h2 className="font-sans text-3xl font-bold text-foreground mb-12 flex items-center animate-slide-in-right">
                <span className="text-warm-orange mr-2">05.</span> Positions of Responsibility
                <span className="h-px bg-muted flex-grow ml-6 max-w-xs"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {roles.map((role, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-panel p-6 rounded-lg hover-lift group"
                    >
                        <div className="mb-4 p-3 bg-secondary/30 rounded-full w-fit group-hover:bg-secondary/60 transition-colors">
                            {role.icon}
                        </div>
                        <h3 className="font-bold text-lg text-foreground mb-1">{role.title}</h3>
                        <p className="text-xs font-mono text-warm-orange mb-3">{role.org}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{role.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
