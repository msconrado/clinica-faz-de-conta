import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Hero = () => {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de agendar uma consulta na Clínica Faz de Conta.";
    window.open(`https://wa.me/5531975051502?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center">
          <img
            src="/lovable-uploads/487c9d54-217e-42ca-8715-393ceb3dca9f.png"
            alt="Faz de Conta Logo"
            className="w-full max-w-3xl mx-auto mb-8"
          />
          <p className="text-lg sm:text-xl text-neutral-dark mb-8 max-w-2xl mx-auto">
            Um espaço feito de sorrisos e descobertas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-primary hover:bg-primary-dark text-white text-lg px-8 py-6 flex items-center gap-2"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="w-6 h-6" />
              Agende uma Consulta
            </Button>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6"
              onClick={() => window.location.href = "#services"}
            >
              Conheça Nossos Serviços
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;