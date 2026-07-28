import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import FeaturedProject from "@/components/FeaturedProject";
import ProjectCard from "@/components/ProjectCard";
import Achievements from "@/components/Achievements";
import Responsibilities from "@/components/Responsibilities";
import Contact from "@/components/Contact";
import SectionHeading from "@/components/SectionHeading";

const featuredProjects = [
  {
    title: "ProxZero — AI-Powered Classroom Attendance System",
    year: "2026",
    description:
      "A full-stack attendance platform that automates roll-call via face recognition, replacing manual attendance with a single classroom photo scan and cutting attendance-taking time from minutes to seconds.",
    highlights: [
      "Computer vision pipeline using dlib's 128-dimensional face-embedding model, with an on-demand linear SVM classifier trained per class and a tuned L2-distance threshold (0.6) to minimise false positives.",
      "Secondary voice-recognition mode built on Resemblyzer speaker embeddings and Librosa audio segmentation (30 dB silence split), enabling multi-student attendance from one classroom recording at 0.65 cosine-similarity confidence.",
      "Role-based teacher/student dashboards across 5+ relational tables on Supabase (PostgreSQL), with bcrypt-secured auth and QR-code/deep-link self-enrollment.",
    ],
    techStack: [
      "Python",
      "Streamlit",
      "dlib",
      "scikit-learn",
      "Resemblyzer",
      "Supabase",
    ],
    github: "https://github.com/hrshagarwal/ProxZero",
    link: null,
    status: "2026",
  },
  {
    title: "StayNest — Full-Stack Accommodation Marketplace",
    year: "2025",
    description:
      "An Airbnb-inspired property marketplace built on the MEN stack with strict MVC architecture, supporting full CRUD for listings and a complete review system.",
    highlights: [
      "Session-based authentication and owner-based authorization via Passport.js, restricting listing and review edits to their respective owners.",
      "Joi-validated REST APIs with centralized error handling (custom ExpressError, wrapAsync) and Mongoose cascade cleanup to auto-remove reviews on listing deletion.",
      "Sessions hardened with Helmet security headers and HTTP-only cookies, plus Connect-Flash messaging for real-time user feedback across auth and CRUD flows.",
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Passport.js",
      "EJS",
      "Bootstrap",
    ],
    github: "https://github.com/hrshagarwal/StayNest",
    link: null,
    status: "Deployment in Progress",
    video: "/videos/staynest.mp4",
  },
  {
    title: "Government Productivity Management System",
    year: "2025 – Present",
    description:
      "National Winner of Smart India Hackathon 2025. A governance platform for the Ministry of Jal Shakti that replaces subjective annual appraisals with KPI-based productivity scoring. Now being built out as production software during my internship at Brahmaputra Board.",
    highlights: [
      "CSV-based data ingestion from national platforms — eOffice, AEBAS, and PFMS — feeding a role-specific KPI computation engine across four officer tracks.",
      "Secure authentication via Government e-Pramaan/eOffice OAuth SSO with JWT session management and hierarchy-aware RBAC across 6+ role levels.",
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "OAuth SSO",
      "JWT",
    ],
    github: null,
    link: null,
    status: "SIH National Winner · In Production",
  },
  {
    title: "LoanSense-AI — ML-Based Loan Approval System",
    year: "2026",
    description:
      "An end-to-end ML pipeline for loan approval prediction, training and evaluating KNN, Logistic Regression, and Naive Bayes models across 1,000+ records.",
    highlights: [
      "Engineered 28 features through data preprocessing, missing-value imputation, and categorical encoding.",
      "Evaluated with Accuracy, F1-Score, and ROC-AUC — identifying Credit Score and DTI Ratio as top predictors — applying explainable-AI principles for transparent lending decisions.",
    ],
    techStack: ["Python", "scikit-learn", "Pandas", "Seaborn", "NumPy"],
    github: "https://github.com/hrshagarwal/LoanSense-AI",
    link: null,
    status: "Completed",
  },
];

const otherProjects = [
  {
    title: "SDN + Post-Quantum Cryptography",
    description:
      "Research initiative integrating NIST-standardized CRYSTALS-Kyber into SDN controllers to secure the control plane against quantum attacks. Ongoing under Prof. Sarada Prasad Gocchayat at IIT Jammu.",
    techStack: ["Python", "Mininet", "SDN", "Cryptography"],
    github: null,
  },
  {
    title: "Classical Cipher GUI",
    description:
      "A graphical tool for visualizing and executing classical encryption techniques, built for educational use.",
    techStack: ["Python", "Tkinter", "Cryptography"],
    github: "https://github.com/hrshagarwal/",
  },
  {
    title: "Strong Password Generator",
    description:
      "Utility tool for generating cryptographically secure passwords with custom entropy rules.",
    techStack: ["Python", "Secrets", "Regex"],
    github: "https://github.com/hrshagarwal/Password-Generator",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />

      {/* Featured Projects */}
      <section id="projects" className="py-24 px-6 md:px-20 lg:px-32">
        <SectionHeading
          number="05"
          title="Featured Engineering"
          subtitle="Systems I've designed and shipped — from government platforms to computer-vision pipelines."
        />

        <div className="flex flex-col gap-8">
          {featuredProjects.map((project, index) => (
            <FeaturedProject
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Other Projects */}
      <section className="pb-24 px-6 md:px-20 lg:px-32">
        <h3 className="font-sans text-2xl font-bold text-foreground mb-8 text-center">
          Other Noteworthy Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {otherProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <Achievements />
      <Responsibilities />
      <Contact />
    </main>
  );
}
