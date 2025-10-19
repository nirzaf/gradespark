import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './styles/index.css';
import ErrorBoundary from './components/common/ErrorBoundary';

// Lazy load performance monitoring to reduce initial bundle
const initPerformanceMonitoring = async () => {
  const { initPerformanceMonitoring } = await import('./lib/performance');
  initPerformanceMonitoring();
};

// Initialize performance monitoring after initial render
setTimeout(initPerformanceMonitoring, 100);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </HelmetProvider>
  </StrictMode>
);
