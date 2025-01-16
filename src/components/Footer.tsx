import { Instagram, ArrowUp, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-accent-blue/20 py-8 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img
              src="/lovable-uploads/73603ab0-7e58-4602-aff0-f654a4fe2b8d.png"
              alt="Faz de Conta"
              className="h-8 w-auto"
            />
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="https://wa.me/5531995300370"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-dark hover:text-primary transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/clinicafazdeconta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-dark hover:text-primary transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>

          <div className="text-sm text-neutral-dark text-center md:text-right font-como">
            <p>© {new Date().getFullYear()} Faz de Conta</p>
            <p>Clínica de Desenvolvimento Infantil</p>
          </div>
        </div>
      </div>
      
      <Button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-primary hover:bg-primary-dark text-white rounded-full p-2 shadow-lg"
        size="icon"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>

      <a
        href="https://wa.me/5531995300370"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 left-4"
      >
        <Button
          className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full p-3 shadow-lg w-16 h-16"
          size="icon"
        >
          <img
            src="/lovable-uploads/e26a6eb6-b160-4c8f-98a5-ce7f152fba26.png"
            alt="WhatsApp"
            className="w-8 h-8"
          />
        </Button>
      </a>
    </footer>
  );
};

export default Footer;