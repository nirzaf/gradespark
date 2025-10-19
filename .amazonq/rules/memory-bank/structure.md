# Grade Spark Academy - Project Structure

## Directory Organization

### Root Level
```
gradespark/
├── .amazonq/rules/memory-bank/     # AI assistant memory bank
├── .github/workflows/              # CI/CD automation
├── public/                         # Static assets and blog pages
├── src/                           # Source code
├── package.json                   # Dependencies and scripts
├── vite.config.ts                 # Build configuration
└── README.md                      # Project documentation
```

### Source Code Structure (`src/`)
```
src/
├── components/                    # Reusable UI components
│   ├── common/                   # Shared components
│   ├── contact/                  # Contact page components
│   ├── home/                     # Homepage components
│   └── services/                 # Services page components
├── pages/                        # Page-level components
├── styles/                       # CSS stylesheets
├── utils/                        # Utility functions
├── hooks/                        # Custom React hooks
├── lib/                          # Third-party integrations
├── data/                         # Static data files
├── App.tsx                       # Main application component
└── main.tsx                      # Application entry point
```

## Core Components Architecture

### Component Organization
- **Common Components**: Reusable UI elements (logos, backgrounds, error boundaries)
- **Page-Specific Components**: Organized by page (home, contact, services, about)
- **Feature Components**: Grouped by functionality (forms, navigation, testimonials)

### Key Component Categories

#### Navigation & Layout
- `Header.tsx` - Main site header
- `Navbar.tsx` - Navigation menu
- `Footer.tsx` - Site footer
- `GSALogo.tsx` - Brand logo component

#### Homepage Components
- `Hero.tsx` - Main hero section
- `CoreServices.tsx` - Services overview
- `HowItWorks.tsx` - Process explanation
- `Testimonials.tsx` - Customer testimonials
- `WhyUs.tsx` - Value propositions
- `FAQSection.tsx` - Frequently asked questions

#### Contact & Forms
- `ContactForm.tsx` - Main contact form
- `ContactInfo.tsx` - Contact information display
- `GoogleMap.tsx` - Interactive map component
- `ConsentForm.tsx` - Privacy consent handling

#### Services Components
- `ServicesHero.tsx` - Services page header
- `ServicesContent.tsx` - Service descriptions
- `QualityAssurance.tsx` - Quality guarantees
- `TopTutors.tsx` - Expert profiles

## Page Structure

### Main Pages
- **Home** (`/`) - Landing page with hero, services, testimonials
- **About** (`/about`) - Company information and mission
- **Services** (`/services`) - Detailed service offerings
- **Contact** (`/contact`) - Contact form and information
- **Blog List** (`/blog`) - Academic resources and guides

### Legal Pages
- **Privacy Policy** (`/privacy-policy`) - Data protection information
- **Terms of Service** (`/terms`) - Service terms and conditions

### Utility Pages
- **Book Trial** (`/book-trial`) - Trial booking form
- **Sitemap** (`/sitemap`) - Site navigation overview
- **404 Not Found** - Error page for invalid routes

## Static Assets (`public/`)

### Blog Content
- Pre-built HTML pages for SEO-optimized blog articles
- Academic guides and resources
- Subject-specific help content

### Assets
- `icons/` - Application icons and favicons
- `manifest.json` - PWA configuration
- `robots.txt` - Search engine directives
- `sitemap.xml` - SEO sitemap

## Architectural Patterns

### Component Design
- **Functional Components**: React functional components with hooks
- **Component Composition**: Modular, reusable component architecture
- **Props Interface**: TypeScript interfaces for type safety
- **Separation of Concerns**: UI, logic, and styling separated

### State Management
- **React Hooks**: useState, useEffect for local state
- **Custom Hooks**: Reusable logic (useScrollToTop)
- **Context API**: Global state management where needed

### Styling Architecture
- **CSS Modules**: Component-specific styling
- **Tailwind CSS**: Utility-first CSS framework
- **Custom CSS**: Specialized animations and effects
- **Responsive Design**: Mobile-first approach

### Performance Optimization
- **Code Splitting**: Lazy loading for components
- **Image Optimization**: Optimized image loading
- **Bundle Optimization**: Vite build optimization
- **Caching Strategies**: Static asset caching

## Integration Points

### Third-Party Services
- **Analytics**: Microsoft Clarity, Google Tag Manager
- **Forms**: HubSpot form integration
- **Maps**: Google Maps integration
- **Animations**: Framer Motion, GSAP
- **3D Graphics**: Three.js with React Three Fiber

### Build & Deployment
- **Vite**: Fast build tool and dev server
- **TypeScript**: Type safety and development experience
- **ESLint**: Code quality and consistency
- **Vercel**: Deployment platform
- **GitHub Actions**: CI/CD automation