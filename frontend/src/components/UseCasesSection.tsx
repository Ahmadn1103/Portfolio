import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Timer, CopyPlus, FileClock} from "lucide-react"; // Example icons

// Define the structure for a use case
interface UseCase {
  icon: React.ElementType;
  title: string;
  description: string;
  imageUrl?: string; // Optional image URL for the card
}

const useCases: UseCase[] = [
  {
    icon: CopyPlus,
    title: "Flow Counter - Sleek Counter App",
    description: "A minimalist productivity timer built in under 24 hours for deep focus sessions. Designed in Figma with a clean, image-based UI. Built using Python and CustomTkinter with canvas + image buttons. Countdown displayed visually — no text distractions. Fully offline, lightweight, and packaged as a standalone .exe. Optimized for speed, simplicity, and hackathon-ready deployment.",
    imageUrl: "https://static.databutton.com/public/91296e1e-e415-41b6-bc55-4aac61d9840d/flowCounter.png",
  },
  {
    icon: Timer,
    title: "Focus Buddy - Elegant Timer App",
    description:"Lightweight Pomodoro timer built for deep focus and distraction-free work. Designed in Figma with a clean, minimalist UI. Developed in Python using CustomTkinter with canvas-based image buttons. Countdown is visual-only, with no text clutter. Runs fully offline, launches instantly, and has zero external dependencies. Ideal for fast-paced productivity or hackathon use.",
    imageUrl: "https://static.databutton.com/public/91296e1e-e415-41b6-bc55-4aac61d9840d/focusBuddy.png",
  },
  {
    icon: FileClock,
    title: "Tap Time - Clock in Management Systems",
    description: "An automated clock-in app for tracking work hours via Google Sheets. Built with Python, Flask, and Kivy for a smooth, mobile-friendly UI. Uses Google Apps Script to log times in real-time. Hosted on Oracle Cloud with smart formula pairing. Fully offline, lightweight, and ideal for small teams. Designed for speed, accuracy, and seamless deployment.",
    imageUrl:"https://static.databutton.com/public/91296e1e-e415-41b6-bc55-4aac61d9840d/tapTime.png",
  },
];

export const UseCasesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-autonomy-cyan">
          Software Development 
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card
              key={index}
              className="bg-autonomy-darkBlue border-autonomy-cyan/20 text-white transition-all duration-300 hover:shadow-[0_0_20px_3px_rgba(46,205,253,0.3)] hover:border-autonomy-cyan/60 hover:-translate-y-1 h-full"
            >
              <CardHeader className="items-center text-center">
                {/* Icon Placeholder */}
                <div className="mb-4 rounded-full bg-autonomy-navy p-3 border border-autonomy-cyan/30">
                  <useCase.icon className="h-8 w-8 text-autonomy-neon" />
                </div>
                <CardTitle className="text-xl font-semibold text-autonomy-cyan">
                  {useCase.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-300">
                {/* Render image if available */}
                {useCase.imageUrl && (
                  <img
                    src={useCase.imageUrl}
                    alt={`${useCase.title} screenshot`}
                    className="w-full h-40 object-contain rounded-md mb-4 shadow-md"
                  />
                )}
                <p>{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
