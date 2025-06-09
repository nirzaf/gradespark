// Performance monitoring utilities
export const measurePerformance = (metricName: string) => {
  if (performance && performance.mark) {
    const startMark = `${metricName}_start`;
    const endMark = `${metricName}_end`;
    const measureName = `${metricName}_measure`;

    try {
      performance.mark(startMark);
      return {
        end: () => {
          performance.mark(endMark);
          performance.measure(measureName, startMark, endMark);
          const entries = performance.getEntriesByName(measureName);
          const duration = entries[entries.length - 1]?.duration || 0;
          console.log(`${metricName} took ${duration.toFixed(2)}ms`);
          return duration;
        }
      };
    } catch (error) {
      console.error('Error measuring performance:', error);
      return { end: () => 0 };
    }
  }
  return { end: () => 0 };
};

// Track Core Web Vitals using PerformanceObserver
export const trackWebVitals = () => {
  try {
    // Track Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime.toFixed(2) + 'ms');
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Track First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log('FID:', entry.processingStart - entry.startTime + 'ms');
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Track Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        console.log('CLS:', clsValue.toFixed(4));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }
  } catch (error) {
    console.error('Error tracking web vitals:', error);
  }
};

// Memory usage monitoring
export const getMemoryUsage = () => {
  try {
    if ('memory' in performance) {
      // @ts-ignore
      const { usedJSHeapSize, totalJSHeapSize } = performance.memory;
      return {
        used: Math.round(usedJSHeapSize / 1048576), // Convert to MB
        total: Math.round(totalJSHeapSize / 1048576)
      };
    }
  } catch (error) {
    console.error('Error getting memory usage:', error);
  }
  return null;
};

// Track long tasks
export const observeLongTasks = () => {
  try {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) { // Tasks longer than 50ms
            console.warn('Long Task detected:', {
              duration: `${entry.duration.toFixed(2)}ms`,
              startTime: entry.startTime,
              name: entry.name
            });
          }
        }
      });

      observer.observe({ entryTypes: ['longtask'] });
      return observer;
    }
  } catch (error) {
    console.error('Error observing long tasks:', error);
  }
  return null;
};

// Initialize all performance monitoring
export const initPerformanceMonitoring = () => {
  trackWebVitals();
  observeLongTasks();

  // Monitor memory usage periodically
  setInterval(() => {
    const memory = getMemoryUsage();
    if (memory) {
      console.log('Memory Usage:', memory);
    }
  }, 30000); // Check every 30 seconds
};
