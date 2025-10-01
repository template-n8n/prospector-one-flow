import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Sheet, Database, MessageCircle, Bot, Calendar, CheckCircle } from "lucide-react";

export const TemplateDetailsSection = () => {
  const steps = [
    {
      icon: MapPin,
      number: 1,
      title: "Busca Inteligente de Prospects",
      description: "Sistema busca automaticamente empresas do seu perfil ideal no Google Maps. Você define o nicho e localização, a máquina trabalha."
    },
    {
      icon: Sheet,
      number: 2,
      title: "Organização Automática",
      description: "Todos os dados (empresa, telefone, email, endereço) são enviados instantaneamente para planilha organizada e pronta para usar."
    },
    {
      icon: Database,
      number: 3,
      title: "Armazenamento Seguro",
      description: "Integração direta com banco de dados para controle total dos leads. Tudo salvo e organizado automaticamente."
    },
    {
      icon: MessageCircle,
      number: 4,
      title: "Cadência de Prospecção",
      description: "Disparo automático de mensagens a cada 10 minutos. Volume consistente sem esforço manual. Você configura uma vez e esquece."
    },
    {
      icon: Bot,
      number: 5,
      title: "Qualificação por IA",
      description: "Agente inteligente conversa com os leads, identifica os interessados e separa os prontos para reunião dos que não têm fit."
    },
    {
      icon: Calendar,
      number: 6,
      title: "Agendamento Direto",
      description: "Leads qualificados aparecem automaticamente na sua agenda do Google Calendar. Você só precisa aparecer e fechar."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-4">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            O Que Você Vai Encontrar
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Veja Como o Prospector One Funciona na Prática
          </h2>
          <p className="text-lg text-muted-foreground">
            Sistema completo de prospecção: da busca do lead até a reunião na sua agenda
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
          {steps.map((step) => (
            <Card 
              key={step.number}
              className="relative border-2 hover:border-primary transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="pt-8">
                {/* Step Number Badge */}
                <div className="absolute -top-4 left-6 w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center font-bold text-primary-foreground shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 mb-4 bg-secondary rounded-xl flex items-center justify-center group-hover:bg-gradient-accent transition-all duration-300">
                  <step.icon className="w-7 h-7 text-primary group-hover:text-accent-foreground transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="font-bold text-lg mb-3 leading-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Result Box */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="border-2 border-accent bg-gradient-to-br from-accent/5 to-accent/10">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <CheckCircle className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-bold">Resultado Final</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Um <strong className="text-foreground">processo completo de prospecção ponta a ponta</strong>, 
                100% automatizado. Desde a captação de leads até o agendamento de reuniões na sua agenda. 
                <span className="text-accent font-semibold"> Tudo funcionando no piloto automático.</span>
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Technical Details */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="text-center p-6 bg-secondary rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <p className="text-sm text-muted-foreground">Sistema trabalhando continuamente</p>
          </div>
          <div className="text-center p-6 bg-secondary rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">10min</div>
            <p className="text-sm text-muted-foreground">Intervalo entre cada mensagem</p>
          </div>
          <div className="text-center p-6 bg-secondary rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <p className="text-sm text-muted-foreground">Automático do início ao fim</p>
          </div>
        </div>
      </div>
    </section>
  );
};
