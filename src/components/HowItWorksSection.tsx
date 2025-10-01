import { Bot, Search, UserCheck, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: Search,
      title: "Busca Automática",
      description: "O sistema procura clientes ideais baseado no seu perfil de cliente perfeito"
    },
    {
      icon: Bot,
      title: "Validação Inteligente",
      description: "IA valida contatos, elimina duplicados e qualifica os melhores prospects"
    },
    {
      icon: UserCheck,
      title: "Abordagem Personalizada",
      description: "Mensagens automatizadas mas personalizadas para cada lead"
    },
    {
      icon: Calendar,
      title: "Reuniões Agendadas",
      description: "Clientes interessados aparecem direto na sua agenda, prontos para fechar"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como Funciona o Prospector One
          </h2>
          <p className="text-lg text-muted-foreground">
            Um sistema completo que funciona no piloto automático enquanto você foca em fechar negócios
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="relative border-2 hover:border-primary transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="pt-6 text-center">
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                {/* Content */}
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
