# Advanced Performance Optimization - Image & Code Splitting Enhancements

## SEVERITY
P1: High - Performance optimization to improve Core Web Vitals (LCP, bundle size) and user experience

## OBJECTIVE
Implement advanced image optimization with modern formats (WebP/AVIF) and aggressive route-based lazy loading to reduce initial bundle size and improve page load performance.

## CONTEXT
- **Files**: Multiple components across `src/components/`, `src/pages/`, and `src/App.tsx`
- **Current behavior**: 
  - Images are loaded without modern format support (WebP/AVIF)
  - All page components are already lazy-loaded in `src/App.tsx` (Lines 9-19)
  - Heavy components like `Testimonials.tsx` and Three.js components are not lazy-loaded within pages
  - Current bundle size reduced by ~40% from previous optimizations but can be further improved
- **Root cause**: 
  - `OptimizedImage.tsx` component exists but doesn't leverage `<picture>` element for modern image formats
  - Large components within pages (e.g., `Testimonials.tsx` in `Home.tsx`) are not code-split
  - No systematic approach to lazy-loading below-the-fold content

## REPLICATION STEPS
1. Run `npm run dev` and navigate to the homepage
2. Open Chrome DevTools → Network tab
3. Observe image formats being loaded (JPG/PNG instead of WebP/AVIF)
4. Open Performance tab and run Lighthouse audit
5. Note LCP score and bundle size metrics
6. Observe that all homepage components load immediately, even those below the fold

## PROBLEM

### Location 1: src/components/common/OptimizedImage.tsx (Lines 1-47)
```tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  lowQualitySrc?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  lowQualitySrc,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(lowQualitySrc || src);

  useEffect(() => {
    // Preload the high-quality image
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setCurrentSrc(src);
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.img
          key={currentSrc}
          src={currentSrc}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={`w-full h-full object-cover ${
            !isLoaded ? 'blur-sm scale-105' : ''
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          {...props}
        />
      </AnimatePresence>
    </div>
  );
};
```

**Issue**: Component uses single `<img>` tag without `<picture>` element, missing opportunity to serve modern image formats (WebP/AVIF) with fallbacks. Browsers that support WebP/AVIF can load images 25-35% smaller than JPG/PNG.

### Location 2: src/App.tsx (Lines 9-19)
```tsx
// Lazy load page components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const BookTrial = lazy(() => import('./pages/BookTrial'));
const ConsentForm = lazy(() => import('./components/ConsentForm'));
const Terms = lazy(() => import('./pages/Terms'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const BlogList = lazy(() => import('./pages/BlogList'));
```

**Issue**: Page-level lazy loading is already implemented correctly. However, heavy components within pages (like `Testimonials.tsx`, `FAQSection.tsx`) are not lazy-loaded, causing larger initial page bundles.

### Location 3: src/components/home/Testimonials.tsx (Lines 1-10)
```tsx
import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star, Award, Trophy, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../styles/testimonials.css';
import TestimonialsBackground from '../common/TestimonialsBackground';
```

**Issue**: `Testimonials.tsx` is a heavy component (includes Swiper library, Framer Motion animations, custom styles) that appears below the fold on the homepage. It's loaded immediately with the page, contributing to initial bundle size and delaying LCP. This component should be lazy-loaded since it's not visible on initial viewport.

### Location 4: src/components/home/Hero.tsx (Lines 1-17)
```tsx
import React, { useEffect, useState, useRef, Suspense, useMemo, lazy } from 'react';
import { usePlane, useBox, useSphere, Triplet } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { GraduationCap, Sparkles, Shield, Clock } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import HeroButton from './HeroButton';

// Lazy load heavy 3D components for better performance
const Canvas = lazy(() => import('@react-three/fiber').then(module => ({ default: module.Canvas })));
const OrbitControls = lazy(() => import('@react-three/drei').then(module => ({ default: module.OrbitControls })));
const Grid = lazy(() => import('@react-three/drei').then(module => ({ default: module.Grid })));
const Points = lazy(() => import('@react-three/drei').then(module => ({ default: module.Points })));
const Box = lazy(() => import('@react-three/drei').then(module => ({ default: module.Box })));
const Sphere = lazy(() => import('@react-three/drei').then(module => ({ default: module.Sphere })));
const Physics = lazy(() => import('@react-three/cannon').then(module => ({ default: module.Physics })));
```

**Issue**: Three.js components are already lazy-loaded (good!), but the pattern could be applied to other heavy components throughout the application. This serves as a reference implementation.

## SUGGESTED HYPOTHESIS

### Hypothesis 1: Enhanced OptimizedImage Component with Modern Format Support

**Theory**: By implementing the `<picture>` element with multiple `<source>` tags for WebP and AVIF formats, browsers can automatically select the most efficient format they support, reducing image payload by 25-35% without quality loss. This directly improves LCP (Largest Contentful Paint) scores.

**File**: `src/components/common/OptimizedImage.tsx`

```tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string; // Base path without extension (e.g., '/images/hero-image')
  alt: string;
  className?: string;
  lowQualitySrc?: string;
  formats?: ('avif' | 'webp' | 'jpg' | 'png')[]; // Supported formats in priority order
  fallbackFormat?: 'jpg' | 'png'; // Default fallback format
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  lowQualitySrc,
  formats = ['avif', 'webp'],
  fallbackFormat = 'jpg',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Generate source URLs for different formats
  const generateSources = () => {
    return formats.map(format => ({
      srcSet: `${src}.${format}`,
      type: `image/${format}`
    }));
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.picture
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Modern format sources */}
          {generateSources().map((source, index) => (
            <source
              key={index}
              srcSet={source.srcSet}
              type={source.type}
            />
          ))}
          
          {/* Fallback image */}
          <motion.img
            src={`${src}.${fallbackFormat}`}
            alt={alt}
            loading="lazy"
            decoding="async"
            onLoad={handleLoad}
            className={`w-full h-full object-cover transition-all duration-300 ${
              !isLoaded ? 'blur-sm scale-105' : ''
            }`}
            {...props}
          />
        </motion.picture>
      </AnimatePresence>
    </div>
  );
};

export default OptimizedImage;
```

**Trade-offs:**
✅ Reduces image payload by 25-35% for modern browsers
✅ Maintains backward compatibility with fallback formats
✅ Improves LCP scores significantly
✅ No breaking changes to existing API (src prop usage changes slightly)
⚠️ Requires image assets to be available in multiple formats (build process consideration)
⚠️ Slightly more complex component logic

**Implementation Notes:**
- Images need to be converted to WebP/AVIF formats during build process
- Consider using `vite-plugin-image-optimizer` (already in `package.json`) to automate format conversion
- Update image references to use base path without extension

### Hypothesis 2: Lazy Load Below-the-Fold Components

**Theory**: Components that appear below the fold (not visible on initial viewport) should be lazy-loaded to reduce initial bundle size. The `Testimonials.tsx` component includes heavy dependencies (Swiper, Framer Motion, custom styles) and appears below the hero section, making it an ideal candidate for lazy loading.

**File**: `src/pages/Home.tsx` (hypothetical - file not provided but pattern shown)

```tsx
import { lazy, Suspense } from 'react';
import Hero from '../components/home/Hero';
// Other above-the-fold imports...

// Lazy load below-the-fold components
const Testimonials = lazy(() => import('../components/home/Testimonials'));
const FAQSection = lazy(() => import('../components/home/FAQSection'));
const CoreServices = lazy(() => import('../components/home/CoreServices'));
const WhyUs = lazy(() => import('../components/home/WhyUs'));

// Lightweight loading placeholder
const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-celeste"></div>
  </div>
);

export default function Home() {
  return (
    <div>
      {/* Above-the-fold content loads immediately */}
      <Hero />
      
      {/* Below-the-fold content lazy loads */}
      <Suspense fallback={<SectionLoader />}>
        <CoreServices />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Testimonials />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <FAQSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <WhyUs />
      </Suspense>
    </div>
  );
}
```

**Trade-offs:**
✅ Reduces initial bundle size by 30-40% for homepage
✅ Improves Time to Interactive (TTI) metric
✅ Better perceived performance for users
✅ Components load on-demand as user scrolls
⚠️ Brief loading state visible when scrolling (mitigated with smooth loader)
⚠️ Requires careful consideration of which components are truly below-the-fold

**Implementation Notes:**
- Identify components that appear below the fold on typical viewport sizes (1920x1080, 1366x768, mobile)
- Apply lazy loading pattern consistently across all pages
- Use lightweight loading placeholders to maintain layout stability (prevent CLS)
- Consider using Intersection Observer API for more sophisticated lazy loading triggers

### Hypothesis 3: Intersection Observer-Based Lazy Loading

**Theory**: Instead of relying solely on React.lazy() and Suspense, implement Intersection Observer API to trigger component loading only when the user scrolls near the component's position. This provides more granular control and can further reduce unnecessary loading.

**File**: `src/hooks/useLazyLoad.ts` (new custom hook)

```tsx
import { useEffect, useRef, useState } from 'react';

interface UseLazyLoadOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useLazyLoad = (options: UseLazyLoadOptions = {}) => {
  const { threshold = 0.1, rootMargin = '100px' } = options;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, stop observing
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin]);

  return { ref, isVisible };
};
```

**Usage Example in Home.tsx:**

```tsx
import { lazy, Suspense } from 'react';
import { useLazyLoad } from '../hooks/useLazyLoad';

const Testimonials = lazy(() => import('../components/home/Testimonials'));

export default function Home() {
  const { ref: testimonialsRef, isVisible: testimonialsVisible } = useLazyLoad({
    rootMargin: '200px' // Start loading 200px before component enters viewport
  });

  return (
    <div>
      <Hero />
      
      {/* Placeholder div that triggers loading */}
      <div ref={testimonialsRef}>
        {testimonialsVisible && (
          <Suspense fallback={<SectionLoader />}>
            <Testimonials />
          </Suspense>
        )}
      </div>
    </div>
  );
}
```

**Trade-offs:**
✅ More granular control over when components load
✅ Can preload components before they're visible (rootMargin)
✅ Reduces unnecessary loading if user doesn't scroll
✅ Better performance on slow connections
⚠️ More complex implementation than simple React.lazy()
⚠️ Requires additional custom hook maintenance

## MUST PRESERVE

- Existing `OptimizedImage.tsx` API compatibility (components using it should continue to work)
- Current lazy loading implementation in `src/App.tsx` for page-level components
- Existing Three.js lazy loading pattern in `src/components/home/Hero.tsx`
- Framer Motion animations and transitions in all components
- Tailwind CSS utility classes and responsive design
- TypeScript strict mode compliance (`tsconfig.json`)
- React 19.2.0 compatibility
- Vite 7.1.9 build configuration
- Existing performance monitoring in `src/lib/performance.ts`

## SUCCESS CRITERIA

- LCP (Largest Contentful Paint) improves from current baseline to <2.5 seconds (Good)
- Initial bundle size reduces by additional 20-30% through component lazy loading
- Images load in WebP/AVIF format for modern browsers (verify in Network tab)
- Fallback to JPG/PNG works correctly for older browsers
- No layout shifts introduced by lazy loading (CLS remains <0.1)
- All existing functionality preserved (animations, interactions, routing)
- Lighthouse Performance score improves by 10+ points
- `npm run build` completes without errors
- `npm run test` passes all tests
- `npm run lint` passes without new warnings
- Vercel deployment succeeds without issues

## VERIFICATION STEPS

1. **Image Optimization Verification**:
   - Run `npm run dev`
   - Open Chrome DevTools → Network tab
   - Navigate to pages with images
   - Verify WebP/AVIF formats are loaded (check Type column)
   - Test in Safari to verify fallback to JPG/PNG works
   - Measure image payload reduction (should be 25-35% smaller)

2. **Lazy Loading Verification**:
   - Run `npm run dev`
   - Open Chrome DevTools → Network tab → Filter by JS
   - Navigate to homepage
   - Verify only Hero and above-the-fold components load initially
   - Scroll down and verify Testimonials/FAQ chunks load on-demand
   - Check bundle sizes in Network tab (should see multiple smaller chunks)

3. **Performance Metrics**:
   - Run Lighthouse audit in Chrome DevTools
   - Verify Performance score improvement (target: 85+)
   - Check Core Web Vitals: LCP <2.5s, CLS <0.1, FID <100ms
   - Compare before/after bundle sizes in `npm run build` output

4. **Functional Testing**:
   - Test all pages load correctly with lazy-loaded components
   - Verify animations and transitions work smoothly
   - Test on slow 3G connection (Chrome DevTools throttling)
   - Verify loading placeholders appear briefly and don't cause layout shifts
   - Test keyboard navigation and accessibility

5. **Build & Deployment**:
   - Run `npm run lint` → Should pass
   - Run `npm run test` → All tests should pass
   - Run `npm run build` → Should complete successfully
   - Check `dist/` folder for properly split chunks
   - Deploy to Vercel and verify production performance

## CONSTRAINTS

- Must not introduce new npm packages without approval (use existing dependencies)
- Must maintain compatibility with React 19.2.0, Vite 7.1.9, TypeScript 5.9.3
- Must adhere to TypeScript strict mode rules (`tsconfig.json`)
- Must not break Vercel deployment configuration (`vercel.json`)
- Must follow existing code patterns (functional components, hooks, Tailwind CSS)
- Must preserve all existing animations and user interactions
- Must maintain accessibility standards (ARIA attributes, keyboard navigation)
- Image format conversion should integrate with existing `vite-plugin-image-optimizer` in `package.json`
- Must not remove any existing code or features (only enhance)
- Loading placeholders must be lightweight (<5KB) to avoid negating benefits

## ADDITIONAL CONTEXT

### Current Performance Baseline (from PERFORMANCE_OPTIMIZATION_SUMMARY.md)
- **Before Previous Optimizations**: Performance Score 39, LCP 14.5s, CLS 0.364
- **After Previous Optimizations (Expected)**: Performance Score 85+, LCP <2.5s, CLS <0.1
- **Current Bundle Size**: Reduced by ~40% through code splitting

### Next Steps from Summary
1. ✅ Monitor Performance (already implemented)
2. ⏳ Run Lighthouse (verification step)
3. ⏳ Test Accessibility (verification step)
4. 🎯 **Optimize Images** (THIS PROMPT - Hypothesis 1)
5. ⏳ CDN Implementation (future consideration)

### Maintenance Notes from Summary
- Icon Files: Replace placeholder icons with high-quality branded icons
- Font Loading: Monitor font loading performance (already optimized)
- **Bundle Analysis**: Regularly analyze bundle sizes (THIS PROMPT - Hypothesis 2)
- Accessibility Testing: Include in CI/CD pipeline

### Existing Optimizations to Build Upon
- ✅ Font loading optimization with `font-display: swap`
- ✅ JavaScript bundle optimization with granular chunks
- ✅ Text compression (Gzip/Brotli)
- ✅ CLS fixes (footer min-height)
- ✅ Performance monitoring with Core Web Vitals tracking
- ✅ Lazy loading of Three.js components
- ✅ Page-level lazy loading in App.tsx

### Technologies Available
- `vite-plugin-image-optimizer` (already in `package.json`) - can automate WebP/AVIF conversion
- `sharp` (already in `package.json`) - image processing library
- React 19.2.0 with Suspense and lazy() support
- Framer Motion for smooth loading transitions
- Intersection Observer API (native browser API)

## AGENT AUTONOMY NOTES

This prompt provides three hypotheses for performance optimization:

1. **Hypothesis 1 (Image Optimization)**: Highest priority, directly addresses "Optimize Images" from Next Steps
2. **Hypothesis 2 (Component Lazy Loading)**: Medium priority, addresses bundle size reduction
3. **Hypothesis 3 (Intersection Observer)**: Optional enhancement, provides more sophisticated control

The agent is encouraged to:
- Evaluate which hypothesis provides the best ROI for implementation effort
- Combine multiple hypotheses if they complement each other
- Propose alternative solutions if a superior approach is identified
- Consider implementing in phases (e.g., Hypothesis 1 first, then 2)
- Adapt the implementation based on actual bundle analysis and profiling results

The ultimate goal is measurable performance improvement (LCP, bundle size, Lighthouse score) while maintaining code quality and user experience. The agent should prioritize solutions that provide the greatest impact with minimal complexity.
