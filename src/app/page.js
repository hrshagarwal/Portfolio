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
    title: "PodShip — Self-Hosted Deployment Platform",
    year: "2026",
    description:
      "A Vercel-style deployment platform. Paste a GitHub repo URL and PodShip builds it in an isolated container on AWS, uploads the output to S3 and serves the site on its own subdomain, with build logs streamed live to the browser.",
    highlights: [
      "Each build runs in an isolated Docker container launched as an AWS ECS Fargate task; the image lives in ECR and the build output is uploaded to S3.",
      "Subdomain-routing reverse proxy that streams files from S3 instead of buffering them in memory, so every project is served from its own subdomain.",
      "Live build logs pushed through per-project Redis Pub/Sub channels and Socket.IO rooms, so each viewer only sees their own project's logs.",
      "Debugged Fargate tasks that kept billing after builds finished; traced it to an open Redis connection and fixed it.",
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "Docker",
      "AWS ECS Fargate",
      "S3",
      "Redis Pub/Sub",
      "Socket.IO",
    ],
    github: "https://github.com/hrshagarwal/PodShip",
    link: null,
    youtube: "zV1hY8AhBwg",
    mediaBg: "#000",
    status: "Demo Video",
  },
  {
    title: "ProxZero — Face and Voice Recognition Attendance",
    year: "2026",
    description:
      "An attendance platform that replaces gameable roll-call with two biometric signals. A teacher points a camera at the room — or records ten seconds of the class speaking — and ProxZero resolves who showed up, surfacing every result for review before anything is written to the log.",
    highlights: [
      "Face pipeline built on dlib — HOG detection, 68-point landmark alignment, and a ResNet mapping each face to a 128-dimensional embedding — with models cached as Streamlit resources so the network loads once rather than on every rerun.",
      "Matching gated on two independent checks: an L2 distance ceiling tightened from the 0.6 community default to 0.42 after 0.6 proved loose enough to mark the wrong student present, plus a 0.08 nearest-rival margin that abstains on look-alike students instead of guessing between them.",
      "Voice mode using Resemblyzer 256-d speaker embeddings over Librosa 30 dB silence segmentation, scoring one classroom recording into per-speaker chunks at 0.65 cosine similarity and judging each student on their clearest utterance.",
      "5-table PostgreSQL schema on Supabase with bcrypt-hashed teacher logins and QR-code self-enrollment; replaced N+1 queries on the teacher dashboard with a single embedded-join query.",
    ],
    techStack: [
      "Python",
      "Streamlit",
      "dlib",
      "Resemblyzer",
      "Librosa",
      "Supabase (PostgreSQL)",
    ],
    github: "https://github.com/hrshagarwal/ProxZero",
    link: "https://proxzero.streamlit.app",
    status: "Live",
    demo: "threshold",
  },
  {
    title: "CleanPinkCity — AI Waste Sorting and Route Planning",
    year: "Oct 2026",
    description:
      "A web app for Kardhani ward (Jaipur), built on my solid-waste-management field study. It tells residents which bin a piece of waste goes in, plans the ward's garbage-collection routes, and maps complaints.",
    highlights: [
      "Framework-free web app in 11 JavaScript modules — bin sorter, route maps and complaint map — deployed on Vercel.",
      "A CNN (94.0% test accuracy) runs fully in the browser through ONNX Runtime Web (WebAssembly), so photos never leave the device and the demo works offline.",
      "Garbage collection modelled on the ward's OpenStreetMap network (399 junctions, 31.7 km of street) as a Chinese Postman problem in NetworkX: a 44.1 km route split into 5 balanced beats of about 6 km each.",
    ],
    techStack: [
      "JavaScript",
      "ONNX Runtime Web",
      "PyTorch",
      "Python",
      "OSMnx",
      "NetworkX",
    ],
    github: "https://github.com/hrshagarwal/clean-pink-city",
    link: "https://clean-pink-city-web.vercel.app",
    image: "/images/cleanpinkcity-routes.gif",
    mediaBg: "#EDE7D9",
    imageAlt:
      "Animated map of Kardhani ward's streets being covered by the Chinese Postman collection route",
    status: "Live",
  },
  {
    title: "Government Productivity Management System",
    year: "2025 – Present",
    description:
      "National Winner of Smart India Hackathon 2025. A performance management system for the Ministry of Jal Shakti that replaces manual annual appraisals with KPI scores computed from government system records. I'm now taking it to production as backend developer during my internship at Brahmaputra Board.",
    highlights: [
      "REST APIs in Node.js and Express.js over PostgreSQL and MongoDB that ingest records from eOffice (file movement), AEBAS (biometric attendance) and PFMS (finance).",
      "KPI scoring engine with separate metrics for four officer tracks: Administrative, Technical, Field and Finance.",
      "Single sign-on through e-Pramaan/eOffice OAuth, with JWT sessions and hierarchy-aware RBAC across 6+ role levels.",
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "OAuth 2.0",
      "JWT",
    ],
    github: null,
    link: null,
    status: "SIH 2025 Winner · Going to production",
  },
];

const otherProjects = [
  {
    title: "StayNest — Accommodation Marketplace",
    description:
      "An Airbnb-style listings and reviews app on the MEN stack (MVC), started from a course project. I added server-side filtering and regex search, with Passport.js auth and Joi-validated routes.",
    techStack: ["Node.js", "Express.js", "MongoDB", "Passport.js", "EJS"],
    github: "https://github.com/hrshagarwal/StayNest",
    link: "https://staynest-midq.onrender.com",
  },
  {
    title: "LoanSense-AI — Loan Approval Prediction",
    description:
      "Trained and compared KNN, Logistic Regression and Naive Bayes on 1,000+ loan records with 28 engineered features, using Accuracy, F1 and ROC-AUC; Credit Score and DTI Ratio came out as the top predictors.",
    techStack: ["Python", "scikit-learn", "Pandas", "NumPy"],
    github: "https://github.com/hrshagarwal/LoanSense-AI",
  },
  {
    title: "SDN Testbed with mTLS",
    description:
      "Research project under Prof. Sarada Prasad Gochhayat at IIT Jammu. I built the Ryu SDN controller, an 11-switch / 50-host Mininet topology and the PKI for TLS between switches and controller; a teammate integrated post-quantum (Kyber) key exchange.",
    techStack: ["Python", "Ryu", "Mininet", "OpenFlow", "TLS / PKI"],
    github:
      "https://github.com/hrshagarwal/Quantum-Safe-Traffic-Flow-Optimization-Using-SDN",
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
          subtitle="Systems I've designed and shipped — from a cloud deployment platform to government backends and in-browser ML."
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
