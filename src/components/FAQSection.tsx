import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "O que exatamente é o Prospector One?",
      answer: "É um sistema completo de prospecção automatizada que busca leads, valida contatos, envia mensagens e agenda reuniões direto na sua agenda do Google Calendar. Tudo rodando 24/7 sem você precisar fazer nada."
    },
    {
      question: "Preciso ter conhecimento técnico para usar?",
      answer: "Para o template de R$37, você precisa saber o básico de automação. Mas se preferir zero complicação, a instalação completa de R$297 entrega tudo pronto e configurado - você só precisa aparecer nas reuniões."
    },
    {
      question: "Quanto tempo leva para começar a funcionar?",
      answer: "Com o template, você pode começar no mesmo dia se souber configurar. Com a instalação completa, em até 48 horas o sistema está rodando e já buscando clientes para você."
    },
    {
      question: "Vou ter suporte se precisar de ajuda?",
      answer: "Sim! Quem compra o template tem acesso ao grupo de suporte. Quem contrata a instalação completa recebe 30 dias de suporte direto + treinamento ao vivo."
    },
    {
      question: "E se não funcionar para o meu negócio?",
      answer: "Você tem 7 dias de garantia total. Se não gostar ou achar que não serve, devolvemos 100% do seu dinheiro sem perguntas."
    },
    {
      question: "Por que não criar meu próprio sistema do zero?",
      answer: "Você pode. Mas vai gastar semanas testando, ajustando e otimizando. O Prospector One já está validado, funcionando e gerando resultados. É a diferença entre começar hoje ou daqui 3 meses."
    },
    {
      question: "Preciso pagar mensalidade ou custos extras?",
      answer: "Não! É pagamento único. Você só vai ter os custos normais das ferramentas que usar (API, hospedagem, etc), mas o Prospector One em si não tem mensalidade nenhuma."
    },
    {
      question: "Quantos leads o sistema consegue processar?",
      answer: "Ilimitado. O sistema é escalável. Quanto mais você rodar, mais leads aparecem. A única limitação é a sua capacidade de atender as reuniões que vão surgir."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas últimas dúvidas antes de começar
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-2 border-border bg-card rounded-lg px-6 hover:border-primary transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
