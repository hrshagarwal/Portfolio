import {
  Bricolage_Grotesque,
  Space_Grotesk,
  Caveat,
  Space_Mono,
} from "next/font/google";
import "./globals.css";

// Headings: chunky and a bit quirky
const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  display: "swap",
});

// Body text
const spaceGrotesk = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

// Handwritten notes (same feel as my doodle decks)
const caveat = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

// Tags, terminal, code
const spaceMono = Space_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://harshagarwaliitj.vercel.app"),
  title: {
    default: "Harsh Agarwal | Backend Engineer & IIT Jammu",
    template: "%s | Harsh Agarwal",
  },
  description:
    "B.Tech Civil Engineering with Minor in CSE at IIT Jammu. Backend-focused engineer, Smart India Hackathon 2025 National Winner, and Software Developer Intern at Brahmaputra Board (Ministry of Jal Shakti).",
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
    "Docker",
    "AWS",
    "Redis",
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
  themeColor: "#0D0D0F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" style={{ colorScheme: "dark" }}>
      <body
        className={`${bricolage.variable} ${spaceGrotesk.variable} ${caveat.variable} ${spaceMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
