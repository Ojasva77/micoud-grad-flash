import HeroSection from "@/components/brochure/HeroSection";
import ProgramSection from "@/components/brochure/ProgramSection";
import SponsorsSection from "@/components/brochure/SponsorsSection";
import FooterSection from "@/components/brochure/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background py-6 md:py-12 px-3 md:px-6">
      <article className="max-w-5xl mx-auto bg-background shadow-2xl border border-teal/10 overflow-hidden">
        <HeroSection />
        <ProgramSection />
        <SponsorsSection />
        <FooterSection />
      </article>
    </div>
  );
};

export default Index;
