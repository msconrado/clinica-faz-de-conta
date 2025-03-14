import { Suspense, lazy, useState } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Lazy load pages
const Index = lazy(() => import('./pages/Index'));
const LinkTreePage = lazy(() => import('./pages/LinkTreePage'));
const Blog = lazy(() => import('./pages/Blog'));

// Loading fallback component
const LoadingFallback = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-lg font-medium text-foreground">Carregando...</p>
    </div>
);

const App = () => {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 1000 * 60 * 5, // 5 minutes
                        gcTime: 1000 * 60 * 30, // 30 minutes
                        retry: 1, // Retry failed requests just once
                        refetchOnWindowFocus: import.meta.env.PROD, // Only in production
                    },
                },
            })
    );

    return (
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                <Toaster />
                <Sonner />
                <BrowserRouter>
                    <Suspense fallback={<LoadingFallback />}>
                        <Routes>
                            <Route path="/" element={<Index />} />
                            <Route path="/linktree" element={<LinkTreePage />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="*" element={<div className="flex items-center justify-center min-h-screen">Página não encontrada</div>} />
                        </Routes>
                    </Suspense>
                </BrowserRouter>
            </TooltipProvider>
        </QueryClientProvider>
    );
};

export default App;
