import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { TemplateDetailsSection } from "@/components/TemplateDetailsSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PainSection } from "@/components/PainSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { AggressiveCTASection } from "@/components/AggressiveCTASection";

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
      <FAQSection />
      <AggressiveCTASection />
    </main>
  );
};

export default Index;
