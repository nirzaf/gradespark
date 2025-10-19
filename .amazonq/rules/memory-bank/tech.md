# Grade Spark Academy - Technology Stack

## Core Technologies

### Frontend Framework
- **React 19.2.0** - Modern React with latest features
- **TypeScript 5.9.3** - Type safety and enhanced development experience
- **Vite 7.1.9** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS 4.x** - Utility-first CSS framework via @tailwindcss/vite
- **Framer Motion 12.23.24** - Animation library for React
- **GSAP 3.12.7** - High-performance animations
- **Lucide React 0.545.0** - Icon library
- **React Icons 5.5.0** - Additional icon sets

### Routing & Navigation
- **React Router DOM 7.9.4** - Client-side routing
- **Custom hooks** - useScrollToTop for navigation enhancement

### 3D Graphics & Visualization
- **Three.js 0.180.0** - 3D graphics library
- **React Three Fiber 9.1.2** - React renderer for Three.js
- **React Three Drei 10.1.2** - Useful helpers for React Three Fiber
- **React Three Cannon 6.6.0** - Physics engine integration
- **Three Mesh BVH 0.9.0** - Spatial acceleration structure

### UI Components & Interactions
- **Radix UI Tooltip 1.1.4** - Accessible tooltip component
- **Swiper 12.0.2** - Touch slider component
- **React Hot Toast 2.6.0** - Notification system
- **Typewriter Effect 2.21.0** - Text animation effects

### Data & Content Management
- **Gray Matter 4.0.3** - Front matter parser for markdown
- **Supabase 2.75.0** - Backend as a service for data management

### Analytics & Tracking
- **Microsoft Clarity 1.0.0** - User behavior analytics
- **Google Tag Manager** - Tag management system

## Development Tools

### Code Quality & Linting
- **ESLint 9.37.0** - JavaScript/TypeScript linting
- **TypeScript ESLint 8.45.0** - TypeScript-specific linting rules
- **ESLint Plugins**:
  - `eslint-plugin-react-hooks` - React hooks linting
  - `eslint-plugin-react-refresh` - React refresh compatibility
  - `eslint-plugin-jsx-a11y` - Accessibility linting
  - `eslint-plugin-tailwindcss` - Tailwind CSS linting
  - `eslint-plugin-vitest` - Vitest testing linting

### Testing Framework
- **Vitest 3.1.4** - Fast unit testing framework
- **Vitest UI 3.2.4** - Visual testing interface
- **jsdom 27.0.0** - DOM implementation for testing

### Build & Optimization
- **Vite Plugins**:
  - `@vitejs/plugin-react` - React support
  - `vite-plugin-compression` - Gzip compression
  - `vite-plugin-imagemin` - Image optimization
- **Image Optimization**:
  - `imagemin-gifsicle` - GIF optimization
  - `imagemin-mozjpeg` - JPEG optimization
  - `imagemin-pngquant` - PNG optimization
  - `imagemin-svgo` - SVG optimization

### CSS Processing
- **PostCSS 8.4.35** - CSS transformation
- **Autoprefixer 10.4.18** - CSS vendor prefixing

## Development Commands

### Core Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production (TypeScript + Vite)
npm run preview      # Preview production build
npm run lint         # Run ESLint with TypeScript support
```

### Testing
```bash
npm run test         # Run unit tests with Vitest
npm run test:ui      # Run tests with visual UI
```

### Deployment
```bash
npm run predeploy    # Pre-deployment build
npm run deploy       # Deploy to GitHub Pages
```

## Configuration Files

### TypeScript Configuration
- `tsconfig.json` - Main TypeScript configuration
- `tsconfig.app.json` - Application-specific TypeScript settings
- `tsconfig.node.json` - Node.js TypeScript settings
- `vite-env.d.ts` - Vite environment type definitions

### Build Configuration
- `vite.config.ts` - Vite build and development configuration
- `eslint.config.js` - ESLint configuration with TypeScript support
- `components.json` - Component library configuration
- `tempo.config.json` - Tempo configuration

### Deployment Configuration
- `vercel.json` - Vercel deployment settings
- `.npmrc` - npm configuration
- `package-lock.json` - Dependency lock file

## Environment & Deployment

### Development Environment
- **Node.js** - Runtime environment
- **npm** - Package manager
- **Vite Dev Server** - Hot module replacement and fast refresh

### Production Deployment
- **Vercel** - Primary deployment platform
- **GitHub Pages** - Alternative deployment option
- **Static Site Generation** - Pre-built HTML for optimal performance

### CI/CD Pipeline
- **GitHub Actions** - Automated workflows
  - `auto-merge.yml` - Automated dependency updates
  - `backup-branch.yml` - Branch backup automation
  - `npm-updates.yml` - npm package updates
- **Dependabot** - Automated dependency updates

## Performance Optimizations

### Build Optimizations
- **Code Splitting** - Automatic chunk splitting by Vite
- **Tree Shaking** - Dead code elimination
- **Asset Optimization** - Image compression and optimization
- **Bundle Analysis** - Build size monitoring

### Runtime Optimizations
- **Lazy Loading** - Component-level code splitting
- **Image Optimization** - Responsive images and lazy loading
- **Caching Strategies** - Browser caching for static assets
- **Performance Monitoring** - Microsoft Clarity integration

## Browser Support
- **Modern Browsers** - ES2020+ support
- **Mobile Responsive** - Touch-friendly interface
- **Progressive Web App** - PWA capabilities with manifest.json