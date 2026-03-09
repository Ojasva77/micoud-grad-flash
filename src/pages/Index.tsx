import HeroSection from "@/components/brochure/HeroSection";
import ProgramSection from "@/components/brochure/ProgramSection";
import MessageSection from "@/components/brochure/MessageSection";
import AwardsSection from "@/components/brochure/AwardsSection";
import GraduatesSection from "@/components/brochure/GraduatesSection";
import FooterSection from "@/components/brochure/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProgramSection />
      <MessageSection />
      <AwardsSection />
      <GraduatesSection />
      <FooterSection />
    </div>
  );
};

export default Index;
