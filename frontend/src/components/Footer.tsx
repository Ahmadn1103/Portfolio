import React from "react";
import { Twitter, Linkedin, Github } from "lucide-react";

// Removed "Contact" link from central nav
const navLinks = [];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-autonomy-darkBlue text-gray-400 py-12">
      <div className="container mx-auto px-6">
        {/* Top section: Logo, Nav, Social */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Left: Logo */}
          <div className="text-2xl font-bold text-white">
            Ahmad Noori <span className="text-autonomy-cyan">Portfolio</span>
          </div>

          {/* Center: Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm hover:text-autonomy-cyan transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right: Social Media Icons */}
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/ahmad-noori1103/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn" 
              className="hover:text-autonomy-cyan transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            {/* Added Contact link next to LinkedIn icon */}
            <a
              href="https://www.linkedin.com/in/ahmad-noori1103/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-autonomy-cyan transition-colors text-sm"
            >
              Contact
            </a>
            <a 
              href="https://github.com/Ahmadn1103" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub" 
              className="hover:text-autonomy-cyan transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Separator */}
        <hr className="border-t border-gray-700 mb-8" />

        {/* Bottom section: Contact Email */}
        <div className="text-center text-sm">
          &copy; {new Date().getFullYear()} Ahmad Noori. All rights reserved. | <a href="mailto:ahmadnoori1103@gmail.com" className="hover:text-autonomy-cyan transition-colors">ahmadnoori1103@gmail.com</a>
        </div>
      </div>
    </footer>
  );
};
