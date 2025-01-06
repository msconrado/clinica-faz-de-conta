import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent-blue/20 py-8 px-4 sm:px-6 lg:px-8">
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
    </footer>
  );
};

export default Footer;