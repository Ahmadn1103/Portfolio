import React from "react";
import { User } from "lucide-react";

const imageURL =
  "https://static.databutton.com/public/91296e1e-e415-41b6-bc55-4aac61d9840d/image.jpeg";

export const GlobalMappingSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* === Left Column — Photo (smaller + cleaner) === */}
         <div className="flex items-center justify-center">
            <img
              src={imageURL}
              alt="Ahmad Noori"
              className="w-full max-w-lg h-auto rounded-lg shadow-lg border-2 border-autonomy-cyan/50 animate-pulse-glow object-contain"
            />
          </div>

          {/* === Right Column — New Bio === */}
          <div className="text-center md:text-left">

            <div className="flex items-center justify-center md:justify-start mb-4">
              <User className="h-7 w-7 md:h-8 md:w-8 mr-3 text-autonomy-cyan" />
              <h2 className="text-3xl md:text-4xl font-bold text-autonomy-cyan m-0">
                About Me – Ahmad Noori
              </h2>
            </div>

            {/* Shorter, High-Impact Bio */}
            <div className="text-gray-300 text-lg leading-relaxed space-y-4">

              <p>
                I’m Ahmad — a Full-Stack Software Engineer specializing in
                <strong> React, React Native, FastAPI, Firebase, Stripe,</strong> and
                scalable cloud systems. I build intelligent, production-ready
                applications that connect clean UI with powerful backend infrastructure.
              </p>

              <p>
                At <strong>Evolve Partners</strong>, I engineered core AI platform systems —
                including authentication, subscription workflows, a credit-based API
                execution engine, automated Stripe billing, and a real-time admin
                dashboard used in early-stage deployment.
              </p>

              <p>
                I currently work at <strong>Tech Clear</strong>, contributing to
                confidential AI software involving automated workflows, data ingestion,
                model experimentation, and backend integrations.
              </p>

              <p>
                As Lead Software Engineer for <strong>Salam Consulting</strong>, I built a
                full cross-platform app (iOS, Android, Web) with secure auth, file upload
                pipelines, Firestore schemas, native modules, and end-to-end deployment
                through EAS Build + Submit.
              </p>

              <p>
                I love designing fast, clean UIs — and building the systems that power
                them.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
