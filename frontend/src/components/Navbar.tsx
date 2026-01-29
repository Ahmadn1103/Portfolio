import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

// Smooth Scroll Helper
const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ease-in-out ${
        isScrolled ? "bg-autonomy-navy/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4 md:px-6">

        {/* Logo */}
        <a
          href="#"
          onClick={() => scrollToSection("top")}
          className="text-xl md:text-2xl font-bold text-white hover:text-autonomy-cyan transition-colors whitespace-nowrap"
        >
          Ahmad Noori
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-white hover:text-autonomy-cyan transition-colors"
          >
            About
          </button>

          <button
            onClick={() => scrollToSection("experience")}
            className="text-white hover:text-autonomy-cyan transition-colors"
          >
            Experience
          </button>

          <button
            onClick={() => scrollToSection("projects")}
            className="text-white hover:text-autonomy-cyan transition-colors"
          >
            Projects
          </button>

          <a
            href="https://www.linkedin.com/in/ahmad-noori1103/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="bg-autonomy-neon text-autonomy-navy hover:bg-autonomy-cyan hover:shadow-[0_0_15px_5px_rgba(0,255,255,0.5)] transition-all duration-300"
              size="sm"
            >
              Contact
            </Button>
          </a>
        </div>

        {/* Mobile "Menu" Links */}
        <div className="flex md:hidden items-center space-x-4 text-sm">
          <button
            onClick={() => scrollToSection("about")}
            className="text-white hover:text-autonomy-cyan transition-colors"
          >
            About
          </button>

          <button
            onClick={() => scrollToSection("experience")}
            className="text-white hover:text-autonomy-cyan transition-colors"
          >
            Exp
          </button>

          <button
            onClick={() => scrollToSection("projects")}
            className="text-white hover:text-autonomy-cyan transition-colors"
          >
            Work
          </button>
        </div>
      </div>
    </nav>
  );
};
