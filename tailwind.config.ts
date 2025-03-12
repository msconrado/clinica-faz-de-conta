import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import tailwindcssAnimate from 'tailwindcss-animate';

export default {
    darkMode: ['class'],
    content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}', './index.html'],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: '#86508C',
                    light: '#9B6AA0',
                    dark: '#6E3E73',
                },
                secondary: {
                    DEFAULT: '#CE3784',
                    light: '#D85B9A',
                    dark: '#A82C6A',
                },
                accent: {
                    orange: '#D95F2C',
                    yellow: '#E4C340',
                    blue: '#81A8B7',
                },
                neutral: {
                    DEFAULT: '#8E9196',
                    light: '#C8C8C9',
                    dark: '#222222',
                },
            },
            fontFamily: {
                hoss: ['Hoss Round', ...fontFamily.sans],
                como: ['Como', ...fontFamily.sans],
                sans: ['Como', ...fontFamily.sans],
            },
            backgroundImage: {
                formas: "url('/lovable-uploads/f5feb93e-12fd-4081-a335-bdaf9336b529.png')",
                estrelas: "url('/lovable-uploads/847630e0-8754-41b6-ad07-2c824e0219a5.png')",
                prancheta19: "url('/lovable-uploads/487c9d54-217e-42ca-8715-393ceb3dca9f.png')",
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                float: 'float 3s ease-in-out infinite',
            },
        },
    },
    plugins: [tailwindcssAnimate],
} satisfies Config;
