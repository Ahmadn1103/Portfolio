import React from "react";

export const FeatureTextRowsSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-16 md:py-24 text-white bg-[linear-gradient(theme(colors.autonomy.cyan/0.05)_1px,transparent_1px),linear-gradient(90deg,theme(colors.autonomy.cyan/0.05)_1px,transparent_1px)] bg-[size:40px_40px]"
    >
      <div className="container mx-auto px-6 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">

          {/* === Column 1: Experience & Skills === */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-autonomy-cyan">
              Experience & Skills
            </h3>

            <div className="space-y-6 text-gray-300 leading-relaxed">

              {/* ==== Work Experience Summary ==== */}
              <div>
                <p className="font-semibold text-lg text-gray-200">
                  Work Experience Summary
                </p>

                <p>
                  <strong>Evolve Partners — AI Software Developer Intern</strong><br />
                  Engineered core platform infrastructure using FastAPI, Stripe, and Firebase.
                  Built authentication & subscription workflows, automated billing via Stripe webhooks,
                  and developed a credit-based API execution system that increased reliability 
                  and eliminated invalid transactions. Created a real-time admin dashboard in React
                  for subscription, revenue, and user analytics.
                </p>

                <p>
                  <strong>Tech Clear — Software Engineer Intern</strong><br />
                  Contributed to confidential AI software projects involving workflow automation,
                  backend integrations, data ingestion, and AI experimentation tools. Assisted in
                  building internal pipelines used by engineering teams to streamline model testing
                  and prototyping.
                </p>

                <p>
                  <strong>Salam Consulting — Lead Software Engineer Intern</strong><br />
                  Leading development of a cross-platform iOS/Android mobile app using Expo, React Native,
                  TypeScript, and Firebase. Built secure authentication, file-upload pipelines,
                  Firestore schemas, native modules (ImagePicker, SecureStore), and delivered OTA updates
                  through EAS Build + Submit.
                </p>
              </div>

              {/* ==== Skills ==== */}
              <div>
                <p className="font-semibold text-lg text-gray-200">
                  Technical Skills
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Languages:</strong> Python, JavaScript, TypeScript, Java, SQL, Bash</li>
                  <li><strong>Frontend:</strong> React, React Native, Tailwind CSS, shadcn/ui, Framer Motion</li>
                  <li><strong>Backend:</strong> FastAPI, Firebase, Stripe APIs, REST APIs</li>
                  <li><strong>Cloud:</strong> AWS, Firebase, Oracle Cloud</li>
                  <li><strong>Tools:</strong> Git, Figma, Linux, MacOS, Windows</li>
                </ul>
              </div>

              {/* ==== Certifications ==== */}
              <div>
                <p className="font-semibold text-lg text-gray-200">
                  Certifications
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>CompTIA A+</strong> — December 2024</li>
                </ul>
              </div>

            </div>
          </div>

          {/* === Column 2: Resume Thumbnail === */}
          <div className="flex items-center justify-center">
            <img
              src="https://static.databutton.com/public/91296e1e-e415-41b6-bc55-4aac61d9840d/resume v5"
              alt="Ahmad Noori Resume"
              className="w-full max-w-lg h-auto rounded-lg shadow-lg border-2 border-autonomy-cyan/50 animate-pulse-glow object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
