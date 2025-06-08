import { Card, CardContent } from "@/components/ui/card";

const Footer = () => {
  return (
    <footer className="bg-card border-t py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Entre em contato</h3>
            <div className="space-y-2">
              <div>
                <strong>WhatsApp:</strong>{" "}
                <a
                  href="https://wa.me/5511999999999"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (11) 91450-6603
                </a>
              </div>
              <div></div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4 text-sm text-muted-foreground">
          <p className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-yellow-800">
            <strong>Aviso importante:</strong> Não somos afiliados oficiais da
            IA Manus. Oferecemos um serviço independente de venda de créditos
            com garantia de entrega. A entrega dos créditos é conforme a
            disponibilidade da equipe, para maiores dúvidas entre em contato no
            WhatsApp.
          </p>

          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <a href="#" className="hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Garantias
            </a>
          </div>

          <p className="pt-4">© 2024 - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
