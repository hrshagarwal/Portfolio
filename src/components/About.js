"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-20 lg:px-32 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-4xl font-bold text-foreground mb-2">About Me</h2>
        <div className="w-20 h-1 bg-primary rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text */}
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            Hello, I&apos;m Harsh! <span className="animate-wave text-2xl">👋</span>
          </h3>
          
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              A passionate civil engineering student at IIT Jammu, exploring the intersection of software development, system-level programming, and tech leadership.
            </p>
            <p className="mb-6">
              Hardworking and self-taught, with a strong love for C++, Python, Web Development, and AI & ML.
            </p>

            <ul className="space-y-4 mt-6">
              <li className="flex items-start gap-3">
                <span className="text-xl mt-1">🏆</span>
                <span>
                  <strong className="text-foreground">National Winner, SIH 2025:</strong> Triumphed at the Smart India Hackathon (REC Chennai).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl mt-1">🥇</span>
                <span>
                 <strong className="text-foreground">Department Rank 1:</strong> Consistently topping the cohort with 9.03 CGPA.
                </span>
              </li>

            </ul>
          </div>
        </motion.div>

        {/* Right Column: Card */}
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center md:justify-end"
        >
           <div className="bg-[#1e293b] rounded-2xl p-8 w-full max-w-md shadow-2xl relative overflow-hidden group">
               {/* Decorative Gradient Blob */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />

               <h3 className="text-xl font-bold text-foreground mb-8 text-center">My Journey</h3>

               <div className="space-y-8 relative">
                   {/* Vertical Line */}
                   <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-muted/30"></div>

                   {/* Item 1 */}
                   <div className="flex gap-4 relative">
                       <div className="w-10 h-10 rounded-full bg-[#3b82f6] flex-shrink-0 z-10 border-4 border-[#1e293b]"></div>
                       <div>
                           <h4 className="font-bold text-foreground text-lg">Academic Excellence</h4>
                           <p className="text-muted-foreground text-sm">CGPA 9.03 at IIT Jammu</p>
                       </div>
                   </div>

                   {/* Item 2 */}
                    <div className="flex gap-4 relative">
                       <div className="w-10 h-10 rounded-full bg-[#10b981] flex-shrink-0 z-10 border-4 border-[#1e293b]"></div>
                       <div>
                           <h4 className="font-bold text-foreground text-lg">Tech Leadership</h4>
                           <p className="text-muted-foreground text-sm">Branch Executive, Training & Placement Cell</p>
                       </div>
                   </div>

                   {/* Item 3 */}
                    <div className="flex gap-4 relative">
                       <div className="w-10 h-10 rounded-full bg-[#f97316] flex-shrink-0 z-10 border-4 border-[#1e293b]"></div>
                       <div>
                           <h4 className="font-bold text-foreground text-lg">National Winner</h4>
                           <p className="text-muted-foreground text-sm">Smart India Hackathon 2025</p>
                       </div>
                   </div>
               </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
