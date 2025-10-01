import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Está na Hora de Ter Seu Sistema de Prospecção Automático
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8">
            Você pode continuar esperando o telefone tocar, ou pode ter uma <strong>máquina trabalhando</strong> para você 24 horas por dia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="cta" 
              size="xl" 
              className="w-full sm:w-auto min-w-[280px]"
            >
              Começar por R$37
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
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="flex flex-col items-center gap-2 p-6 bg-background rounded-lg shadow-md">
              <CheckCircle className="w-8 h-8 text-accent" />
              <p className="font-semibold">Sem Risco</p>
              <p className="text-sm text-muted-foreground">Garantia de 7 dias ou dinheiro de volta</p>
            </div>
            <div className="flex flex-col items-center gap-2 p-6 bg-background rounded-lg shadow-md">
              <CheckCircle className="w-8 h-8 text-accent" />
              <p className="font-semibold">Acesso Imediato</p>
              <p className="text-sm text-muted-foreground">Comece a usar em minutos após o pagamento</p>
            </div>
            <div className="flex flex-col items-center gap-2 p-6 bg-background rounded-lg shadow-md">
              <CheckCircle className="w-8 h-8 text-accent" />
              <p className="font-semibold">Suporte Incluso</p>
              <p className="text-sm text-muted-foreground">Grupo + documentação completa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
