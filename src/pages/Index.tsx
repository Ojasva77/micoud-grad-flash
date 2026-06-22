import HeroSection from "@/components/brochure/HeroSection";
import ProgramSection from "@/components/brochure/ProgramSection";
import FooterSection from "@/components/brochure/FooterSection";
import { Printer } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <button
        onClick={() => window.print()}
        className="no-print fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full shadow-2xl hover:bg-gold hover:text-primary transition-colors font-body text-sm font-semibold"
        aria-label="Print brochure"
      >
        <Printer className="w-4 h-4" />
        Print Brochure
      </button>
      <HeroSection />
      <ProgramSection />
      <FooterSection />
    </div>
  );
};

export default Index;
