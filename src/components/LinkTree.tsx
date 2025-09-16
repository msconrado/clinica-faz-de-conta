import { Button } from '@/components/ui/button';
import { Instagram, Globe, MessageCircle, Mail, MapPin, Calendar } from 'lucide-react';
import { useEffect } from 'react';

const LinkTree = () => {
    useEffect(() => {
        const wp = document.querySelectorAll('.wp-datalitics');

        // Adicionar CSS para esconder o botão do Datalitics
        wp.forEach((element) => {
            element.setAttribute('style', 'display: none !important;');
        });

        return () => {
            // Remover o estilo quando o componente for desmontado
            wp.forEach((element) => {
                element.removeAttribute('style');
            });
        };
    }, []);

    const links = [
        {
            title: 'Instagram',
            icon: <Instagram className="w-5 h-5" />,
            url: 'https://www.instagram.com/clinicafazdeconta/',
            bgColor: 'bg-accent-blue',
        },
        {
            title: 'Website',
            icon: <Globe className="w-5 h-5" />,
            url: 'https://www.clinicafazdeconta.com.br',
            bgColor: 'bg-accent-yellow',
        },
        {
            title: 'WhatsApp',
            icon: <MessageCircle className="w-5 h-5" />,
            onClick: () => {
                window.open(
                    'https://whatsapp.faleconosco.chat/redirect/7e770fc58',
                    '_blank'
                );
            },
            bgColor: 'bg-accent-orange',
        },
        {
            title: 'Email',
            icon: <Mail className="w-5 h-5" />,
            url: 'mailto:clinicafazdeconta@gmail.com',
            bgColor: 'bg-primary',
        },
        {
            title: 'Endereço',
            icon: <MapPin className="w-5 h-5" />,
            url: 'https://maps.app.goo.gl/r7Z3iuuS248cmyY59',
            bgColor: 'bg-secondary',
        },
        {
            title: 'Agende sua Visita',
            icon: <Calendar className="w-5 h-5" />,
            onClick: () => {
                window.open(
                    `https://whatsapp.faleconosco.chat/redirect/69bb554d6`,
                    '_blank'
                );
            },
            bgColor: 'bg-primary-light',
        },
    ];

    return (
        <section className="py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto space-y-4">
                <div className="text-center mb-8">
                    <img
                        src="/lovable-uploads/73603ab0-7e58-4602-aff0-f654a4fe2b8d.png"
                        alt="Faz de Conta Logo"
                        className="w-32 h-32 mx-auto mb-4 rounded-full bg-white shadow-lg"
                    />
                    <p className="text-lg font-como text-accent-orange font-bold">AQUI, A IMAGINAÇÃO GANHA ASAS.</p>
                    <p className="text-neutral-dark font-como">Um espaço feito de sorrisos e descobertas.</p>
                </div>

                {links.map((link, index) => (
                    <Button
                        key={index}
                        className={`w-full h-12 ${link.bgColor} hover:opacity-90 transition-opacity duration-300 text-white font-como`}
                        onClick={link.onClick}
                        asChild={!link.onClick}>
                        {link.onClick ? (
                            <div className="flex items-center justify-center gap-2">
                                {link.icon}
                                {link.title}
                            </div>
                        ) : (
                            <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                                {link.icon}
                                {link.title}
                            </a>
                        )}
                    </Button>
                ))}
            </div>
        </section>
    );
};

export default LinkTree;
