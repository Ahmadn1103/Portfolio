import React, { useState } from "react";
import {
  Smartphone, Upload, Database, Lock, Image, CloudUpload, ShieldCheck,
  Server, FolderOpen, FileText, ChevronDown, ChevronUp
} from "lucide-react";

type Item = {
  icon: React.ElementType;
  title: string;
  short: string;
  full: string;
};

const SALAM_ITEMS: Item[] = [
  {
    icon: Smartphone,
    title: "Cross-Platform Mobile App Development",
    short: "iOS + Android app using Expo, React Native, TypeScript.",
    full:
      "Led development of Salam Consulting’s mobile app using Expo + React Native, building the full client application workflow, including onboarding, job applications, booking, and document upload flows."
  },
  {
    icon: Upload,
    title: "Resume & Document Upload Pipelines",
    short: "Secure upload system with Firebase Storage.",
    full:
      "Built a secure upload pipeline allowing users to upload resumes, files, and profile data, integrated with Firebase Storage and Firestore metadata tracking for reliability."
  },
  {
    icon: Lock,
    title: "Authentication & User Onboarding",
    short: "Firebase Auth with password reset and secure sessions.",
    full:
      "Implemented Firebase Auth with secure login, sign-up, password reset, and protected routes. Added role-based access control and session persistence across devices."
  },
  {
    icon: Image,
    title: "Native Module Integration",
    short: "Expo ImagePicker, FileSystem, SecureStore.",
    full:
      "Integrated native modules including Image Picker, FileSystem, SecureStore to handle sensitive user data, offline caching, and safe temporary storage."
  },
  {
    icon: CloudUpload,
    title: "OTA Updates & App Store Delivery",
    short: "Automated updates using EAS Build + Submit.",
    full:
      "Configured EAS Build, OTA (over-the-air) updates, and App Store/Play Store pipelines. Reduced deployment cycle from days to minutes per version."
  },
  {
    icon: Server,
    title: "Database Schema & Firestore Workflows",
    short: "Built scalable NoSQL schemas for user + job flows.",
    full:
      "Designed Firestore schema to support real-time job application forms, history tracking, notifications, session recovery, and multi-step onboarding."
  },
  {
    icon: ShieldCheck,
    title: "Secure Architecture",
    short: "Protected routes, field validation, and secure storage.",
    full:
      "Added security features including validation, protected screens, offline-safe storage patterns, and robust error recovery states."
  }
];

const SALAM_SKILLS = [
  "Expo", "React Native", "TypeScript", "Firebase Auth", "Firestore",
  "Firebase Storage", "EAS Build", "SecureStore", "ImagePicker", "UI Design"
];

export const SalamConsultingSection: React.FC = () => {
  const [expandAll, setExpandAll] = useState(false);

  return (
    <section id="salam" className="py-16 md:py-24 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* Left Column */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-autonomy-cyan">
              Salam Consulting – Lead Software Engineer (iOS + Android)
            </h2>
            <p className="text-sm text-gray-400 mb-4">Jun 2025 – Present · Remote</p>

            <p className="text-gray-300 mb-4 text-lg leading-relaxed">
              Leading development of Salam Consulting’s cross-platform mobile app, enabling
              users to apply for jobs, upload resumes, book appointments, and manage their
              onboarding process. Built using Expo + React Native with Firebase backend services.
            </p>

            {/* Button for Expand All */}
            <div className="flex items-center gap-3 mb-3">
              <p className="text-gray-300 text-lg font-medium">Key Contributions</p>
              <button
                onClick={() => setExpandAll(v => !v)}
                className="ml-auto inline-flex items-center gap-2 rounded-xl border border-autonomy-cyan/40 px-3 py-1.5 text-sm hover:border-autonomy-cyan/70 hover:bg-autonomy-cyan/10 transition"
              >
                {expandAll ? <>Collapse All <ChevronUp className="w-4 h-4" /></> :
                              <>Expand All <ChevronDown className="w-4 h-4" /></>}
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {SALAM_ITEMS.map((c, i) => (
                <ContributionCard key={i} item={c} forceOpen={expandAll} />
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {SALAM_SKILLS.map(s => (
                <span
                  key={s}
                  className="text-sm px-3 py-1 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center justify-center md:sticky md:top-20">
            <img
              src="https://static.databutton.com/public/91296e1e-e415-41b6-bc55-4aac61d9840d/under development.png"
              alt="Salam App"
              className="w-full h-auto object-cover rounded-lg shadow-lg border-2 border-autonomy-cyan/50 animate-pulse-glow"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

function ContributionCard({
  item,
  forceOpen
}: {
  item: Item;
  forceOpen: boolean;
}) {
  const [open, setOpen] = useState(false);
  const Icon = item.icon;
  const isOpen = forceOpen || open;

  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-autonomy-cyan/40 transition">
      <div className="flex items-start gap-3">
        <div className="shrink-0 rounded-xl p-2 border border-white/10 bg-white/10">
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold">{item.title}</h3>
          <p className="text-gray-300 text-sm">{item.short}</p>

          <div className={`overflow-hidden transition-[max-height] duration-300 ${isOpen ? "max-h-40" : "max-h-0"}`}>
            <p className="text-gray-400 text-sm mt-2">{item.full}</p>
          </div>

          <button
            onClick={() => setOpen(v => !v)}
            className="mt-2 inline-flex items-center gap-1 text-xs text-autonomy-cyan hover:underline"
          >
            {isOpen ? <>Show less <ChevronUp className="w-3 h-3" /></> :
                      <>More <ChevronDown className="w-3 h-3" /></>}
          </button>
        </div>
      </div>
    </div>
  );
}
