"use client";

import { SectionWrapper } from "./SectionWrapper";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projectsList = [
  {
    title: "Health NEXUS",
    tags: ["Healthcare", "Firebase", "Prototyping"],
    problem: "Lack of private, centralized vaulting combined with reliable generic medicine delivery.",
    solution: "Built a Generic Medicine Delivery Application integrated with a private Health Vault to ensure secure healthcare distribution.",
    outcome: "Created a cohesive, secure experience proving high-stakes data handling capabilities.",
    image: "https://images.unsplash.com/photo-1580377968211-b6425102326b?auto=format&fit=crop&w=1080&q=80",
    link: "https://github.com/Shreyanshdixit6206",
  },
  {
    title: "FindMyItem",
    tags: ["Internal Tools", "Workflows", "UI/UX"],
    problem: "Manual, highly inefficient reporting of lost items on a busy university campus.",
    solution: "Designed a smart categorization and notification system for seamless item recovery reporting.",
    outcome: "Streamlined campus recovery coordination drastically reducing reporting friction.",
    image: "https://images.unsplash.com/photo-1644088379091-d574269d422f?auto=format&fit=crop&w=1080&q=80",
    link: "https://github.com/Shreyanshdixit6206",
  },
  {
    title: "Crisper",
    tags: ["Product Design", "Vibe Coding", "AI Trends"],
    problem: "The daily 'I have nothing to eat' syndrome leading to wasted ingredients and decision fatigue.",
    solution: "Vibe coded an AI-driven generator that identifies recipes based on current fridge contents, styled with premium imagery.",
    outcome: "Lowered friction from empty fridges to active cooking, proving rapid AI prototyping skills.",
    image: "https://images.unsplash.com/photo-1657641908545-592c2a8e3b79?auto=format&fit=crop&w=1080&q=80",
    link: "https://github.com/Shreyanshdixit6206",
  },
  {
    title: "SubTract",
    tags: ["Full Stack", "Data Security", "React"],
    problem: "Users wasting money on forgotten free trials, creating high mental overhead and financial anxiety.",
    solution: "Designed a cancellation and tracking interface prioritizing clear data visualization and security over complex UI.",
    outcome: "Empowers users to automatically audit and cancel leaky expenses seamlessly.",
    image: "https://images.unsplash.com/photo-1688413709025-5f085266935a?auto=format&fit=crop&w=1080&q=80",
    link: "https://github.com/Shreyanshdixit6206",
  }
];

export function Projects() {
  return (
    <SectionWrapper id="work">
      <div className="mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Selected Work.</h2>
        <div className="w-12 h-1 bg-offwhite" />
      </div>

      <div className="flex flex-col gap-16 md:gap-24">
        {projectsList.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </SectionWrapper>
  );
}

function ProjectCard({ tags, title, problem, solution, outcome, image, link }: any) {
  return (
    <div className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
      {/* Visual Side (Left) */}
      <div className="lg:col-span-7 relative h-[250px] md:h-[400px] lg:h-[500px] bg-[#111] overflow-hidden">
        {/* Render Image View */}
        <div className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 contrast-125 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden">
          <Image 
            src={image} 
            alt={title} 
            fill 
            className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            unoptimized 
          />
        </div>
        
        {/* Overlay borders and UI elements */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/10 transition-colors duration-500 pointer-events-none z-10" />
        <div className="absolute top-4 right-4 bg-black/80 text-white font-mono text-[10px] uppercase px-2 py-1 tracking-widest backdrop-blur-sm z-10 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          [SYSTEM_RENDERED]
        </div>
      </div>

      {/* Content Side (Right) */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag: string, i: number) => (
            <span key={i} className="font-mono text-xs text-ash border border-[#333] px-2 py-1">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="font-display text-3xl font-bold text-white leading-tight">{title}</h3>
        
        <div className="space-y-6 mt-4">
          <div>
            <div className="font-mono text-xs text-accent-orange mb-1 uppercase">[PROBLEM]</div>
            <p className="text-ash text-sm md:text-base leading-relaxed">{problem}</p>
          </div>
          <div>
            <div className="font-mono text-xs text-accent-green mb-1 uppercase">[SOLUTION]</div>
            <p className="text-ash text-sm md:text-base leading-relaxed">{solution}</p>
          </div>
          <div className="bg-[#111] p-4 border-l-2 border-white">
            <div className="font-mono text-xs text-white mb-1 uppercase">[OUTCOME]</div>
            <p className="text-offwhite text-sm md:text-base font-medium">{outcome}</p>
          </div>
        </div>

        <a href={link} target="_blank" rel="noreferrer" className="mt-4 flex items-center gap-2 self-start font-mono text-sm uppercase tracking-wider text-white hover:text-accent-orange transition-colors group/btn">
          Dissect the System <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}
