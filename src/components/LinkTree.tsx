import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Instagram, Globe, MessageCircle, Mail, MapPin, Calendar } from "lucide-react";
import QRCode from "./QRCode";

const LinkTree = () => {
  const handleWhatsAppClick = (message?: string) => {
    const text = message || "Olá! Gostaria de agendar uma consulta na Clínica Faz de Conta.";
    window.open(`https://wa.me/5531975051502?text=${encodeURIComponent(text)}`, "_blank");
  };

  const links = [
    {
      title: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://www.instagram.com/clinicafazdeconta/",
      bgColor: "bg-accent-blue",
    },
    {
      title: "Website",
      icon: <Globe className="w-5 h-5" />,
      url: "https://www.clinicafazdeconta.com.br",
      bgColor: "bg-accent-yellow",
    },
    {
      title: "WhatsApp",
      icon: <MessageCircle className="w-5 h-5" />,
      onClick: () => handleWhatsAppClick(),
      bgColor: "bg-accent-orange",
    },
    {
      title: "Email",
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:clinicafazdeconta@gmail.com",
      bgColor: "bg-primary",
    },
    {
      title: "Endereço",
      icon: <MapPin className="w-5 h-5" />,
      url: "https://maps.google.com/?q=Rua+Safira,+370,+Prado,+Belo+Horizonte,+MG,+30411-127",
      bgColor: "bg-secondary",
    },
    {
      title: "Agende sua Visita",
      icon: <Calendar className="w-5 h-5" />,
      onClick: () => handleWhatsAppClick("Olá! Gostaria de agendar uma visita à Clínica Faz de Conta."),
      bgColor: "bg-primary-light",
    },
  ];

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto space-y-4">
        <div className="text-center mb-8">
          <img
            src="/lovable-uploads/d96807a6-0ea0-467d-a44f-f29335b36c59.png"
            alt="Faz de Conta Logo"
            className="w-32 h-32 mx-auto mb-4 rounded-full bg-white shadow-lg"
          />
          <p className="text-lg font-como text-accent-orange font-bold">
            AQUI, A IMAGINAÇÃO GANHA ASAS.
          </p>
          <p className="text-neutral-dark font-como">
            Um espaço feito de sorrisos e descobertas.
          </p>
        </div>
        
        {links.map((link, index) => (
          <Button
            key={index}
            className={`w-full h-12 ${link.bgColor} hover:opacity-90 transition-opacity duration-300 text-white font-como`}
            onClick={link.onClick}
            asChild={!link.onClick}
          >
            {link.onClick ? (
              <div className="flex items-center justify-center gap-2">
                {link.icon}
                {link.title}
              </div>
            ) : (
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                {link.icon}
                {link.title}
              </a>
            )}
          </Button>
        ))}
        
        <QRCode />
      </div>
    </section>
  );
};

export default LinkTree;
