import React, { useState } from "react";
import {
  Webhook, CreditCard, Settings, MessageSquare, ShieldCheck,
  FileStack, Gauge, LineChart, Boxes, Bot, FileText, Rocket,
  Layout, Sparkles, ChevronDown, ChevronUp, Link as LinkIcon
} from "lucide-react";

type Item = {
  icon: React.ElementType;
  title: string;
  short: string;
  full: string;
};

const CONTRIBUTIONS: Item[] = [
  {
    icon: Webhook,
    title: "Stripe API & Webhooks Integration",
    short: "Automated billing, tiers, and access via event-driven webhooks.",
    full:
      "Stripe API & Webhooks Integration: Automated billing and subscription management through Stripe’s API and event-driven webhooks. Implemented dynamic tier-based access control, streamlining payments and user permissions."
  },
  {
    icon: CreditCard,
    title: "Credit System Implementation",
    short: "Deduct credits pre-execution; hard-stop on insufficient balance.",
    full:
      "Credit System Implementation: Designed a credit-based usage model where credits were deducted before API execution. Added safeguards that halted processing if insufficient credits remained, ensuring predictable cost control and transparent billing for users."
  },
  {
    icon: Settings,
    title: "Admin Panel Creation",
    short: "Manage users, tiers, revenue, plan changes, and invoicing.",
    full:
      "Admin Panel Creation: Built a robust administrative dashboard to manage users, subscription tiers, and revenue tracking. Enabled tier upgrades/downgrades, cancellations, and manual invoicing, with real-time updates to the database."
  },
  {
    icon: MessageSquare,
    title: "Feedback Platform Development",
    short: "Real-time Slack chat for support and product feedback loops.",
    full:
      "Feedback Platform Development: Engineered a real-time Slack-integrated chat support system, allowing direct product feedback loops and enabling immediate user-to-developer communication for iterative improvements."
  },
  {
    icon: ShieldCheck,
    title: "Authentication & Access Control",
    short: "Subscription redirects, 2-step verification, secure recovery.",
    full:
      "Authentication & Access Control: Developed secure login systems with subscription-based redirects, two-step email verification, and password recovery workflows. Ensured compliance with modern security standards and best practices."
  },
  {
    icon: FileStack,
    title: "Deal Pipeline & Data Room",
    short: "Secure uploads for CIMs, PDFs, and financial docs.",
    full:
      "Deal Pipeline & Data Room Workflows: Delivered functionality for secure uploading and storage of CIMs, PDFs, and financial documents. Structured pipelines for deal-tracking, document categorization, and centralized access."
  },
  {
    icon: Gauge,
    title: "Automated Deal Analysis",
    short: "Turn docs into insights with risk and valuation metrics.",
    full:
      "Automated Deal Analysis: Supported backend services to convert uploaded financials and documents into actionable insights, including risk scoring and valuation metrics."
  },
  {
    icon: LineChart,
    title: "Comparable Company Analysis",
    short: "Peer benchmarking within target industries.",
    full:
      "Comparable Company Analysis: Enhanced benchmarking logic for comparing businesses against peer companies in target industries, providing deeper market context for investors."
  },
  {
    icon: Boxes,
    title: "Deal Structure Modeling",
    short: "Equity outputs factoring price, debt, seller financing, fees.",
    full:
      "Deal Structure Modeling: Built equity modeling features to account for asking price, debt structures, seller financing, and transaction fees, producing clear financial outputs."
  },
  {
    icon: Bot,
    title: "AI-Powered Advisor",
    short: "Chat assistant that interprets uploaded deal documents.",
    full:
      "AI-Powered Advisor: Contributed to the development of an AI chat assistant that interprets uploaded deal documents and provides strategic guidance for buyers and investors."
  },
  {
    icon: FileText,
    title: "Automated Export Generation",
    short: "Investor memos, exec summaries, and LOIs—ready to send.",
    full:
      "Automated Export Generation: Designed automated workflows to generate investor memos, executive summaries, and Letters of Intent (LOIs) in professional, ready-to-use formats."
  },
  {
    icon: Rocket,
    title: "Post-Acquisition Playbook",
    short: "Tools to monitor and optimize businesses after close.",
    full:
      "Post-Acquisition Playbook: Assisted in building tools to help investors and operators monitor, optimize, and scale businesses post-close, enabling continuous value creation."
  },
  {
    icon: Layout,
    title: "Landing Page Collaboration",
    short: "Refined design & implementation with devs + designer.",
    full:
      "Landing Page Collaboration: Partnered with developers and a UI/UX designer to refine the landing page design and implementation, aligning with BizSphere’s branding and product story."
  },
  {
    icon: Sparkles,
    title: "User Experience Enhancements",
    short: "Notifications, progress states, and smart redirects.",
    full:
      "User Experience Enhancements: Improved platform usability with progress indicators, smart redirect flows, and notification systems, ensuring intuitive and seamless navigation for users."
  }
];

const SKILLS = [
  "React","Python","FastAPI","Tailwind CSS","Stripe API","Webhooks","Slack API",
  "Authentication & Access Control","Data Room Workflows","Document Processing",
  "AI/ML Integration","UI/UX Design"
];

export const BizSphereAlpha: React.FC = () => {
  const [expandAll, setExpandAll] = useState(false);

  return (
    <section className="py-16 md:py-24 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left Column: Text */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-autonomy-cyan">
              BizSphere Alpha – AI-Powered Deal-Making Platform
            </h2>
            <p className="text-sm text-gray-400 mb-4">Apr 2025 – Sep 2025 · Associated with BizSphere</p>

            <p className="text-gray-300 mb-4 text-lg leading-relaxed">
              Helped take BizSphere from pilot to launch by developing core features and collaborating
              closely with senior AI developers to build an investor-ready platform tailored for entrepreneurs,
              search funds, family offices, and institutional investors. Contributed across backend, frontend,
              integrations, and product workflows to ensure security, automation, and a seamless user experience.
            </p>

             {/* Project link */}
            <a
              href="https://www.bizsphere.ai/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mb-6 rounded-xl border border-cyan-400/40 px-4 py-2 text-sm hover:border-cyan-400/70 hover:bg-cyan-400/10 transition"
            >
              <LinkIcon className="w-4 h-4" />
              Visit BizSphere.AI
            </a>

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
              {CONTRIBUTIONS.map((c, i) => (
                <ContributionCard key={i} item={c} forceOpen={expandAll} />
              ))}
            </div>

            {/* Closing paragraphs */}
            <p className="text-gray-300 mt-6 mb-3 text-lg leading-relaxed">
              Each of these tools provides instant, tailored insight — whether it's analyzing acquisition risk,
              estimating valuation with real-time data, or mapping a 90-day post-close growth plan.
            </p>
            <p className="text-gray-300 mb-3 text-lg leading-relaxed">
              I believe in modular, human-centered design. Every agent I build is designed to be explainable,
              scalable, and seamlessly embedded into business environments. From frontend interface to backend logic,
              my work reflects a deep commitment to performance, usability, and precision.
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

          {/* Right Column: Image (sticky on desktop) */}
          <div className="flex flex-col items-center justify-center md:sticky md:top-20">
            <img
              src="https://i.ibb.co/7xbbdN4S/Biz-Sphere-ai.png"
              alt="MockUp"
              className="w-full h-auto object-cover rounded-lg shadow-lg border-2 border-autonomy-cyan/50 animate-pulse-glow"
            />
            <a
              href="https://www.bizsphere.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 block text-center text-autonomy-cyan hover:underline"
            >
              Go to BizSphere.ai to see the platform in action
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
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-autonomy-cyan/40 transition">
      <div className="flex items-start gap-3">
        <div className="shrink-0 rounded-xl p-2 border border-white/10 bg-white/10">
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold">{item.title}</h3>
          <p className="text-gray-300 text-sm">{item.short}</p>

          {/* Details */}
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
