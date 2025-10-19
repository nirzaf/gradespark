# Grade Spark Academy - Development Guidelines

## Code Quality Standards

### TypeScript Usage
- **Strict Type Safety**: All components use TypeScript with proper interface definitions
- **Interface Definitions**: Define clear interfaces for props and data structures
```typescript
interface ContactFormData {
  fullName: string;
  additionalDetails: string;
  email: string;
  mobileNo: string;
  requirement: string;
  attachments: File[];
}
```
- **Type Annotations**: Explicit typing for function parameters and return values
- **Generic Types**: Use generics for reusable components and utilities

### Component Architecture

#### Functional Components Pattern
- **React Functional Components**: Use functional components with hooks exclusively
- **Component Composition**: Break down complex components into smaller, reusable pieces
- **Props Interface**: Define TypeScript interfaces for all component props
```typescript
const AnimatedText = ({ texts }: { texts: typeof heroTexts }) => {
  // Component implementation
};
```

#### Component Organization
- **Feature-Based Structure**: Group components by feature/page (home/, contact/, services/)
- **Common Components**: Shared components in `common/` directory
- **Single Responsibility**: Each component has a clear, single purpose

### React Patterns

#### Hooks Usage
- **useState**: Local component state management
- **useEffect**: Side effects and lifecycle management
- **Custom Hooks**: Extract reusable logic (useScrollToTop)
- **useRef**: DOM references and mutable values
```typescript
const [formData, setFormData] = useState<ContactFormData>({
  fullName: '',
  additionalDetails: '',
  // ... other fields
});
```

#### State Management
- **Local State**: useState for component-specific state
- **Prop Drilling**: Pass data through props for simple hierarchies
- **State Lifting**: Move state up when shared between components

### Styling Standards

#### Tailwind CSS Conventions
- **Utility Classes**: Use Tailwind utility classes for styling
- **Responsive Design**: Mobile-first responsive classes (md:, lg:)
- **Custom Colors**: Define theme colors in configuration
```typescript
const themeColors = {
  celeste: '#A0EBEB',
  night: '#151616',
  white: '#FEFEFE',
  // ... other colors
};
```

#### CSS Organization
- **Component-Specific CSS**: Separate CSS files for complex animations
- **Inline Styles**: Use for dynamic styles and theme colors
- **CSS-in-JS**: Framer Motion for animations and transitions

### Performance Optimization

#### Code Splitting
- **Lazy Loading**: Use React.lazy() for route-level components
```typescript
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
```
- **Suspense Boundaries**: Wrap lazy components with Suspense
- **Loading States**: Provide meaningful loading components

#### Optimization Techniques
- **useMemo**: Memoize expensive calculations
- **useCallback**: Memoize function references
- **Image Optimization**: Lazy loading and responsive images

### Animation Standards

#### Framer Motion Integration
- **Motion Components**: Use motion.div for animations
- **Variants**: Define animation variants for complex sequences
```typescript
const containerVariants = {
  hidden: { opacity: 0, rotateX: -15, scale: 0.95 },
  visible: { opacity: 1, rotateX: 0, scale: 1 },
  exit: { opacity: 0, y: -15, scale: 0.98 }
};
```
- **Stagger Animations**: Use staggerChildren for sequential animations
- **Hover Effects**: whileHover and whileTap for interactive elements

#### Animation Best Practices
- **Performance**: Use transform properties for smooth animations
- **Accessibility**: Respect user motion preferences
- **Timing**: Consistent easing and duration across components

## Development Patterns

### Error Handling

#### Form Validation
- **Client-Side Validation**: Validate inputs before submission
- **Error States**: Display clear error messages to users
- **Loading States**: Show loading indicators during async operations
```typescript
const [loading, setLoading] = useState(false);
const [message, setMessage] = useState('');
```

#### Async Operations
- **Try-Catch Blocks**: Wrap async operations in try-catch
- **Error Boundaries**: Use React Error Boundaries for component errors
- **Graceful Degradation**: Provide fallbacks for failed operations

### API Integration

#### Fetch Patterns
- **Async/Await**: Use async/await for API calls
- **Error Handling**: Comprehensive error handling for API failures
- **Response Validation**: Check response status and structure
```typescript
const res = await fetch('/api/contact?action=submit', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
});
```

#### File Upload Handling
- **FormData**: Use FormData for file uploads
- **Validation**: Check file size and type before upload
- **Progress Feedback**: Show upload progress to users

### Testing Standards

#### Unit Testing with Vitest
- **Test Structure**: Use describe/it blocks for test organization
- **Assertions**: Use expect() for test assertions
- **Test Coverage**: Test core functionality and edge cases
```typescript
describe('add function', () => {
  it('should return the sum of two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });
});
```

#### Testing Best Practices
- **Isolated Tests**: Each test should be independent
- **Descriptive Names**: Clear test descriptions
- **Edge Cases**: Test boundary conditions and error states

### Code Organization

#### Import/Export Patterns
- **Named Exports**: Use named exports for utilities and hooks
- **Default Exports**: Use default exports for main components
- **Import Organization**: Group imports by type (React, libraries, local)
```typescript
import React, { useEffect, useState, useRef, Suspense, useMemo, lazy } from 'react';
import { motion, useAnimation } from 'framer-motion';
import HeroButton from './HeroButton';
```

#### File Structure
- **Index Files**: Use index files for clean imports
- **Component Collocation**: Keep related files together
- **Utility Functions**: Separate utility functions into utils/ directory

### Configuration Standards

#### ESLint Configuration
- **Flat Config**: Use ESLint flat configuration format
- **Plugin Integration**: Include React, TypeScript, and accessibility plugins
- **Rule Customization**: Configure rules for project needs
```javascript
export default tseslint.config(
  { ignores: ['dist'] },
  js.configs.recommended,
  ...tseslint.configs.recommended
);
```

#### Build Configuration
- **Vite Configuration**: Optimize build settings for performance
- **TypeScript Config**: Separate configs for app and build tools
- **Environment Variables**: Use environment variables for configuration

### Accessibility Standards

#### ARIA Compliance
- **Semantic HTML**: Use proper HTML elements
- **ARIA Labels**: Add ARIA labels for screen readers
- **Keyboard Navigation**: Ensure keyboard accessibility
- **Focus Management**: Proper focus handling in interactive elements

#### Form Accessibility
- **Label Association**: Associate labels with form inputs
- **Error Announcements**: Make error messages accessible
- **Required Field Indicators**: Clear indication of required fields

### Security Practices

#### Input Validation
- **Client-Side Validation**: Validate all user inputs
- **Sanitization**: Sanitize data before processing
- **File Upload Security**: Validate file types and sizes

#### API Security
- **Environment Variables**: Store sensitive data in environment variables
- **CORS Configuration**: Proper CORS setup for API endpoints
- **Authentication**: Secure API endpoints appropriately

### Performance Guidelines

#### Bundle Optimization
- **Code Splitting**: Split code at route level
- **Tree Shaking**: Remove unused code
- **Asset Optimization**: Optimize images and static assets

#### Runtime Performance
- **Memoization**: Use React.memo for expensive components
- **Virtual Scrolling**: Implement for large lists
- **Debouncing**: Debounce user inputs and API calls

### Documentation Standards

#### Code Comments
- **JSDoc Comments**: Document complex functions and components
- **Inline Comments**: Explain complex logic and business rules
- **TODO Comments**: Mark areas for future improvement

#### Component Documentation
- **Props Documentation**: Document component props and their types
- **Usage Examples**: Provide usage examples for complex components
- **API Documentation**: Document API endpoints and data structures