
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Image, Text, Cog } from "lucide-react";

const BenefitsSection = () => {
  const services = [
    {
      icon: Text,
      title: "Geração de Texto",
      description: "Crie artigos, posts, emails e conteúdos únicos com inteligência artificial avançada"
    },
    {
      icon: Image,
      title: "Criação de Imagens",
      description: "Gere imagens impressionantes e únicas para seus projetos com descrições simples"
    },
    {
      icon: Cog,
      title: "Automações",
      description: "Configure fluxos automatizados para otimizar seus processos e aumentar produtividade"
    },
    {
      icon: Zap,
      title: "Múltiplas Funcionalidades",
      description: "Acesse dezenas de ferramentas AI em uma única plataforma integrada"
    }
  ];

  const whyChooseUs = [
    {
      title: "Entrega Segura e Rápida",
      description: "Atendimento em tempo real via WhatsApp para confirmar a entrega dos créditos contratados."
    },
    {
      title: "Preços Imbatíveis",
      description: "Oferecemos os menores preços do mercado com até 25% de desconto no valor oficial."
    },
    {
      title: "Suporte Dedicado",
      description: "Atendimento personalizado via WhatsApp para tirar dúvidas e resolver problemas."
    },
    {
      title: "Segurança Garantida",
      description: "Processo 100% seguro."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Por que escolher a IA Manus */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Por que escolher a{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              IA Manus?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A plataforma mais completa de inteligência artificial do Brasil, 
            com ferramentas poderosas para transformar sua produtividade.
          </p>
        </div>

        {/* Serviços da IA Manus */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 manus-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Por que escolher nossos serviços */}
        <div className="bg-muted/30 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">
              Por que comprar{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                conosco?
              </span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Oferecemos a melhor experiência de compra com vantagens exclusivas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((benefit, index) => (
              <div 
                key={benefit.title} 
                className="flex items-start space-x-4 animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
