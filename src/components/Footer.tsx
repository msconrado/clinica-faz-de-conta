import { useEffect, useRef, useState } from 'react';
import { Instagram } from 'lucide-react';

const Footer = () => {
    const footerRef = useRef<HTMLElement>(null);
    const [isAtFooter, setIsAtFooter] = useState(false);

    useEffect(() => {
        const getWhatsappElement = (): HTMLElement | null => {
            const elements = document.querySelectorAll(
                '#datalitics-button, [class*="datalitics"], [id*="datalitics"], a[href*="wa.me"], a[href*="whatsapp.com"], [class*="whatsapp"]',
            );

            if (elements.length > 0) {
                let el = elements[0] as HTMLElement;
                while (el.parentElement && el.parentElement !== document.body && getComputedStyle(el.parentElement).position === 'fixed') {
                    el = el.parentElement;
                }
                return el;
            }
            return null;
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                const isIntersecting = entry.isIntersecting;
                setIsAtFooter(isIntersecting);

                const wppBtn = getWhatsappElement();

                if (wppBtn) {
                    wppBtn.style.transition = 'transform 0.3s ease-in-out';
                    if (isIntersecting) {
                        wppBtn.style.transform = 'translateY(-120px)';
                    } else {
                        wppBtn.style.transform = 'translateY(0px)';
                    }
                }
            },
            {
                root: null,
                threshold: 0.1,
            },
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
        };
    }, []);

    return (
        <footer ref={footerRef} className="bg-accent-blue/20 py-8 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <img src="/lovable-uploads/73603ab0-7e58-4602-aff0-f654a4fe2b8d.png" alt="Faz de Conta" className="h-20 w-auto" />
                    </div>

                    <div className="flex space-x-6 mb-4 md:mb-0">
                        <a
                            href="https://www.instagram.com/clinicafazdeconta"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-dark hover:text-primary transition-colors">
                            <Instagram className="w-6 h-6" />
                        </a>
                    </div>

                    <div className="text-sm text-neutral-dark text-center md:text-right font-como">
                        <p>© {new Date().getFullYear()} Faz de Conta</p>
                        <p>Clínica de Desenvolvimento Infantil</p>
                        <p>CNPJ: 56.392.391/0001-91</p>
                    </div>
                </div>
            </div>

            <div
                className={`fixed left-0 p-4 z-50 floating-buttons transition-all duration-300 ease-in-out ${isAtFooter ? 'bottom-28' : 'bottom-0'}`}>
                <img src="/lovable-uploads/selo-atendimento-particular.png" alt="Decorative" className="w-52 h-auto" />
            </div>
        </footer>
    );
};

export default Footer;
