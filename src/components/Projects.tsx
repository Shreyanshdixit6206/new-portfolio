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
    keyDecision: "Prioritized data safety and encryption overlays over complex UI components.",
    image: "https://images.unsplash.com/photo-1580377968211-b6425102326b?auto=format&fit=crop&w=1080&q=80",
    link: "https://github.com/Shreyanshdixit6206",
  },
  {
    title: "FindMyItem",
    tags: ["Internal Tools", "Workflows", "UI/UX"],
    problem: "Manual, highly inefficient reporting of lost items on a busy university campus.",
    solution: "Designed a smart categorization and notification system for seamless item recovery reporting.",
    outcome: "Streamlined campus recovery coordination drastically reducing reporting friction.",
    keyDecision: "Reduced complexity by limiting the user journey to 3 core actions based on real user drop-offs.",
    image: "https://images.unsplash.com/photo-1644088379091-d574269d422f?auto=format&fit=crop&w=1080&q=80",
    link: "https://github.com/Shreyanshdixit6206",
  },
  {
    title: "Crisper",
    tags: ["Product Design", "Vibe Coding", "AI Trends"],
    problem: "The daily 'I have nothing to eat' syndrome leading to wasted ingredients and decision fatigue.",
    solution: "Vibe coded an AI-driven generator that identifies recipes based on current fridge contents, styled with premium imagery.",
    outcome: "Lowered friction from empty fridges to active cooking, proving rapid AI prototyping skills.",
    keyDecision: "Decided against a complex onboarding flow; the user is immediately dropped into the generator.",
    image: "https://images.unsplash.com/photo-1657641908545-592c2a8e3b79?auto=format&fit=crop&w=1080&q=80",
    link: "https://github.com/Shreyanshdixit6206",
  },
  {
    title: "SubTract",
    tags: ["Full Stack", "Data Security", "React"],
    problem: "Users wasting money on forgotten free trials, creating high mental overhead and financial anxiety.",
    solution: "Designed a cancellation and tracking interface prioritizing clear data visualization and security over complex UI.",
    outcome: "Empowers users to automatically audit and cancel leaky expenses seamlessly.",
    keyDecision: "Opted for a brutalist, strictly informative UI instead of playful gamification to maintain trust.",
    image: "https://images.unsplash.com/photo-1688413709025-5f085266935a?auto=format&fit=crop&w=1080&q=80",
    link: "https://github.com/Shreyanshdixit6206",
  }
];

export function Projects() {
  return (
    <SectionWrapper id="work">
      <div className="mb-12">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Selected Work.</h2>
        <div className="w-12 h-1 bg-offwhite" />
      </div>

      <div className="bg-[#0f0f0f] border border-[#222] p-6 lg:p-10 mb-16 flex flex-col lg:flex-row gap-8 justify-between items-start transition-colors hover:border-[#333]">
        <div className="max-w-md">
          <h3 className="font-display text-2xl font-bold mb-2">What I Look For in Products</h3>
          <p className="text-ash/80 text-sm italic">Before writing a line of code or drawing a frame, I investigate the actual friction.</p>
        </div>
        <ul className="flex flex-col gap-3 font-mono text-xs uppercase tracking-wider text-ash lg:border-l lg:border-[#333] lg:pl-8">
          <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent-orange" /> Where users get stuck</li>
          <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent-orange" /> Where systems break</li>
          <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent-orange" /> Where inefficiency exists</li>
          <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent-orange" /> Where simplicity can improve outcomes</li>
        </ul>
      </div>

      <div className="flex flex-col gap-16 md:gap-24">
        {projectsList.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </SectionWrapper>
  );
}

function ProjectCard({ tags, title, problem, solution, outcome, keyDecision, image, link }: any) {
  return (
    <div className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
      {/* Visual Side (Left) */}
      <div className="lg:col-span-7 relative h-[250px] md:h-[400px] lg:h-[500px] bg-[#111] overflow-hidden">
        {/* Render Image View */}
        <div className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 contrast-125 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-[1500ms] ease-out overflow-hidden">
          <Image 
            src={image} 
            alt={title} 
            fill 
            className="object-cover scale-100 group-hover:scale-[1.02] transition-transform duration-[1500ms] ease-out"
            unoptimized 
          />
        </div>
        
        {/* Overlay borders and UI elements */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/10 transition-colors duration-[1500ms] pointer-events-none z-10" />
        <div className="absolute top-4 right-4 bg-black/80 text-white font-mono text-[10px] uppercase px-2 py-1 tracking-widest backdrop-blur-sm z-10 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-100">
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
          <div className="bg-[#0a0a0a] p-4 border-l-2 border-[#444]">
            <div className="font-mono text-xs text-ash mb-1 uppercase">[KEY DECISION]</div>
            <p className="text-ash/90 text-sm font-medium italic">{keyDecision}</p>
          </div>
        </div>

        <a href={link} target="_blank" rel="noreferrer" className="mt-4 flex items-center gap-2 self-start font-mono text-sm uppercase tracking-wider text-white hover:text-accent-orange transition-colors duration-500 group/btn">
          Dissect the System <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-500 ease-out" />
        </a>
      </div>
    </div>
  );
}
