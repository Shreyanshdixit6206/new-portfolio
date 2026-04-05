"use client";

import { SectionWrapper } from "./SectionWrapper";
import { MoveRight } from "lucide-react";

export function PersonalEdge() {
  return (
    <div className="flex flex-col">
      <SectionWrapper id="edge">
        <div className="max-w-4xl mx-auto text-center border-y border-[#333] py-24">
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-8 text-white">Why I'm Different</h2>
          <p className="font-display text-2xl md:text-3xl text-ash leading-relaxed mb-12">
            I am not a traditional B.Tech CSE student grinding DSA on LeetCode. I don't just deliver a Figma file and step away. I own the core problem from the first wireframe to the final deployment.
          </p>
          <p className="font-mono text-lg text-accent-green uppercase tracking-widest">
            Product thinking. Design execution. Production code.
          </p>
        </div>
      </SectionWrapper>

      <footer className="bg-[#050505] border-t border-[#222] py-32 px-6 md:px-12 lg:px-24 mx-auto w-full transition-colors duration-500 hover:bg-[#FF5A00] group">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center">
          <h2 className="font-display text-5xl md:text-7xl lg:text-9xl font-bold mb-6 text-white group-hover:text-[#050505] transition-colors">
            Let’s build something real.
          </h2>
          <p className="text-xl md:text-2xl text-ash mb-16 group-hover:text-[#111] transition-colors font-medium">
            Currently looking for roles where product thinking meets execution.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 font-mono text-sm uppercase tracking-wider w-full sm:w-auto">
            <a href="mailto:shreyanshdixit6206@gmail.com" className="bg-white text-black px-12 py-6 font-bold hover:scale-105 transition-transform flex items-center justify-center gap-4">
              Drop me an email <MoveRight className="w-5 h-5" />
            </a>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="https://github.com/shreyanshdixit" target="_blank" rel="noreferrer" className="flex items-center justify-center px-8 py-6 border border-[#333] text-ash group-hover:border-[#050505] group-hover:text-[#050505] transition-colors hover:bg-[#050505] hover:text-white">
                Inspect the Code
              </a>
              <a href="https://drive.google.com/file/d/1eFv4VXgBThqJaTqhGdt54HTxmrLlMpnd/view?usp=sharing" target="_blank" rel="noreferrer" className="flex items-center justify-center px-8 py-6 border border-[#333] text-ash group-hover:border-[#050505] group-hover:text-[#050505] transition-colors hover:bg-[#050505] hover:text-white">
                Read the Resume
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
