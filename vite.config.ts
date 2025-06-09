/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from "node:path";
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
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