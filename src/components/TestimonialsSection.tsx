import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos Mendes",
      role: "Consultor de Marketing",
      content: "Antes eu mandava mensagens o dia todo e conseguia 2-3 reuniões por mês. Com o Prospector One, consigo 15-20 reuniões qualificadas mensalmente. Mudou meu negócio completamente.",
      rating: 5
    },
    {
      name: "Ana Paula Silva",
      role: "Agência de Design",
      content: "Comprei o template por R$37 só pra testar. Em 3 dias já tinha 5 reuniões agendadas. Depois contratei a instalação completa. Melhor investimento que fiz esse ano.",
      rating: 5
    },
    {
      name: "Roberto Alves",
      role: "Desenvolvedor Web",
      content: "Sou péssimo em vendas. Com esse sistema, nem preciso me preocupar mais. O Prospector One faz todo o trabalho duro e eu só apareço nas reuniões pra fechar.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Quem Já Usa, Aprova
          </h2>
          <p className="text-lg text-muted-foreground">
            Centenas de profissionais já transformaram sua prospecção
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-all duration-300">
              <CardContent className="pt-6">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
