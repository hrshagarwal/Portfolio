import { IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://harshagarwal.vercel.app"),
  title: {
    default: "Harsh Agarwal | Backend Engineer & IIT Jammu",
    template: "%s | Harsh Agarwal",
  },
  description:
    "B.Tech Civil Engineering with Minor in CSE at IIT Jammu. Backend-focused engineer, Smart India Hackathon 2025 National Winner, and Software Development Intern at Brahmaputra Board (Ministry of Jal Shakti).",
  keywords: [
    "Harsh Agarwal",
    "IIT Jammu",
    "Backend Developer",
    "Full Stack Engineer",
    "Smart India Hackathon",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Machine Learning",
  ],
  authors: [{ name: "Harsh Agarwal" }],
  creator: "Harsh Agarwal",
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Harsh Agarwal | Backend Engineer & IIT Jammu",
    description:
      "SIH 2025 National Winner · Department Rank 1 at IIT Jammu · Backend Engineer building production government systems.",
    siteName: "Harsh Agarwal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Agarwal | Backend Engineer & IIT Jammu",
    description:
      "SIH 2025 National Winner · Department Rank 1 at IIT Jammu · Backend Engineer.",
  },
};

export const viewport = {
  themeColor: "#F8F0E3",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${ibmPlexSans.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
