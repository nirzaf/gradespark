/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from "node:path";
import compression from 'vite-plugin-compression';
import tailwindcss from '@tailwindcss/vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ViteImageOptimizer({
      // Optimize existing formats
      png: { 
        quality: 80,
        compressionLevel: 9,
        palette: true
      },
      jpeg: { 
        quality: 80,
        progressive: true,
        mozjpeg: true
      },
      jpg: { 
        quality: 80,
        progressive: true,
        mozjpeg: true
      },
      // Generate modern formats
      webp: { 
        quality: 80,
        lossless: false,
        nearLossless: false,
        smartSubsample: true
      },
      avif: {
        quality: 80,
        lossless: false,
        speed: 5
      },
      // Cache optimization
      cache: true,
      cacheLocation: 'node_modules/.vite-image-optimizer',
      // Include patterns for optimization
      include: /\.(jpe?g|png|gif|tiff|webp|avif)$/i,
      // Exclude already optimized images
      exclude: /node_modules/,
      // Log optimization results
      logStats: true
    }),
    // Add compression for production builds
    compression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
  ],
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Check for specific vendors first to avoid overlap (e.g., react-router-dom contains 'react')
            if (id.includes('react-router-dom')) {
              return 'vendor-router';
            }
            if (id.includes('react-icons') || id.includes('lucide-react')) {
              return 'vendor-ui';
            }
            if (id.includes('three') || id.includes('@react-three')) {
              return 'vendor-three';
            }
            if (id.includes('framer-motion') || id.includes('gsap')) {
              return 'vendor-animation';
            }
            if (id.includes('swiper')) {
              return 'vendor-carousel';
            }
            if (
              id.includes('typewriter-effect') ||
              id.includes('react-hot-toast') ||
              id.includes('gray-matter')
            ) {
              return 'vendor-utils';
            }
            if (
              id.includes('@microsoft/clarity') ||
              id.includes('@supabase/supabase-js')
            ) {
              return 'vendor-analytics';
            }
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
          }
        },
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