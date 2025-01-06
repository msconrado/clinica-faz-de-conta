import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Activity, Users, School, Heart, MessageSquare } from "lucide-react";

const specialties = [
  {
    title: "Fisioterapia Neurofuncional",
    description: "Tratamento especializado para desenvolvimento neurológico.",
    icon: Brain,
  },
  {
    title: "Fisioterapia Respiratória",
    description: "Cuidados com a saúde respiratória.",
    icon: Activity,
  },
  {
    title: "Terapia Ocupacional",
    description: "Integração sensorial de Aires.",
    icon: Heart,
  },
  {
    title: "Fonoaudiologia",
    description: "Desenvolvimento da fala e linguagem.",
    icon: MessageSquare,
  },
];

const additionalServices = [
  {
    title: "Desenvolvimento Neuropsicomotor",
    description: "Acompanhamento completo do desenvolvimento.",
    icon: Brain,
  },
  {
    title: "Visitas Escolares",
    description: "Acompanhamento no ambiente escolar.",
    icon: School,
  },
  {
    title: "Apoio Parental",
    description: "Suporte e orientação aos pais.",
    icon: Users,
  },
  {
    title: "Intervenção Multidisciplinar",
    description: "Atendimento integrado entre especialidades.",
    icon: Users,
  },
  {
    title: "Orientação Familiar",
    description: "Acompanhamento e suporte às famílias.",
    icon: Heart,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-8 font-hoss">
            Nossas Especialidades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {specialties.map((specialty) => (
              <Card key={specialty.title} className="border-2 border-accent-blue/20 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <specialty.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-center text-primary-dark font-hoss">
                    {specialty.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-neutral-dark font-como">
                    {specialty.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-8 font-hoss">
            Nossos Serviços
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service) => (
              <Card key={service.title} className="border-2 border-accent-blue/20 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-center text-primary-dark font-hoss">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-neutral-dark font-como">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;