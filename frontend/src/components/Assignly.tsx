import React, { useState } from "react";
import {
  CalendarPlus,
  CheckCircle2,
  Clock,
  BarChart2,
  ShieldCheck,
  LayoutGrid,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Link as LinkIcon,
} from "lucide-react";

type Item = {
  icon: React.ElementType;
  title: string;
  short: string;
  full: string;
};

const CONTRIBUTIONS: Item[] = [
  {
    icon: LayoutGrid,
    title: "Glassmorphic UI & Responsive Layout",
    short: "Dark, neon-accented design with polished micro-interactions.",
    full:
      "Built a responsive frontend using React, TypeScript, Tailwind CSS, and shadcn/ui. Implemented glassmorphism, animated gradients, and 3D hover effects for assignment cards while keeping accessibility in focus."
  },
  {
    icon: CalendarPlus,
    title: "One-Click Google Calendar Integration",
    short: "Instantly create calendar events from any assignment.",
    full:
      "Generated pre-filled Google Calendar event links with title, due date/time, duration, priority, and description so students can schedule work in a single click."
  },
  {
    icon: BarChart2,
    title: "Dashboard Metrics",
    short: "Real-time totals, due soon, overdue, and completion rate.",
    full:
      "Built a live dashboard summarizing workload: total assignments, completed count, due-soon items, and overdue tasks—auto-updating after CRUD actions."
  },
  {
    icon: CheckCircle2,
    title: "Smart Status System",
    short: "On Track, Due Soon, Overdue, Completed—color-coded and automatic.",
    full:
      "Auto-classified each assignment based on due date and completion flag. Added glowing status chips and optimistic UI updates for instant feedback."
  },
  {
    icon: Clock,
    title: "Intelligent Sorting & Filters",
    short: "Incomplete first, then by urgency; quick filters for views.",
    full:
      "Implemented priority-aware sorting (incomplete first, earliest due first) and quick filters (all, pending, completed) to keep critical work surfaced."
  },
  {
    icon: ShieldCheck,
    title: "Accounts & Security",
    short: "Auth + optional 2FA for secure data.",
    full:
      "Wired up secure authentication and optional two-factor flows. Ensured private, per-user assignment data with a clean session model."
  },
  {
    icon: Sparkles,
    title: "Delightful Micro-Animations",
    short: "Hover lift, pulse, glow, and smooth transitions.",
    full:
      "Used Framer Motion + Tailwind transitions for subtle motion: 3D tilts on cards, shimmering accents, and gentle pulses for status indicators."
  },
];

const SKILLS = [
  "React", "TypeScript", "Tailwind CSS", "shadcn/ui",
  "Framer Motion", "FastAPI", "PostgreSQL",
  "Google Calendar Integration", "Auth & 2FA", "UI/UX Design"
];

export const Assignly: React.FC = () => {
  const [expandAll, setExpandAll] = useState(false);

  return (
    <section className="py-16 md:py-24 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left Column */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-1 text-cyan-300">
              Assingly — Assignment & Productivity Tracker
            </h2>
            <p className="text-sm text-gray-400 mb-4">
              August - September · Personal project
            </p>

            <p className="text-gray-300 mb-4 text-lg leading-relaxed">
              Assingly helps students stay ahead of deadlines with a futuristic,
              glassmorphic interface, real-time dashboard metrics, smart statuses,
              and one-click Google Calendar integration.
            </p>

            {/* Project link */}
            <a
              href="https://ahmadn1103.databutton.app/assignly"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mb-6 rounded-xl border border-cyan-400/40 px-4 py-2 text-sm hover:border-cyan-400/70 hover:bg-cyan-400/10 transition"
            >
              <LinkIcon className="w-4 h-4" />
              Visit Assingly
            </a>

            {/* Controls */}
            <div className="flex items-center gap-3 mb-3">
              <p className="text-gray-300 text-lg font-medium">Key Contributions</p>
              <button
                onClick={() => setExpandAll(v => !v)}
                className="ml-auto inline-flex items-center gap-2 rounded-xl border border-cyan-400/40 px-3 py-1.5 text-sm hover:border-cyan-400/70 hover:bg-cyan-400/10 transition"
              >
                {expandAll ? (
                  <>Collapse All <ChevronUp className="w-4 h-4" /></>
                ) : (
                  <>Expand All <ChevronDown className="w-4 h-4" /></>
                )}
              </button>
            </div>

            {/* Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {CONTRIBUTIONS.map((item, idx) => (
                <ContributionCard key={idx} item={item} forceOpen={expandAll} />
              ))}
            </div>

            {/* Closing statement */}
            <p className="text-gray-300 mt-6 mb-3 text-lg leading-relaxed">
              My goal is to blend clarity and delight—shipping tools that feel fast,
              helpful, and motivating for students managing busy schedules.
            </p>

            {/* Skill pills */}
            <div className="flex flex-wrap gap-2">
              {SKILLS.map(s => (
                <span
                  key={s}
                  className="text-sm px-3 py-1 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

         {/* Right Column: Image (sticky on desktop) */}
          <div className="flex flex-col items-center justify-center md:sticky md:top-20">
            <img
              src="https://i.ibb.co/PzGD9yVB/Screenshot-2025-09-03-203130.png"
              alt="MockUp"
              className="w-full h-auto object-cover rounded-lg shadow-lg border-2 border-autonomy-cyan/50 animate-pulse-glow"
            />
            <a
              href="https://ahmadn1103.databutton.app/assignly"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 block text-center text-autonomy-cyan hover:underline"
            >
              Go to Assignly to see the platform in action
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

function ContributionCard({ item, forceOpen }: { item: Item; forceOpen: boolean }) {
  const [open, setOpen] = useState(false);
  const Icon = item.icon;
  const isOpen = forceOpen || open;

  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-cyan-400/40 transition">
      <div className="flex items-start gap-3">
        <div className="shrink-0 rounded-xl p-2 border border-white/10 bg-white/10">
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold">{item.title}</h3>
          <p className="text-gray-300 text-sm">{item.short}</p>

          <div
            className={`overflow-hidden transition-[max-height] duration-300 ${
              isOpen ? "max-h-40" : "max-h-0"
            }`}
          >
            <p className="text-gray-400 text-sm mt-2">{item.full}</p>
          </div>

          <button
            onClick={() => setOpen(v => !v)}
            className="mt-2 inline-flex items-center gap-1 text-xs text-cyan-300 hover:underline"
          >
            {isOpen ? (
              <>Show less <ChevronUp className="w-3 h-3" /></>
            ) : (
              <>More <ChevronDown className="w-3 h-3" /></>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
