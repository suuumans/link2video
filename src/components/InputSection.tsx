import { ArrowRight, Link } from 'lucide-react';
import { type FormEvent, useState } from 'react';

interface InputSectionProps {
  onPlay: (url: string) => void;
}

export const InputSection = ({ onPlay }: InputSectionProps) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      onPlay(url.trim());
    }
  };

  return (
    <section className="flex flex-col items-center justify-center w-full gap-8 text-center animate-slide-up">
      <div className="space-y-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent">
          Link2Video
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-xl mx-auto">
           Universal Video Player for the Modern Web. <br /> Support for HLS, MP4, WebM, and more.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-2xl relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-accent rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
        
        <div className="relative flex items-center p-2 bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl transition-all duration-300 focus-within:border-brand-primary/50 focus-within:ring-2 focus-within:ring-brand-primary/20">
          <div className="pl-4 pr-2 text-zinc-500">
            <Link className="w-6 h-6" />
          </div>
          
          <input
            type="url"
            placeholder="Paste your video link here..."
            className="flex-1 bg-transparent border-none outline-none text-white text-lg placeholder-zinc-500 py-3 px-2 w-full"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />

          <button
            type="submit"
            className="flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-brand-primary/20 cursor-pointer"
          >
            <span>Play</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </form>
    </section>
  );
};
