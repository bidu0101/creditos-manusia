import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, CheckCircle, Clock, Shield, Loader2 } from "lucide-react";

const PlansSection = () => {
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  const handlePlanClick = (planName: string, whatsappLink: string) => {
    setLoadingPlan(planName);

    // Simula um pequeno delay para mostrar a animação
    setTimeout(() => {
      window.open(whatsappLink, "_blank", "noopener,noreferrer");
      setLoadingPlan(null);
    }, 1500);
  };

  const plans = [
    {
      name: "Starter",
      credits: "1.000",
      price: "R$ 14,90",
      originalPrice: "R$ 19,85",
      savings: "25%",
      whatsappLink:
        "https://wa.me/5511914506603?text=Olá! Tenho interesse no plano Starter de 500 créditos por R$ 29,90. Podemos conversar?",
      benefits: [
        "Entrega imediata",
        "Suporte via WhatsApp",
        "Garantia de entrega",
        "Sem taxa adicional",
      ],
      popular: false,
    },
    {
      name: "Popular",
      credits: "2.000",
      price: "R$ 24,90",
      originalPrice: "R$ 33,20",
      savings: "25%",
      whatsappLink:
        "https://wa.me/5511914506603?text=Olá! Tenho interesse no plano Popular de 1.000 créditos por R$ 49,90. Podemos conversar?",
      benefits: [
        "Entrega imediata",
        "Suporte via WhatsApp",
        "Garantia de entrega",
        "Desconto progressivo",
        "Prioridade no atendimento",
      ],
      popular: true,
    },
    {
      name: "Premium",
      credits: "5.000",
      price: "R$ 55,90",
      originalPrice: "R$ 74,55",
      savings: "25%",
      whatsappLink:
        "https://wa.me/5511914506603?text=Olá! Tenho interesse no plano Premium de 2.000+ créditos por R$ 89,90. Podemos conversar?",
      benefits: [
        "Entrega imediata",
        "Suporte via WhatsApp",
        "Garantia de entrega",
        "Maior desconto",
        "Promoções Exclusivas",
        "Atendimento VIP",
        "Bônus de créditos extras",
      ],
      popular: false,
    },
  ];

  return (
    <section id="planos" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Escolha seu{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              plano ideal
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Todos os planos incluem entrega direta na sua conta existente, sem
            necessidade de criar nova conta ou perder seus projetos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl animate-scale-in ${
                plan.popular ? "border-primary shadow-lg scale-105" : ""
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0">
                  <div className="manus-gradient text-white text-center py-2 text-sm font-semibold">
                    🔥 MAIS POPULAR
                  </div>
                </div>
              )}

              <CardHeader
                className={`text-center ${plan.popular ? "pt-12" : "pt-6"}`}
              >
                <CardTitle className="text-2xl font-bold">
                  {plan.name}
                </CardTitle>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">
                    {plan.price}
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm text-muted-foreground line-through">
                      {plan.originalPrice}
                    </span>
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-800"
                    >
                      -{plan.savings}
                    </Badge>
                  </div>
                  <div className="text-lg font-semibold text-accent">
                    {plan.credits} créditos
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handlePlanClick(plan.name, plan.whatsappLink)}
                  disabled={loadingPlan !== null}
                  className={`w-full font-semibold py-6 rounded-full transition-all duration-300 ${
                    plan.popular
                      ? "manus-gradient hover:manus-gradient-hover text-white"
                      : "bg-primary hover:bg-primary/90 text-primary-foreground"
                  } ${loadingPlan === plan.name ? "opacity-90" : ""}`}
                >
                  {loadingPlan === plan.name ? (
                    <div className="flex items-center justify-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Carregando...</span>
                    </div>
                  ) : (
                    "Quero esse plano"
                  )}
                </Button>

                <div className="flex items-center justify-center text-xs text-muted-foreground">
                  <Clock className="w-3 h-3 mr-1" />
                  Entrega em até 5 minutos
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center animate-slide-up">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2 text-green-500" />
              Transação 100% segura
            </div>
            <div className="flex items-center">
              <Zap className="w-4 h-4 mr-2 text-yellow-500" />
              Entrega instantânea
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-blue-500" />
              Suporte dedicado
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
