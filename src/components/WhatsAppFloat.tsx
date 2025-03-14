import { useEffect } from 'react';

// Declaração de tipos para as propriedades globais
declare global {
    interface Window {
        codeWpRedirectLink: string;
        codeWpLink: string;
    }
}

const WhatsAppFloat = () => {
    useEffect(() => {
        // Adicionar a variável global para o Datalitics
        window.codeWpRedirectLink = 'd99778db0';

        // Se necessário, também definir a variável codeWpLink
        window.codeWpLink = 'd99778db0';
    }, []);

    return (
        // Este div é para o script do Datalitics usar
        <div className="wp-datalitics"></div>
    );
};

export default WhatsAppFloat;
