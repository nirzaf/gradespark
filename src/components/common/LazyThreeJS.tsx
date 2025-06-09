import React, { Suspense, lazy } from 'react';

// Lazy load Three.js components for better performance
const Canvas = lazy(() => import('@react-three/fiber').then(module => ({ default: module.Canvas })));
const OrbitControls = lazy(() => import('@react-three/drei').then(module => ({ default: module.OrbitControls })));
const Grid = lazy(() => import('@react-three/drei').then(module => ({ default: module.Grid })));
const Points = lazy(() => import('@react-three/drei').then(module => ({ default: module.Points })));
const Box = lazy(() => import('@react-three/drei').then(module => ({ default: module.Box })));
const Sphere = lazy(() => import('@react-three/drei').then(module => ({ default: module.Sphere })));
const Physics = lazy(() => import('@react-three/cannon').then(module => ({ default: module.Physics })));

// Loading fallback component
const ThreeJSLoader = () => (
  <div className="flex items-center justify-center h-64 bg-gradient-to-br from-night/10 to-celeste/5 rounded-lg">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-celeste mx-auto mb-4"></div>
      <p className="text-gray-600 text-sm">Loading 3D Experience...</p>
    </div>
  </div>
);

// Wrapper component for lazy-loaded Three.js content
interface LazyThreeJSProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
}

const LazyThreeJS: React.FC<LazyThreeJSProps> = ({ 
  children, 
  fallback = <ThreeJSLoader />, 
  className = "" 
}) => {
  return (
    <div className={className}>
      <Suspense fallback={fallback}>
        {children}
      </Suspense>
    </div>
  );
};

// Export lazy-loaded components
export {
  LazyThreeJS as default,
  Canvas,
  OrbitControls,
  Grid,
  Points,
  Box,
  Sphere,
  Physics,
  ThreeJSLoader
};
