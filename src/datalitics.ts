export function loadDatalitics(): Promise<void> {
    return new Promise((resolve, reject) => {
        if (typeof window === 'undefined') return resolve();
        if ((window as any).Datalitics) return resolve(); // já carregado

        // define a variável antes do script
        (window as any).codeWpRedirectLink = '538dc58ea';

        // adiciona o CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://app.datalitics.com.br/styles/styles.min.css';
        document.head.appendChild(link);

        // adiciona o script
        const script = document.createElement('script');
        script.src = 'https://cdn.datalitics.app/script_v2.min.js';
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Falha ao carregar Datalitics'));
        document.body.appendChild(script);
    });
}
