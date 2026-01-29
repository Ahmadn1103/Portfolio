import React from "react";
import { HeroSection } from "components/HeroSection";
import { GlobalMappingSection } from "components/GlobalMappingSection";
import { EmbeddedVisionSection } from "components/EmbeddedVisionSection";
import { WebDev } from "components/WebDev";
import { UseCasesSection } from "components/UseCasesSection";
import { FeatureTextRowsSection } from "components/FeatureTextRowsSection";
import { Footer } from "components/Footer";
import { ParticleBackground } from "components/ParticleBackground";
import { Navbar } from "components/Navbar";
import { BizSphereAlpha } from "components/BizSphereAlpha";
import { Assignly } from "components/Assignly";
import {TechClearSection} from "components/TechClearSection";
import {SalamConsultingSection} from "components/SalamConsultingSection";

export default function App() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">

      {/* Navbar always visible */}
      <Navbar />

      {/* Scrollable content wrapper */}
      <div className="snap-y snap-mandatory overflow-y-scroll h-screen">

        {/* Background stays behind everything */}
        <ParticleBackground />

        {/* Each section MUST have snap-start + min-h-screen */}
        <section className="snap-start min-h-screen">
          <HeroSection />
        </section>

        <section className="snap-start min-h-screen">
          <GlobalMappingSection />
        </section>

        <section className="snap-start min-h-screen">
          <FeatureTextRowsSection />
        </section>

        <section className="snap-start min-h-screen">
          <TechClearSection />
        </section>

        <section className="snap-start min-h-screen">
          <SalamConsultingSection />
        </section>

        <section className="snap-start min-h-screen">
          <BizSphereAlpha />
        </section>

        <section className="snap-start min-h-screen">
          <Assignly />
        </section>

        <section className="snap-start min-h-screen">
          <EmbeddedVisionSection />
        </section>

        <section className="snap-start min-h-screen">
          <WebDev />
        </section>

        <section className="snap-start min-h-screen">
          <UseCasesSection />
        </section>

        {/* Footer also snaps */}
        <section className="snap-end py-16">
          <Footer />
        </section>

      </div>
    </div>
  );
}
