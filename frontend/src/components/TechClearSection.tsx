import React from "react";
import { Lock } from "lucide-react";

export const TechClearSection: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* LEFT COLUMN — TEXT */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-autonomy-cyan">
              Tech Clear — Software Engineer Intern
            </h2>
            <p className="text-sm text-gray-400 mb-4">Dec 2025 – Present · Remote</p>

            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              This project is currently under development. Due to confidentiality (NDA),
              details about my responsibilities cannot be shared yet.  
              Once the platform is publicly released, a full breakdown of my work will
              be added to this portfolio.
            </p>

            <p className="text-gray-400 italic">
              “Confidential project — details will be added after release.”
            </p>
          </div>

          {/* RIGHT COLUMN — IMAGE (Sticky like other components) */}
          <div className="flex flex-col items-center justify-center md:sticky md:top-20">

            <div className="relative w-full">
              {/* Lock Icon */}
              <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md p-2 rounded-full border border-white/10">
                <Lock className="w-6 h-6 text-autonomy-cyan" />
              </div>

              {/* Coming Soon Image */}
              <img
                src="https://static.databutton.com/public/91296e1e-e415-41b6-bc55-4aac61d9840d/under development.png" 
                alt="Tech Clear Confidential"
                className="w-full h-auto object-cover rounded-lg shadow-lg border-2 border-autonomy-cyan/50 animate-pulse-glow"
              />
            </div>

            <p className="mt-3 text-gray-500 text-xs">
              Confidential Project • Coming Soon
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};
