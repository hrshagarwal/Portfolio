import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Experience from "@/components/Experience";
import FeaturedProject from "@/components/FeaturedProject";
import ProjectCard from "@/components/ProjectCard";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Responsibilities from "@/components/Responsibilities";
import Contact from "@/components/Contact";
import SectionHeading from "@/components/SectionHeading";

// Every number here comes from the resume / the project repos.
const featuredProjects = [
  {
    name: "PodShip",
    tagline: "self-hosted deployment platform",
    year: "2026",
    description:
      "Paste a GitHub repo URL, get a live site on its own subdomain. Basically my own mini Vercel, running on AWS.",
    highlights: [
      "Every build runs in its own Docker container, launched as an AWS ECS Fargate task. Image in ECR, output in S3.",
      "A subdomain-routing reverse proxy streams files straight from S3, no buffering in memory.",
      "Live build logs over Redis Pub/Sub + Socket.IO rooms, one channel per project.",
      "Found why Fargate kept billing after builds ended: an open Redis connection. Fixed it.",
    ],
    techStack: ["Node.js", "Express.js", "Docker", "AWS ECS Fargate", "ECR", "S3", "Redis Pub/Sub", "Socket.IO"],
    github: "https://github.com/hrshagarwal/PodShip",
    link: null,
    youtube: "zV1hY8AhBwg",
    demo: "podship",
    status: "demo video ▶",
    accent: "teal",
  },
  {
    name: "ProxZero",
    tagline: "face + voice attendance",
    year: "2026",
    description:
      "Takes attendance for a whole class from one photo or a 10-second voice clip. The teacher reviews it before anything is saved.",
    highlights: [
      "dlib face pipeline makes 128-d face embeddings; Resemblyzer makes 256-d voice embeddings.",
      "Look-alike students were getting marked present, so I tightened the match threshold from 0.6 to 0.42 and added a 0.08 runner-up margin. Unsure faces go to the teacher. Try the demo yourself.",
      "5-table PostgreSQL schema on Supabase, bcrypt logins, QR enrollment. Killed an N+1 on the dashboard with one embedded join.",
    ],
    techStack: ["Python", "dlib", "Resemblyzer", "Librosa", "Supabase (PostgreSQL)", "Streamlit"],
    github: "https://github.com/hrshagarwal/ProxZero",
    link: "https://proxzero.streamlit.app",
    status: "live",
    demo: "threshold",
    accent: "violet",
  },
  {
    name: "CleanPinkCity",
    tagline: "AI waste sorting + route planning",
    year: "Oct 2026",
    description:
      "Grew out of my waste-management field study of Kardhani ward, Jaipur. Tells you which bin your trash goes in and plans the garbage truck's route.",
    highlights: [
      "A CNN (94.0% test accuracy) runs fully in the browser with ONNX Runtime Web. Photos never leave the device and it works offline.",
      "The ward's OpenStreetMap roads (399 junctions, 31.7 km) solved as a Chinese Postman problem in NetworkX: a 44.1 km route split into 5 balanced beats of about 6 km.",
      "No framework: 11 plain JavaScript modules, deployed on Vercel.",
    ],
    techStack: ["JavaScript", "ONNX Runtime Web", "PyTorch", "Python", "OSMnx", "NetworkX"],
    github: "https://github.com/hrshagarwal/clean-pink-city",
    link: "https://clean-pink-city-web.vercel.app",
    image: "/images/cleanpinkcity-routes.gif",
    imageAlt: "Animated map of Kardhani ward's streets split into five balanced garbage-collection beats",
    mediaBg: "#EDE7D9",
    status: "live",
    accent: "pink",
  },
  {
    name: "Govt. Productivity System",
    tagline: "Smart India Hackathon 2025 winner",
    year: "2025 – now",
    description:
      "Scores government officers on real KPIs instead of yearly paperwork. Won SIH 2025; now I'm taking it to production during my internship at Brahmaputra Board.",
    highlights: [
      "REST APIs in Node.js + Express.js over PostgreSQL and MongoDB, fed by eOffice, AEBAS and PFMS records.",
      "KPI scoring engine with separate metrics for 4 officer tracks.",
      "e-Pramaan/eOffice OAuth SSO, JWT sessions, RBAC across 6+ role levels.",
    ],
    techStack: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "OAuth 2.0", "JWT"],
    github: null,
    link: null,
    status: "going to prod",
    accent: "amber",
  },
];

const otherProjects = [
  {
    title: "StayNest",
    tagline: "listings + reviews marketplace",
    description:
      "Airbnb-style app on the MEN stack (MVC), started from a course project. I added server-side filtering and regex search. Passport.js auth, Joi-validated routes.",
    techStack: ["Node.js", "Express.js", "MongoDB", "Passport.js", "EJS"],
    github: "https://github.com/hrshagarwal/StayNest",
    link: "https://staynest-midq.onrender.com",
  },
  {
    title: "LoanSense-AI",
    tagline: "loan approval prediction",
    description:
      "KNN vs Logistic Regression vs Naive Bayes on 1,000+ loan records with 28 engineered features. Credit Score and DTI Ratio came out as the top predictors.",
    techStack: ["Python", "scikit-learn", "Pandas", "NumPy"],
    github: "https://github.com/hrshagarwal/LoanSense-AI",
  },
  {
    title: "SDN Testbed + mTLS",
    tagline: "research, IIT Jammu",
    description:
      "Under Prof. Sarada Prasad Gochhayat. I built the Ryu controller, an 11-switch / 50-host Mininet topology and the PKI for switch–controller TLS. A teammate added post-quantum (Kyber) key exchange.",
    techStack: ["Python", "Ryu", "Mininet", "OpenFlow", "TLS / PKI"],
    github: "https://github.com/hrshagarwal/Quantum-Safe-Traffic-Flow-Optimization-Using-SDN",
  },
];

const stackTape = [
  "Node.js",
  "Express",
  "PostgreSQL",
  "Redis",
  "Docker",
  "AWS Fargate",
  "S3",
  "Socket.IO",
  "PyTorch",
  "ONNX",
  "C++",
  "Python",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />

      <div className="py-6">
        <Marquee items={stackTape} color="lime" rotate={-2} />
      </div>

      <About />
      <Experience />

      <section id="projects" className="py-24 px-5 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <SectionHeading number="03" title="stuff I built" note="the good stuff ↓" color="pink" rotate={-3} />

          <div className="flex flex-col gap-14">
            {featuredProjects.map((project, index) => (
              <FeaturedProject key={project.name} project={project} index={index} />
            ))}
          </div>

          <h3 className="font-display font-extrabold text-3xl md:text-4xl text-paper mt-24 mb-8">
            smaller things <span className="font-hand text-2xl text-teal font-normal">(still proud)</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {otherProjects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <div className="py-6">
        <Marquee
          items={["open to SDE internships", "backend", "cloud", "ML", "IIT Jammu"]}
          color="pink"
          rotate={1.5}
          reverse
        />
      </div>

      <Skills />
      <Achievements />
      <Education />
      <Responsibilities />
      <Contact />
    </main>
  );
}
