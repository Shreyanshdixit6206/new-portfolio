"use client";

import { SectionWrapper } from "./SectionWrapper";

export function Skills() {
  const categories = [
    {
      title: "Product & Design Thinking",
      skills: ["Systems Architecture", "Workflow Optimization", "Human-Computer Interaction", "Rapid Prototyping", "Wireframing"]
    },
    {
      title: "Execution Tools",
      skills: ["Figma (Advanced)", "n8n Automation", "AI Vibe Coding", "LLM Prompting", "Foundational Frontend"]
    },
    {
      title: "The \"In-The-Trenches\" Skills",
      skills: ["Multi-Stakeholder Communication", "Problem Solving", "Git/GitHub Workflows", "Event Coordination"]
    },
    {
      title: "Domain Knowledge Matrix",
      skills: ["HealthTech", "Software as a Medical Device (SaMD)", "Internet of Medical Things (IoMT)"]
    }
  ];

  return (
    <SectionWrapper id="skills">
      <div className="mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">My Toolkit.</h2>
        <div className="w-12 h-1 bg-[#444]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {categories.map((category, i) => (
          <div key={i} className="border border-[#222] p-8">
            <h3 className="font-display text-xl font-bold text-white mb-6 uppercase tracking-wider">{category.title}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, j) => (
                <span key={j} className="font-mono text-sm text-ash bg-[#111] border border-[#333] px-3 py-1.5 hover:text-white hover:border-accent-orange transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
