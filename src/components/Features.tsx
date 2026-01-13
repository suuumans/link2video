
import { Globe, Shield, Keyboard, PlayCircle, Zap } from 'lucide-react';

export const Features = () => {
    return (
        <section className="w-full max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 text-zinc-400 animate-slide-in-up">
            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Zap className="w-6 h-6 text-brand-primary" />
                    How it works
                </h2>
                <div className="space-y-4">
                    <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 text-white font-mono text-sm">1</div>
                        <p>Paste any direct video link (MP4, MKV, WebM, M3U8).</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 text-white font-mono text-sm">2</div>
                        <p>Click play. We handle the format detection automatically.</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 text-white font-mono text-sm">3</div>
                        <p>If our advanced player fails (CORS/Format), switch to <b>Native Mode</b> instantly.</p>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Shield className="w-6 h-6 text-brand-accent" />
                    Features
                </h2>
                <ul className="grid grid-cols-1 gap-4">
                    <li className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                        <Globe className="w-5 h-5 text-blue-400" />
                        <span>Universal Playback (HLS, DASH, Files)</span>
                    </li>
                    <li className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                        <PlayCircle className="w-5 h-5 text-green-400" />
                        <span>Native Fallback for Protected/CORS links</span>
                    </li>
                    <li className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                        <Keyboard className="w-5 h-5 text-amber-400" />
                        <span>Keyboard Shortcuts (Seek +/- 10s)</span>
                    </li>
                    <li className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                        <Shield className="w-5 h-5 text-purple-400" />
                        <span>100% Free & No Ads (Pure Experience)</span>
                    </li>
                </ul>
            </div>
        </section>
    );
};
