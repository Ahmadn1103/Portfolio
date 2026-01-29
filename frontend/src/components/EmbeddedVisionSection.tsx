import React, { useState } from "react";
import {
  Bot, BrainCircuit, LineChart, ShieldAlert, Rocket, Boxes, Layout,
  MessageSquare, ChevronDown, ChevronUp
} from "lucide-react";

type Item = {
  icon: React.ElementType;
  title: string;
  short: string;
  full: string;
};

const CONTRIBUTIONS: Item[] = [
  {
    icon: BrainCircuit,
    title: "Custom AI Agents (Full Suite)",
    short: "Built agents for M&A Advisor, Smart Valuation, Risk Analyst, Growth Strategist.",
    full:
      "Built custom AI agents for the M&A Advisor, Smart Valuation, Risk Analyst, and Growth Strategist tools, enabling real-time decision support across the acquisition lifecycle."
  },
  {
    icon: MessageSquare,
    title: "Embedded AI Chat",
    short: "Context-aware assistant for on-demand insights and follow-ups.",
    full:
      "Developed an embedded AI chat assistant to provide contextual, on-demand insights and follow-up analysis for all tools within the platform."
  },
  {
    icon: LineChart,
    title: "Smart Valuation Logic",
    short: "DCF, SDE, and comps with dynamic models + real-time industry data.",
    full:
      "Engineered valuation logic for Smart Valuation to run DCF, SDE, and comparable deal analyses using dynamic financial models and real-time industry data."
  },
  {
    icon: ShieldAlert,
    title: "Risk Analyst (Red Flags & Scoring)",
    short: "Detects seller/financial/customer risks; assigns scores & guidance.",
    full:
      "Programmed the Risk Analyst to detect red flags in seller motivations, financials, and customer concentration, assigning risk scores and follow-up guidance."
  },
  {
    icon: Rocket,
    title: "Growth Strategist",
    short: "90-day roadmaps & tailored strategies by goals, team, and budget.",
    full:
      "Built the Growth Strategist to generate 90-day roadmaps and tailored expansion strategies based on post-acquisition goals, team size, and budget."
  },
  {
    icon: Boxes,
    title: "Modular Architecture",
    short: "Designed for rapid scale across industries and easy embedding.",
    full:
      "Architected the Intelligence Suite for modularity, ensuring rapid scalability across industries and seamless embedding into client workflows."
  },
  {
    icon: Layout,
    title: "Dashboards & AI Workflows",
    short: "Automates diligence, surfaces targets, supports negotiations.",
    full:
      "Designed user-friendly dashboards and AI workflows that automate due diligence, surface acquisition targets, and support negotiation strategies."
  }
];

const SKILLS = [
  "AI Agents","Realtime Decision Support","DCF/SDE/Comps","Risk Scoring",
  "Roadmapping","Workflow Automation","React","Python","FastAPI","Tailwind CSS"
];

export const EmbeddedVisionSection: React.FC = () => {
  const [expandAll, setExpandAll] = useState(false);

  return (
    <section className="py-16 md:py-24 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left Column */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-1 text-autonomy-cyan">
              BizSphere Intelligence Suite
            </h2>
            <p className="text-sm text-gray-400 mb-4">Apr 2025 – May 2025 · Associated with BizSphere</p>

            <p className="text-gray-300 mb-4 text-lg leading-relaxed">
              Developed the AI agents behind BizSphere.AI’s Intelligence Suite — an advanced M&A advisory
              platform that streamlines deal strategy, valuation, risk analysis, and post-close growth planning.
            </p>

            {/* Controls */}
            <div className="flex items-center gap-3 mb-3">
              <p className="text-gray-300 text-lg font-medium">Key Contributions</p>
              <button
                onClick={() => setExpandAll(v => !v)}
                className="ml-auto inline-flex items-center gap-2 rounded-xl border border-autonomy-cyan/40 px-3 py-1.5 text-sm hover:border-autonomy-cyan/70 hover:bg-autonomy-cyan/10 transition"
              >
                {expandAll ? <>Collapse All <ChevronUp className="w-4 h-4" /></> : <>Expand All <ChevronDown className="w-4 h-4" /></>}
              </button>
            </div>

            {/* Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {CONTRIBUTIONS.map((item, idx) => (
                <ContributionCard key={idx} item={item} forceOpen={expandAll} />
              ))}
            </div>

            {/* Closing statement (kept from your text style) */}
            <p className="text-gray-300 mt-6 mb-3 text-lg leading-relaxed">
              I believe in modular, human-centered design. Every agent I build is explainable, scalable,
              and seamlessly embedded into business environments—supporting high-stakes decisions in real time.
            </p>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              My mission is simple: to build smart software that makes smarter people even more powerful.
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

          {/* Right Column: Image (sticky) */}
          <div className="flex items-start justify-center md:sticky md:top-20">
            <img
              src="https://static.databutton.com/public/91296e1e-e415-41b6-bc55-4aac61d9840d/Pickaxe.png"
              alt="BizSphere Intelligence Suite"
              className="w-full h-auto object-cover rounded-lg shadow-lg border-2 border-autonomy-cyan/50 animate-pulse-glow"
            />
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
            {isOpen ? <>Show less <ChevronUp className="w-3 h-3" /></> : <>More <ChevronDown className="w-3 h-3" /></>}
          </button>
        </div>
      </div>
    </div>
  );
}
