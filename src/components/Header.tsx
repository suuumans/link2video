
import { Download } from 'lucide-react';
import { useEffect, useState } from 'react';

export const Header = () => {
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

    useEffect(() => {
        const handler = (e: any) => {
            e.preventDefault();
            setDeferredPrompt(e);
        };
        window.addEventListener('beforeinstallprompt', handler);
        return () => window.removeEventListener('beforeinstallprompt', handler);
    }, []);

    const handleInstall = async () => {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            setDeferredPrompt(null);
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/50 backdrop-blur-lg border-b border-white/5">
            <div className="flex items-center gap-3 select-none">
                <img src="/link2video.png" alt="Link2Video Logo" className="w-10 h-10 object-contain" />
                <span className="text-xl font-bold bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent">
                    Link2Video
                </span>
            </div>
            
            <div className="flex items-center gap-4">
                {deferredPrompt && (
                    <button
                        onClick={handleInstall}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 hover:bg-brand-primary/20 text-brand-primary border border-brand-primary/20 transition-all cursor-pointer"
                    >
                        <Download className="w-4 h-4" />
                        <span className="text-sm font-medium">Install App</span>
                    </button>
                )}
                
                {/*
                <a 
                    href="https://github.com/suuumans/link2video" 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-2 rounded-full hover:bg-white/10 transition-colors text-zinc-400 hover:text-white"
                >
                    <Github className="w-6 h-6" />
                </a>
                */}
            </div>
        </header>
    );
};
