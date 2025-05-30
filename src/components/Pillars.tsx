import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const Pillars = () => {
    const pillars = ['Humanização', 'Respeito', 'Ética', 'Inclusão', 'Acessibilidade'];

    return (
        <section id="pillars" className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-8 font-hoss text-center uppercase">PILARES</h2>
                {/* Desktop view */}
                <div className="hidden md:grid grid-cols-5 gap-6">
                    {pillars.map((pillar, index) => (
                        <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                            <CardContent className="p-6 text-center">
                                <h3 className="text-xl font-bold text-primary-dark font-hoss">{pillar}</h3>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                {/* Mobile view with carousel */}
                <div className="md:hidden">
                    <Carousel className="w-full">
                        <CarouselContent className="-ml-2">
                            {pillars.map((pillar, index) => (
                                <CarouselItem key={index} className="pl-2 basis-4/5">
                                    <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                                        <CardContent className="p-6 text-center">
                                            <h3 className="text-xl font-bold text-primary-dark font-hoss">{pillar}</h3>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        {/* Adicionar indicativo de scroll para mobile */}
                        <div className="flex justify-center mt-4">
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
        </section>
    );
};

export default Pillars;
