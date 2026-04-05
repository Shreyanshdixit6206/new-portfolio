import { CustomCursor } from "@/components/CustomCursor";
import { HeroSection } from "@/components/HeroSection";
import { MentalModels } from "@/components/MentalModels";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { BuilderSide } from "@/components/BuilderSide";
import { Skills } from "@/components/Skills";
import { PersonalEdge } from "@/components/PersonalEdge";

export default function Home() {
  return (
    <main className="relative w-full">
      <CustomCursor />
      <HeroSection />
      <MentalModels />
      <Experience />
      <Projects />
      <BuilderSide />
      <Skills />
      <PersonalEdge />
    </main>
  );
}
