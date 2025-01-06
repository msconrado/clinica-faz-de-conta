import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Hero = () => {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de agendar uma consulta na Clínica Faz de Conta.";
    window.open(`https://wa.me/5531975051502?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="home" className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center">
          <img
            src="/lovable-uploads/73603ab0-7e58-4602-aff0-f654a4fe2b8d.png"
            alt="Faz de Conta Logo"
            className="mx-auto mb-8 w-64 sm:w-96"
          />
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