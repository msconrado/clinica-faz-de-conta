import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App.tsx';
import './fonts.css';
import './index.css';
import { loadDatalitics } from './datalitics.ts';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

loadDatalitics()

createRoot(rootElement).render(
    <StrictMode>
        <App />
    </StrictMode>
);
