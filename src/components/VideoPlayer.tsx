
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

import { MediaPlayer, MediaProvider, Poster } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import { X, AlertCircle, RotateCcw, RotateCw } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface VideoPlayerProps {
  url: string;
  onClose: () => void;
}

export const VideoPlayer = ({ url, onClose }: VideoPlayerProps) => {
  const [error, setError] = useState<string | null>(null);
  const [useNativePlayer, setUseNativePlayer] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const seek = (seconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime += seconds;
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!useNativePlayer) return;
      if (e.key === 'ArrowRight') seek(10);
      if (e.key === 'ArrowLeft') seek(-10);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [useNativePlayer]);

  return (
    <div className="w-full max-w-4xl animate-scale-in relative group">
       {/* Glass container for player */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black border border-white/10 ring-1 ring-white/5 aspect-video flex items-center justify-center">
        
        <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2 bg-black/50 backdrop-blur-md rounded-full text-white/70 hover:text-white hover:bg-black/70 transition-all duration-300 opacity-0 group-hover:opacity-100"
            title="Close Player"
        >
            <X className="w-6 h-6" />
        </button>

        {error && !useNativePlayer ? (
           <div className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-zinc-950 text-white p-6 text-center animate-in fade-in">
              <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
                <AlertCircle className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Unavailable</h3>
              <p className="text-zinc-400 mb-6 max-w-md">{error}</p>
              <div className="flex gap-3">
                 <button 
                  onClick={() => {
                    setError(null);
                    setUseNativePlayer(true);
                  }}
                  className="px-4 py-2 bg-white text-black hover:bg-white/90 rounded-full text-sm font-medium transition-colors"
                 >
                   Try Native Player
                 </button>
                 <button 
                  onClick={onClose}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium transition-colors"
                 >
                   Close
                 </button>
              </div>
           </div>
        ) : useNativePlayer ? (
            <div className="relative w-full h-full group/native">
                <video 
                    ref={videoRef}
                    src={url} 
                    controls 
                    autoPlay 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                        console.error("Native Player Error:", e);
                        setError("Even the native player failed to load this link.");
                        setUseNativePlayer(false);
                    }}
                >
                    Your browser does not support the video tag.
                </video>
                
                {/* Seek Controls Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover/native:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-20">
                        <button 
                            onClick={() => seek(-10)}
                            className="p-4 rounded-full bg-black/40 backdrop-blur-sm text-white/80 hover:bg-black/60 hover:text-white pointer-events-auto transition-all transform hover:scale-110 active:scale-95"
                            title="Rewind 10s"
                        >
                            <RotateCcw className="w-8 h-8" />
                            <span className="sr-only">Rewind 10s</span>
                        </button>
                        <button 
                            onClick={() => seek(10)}
                            className="p-4 rounded-full bg-black/40 backdrop-blur-sm text-white/80 hover:bg-black/60 hover:text-white pointer-events-auto transition-all transform hover:scale-110 active:scale-95"
                            title="Forward 10s"
                        >
                            <RotateCw className="w-8 h-8" />
                            <span className="sr-only">Forward 10s</span>
                        </button>
                    </div>
                </div>
            </div>
        ) : (
          <MediaPlayer 
              title="Link2Video Player" 
              src={url} 
              aspectRatio="16/9"
              load="eager"
              autoPlay
              crossOrigin={null} // Try to be permissive
              onError={(e) => {
                // @ts-expect-error - Vidstack types might need adjusting
                const msg = e?.detail?.message || "Failed to load media.";
                console.error("Link2Video Media Error:", e);
                setError(msg);
              }}
          >
            <MediaProvider>
              <Poster className="vds-poster" />
            </MediaProvider>
            <DefaultVideoLayout icons={defaultLayoutIcons} />
          </MediaPlayer>
        )}
      </div>

      <div className="mt-6 flex justify-between items-center px-4 text-sm text-zinc-500">
        <p>Now Playing {useNativePlayer && "(Native Mode)"}</p>
        <p className="font-mono text-xs opacity-50 truncate max-w-[200px]">{url}</p>
      </div>
    </div>
  );
};
