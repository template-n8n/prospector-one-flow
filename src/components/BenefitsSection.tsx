import { CheckCircle, Clock, TrendingUp, Users, Zap, Shield } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Economize Horas Todo Dia",
      description: "Pare de perder tempo com prospecção manual. O sistema trabalha 24/7 enquanto você dorme."
    },
    {
      icon: TrendingUp,
      title: "Aumente Suas Vendas",
      description: "Mais reuniões qualificadas = mais oportunidades de fechar negócios."
    },
    {
      icon: Users,
      title: "Pipeline Sempre Cheio",
      description: "Nunca mais fique sem leads. Seu funil sempre abastecido com novos prospects."
    },
    {
      icon: Zap,
      title: "Implementação Rápida",
      description: "Template pronto ou instalação completa. Você escolhe e começa em minutos."
    },
    {
      icon: Shield,
      title: "Sistema Testado",
      description: "Processo validado que já gerou milhares de reuniões para outros negócios."
    },
    {
      icon: CheckCircle,
      title: "Sem Complicação",
      description: "Interface simples, até iniciantes conseguem usar. Suporte completo incluído."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por Que o Prospector One é Diferente
          </h2>
          <p className="text-lg text-muted-foreground">
            A diferença entre esperar clientes e <strong>ter uma máquina</strong> trazendo clientes para você
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex gap-4 p-6 rounded-lg hover:bg-secondary transition-colors duration-300 group"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-6 h-6 text-accent-foreground" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
