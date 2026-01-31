import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedProject from "@/components/FeaturedProject";
import ProjectCard from "@/components/ProjectCard";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Responsibilities from "@/components/Responsibilities";

export default function Home() {
  
  const featuredProjects = [
    {
      title: "StayNest",
      description: "A full-stack accommodation marketplace inspired by Airbnb. Built with a production-grade backend architecture featuring MVC patterns, role-based access control, and robust security implementation. Includes session management, review systems, and centralized error handling.",
      techStack: ["MongoDB", "Express.js", "Node.js", "Passport.js"],
      engineering: ["MVC Architecture", "Session Auth", "Joi Validation", "Error Handling Utility"],
      github: "https://github.com/hrshagarwal/StayNest",
      link: null,
      status: "Deployment in Progress",
      video: "/videos/staynest.mp4"
    },
    {
      title: "Productivity Regulation System",
      description: "National Winner of Smart India Hackathon (SIH) 2025. A governance platform for the Ministry of Jal Shakti to replace subjective evaluations with KPI-based productivity scoring. Features automated reporting, role-specific metrics, and audit trails.",
      techStack: ["MERN Stack", "Data Analytics", "Role-Based Access"],
      engineering: ["Real-time Reporting", "Complex Scoring Algorithms", "Gov-Tech Security"],
      github: null, // Private
      link: null, // Private
      status: "SIH National Winner - Problem ID 25250",
      video: false,
      image: "/images/Sih2.jpeg",
      hideImage: true
    },
    {
      title: "Software Defined Networking with Post-Quantum Cryptography to Optimise Traffic Management System",
      description: "Spearheaded a research initiative under Prof. Sarada Prasad at IIT Jammu to address the critical vulnerability of Software-Defined Networks (SDN) to potential quantum computing attacks. Developed and simulated a novel security framework by integrating Post-Quantum Cryptography (PQC) algorithms—specifically the NIST-standardized CRYSTALS-Kyber—into the SDN controller's communication protocol. This framework ensures forward secrecy and secures the control plane against 'harvest now, decrypt later' threats without compromising network latency. Furthermore, designed an intelligent traffic management algorithm that dynamically reroutes flows based on real-time congestion metrics, achieving a substantial optimization in bandwidth utilization and reducing packet drop rates during high-load scenarios.",
      techStack: ["Python", "SDN Controllers", "Cryptography"],
      engineering: ["Network Security", "Research Analysis", "Traffic Optimization"],
      github: null,
      link: null,
      status: "Ongoing Research",
      video: false,
      research: false,
      hideImage: true
    }
  ];

  const otherProjects = [
    {
      title: "Classical Cipher GUI",
      description: "A graphical tool for visualizing and executing various classical encryption techniques for educational purposes.",
      techStack: ["Python", "Tkinter", "Cryptography"],
      github: "https://github.com/hrshagarwal/"
    },
    {
      title: "IPL Ad Muter",
      description: "Computer vision application that automatically mutes the system volume during ads in IPL streams.",
      techStack: ["Python", "OpenCV", "Pycaw"],
      github: "https://github.com/hrshagarwal/"
    },
    {
      title: "Strong Password Generator",
      description: "Utility tool for generating cryptographically secure passwords with custom entropy rules.",
      techStack: ["Python", "Secrets", "Regex"],
      github: "https://github.com/hrshagarwal/"
    }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Navbar />
      
      <Hero />
      
      <About />
      
      <Education />

      <Skills />

      {/* Featured Projects */}
      <section id="projects" className="py-20 px-6 md:px-20 lg:px-32">
        <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-2">Featured Engineering</h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
        </div>
        <div className="flex flex-col gap-10">
          {featuredProjects.map((project, index) => (
            <FeaturedProject key={index} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-10 px-6 md:px-20 lg:px-32">
        <h2 className="font-sans text-2xl font-bold text-foreground mb-10 text-center animate-fade-in">
          Other Noteworthy Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      <Responsibilities />

      {/* Contact/Footer */}
      <section id="contact" className="py-24 text-center px-6 bg-secondary/20">
           <h2 className="font-sans text-4xl font-bold text-foreground mb-6 animate-slide-up">Get In Touch</h2>
           <p className="text-muted-foreground max-w-lg mx-auto mb-10 animate-fade-in animate-delay-200">
              Currently open to internship opportunities and collaborations. Whether you have a question or just want to say hi, my inbox is always open.
           </p>
           <a href="mailto:harshagarwal22112005@gmail.com" className="inline-block px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium hover-lift animate-bounce-in animate-delay-300 shadow-lg shadow-primary/25">
              Say Hello
           </a>

           <footer className="mt-32 text-xs font-mono text-muted-foreground">
              <p>Designed & Built by Harsh Agarwal</p>
           </footer>
      </section>
    </main>
  );
}
