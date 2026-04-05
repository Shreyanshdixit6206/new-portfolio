"use client";

"use client";

import { SectionWrapper } from "./SectionWrapper";
import { motion } from "framer-motion";

type ExperienceData = {
  chapter: string;
  role: string;
  company: string;
  period: string;
  story: string;
  rotation: number;
};

const experiences: ExperienceData[] = [
  {
    chapter: "03",
    role: "Incubation Trainee",
    company: "Centre For Medical Innovation, GIMS",
    period: "Feb 2026 — Present",
    story: "Walked into a chaotic environment of 10+ health-tech startups. This wasn’t assigned work — I identified gaps and took initiative to improve systems and workflows, building formats that boosted engagement by 25%.",
    rotation: -2,
  },
  {
    chapter: "02",
    role: "Web Developer Intern",
    company: "InternPE",
    period: "Summer 2025",
    story: "Local businesses were losing clients due to unresponsive, outdated digital fronts. I stepped in to architect and deploy modern web experiences for 5+ recurring clients, securing their relevance.",
    rotation: 1,
  },
  {
    chapter: "01",
    role: "Flutter Developer Intern",
    company: "Aliter Business Solution",
    period: "Summer 2024",
    story: "Faced an existing app crippled by poor usability. Ran research with 50+ users and built a cohesive design system from scratch that elevated overall user engagement by 35%.",
    rotation: -1,
  }
];

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Real-World Impact.</h2>
        <div className="w-12 h-1 bg-accent-green mb-8" />
        <p className="text-ash max-w-2xl text-lg">
          My journey isn't a resume—it's a story of entering chaos, finding the signal, and building systems that work.
        </p>
      </div>

      <div className="flex flex-col gap-8 md:gap-16 max-w-4xl mx-auto py-8">
        {experiences.map((exp, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: idx * 0.2, ease: "easeOut" }}
            whileHover={{ y: -2, scale: 1.01, rotate: 0, transition: { duration: 0.4, ease: "easeOut" } }}
            style={{ rotate: exp.rotation }}
            className={`
              relative bg-[#0d0d0d] border border-[#222] p-8 md:p-10 shadow-2xl
              flex flex-col gap-6 md:w-5/6
              ${idx % 2 !== 0 ? 'md:self-end' : 'md:self-start'}
            `}
          >
            {/* Background texture slightly visible */}
            <div className="absolute inset-0 grid-bg opacity-[0.15] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#333] pb-6">
              <div>
                <div className="font-mono text-xs text-accent-green mb-2 uppercase tracking-widest">
                  Chapter {exp.chapter}
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-1">
                  {exp.role}
                </h3>
                <p className="font-mono text-sm text-accent-orange uppercase tracking-wider">
                  {exp.company}
                </p>
              </div>
              <div className="font-mono text-xs text-ash/60 uppercase border border-[#333] px-3 py-1 bg-[#111]">
                {exp.period}
              </div>
            </div>

            <div className="relative z-10">
              <p className="text-ash text-base md:text-lg leading-relaxed font-medium">
                {exp.story}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
