import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Activity, Heart, MessageSquare } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const specialties = [
  {
    title: "Fisioterapia Neurofuncional",
    icon: Brain,
  },
  {
    title: "Fisioterapia Respiratória",
    icon: Activity,
  },
  {
    title: "Terapia Ocupacional",
    icon: Heart,
  },
  {
    title: "Fonoaudiologia",
    icon: MessageSquare,
  },
];

const additionalServices = [
  {
    title: "Desenvolvimento Neuropsicomotor",
    icon: Brain,
  },
  {
    title: "Visitas Escolares",
    icon: School,
  },
  {
    title: "Apoio Parental",
    icon: Users,
  },
  {
    title: "Intervenção Multidisciplinar",
    icon: Users,
  },
  {
    title: "Orientação Familiar",
    icon: Heart,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-8 font-hoss uppercase">
            NOSSAS ESPECIALIDADES
          </h2>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {specialties.map((specialty, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/4">
                  <Card className="border-2 border-accent-blue/20 hover:border-primary transition-colors h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                        <specialty.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl text-center text-primary-dark font-hoss">
                        {specialty.title}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark my-16 font-hoss uppercase">
            NOSSOS SERVIÇOS
          </h2>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {additionalServices.map((service, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/4">
                  <Card className="border-2 border-accent-blue/20 hover:border-primary transition-colors h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl text-center text-primary-dark font-hoss">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Services;