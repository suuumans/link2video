import type { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center relative overflow-hidden bg-black text-white font-sans selection:bg-brand-primary/30">
        <Header />
        
        <main className="w-full max-w-7xl flex-1 flex flex-col items-center justify-center p-4 md:p-8 pt-32 md:pt-40 gap-12 animate-fade-in relative z-10">
          {children}
        </main>
        
        <Footer />
        
        {/* Background Gradients */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
             <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-primary/10 rounded-full blur-[120px]" />
             <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-brand-accent/10 rounded-full blur-[120px]" />
        </div>
    </div>
  );
};

