import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Zap, ShieldCheck } from "lucide-react";

export const AggressiveCTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,197,94,0.15)_0%,transparent_50%),radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
      
      <div className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground font-bold mb-6 animate-bounce-in">
            <Clock className="w-5 h-5" />
            OFERTA POR TEMPO LIMITADO
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            Se você ainda não fechou clientes,{" "}
            <span className="text-accent-glow">esse sistema vai mudar o jogo</span>
          </h2>

          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            Enquanto você lê isso, seus concorrentes já estão automatizando e fechando mais vendas.{" "}
            <strong>A pergunta é: até quando você vai esperar?</strong>
          </p>

          <div className="bg-primary-foreground/10 border-2 border-accent-glow rounded-2xl p-8 mb-8">
            <p className="text-2xl md:text-3xl font-bold mb-2">
              Por apenas R$37 você começa HOJE
            </p>
            <p className="text-lg opacity-90">
              Ou investe R$297 e recebe tudo instalado, configurado e funcionando em 48h
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <Button 
              variant="cta" 
              size="xl" 
              className="w-full sm:w-auto min-w-[300px] text-lg"
            >
              Sim, Quero Começar por R$37
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
            <Button 
              variant="hero" 
              size="xl"
              className="w-full sm:w-auto min-w-[300px] text-lg"
            >
              Quero Instalação Completa - R$297
            </Button>
          </div>

          {/* Trust elements */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-2 p-4 bg-primary-foreground/5 rounded-lg border border-primary-foreground/20">
              <Zap className="w-8 h-8 text-accent-glow" />
              <p className="font-bold text-sm">Acesso Imediato</p>
              <p className="text-sm opacity-80">Receba em minutos</p>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-primary-foreground/5 rounded-lg border border-primary-foreground/20">
              <Clock className="w-8 h-8 text-accent-glow" />
              <p className="font-bold text-sm">Comece Hoje</p>
              <p className="text-sm opacity-80">Sem enrolação</p>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-primary-foreground/5 rounded-lg border border-primary-foreground/20">
              <ShieldCheck className="w-8 h-8 text-accent-glow" />
              <p className="font-bold text-sm">Garantia 7 Dias</p>
              <p className="text-sm opacity-80">Risco zero</p>
            </div>
          </div>

          {/* Final urgency */}
          <div className="mt-10 p-6 bg-accent/20 border-2 border-accent-glow rounded-xl">
            <p className="text-xl font-bold mb-2">
              🔥 Apenas para os primeiros 100 clientes
            </p>
            <p className="text-lg opacity-90">
              Depois disso, o preço sobe. Não perca essa oportunidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
