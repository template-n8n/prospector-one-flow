import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Sparkles } from "lucide-react";

export const PricingSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Escolha Sua Forma de Começar
          </h2>
          <p className="text-lg text-muted-foreground">
            Template para quem quer implementar sozinho ou instalação completa pronta para usar
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Template Option */}
          <Card className="border-2 hover:border-primary transition-all duration-300">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl mb-2">Template Prospector One</CardTitle>
              <div className="text-4xl font-bold text-primary mb-2">
                R$37
                <span className="text-base font-normal text-muted-foreground block">pagamento único</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Template completo do workflow de prospecção</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Documentação passo a passo</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Acesso imediato após pagamento</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Atualizações gratuitas</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Grupo de suporte</span>
              </div>
              
              <Button variant="hero" size="lg" className="w-full mt-6">
                Comprar Template - R$37
              </Button>
              
              <p className="text-xs text-center text-muted-foreground pt-2">
                Ideal para quem já tem conhecimento básico de automação
              </p>
            </CardContent>
          </Card>
          
          {/* Complete Installation Option */}
          <Card className="border-2 border-accent hover:border-accent-glow transition-all duration-300 relative overflow-hidden">
            {/* Popular badge */}
            <div className="absolute top-4 right-4 bg-gradient-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              MAIS ESCOLHIDO
            </div>
            
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl mb-2">Instalação Completa</CardTitle>
              <div className="text-4xl font-bold text-accent mb-2">
                R$297
                <span className="text-base font-normal text-muted-foreground block">pagamento único</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span><strong>Tudo do plano anterior +</strong></span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Instalação completa do sistema</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Configuração personalizada para seu negócio</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Suporte direto por 30 dias</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Treinamento ao vivo de uso</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Sistema funcionando em até 48h</span>
              </div>
              
              <Button variant="cta" size="lg" className="w-full mt-6">
                Instalação Completa - R$297
              </Button>
              
              <p className="text-xs text-center text-muted-foreground pt-2">
                Para quem quer começar rápido sem complicação
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Guarantee */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-accent/10 rounded-full border-2 border-accent/20">
            <Shield className="w-6 h-6 text-accent" />
            <div className="text-left">
              <p className="font-bold">Garantia de 7 Dias</p>
              <p className="text-sm text-muted-foreground">Se não gostar, devolvemos 100% do valor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Shield = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
