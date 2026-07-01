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
      title: "StayNest | Full-Stack Accommodation Marketplace",
      description: "An Airbnb-inspired property marketplace built on the MEN stack following strict MVC architecture. Implements session-based authentication and owner-based authorization via Passport.js, RESTful CRUD APIs with Joi validation, centralized error handling, and a responsive EJS/Bootstrap UI hardened with HTTP-only sessions and Helmet security headers.",
      techStack: ["MongoDB", "Express.js", "Node.js", "Passport.js", "EJS", "Bootstrap"],
      engineering: ["MVC Architecture", "Session Auth", "Joi Validation", "Error Handling Utility"],
      github: "https://github.com/hrshagarwal/StayNest",
      link: null,
      status: "Deployment in Progress",
      video: "/videos/staynest.mp4"
    },
    {
      title: "Productivity Regulation System",
      description: "National Winner of Smart India Hackathon (SIH) 2025. A governance platform for the Ministry of Jal Shakti to replace subjective evaluations with KPI-based productivity scoring. Now architecting the production backend as a Software Development Intern at Brahmaputra Board. Features CSV-based data ingestion from eOffice, AEBAS & PFMS, role-specific KPI computation across four officer tracks, and secure e-Pramaan OAuth SSO with JWT-based RBAC.",
      techStack: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Role-Based Access"],
      engineering: ["Real-time Reporting", "Complex Scoring Algorithms", "Gov-Tech Security", "OAuth SSO"],
      github: null,
      link: null,
      status: "SIH National Winner — Now in Production (Internship)",
      video: false,
      image: "/images/Sih2.jpeg",
      hideImage: true
    },
    {
      title: "LoanSense-AI: ML-Based Loan Approval System",
      description: "An end-to-end ML pipeline for loan approval prediction, training and evaluating KNN, Logistic Regression, and Naive Bayes models. Engineered 28 features across 1,000+ records through data preprocessing, missing value imputation, and categorical encoding. Evaluated using Accuracy, F1-Score, and ROC-AUC — identifying Credit Score and DTI Ratio as top predictors — with explainable AI principles for transparent, fair lending decisions.",
      techStack: ["Python", "scikit-learn", "Pandas", "Seaborn", "Logistic Regression", "KNN"],
      engineering: ["ML Pipeline", "Feature Engineering", "Model Evaluation", "Explainable AI"],
      github: "https://github.com/hrshagarwal/LoanSense-AI",
      link: null,
      status: "June 2026",
      video: false,
      hideImage: true
    }
  ];

  const otherProjects = [
    {
      title: "SDN + Post-Quantum Cryptography",
      description: "Research initiative integrating NIST-standardized CRYSTALS-Kyber into SDN controllers to secure the control plane against quantum attacks. Ongoing under Prof. Sarada Prasad Gocchayat at IIT Jammu.",
      techStack: ["Python", "Mininet", "SDN", "Cryptography"],
      github: null
    },
    {
      title: "Classical Cipher GUI",
      description: "A graphical tool for visualizing and executing various classical encryption techniques for educational purposes.",
      techStack: ["Python", "Tkinter", "Cryptography"],
      github: "https://github.com/hrshagarwal/"
    },
    {
      title: "Strong Password Generator",
      description: "Utility tool for generating cryptographically secure passwords with custom entropy rules.",
      techStack: ["Python", "Secrets", "Regex"],
      github: "https://github.com/hrshagarwal/Password-Generator"
    }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Navbar />
      
      <Hero />
      
      <About />
      
      <Education />

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 md:px-20 lg:px-32">
        <h2 className="font-sans text-3xl font-bold text-foreground mb-12 flex items-center animate-slide-in-left">
          <span className="text-warm-orange mr-2">02.</span> Experience
          <span className="h-px bg-muted flex-grow ml-6 max-w-xs"></span>
        </h2>
        <div className="glass-panel p-8 rounded-lg border-l-4 border-primary hover-lift">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-2">
            <div>
              <h3 className="text-xl font-bold text-foreground">Software Development Intern</h3>
              <p className="text-primary font-medium text-sm mt-1">Brahmaputra Board, Ministry of Jal Shakti (Govt. of India) · Hybrid</p>
            </div>
            <span className="font-mono text-xs text-muted-foreground bg-secondary px-3 py-1 rounded whitespace-nowrap self-start">May 2026 — Present</span>
          </div>

          <div className="mt-4 flex flex-col lg:flex-row gap-8 items-start">
            {/* Bullet points */}
            <ul className="space-y-3 text-sm text-muted-foreground list-disc list-inside flex-1">
              <li>Architecting production backend for a Smart India Hackathon-winning Government Productivity Management System, designing CSV-based data ingestion from eOffice, AEBAS, and PFMS with RESTful APIs built using Node.js, Express.js, MongoDB, and PostgreSQL.</li>
              <li>Designing a role-specific KPI computation engine across four officer tracks (Administrative, Technical, Field, Finance), replacing subjective annual appraisals with data-driven scoring from real-time government system signals.</li>
              <li>Collaborated directly with Ministry stakeholders on requirement gathering, workflow mapping, and SRS authoring, translating a 195-employee statutory body&apos;s operations into a scalable system architecture.</li>
              <li>Implementing secure authentication via Government e-Pramaan/eOffice OAuth SSO with JWT-based session management and hierarchy-aware RBAC across 6+ role levels.</li>
            </ul>

            {/* Certificate / Trophy photo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="lg:w-64 w-full flex-shrink-0 rounded-lg overflow-hidden border border-white/10 shadow-lg group">
              <img
                src="/images/certifiacte_trophy.jpg"
                alt="Internship Certificate and Trophy"
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

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
