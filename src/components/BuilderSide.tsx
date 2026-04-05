"use client";

import { SectionWrapper } from "./SectionWrapper";
import { Terminal } from "lucide-react";

export function BuilderSide() {
  return (
    <SectionWrapper id="builder">
      <div className="mb-16 flex items-center justify-between border-b border-[#333] pb-8">
        <div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-5xl font-bold mb-4 leading-tight">
            I Design.<br />I Prototype.<br />I Ship.
          </h2>
          <p className="text-ash text-xl max-w-2xl mt-4 flex flex-col gap-2">
            <span>I can take an idea from Figma to a working product and deploy it when needed.</span>
            <span>I use code as a tool to validate ideas, not just to implement them.</span>
          </p>
        </div>
        <Terminal className="w-16 h-16 text-[#333] hidden md:block" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <BuildCard 
          title="AI-Assisted Prototyping"
          details="I 'vibe code' alongside AI tools like Claude and Cursor to transform high-fidelity UI into functional code at lightning speed."
        />
        <BuildCard 
          title="Smart Workflows (n8n)"
          details="I construct robust operational pipelines, stitching APIs and data together using n8n to automate logic without manual engineering overhead."
        />
        <BuildCard 
          title="Frictionless Shipping"
          details="Comfortable deploying projects quickly, mapping out edge cases, and moving products into users' hands faster than traditional cycles."
        />
      </div>
    </SectionWrapper>
  );
}

function BuildCard({ title, details }: { title: string; details: string }) {
  return (
    <div className="bg-[#0f0f0f] border border-[#222] p-8 hover:border-[#444] transition-colors group">
      <div className="font-mono text-xs text-[#666] mb-4 group-hover:text-offwhite transition-colors">{'<sys_log>'}</div>
      <h3 className="font-display text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-ash leading-relaxed">{details}</p>
      <div className="font-mono text-xs text-[#666] mt-8 group-hover:text-offwhite transition-colors">{'</sys_log>'}</div>
    </div>
  );
}
