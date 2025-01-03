import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Brain, Heart, Users } from "lucide-react";

const services = [
  {
    title: "Fisioterapia Pediátrica",
    description: "Tratamento especializado para promover o desenvolvimento motor adequado das crianças.",
    icon: Activity,
  },
  {
    title: "Desenvolvimento Neuropsicomotor",
    description: "Acompanhamento do desenvolvimento global da criança.",
    icon: Brain,
  },
  {
    title: "Atendimento Humanizado",
    description: "Cuidado personalizado e acolhedor para cada paciente.",
    icon: Heart,
  },
  {
    title: "Orientação Familiar",
    description: "Suporte e orientação para pais e familiares.",
    icon: Users,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-accent-blue/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-neutral-dark max-w-2xl mx-auto">
            Oferecemos uma variedade de serviços especializados para o desenvolvimento infantil
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="border-2 border-accent-blue/20 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-center text-primary-dark">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-neutral-dark">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;