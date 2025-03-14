import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { componentTagger } from 'lovable-tagger';

export default defineConfig(({ mode }) => ({
    server: {
        host: '::',
        port: 8080,
    },
    plugins: [react(), mode === 'development' && componentTagger()].filter(Boolean),
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    build: {
        sourcemap: mode === 'development',
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom', 'react-router-dom'],
                    ui: [
                        '@radix-ui/react-accordion',
                        '@radix-ui/react-alert-dialog',
                        '@radix-ui/react-dialog',
                        '@radix-ui/react-dropdown-menu',
                        '@radix-ui/react-label',
                        '@radix-ui/react-popover',
                        '@radix-ui/react-select',
                        '@radix-ui/react-slot',
                        '@radix-ui/react-tabs',
                        '@radix-ui/react-toast',
                    ],
                },
            },
        },
        assetsInlineLimit: 4096, // 4kb
    },
    optimizeDeps: {
        include: ['react', 'react-dom', 'react-router-dom'],
    },
}));
