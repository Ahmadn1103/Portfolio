import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const heroBackgroundImageUrl =
  "https://static.databutton.com/public/91296e1e-e415-41b6-bc55-4aac61d9840d/hero";

export const HeroSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const smoothOptions = { damping: 20, stiffness: 150, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, smoothOptions);
  const smoothMouseY = useSpring(mouseY, smoothOptions);

  const transformBgX = useTransform(smoothMouseX, [-500, 500], [-30, 30]);
  const transformBgY = useTransform(smoothMouseY, [-500, 500], [-15, 15]);
  const transformScale = useTransform(
    smoothMouseX,
    [-500, 0, 500],
    [1.2, 1.1, 1.2]
  );

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.2, duration: 0.8, ease: "easeOut" },
    },
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden px-4"
    >
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ x: transformBgX, y: transformBgY, scale: transformScale }}
      >
        <img
          src={heroBackgroundImageUrl}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Smaller on mobile, scales up on larger screens */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold uppercase text-white leading-tight filter drop-shadow-[0_0_45px_rgba(34,211,238,0.9)]">
          Building intelligent apps that work in the real world.
        </h1>

        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto filter drop-shadow-[0_0_25px_rgba(34,211,238,0.8)]">
          AI Software Developer • Full-Stack Engineer • Mobile App Builder
        </p>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap gap-3 mt-8 justify-center">
          <button
            onClick={() => scrollToSection("about")}
            className="px-6 py-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition text-sm sm:text-base"
          >
            About
          </button>

          <button
            onClick={() => scrollToSection("projects")}
            className="px-6 py-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition text-sm sm:text-base"
          >
            Projects
          </button>

           <button
            onClick={() => scrollToSection("experience")}
            className="px-6 py-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition text-sm sm:text-base"
          >
            Experience & Skills
          </button>
        </div>

        {/* Impact Badges */}
        <div className="flex flex-wrap gap-3 mt-8 justify-center">
          <div className="px-3 py-1.5 bg-white/10 text-white rounded-lg backdrop-blur-md text-xs sm:text-sm border border-white/10 shadow-md">
            ⚡ Built 6+ Production-Ready Apps
          </div>
          <div className="px-3 py-1.5 bg-white/10 text-white rounded-lg backdrop-blur-md text-xs sm:text-sm border border-white/10 shadow-md">
            🤖 AI Software Developer Intern @ Evolve Partners
          </div>
          <div className="px-3 py-1.5 bg-white/10 text-white rounded-lg backdrop-blur-md text-xs sm:text-sm border border-white/10 shadow-md">
            📱 Lead Engineer — Cross-Platform Mobile App
          </div>
        </div>
      </motion.div>
    </section>
  );
};
