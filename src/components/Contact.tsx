import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-neutral-dark max-w-2xl mx-auto">
            Estamos aqui para ajudar no desenvolvimento do seu filho
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-primary-dark mb-2">Telefone</h3>
            <a href="tel:(31)97505-1502" className="text-neutral-dark hover:text-primary transition-colors">
              (31) 97505-1502
            </a>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-primary-dark mb-2">Email</h3>
            <a href="mailto:clinicafazdeconta@gmail.com" className="text-neutral-dark hover:text-primary transition-colors">
              clinicafazdeconta@gmail.com
            </a>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-primary-dark mb-2">Endereço</h3>
            <address className="text-neutral-dark text-center not-italic">
              Rua Safira, Nº 370, Bairro Prado<br />
              Belo Horizonte/MG, CEP 30.411.127
            </address>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;