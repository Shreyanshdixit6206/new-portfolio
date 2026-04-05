"use client";

import { motion } from "framer-motion";
import { Code2, Network, ArrowRight } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 mx-auto max-w-[1400px] pt-32 lg:pt-20">
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-16 z-10 w-full mb-12">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-8"
          >
            I don’t just design screens.<br />
            I build products that actually <span className="text-accent-orange italic">work.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-xl mb-12"
          >
            <p className="text-lg md:text-xl text-ash mb-2 font-medium">
              <span className="text-offwhite">Shreyansh Dixit</span> — A Product Designer who can build.
            </p>
            <p className="text-lg md:text-xl text-ash">
              I turn messy ideas into structured, usable, and deployable products.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 font-mono text-sm uppercase tracking-wider"
          >
            <a
              href="#thinking"
              className="group relative inline-flex items-center justify-center gap-2 bg-accent-orange text-obsidian px-8 py-4 font-bold overflow-hidden transition-transform active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">Explore My Approach <ArrowRight className="w-4 h-4" /></span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </a>
            
            <div className="flex gap-4">
              <a href="https://github.com/shreyanshdixit" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-4 border border-[#333] hover:border-offwhite hover:text-offwhite transition-colors text-ash">
                <Code2 className="w-4 h-4" /> GitHub
              </a>
              <a href="https://linkedin.com/in/shreyanshdixit" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-4 border border-[#333] hover:border-offwhite hover:text-offwhite transition-colors text-ash">
                <Network className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </motion.div>
        </div>

        {/* Profile Image Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 flex-shrink-0 mt-8 lg:mt-0"
        >
          <div className="absolute inset-0 border border-[#333] translate-x-4 translate-y-4" />
          <div className="absolute inset-0 bg-[#111] overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-[#222]">
            <Image 
              src="/profile.png" 
              alt="Shreyansh Dixit" 
              fill 
              className="object-cover object-[50%_10%] opacity-80 hover:opacity-100 transition-opacity"
              unoptimized
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            {/* Fallback pattern if no image */}
            <div className="absolute inset-0 grid-bg opacity-30 -z-10" />
            <div className="absolute top-4 right-4 font-mono text-[#555] text-xs flex items-center gap-2">
              <span className="w-2 h-2 bg-[#555] animate-pulse rounded-full" /> [IMG_FOUND]
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative vertical line */}
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute top-0 right-12 md:right-24 w-[1px] bg-[#222] hidden lg:block" 
      />
    </section>
  );
}
