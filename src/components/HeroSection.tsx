import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const HeroSection = () => {
  const scrollToPlans = () => {
    const plansSection = document.getElementById("planos");
    plansSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background gradiente */}
      <div className="absolute inset-0 manus-gradient opacity-10"></div>

      {/* Elementos decorativos */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-6 inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium">
          <Zap className="w-4 h-4 mr-2" />
          Oferta Limitada
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Créditos para{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            IA Manus
          </span>{" "}
          com o{" "}
          <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            menor preço
          </span>{" "}
          do mercado!
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Receba direto na sua conta, sem perder seu projeto atual.
          <br />
          <span className="text-primary font-semibold">
            Entrega manual e suporte completo!
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={scrollToPlans}
            size="lg"
            className="manus-gradient hover:manus-gradient-hover text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Ver Planos Disponíveis
          </Button>

          <div className="flex items-center text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <strong>A Melhor IA que trabalha para você!</strong>
          </div>
        </div>

        {/* Mockup da interface com fala da IA */}
        <div className="mt-16 relative animate-scale-in delay-500">
          <div className="bg-card border border-border rounded-2xl p-6 shadow-2xl max-w-md mx-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img
                  src="/ia-manus-logo.png"
                  alt="IA Manus"
                  className="w-8 h-8 rounded-lg mr-3 object-cover"
                />
                <span className="font-semibold">IA Manus</span>
              </div>
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                10.000 créditos
              </div>
            </div>

            {/* Frase da IA Manus */}
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-sm text-foreground font-medium leading-relaxed">
                💡 Olá! Sou a IA Manus e posso criar textos incríveis, gerar
                imagens fantásticas e automatizar suas tarefas. Com mais
                créditos, você desbloqueia todo o meu potencial!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
