import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-automation.jpg";
import { ArrowRight, CheckCircle } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background overlay with subtle pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.15)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.1)_0%,transparent_50%)]" />
      
      {/* Hero image overlay */}
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground text-sm font-medium mb-6 animate-fade-in">
            <CheckCircle className="w-4 h-4" />
            Sistema Completo de Prospecção Automática
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-6 leading-tight animate-slide-up">
            Enquanto muita gente espera o cliente aparecer,{" "}
            <span className="text-accent-glow">o Prospector One</span> agenda reuniões automaticamente
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto animate-slide-up">
            Pare de depender de sorte ou indicações. Tenha uma <strong>máquina trabalhando 24/7</strong> para trazer clientes qualificados direto para sua agenda.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-bounce-in">
            <Button 
              variant="cta" 
              size="xl" 
              className="w-full sm:w-auto min-w-[280px]"
            >
              Começar Agora por R$37
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="hero" 
              size="xl"
              className="w-full sm:w-auto min-w-[280px]"
            >
              Instalação Completa - R$297
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-primary-foreground/80 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent-glow" />
              <span>Acesso imediato</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent-glow" />
              <span>Sem mensalidades</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent-glow" />
              <span>Garantia de 7 dias</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
