import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'

// PWA STUFF
const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: 'prompt',
  includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
  manifest: {
    name: 'Lemon + Jinja',
    short_name: 'Lemon + Jinja',
    description: 'A shopping companion app for Lemon + Jinja',
    icons: [
      {
        src: '/src/images/icons/manifest-icon-192.maskable.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/src/images/icons/manifest-icon-512.maskable.png',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        src: '/src/images/icons/apple-icon-180.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'apple touch icon'
      },
      {
        src: '/src/images/icons/manifest-icon-192.maskable.png',
        sizes: '225x225',
        type: 'image/png',
        purpose: 'any maskable'
      },
    ],
    theme_color: '#ffffff',
    background_color: '#e8ebf2',
    display: 'standalone',
    scope: '/',
    start_url: '/',
    orientation: 'portrait',
    prefer_related_applications: false
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), VitePWA(manifestForPlugin)]
})
