import { HelmetProvider } from 'react-helmet-async';
import { useState } from 'react';
import { Layout } from './components/Layout';
import { SEO } from './components/SEO';
import { InputSection } from './components/InputSection';
import { Features } from './components/Features';
import { VideoPlayer } from './components/VideoPlayer';

function App() {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const handlePlay = (url: string) => {
    setVideoUrl(url);
  };

  const handleClose = () => {
    setVideoUrl(null);
  };

  return (
    <HelmetProvider>
      <SEO />
      <Layout>
        {/* Header / Brand is handled in InputSection for visual flow when empty, 
            but we can move it out if we want a persistent header. 
            For this simple app, keeping it centered is nicer. */}
        
        {!videoUrl ? (
          <>
            <InputSection onPlay={handlePlay} />
            <Features />
          </>
        ) : (
            <div className="w-full flex flex-col items-center animate-fade-in">
                <VideoPlayer url={videoUrl} onClose={handleClose} />
                <button 
                    onClick={handleClose}
                    className="mt-12 text-zinc-500 hover:text-zinc-300 transition-colors text-sm"
                >
                    ← Play another video
                </button>
            </div>
        )}
      </Layout>
    </HelmetProvider>
  );
}

export default App;
