"use client";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Achievements", to: "education" }, // Education maps to Achievements loosely in structure
    { name: "Experience", to: "responsibilities" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="hero" smooth={true} duration={500} className="flex items-center gap-3 cursor-pointer">
          <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border border-primary/20">
             <Image 
                src="/images/my_photo.jpeg" 
                alt="Logo" 
                fill
                className="object-cover"
             />
          </div>
          <span className="text-primary font-bold text-xl tracking-tight">
            Harsh Agarwal
          </span>
        </Link>
        
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              className="text-sm font-medium text-muted-foreground hover:text-warm-orange cursor-pointer transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
