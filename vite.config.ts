import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['link2video.png', 'robots.txt'],
      devOptions: {
        enabled: true
      },
      workbox: {
        cleanupOutdatedCaches: true,
        // tailored globPatterns to see if we can avoid the bad file, or use globIgnores
        globIgnores: ['**/index-*.css'] 
      },
      manifest: {
        name: 'Link2Video',
        short_name: 'Link2Video',
        description: 'Universal Video Player for the Modern Web',
        theme_color: '#000000',
        background_color: '#000000',
        display: 'standalone',
        icons: [
          {
            src: 'link2video.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'link2video.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
});
