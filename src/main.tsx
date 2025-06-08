import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';
import ErrorBoundary from './components/common/ErrorBoundary';
import { initPerformanceMonitoring } from './lib/performance';
import { register as registerSW, setupOfflineListener } from './lib/serviceWorker';

// Initialize performance monitoring
initPerformanceMonitoring();

// Register service worker
if (import.meta.env.PROD) {
  registerSW({
    onSuccess: () => {
      console.log('App is cached for offline use');
    },
    onUpdate: () => {
      console.log('New content available, please refresh');
    },
    onOfflineReady: () => {
      console.log('App is ready for offline use');
    },
    onNeedRefresh: () => {
      // You could show a toast notification here
      console.log('Please refresh to get the latest version');
    }
  });
}

// Setup offline/online listeners
setupOfflineListener(
  () => console.log('Back online'),
  () => console.log('Gone offline')
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
