"use client";

import { SectionWrapper } from "./SectionWrapper";
import { Combine, Compass, TerminalSquare } from "lucide-react";

export function MentalModels() {
  return (
    <SectionWrapper id="thinking">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        {/* Left col - sticky header */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">My Approach.</h2>
          <div className="w-12 h-1 bg-accent-orange" />
        </div>

        {/* Right col - scrolling content */}
        <div className="lg:col-span-8 flex flex-col gap-16">
          <div className="group border-l border-[#333] pl-8 pb-8 transition-colors hover:border-accent-orange">
            <div className="font-mono text-ash text-sm mb-4 flex items-center gap-2">
              <Compass className="w-4 h-4" /> [01]
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-offwhite group-hover:text-white transition-colors">Embrace the Mess.</h3>
            <p className="text-ash text-lg leading-relaxed max-w-2xl">I don't wait for a perfect brief. I dive straight into the operational chaos, find the bottlenecks, and ask questions that clarify the real problem before drawing anything.</p>
          </div>

          <div className="group border-l border-[#333] pl-8 pb-8 transition-colors hover:border-accent-orange">
            <div className="font-mono text-ash text-sm mb-4 flex items-center gap-2">
              <Combine className="w-4 h-4" /> [02]
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-offwhite group-hover:text-white transition-colors">Think in Systems.</h3>
            <p className="text-ash text-lg leading-relaxed max-w-2xl">A pretty UI is useless if it breaks in the real world. I map out exactly how stakeholders interact with the product, ensuring it's scalable and solves the core problem.</p>
          </div>

          <div className="group border-l border-[#333] pl-8 pb-8 transition-colors hover:border-accent-orange">
            <div className="font-mono text-ash text-sm mb-4 flex items-center gap-2">
              <TerminalSquare className="w-4 h-4" /> [03]
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-offwhite group-hover:text-white transition-colors">Execution &gt; Ideas.</h3>
            <p className="text-ash text-lg leading-relaxed max-w-2xl">Ideas are cheap if they can't be shipped. I leverage AI, n8n, and automation tools to bridge the gap between a Figma design and a functional product without relying entirely on traditional engineering cycles.</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
