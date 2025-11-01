import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

interface HeroProps {
    whatsappNumber?: string;
}

const Hero = ({ whatsappNumber = '5531997364904' }: HeroProps) => {
    const scrollToServices = () => {
        const servicesSection = document.getElementById('services');
        servicesSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto w-full">
                <div className="text-center">
                    <img
                        src="/lovable-uploads/22ce0213-469c-4842-82a3-28e0f205347b.png"
                        alt="Faz de Conta Logo"
                        className="w-full max-w-3xl mx-auto mb-6"
                    />
                    <p className="text-lg sm:text-xl text-neutral-dark mb-8 max-w-2xl mx-auto font-como">
                        Um espaço feito de sorrisos e descobertas.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            asChild
                            className="bg-primary hover:bg-primary-dark text-white text-lg px-8 py-8 sm:py-6 flex items-center gap-2 transition-colors duration-300"
                        >
                            <a
                                href="https://whatsapp.faleconosco.chat/redirect/538dc58ea"
                                rel="noopener noreferrer"
                            >
                                <MessageCircle className="w-7 h-7" />
                                Agende uma Consulta
                            </a>
                        </Button>
                        <Button
                            variant="outline"
                            className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-8 sm:py-6 transition-colors duration-300"
                            onClick={scrollToServices}>
                            Conheça Nossos Serviços
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
