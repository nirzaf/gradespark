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
        manualChunks: {
          // Core React libraries
          'vendor-react': ['react', 'react-dom'],
          'vendor-router': ['react-router-dom'],

          // Heavy 3D libraries - separate chunk for lazy loading
          'vendor-three': ['three', '@react-three/fiber', '@react-three/drei', '@react-three/cannon'],

          // Animation libraries
          'vendor-animation': ['framer-motion', 'gsap'],

          // UI components and icons
          'vendor-ui': ['lucide-react', 'react-icons'],

          // Carousel and sliders
          'vendor-carousel': ['swiper'],

          // Utilities and smaller libs
          'vendor-utils': ['typewriter-effect', 'react-hot-toast', 'gray-matter'],

          // Analytics and tracking
          'vendor-analytics': ['@microsoft/clarity', '@supabase/supabase-js']
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