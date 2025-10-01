import { AlertCircle } from "lucide-react";

export const PainSection = () => {
  const pains = [
    "Você manda dezenas de mensagens por dia e mal consegue 1-2 respostas",
    "Fica horas procurando leads e validando contatos manualmente",
    "Depende de indicações ou espera o cliente vir até você",
    "Tem semanas sem nenhuma reunião agendada",
    "Vê concorrentes fechando negócios enquanto você fica parado"
  ];

  return (
    <section className="py-20 bg-gradient-hero text-primary-foreground">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Você Está Cansado Disso?
            </h2>
            <p className="text-lg opacity-90">
              A realidade de quem ainda não automatizou a prospecção
            </p>
          </div>
          
          <div className="space-y-4">
            {pains.map((pain, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 bg-primary-foreground/10 rounded-lg border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors"
              >
                <AlertCircle className="w-6 h-6 text-accent-glow flex-shrink-0 mt-0.5" />
                <p className="text-lg">{pain}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-8 bg-primary-foreground/10 rounded-xl border-2 border-accent-glow text-center">
            <p className="text-2xl font-bold mb-4">
              Enquanto você lê isso, seus concorrentes estão usando automação
            </p>
            <p className="text-lg opacity-90">
              A pergunta não é <em>se</em> você vai automatizar, mas <strong>quando</strong>.
              <br />
              E cada dia que você espera, é dinheiro deixado na mesa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
