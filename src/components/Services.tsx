import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Brain,
    Activity,
    Heart,
    GraduationCap,
    Users2,
    BookOpen,
    Bone,
    Baby,
    Hand,
    Mic,
    User2,
    Stethoscope,
    BrainCircuit,
    UserCheck,
    Eye,
} from 'lucide-react';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const specialties = [
    {
        title: 'Fisioterapia Neurofuncional',
        icon: Brain,
    },
    {
        title: 'Fisioterapia Respiratória',
        icon: Activity,
    },
    {
        title: 'Fisioterapia Ortopédica',
        icon: Bone,
    },
    {
        title: 'Médico Pediatra',
        icon: Baby,
    },
    {
        title: 'Médico Neurologista Pediatra',
        icon: BrainCircuit,
    },
    {
        title: 'Terapia Ocupacional',
        icon: Hand,
    },
    {
        title: 'Fonoaudiologia',
        icon: Mic,
    },
    {
        title: 'Psicologia',
        icon: User2,
    },
    {
        title: 'Acompanhamento Terapêutico (AT)',
        icon: UserCheck,
    },
    {
        title: 'Supervisão',
        icon: Eye,
    },
    {
        title: 'Psicopedagogia',
        icon: BookOpen,
    },
];

const additionalServices = [
    {
        title: 'Desenvolvimento Neuropsicomotor',
        icon: Brain,
    },
    {
        title: 'Visitas Escolares',
        icon: GraduationCap,
    },
    {
        title: 'Apoio Parental',
        icon: Users2,
    },
    {
        title: 'Intervenção Multidisciplinar',
        icon: Users2,
    },
    {
        title: 'Orientação Familiar',
        icon: Heart,
    },
];

const Services = () => {
    return (
        <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-8 font-hoss uppercase">NOSSAS ESPECIALIDADES</h2>
                    <div className="relative">
                        <Carousel className="w-full max-w-5xl mx-auto">
                            <CarouselContent className="-ml-2 md:-ml-4">
                                {specialties.map((specialty, index) => (
                                    <CarouselItem key={index} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/4">
                                        <Card className="border-2 border-accent-blue/20 hover:border-primary transition-colors h-full">
                                            <CardHeader>
                                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                                                    <specialty.icon className="w-6 h-6 text-primary" />
                                                </div>
                                                <CardTitle className="text-xl text-center text-primary-dark font-hoss">{specialty.title}</CardTitle>
                                            </CardHeader>
                                        </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <div className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2">
                                <CarouselPrevious className="hidden md:flex" />
                            </div>
                            <div className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2">
                                <CarouselNext className="hidden md:flex" />
                            </div>
                            <div className="flex justify-center mt-4 md:hidden">
                                <div className="flex items-center gap-2 text-primary">
                                    <span className="text-sm font-medium">Arraste para ver mais</span>
                                    <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </Carousel>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark my-16 font-hoss uppercase">NOSSOS SERVIÇOS</h2>
                    <div className="relative">
                        <Carousel className="w-full max-w-5xl mx-auto">
                            <CarouselContent className="-ml-2 md:-ml-4">
                                {additionalServices.map((service, index) => (
                                    <CarouselItem key={index} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/4">
                                        <Card className="border-2 border-accent-blue/20 hover:border-primary transition-colors h-full">
                                            <CardHeader>
                                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                                                    <service.icon className="w-6 h-6 text-primary" />
                                                </div>
                                                <CardTitle className="text-xl text-center text-primary-dark font-hoss">{service.title}</CardTitle>
                                            </CardHeader>
                                        </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <div className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2">
                                <CarouselPrevious className="hidden md:flex" />
                            </div>
                            <div className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2">
                                <CarouselNext className="hidden md:flex" />
                            </div>
                            <div className="flex justify-center mt-4 md:hidden">
                                <div className="flex items-center gap-2 text-primary">
                                    <span className="text-sm font-medium">Arraste para ver mais</span>
                                    <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
