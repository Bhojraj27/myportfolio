import PortfolioShell from '@/components/PortfolioShell';
import Hero from '@/components/sections/Hero';
import ProofStrip from '@/components/sections/ProofStrip';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import SectionDivider from '@/components/ui/SectionDivider';

export default function HomePage() {
  return (
    <PortfolioShell>
      <Hero />
      <ProofStrip />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Contact />
    </PortfolioShell>
  );
}
