import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Briefcase, Clapperboard, LoaderCircle} from "lucide-react"; // Example icons

// Define the structure for a use case
interface UseCase {
  icon: React.ElementType;
  title: string;
  description: string;
  imageUrl?: string; // Optional image URL for the card
}

const useCases: UseCase[] = [
  {
    icon: Briefcase,
    title: (
      <a
        href="https://ahmadn1103.databutton.app/reliability-appliance-services"
        target="_blank"
        relf="noopener noreferrer"
        className="hove:underline text-cyan-500"
        >
        Click Me: Business Website
        </a>
      ),
    description: "A glowing HVAC business website designed to showcase services and convert visitors. Developed with React, Tailwind CSS, and Shadcn UI. Features glowing service cards, animated buttons, and a clean, mobile-friendly layout. Fully functional contact form sends requests directly to the business email. Hosted on AWS with fast load speeds, SEO optimization, and production-ready deployment.",
    imageUrl: "https://static.databutton.com/public/91296e1e-e415-41b6-bc55-4aac61d9840d/ras.png",
  },
  {
    icon: Clapperboard,
    title: "Portfilo",
    description: "A sleek portfolio website showcasing my AI and full-stack development projects. Built with React, Tailwind CSS, and Framer Motion, featuring an animated background, responsive layout, and immersive hero section. Highlights key projects, internship experience, and the BizSphere Intelligence Suite. Designed for scalability and deployed via Databutton for fast, cloud-based access.",
    imageUrl:"https://static.databutton.com/public/91296e1e-e415-41b6-bc55-4aac61d9840d/portfolio.png",
  },
    {
    icon: LoaderCircle,
    title:(
      <a
        href="https://ahmadn1103.databutton.app/worklog-io"
        target="blank"
        relf="noopener noreferrer"
        className="hove:underline text-cyan-500"
        >
        Click Me: Worklog.io
      </a>
    ),
    description: "Worklog.io is here — clean, fast, and built for focus. I just launched a minimalist dashboard that helps you log daily notes, reflect with intention, and send Gmail-ready summaries in one click. Designed with React, Tailwind, and Framer Motion, it blends sleek visuals, glowing UI, and smooth email integration. A productivity flow that looks good and works even better. 🧠📩",
    imageUrl:"https://static.databutton.com/public/91296e1e-e415-41b6-bc55-4aac61d9840d/PC.png",
  },
];

export const WebDev: React.FC = () => {
  return (
    <section className="py-16 md:py-24 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-autonomy-cyan">
          Web Development 
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
