/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteImagemin from 'vite-plugin-imagemin';
import * as path from "node:path";

export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      gifsicle: { optimizationLevel: 7, interlaced: false },
      mozjpeg: { quality: 75 }, // Lower quality for better compression
      pngquant: { quality: [0.65, 0.8], speed: 4 },
      svgo: {
        plugins: [
          { name: 'removeViewBox' }, // Consider 'removeViewBox: false' if it causes issues
          { name: 'removeEmptyAttrs', active: false }, // Example: keep empty attributes
          { name: 'cleanupIDs', active: true }, // Shorten IDs
          { name: 'minifyStyles', active: true } // Minify styles within SVGs
        ],
      },
    }),
  ],
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui': [
            'framer-motion',
            'lucide-react',
            'react-slick',
            'swiper',
            'typewriter-effect'
          ],
          'analytics': [
            '@microsoft/clarity',
            '@supabase/supabase-js'
          ]
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    emptyOutDir: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    open: false // Disable automatic browser opening
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [], // Or './src/setupTests.ts' if you create one
    include: ['src/**/*.test.{ts,tsx}'],
  },
})