import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { TemplateDetailsSection } from "@/components/TemplateDetailsSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PainSection } from "@/components/PainSection";
import { PricingSection } from "@/components/PricingSection";
import { FinalCTASection } from "@/components/FinalCTASection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <HowItWorksSection />
      <TemplateDetailsSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PainSection />
      <PricingSection />
      <FinalCTASection />
    </main>
  );
};

export default Index;
