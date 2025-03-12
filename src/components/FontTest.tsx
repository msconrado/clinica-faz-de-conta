import { useEffect, useState } from 'react';

const FontTest = () => {
    const [fontsLoaded, setFontsLoaded] = useState({
        como: false,
        hoss: false,
    });

    useEffect(() => {
        // Verificar se as fontes foram carregadas
        document.fonts.ready.then(() => {
            const comoLoaded = document.fonts.check('500 1em "Como"');
            const hossLoaded = document.fonts.check('500 1em "Hoss Round"');

            setFontsLoaded({
                como: comoLoaded,
                hoss: hossLoaded,
            });

            console.log('Fontes carregadas:', { como: comoLoaded, hoss: hossLoaded });
        });
    }, []);

    return (
        <div className="fixed bottom-4 right-4 bg-white p-4 shadow-lg rounded-lg z-50 text-sm">
            <h3 className="font-bold mb-2">Diagnóstico de Fontes</h3>
            <div>
                <p>
                    Como:{' '}
                    <span className={fontsLoaded.como ? 'text-green-500' : 'text-red-500'}>
                        {fontsLoaded.como ? 'Carregada ✓' : 'Não carregada ✗'}
                    </span>
                </p>
                <p>
                    Hoss Round:{' '}
                    <span className={fontsLoaded.hoss ? 'text-green-500' : 'text-red-500'}>
                        {fontsLoaded.hoss ? 'Carregada ✓' : 'Não carregada ✗'}
                    </span>
                </p>
            </div>
            <div className="mt-4">
                <p className="font-como">Texto com fonte Como</p>
                <p className="font-hoss">Texto com fonte Hoss Round</p>
            </div>
        </div>
    );
};

export default FontTest;
