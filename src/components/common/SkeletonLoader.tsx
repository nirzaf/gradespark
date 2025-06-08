import { motion } from 'framer-motion';
import { memo } from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded';
  width?: string | number;
  height?: string | number;
  animation?: boolean;
}

const Skeleton = memo(({ 
  className = '', 
  variant = 'text', 
  width, 
  height, 
  animation = true 
}: SkeletonProps) => {
  const baseClasses = 'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-gray-200';
  
  const variantClasses = {
    text: 'rounded',
    circular: 'rounded-full',
    rectangular: '',
    rounded: 'rounded-lg'
  };

  const animationClasses = animation ? 'animate-pulse' : '';

  const style = {
    width: width || (variant === 'text' ? '100%' : '40px'),
    height: height || (variant === 'text' ? '1rem' : '40px'),
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${animationClasses} ${className}`}
      style={style}
    />
  );
});

Skeleton.displayName = 'Skeleton';

// Card Skeleton Component
export const CardSkeleton = memo(() => (
  <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
    <Skeleton variant="rectangular" height="200px" className="rounded-lg" />
    <div className="space-y-2">
      <Skeleton variant="text" height="1.5rem" width="80%" />
      <Skeleton variant="text" height="1rem" width="60%" />
      <Skeleton variant="text" height="1rem" width="90%" />
    </div>
    <div className="flex justify-between items-center">
      <Skeleton variant="circular" width="40px" height="40px" />
      <Skeleton variant="rounded" width="100px" height="32px" />
    </div>
  </div>
));

CardSkeleton.displayName = 'CardSkeleton';

// Blog Post Skeleton
export const BlogPostSkeleton = memo(() => (
  <div className="max-w-4xl mx-auto p-6 space-y-6">
    <div className="space-y-4">
      <Skeleton variant="text" height="2.5rem" width="90%" />
      <div className="flex items-center space-x-4">
        <Skeleton variant="circular" width="48px" height="48px" />
        <div className="space-y-2 flex-1">
          <Skeleton variant="text" height="1rem" width="30%" />
          <Skeleton variant="text" height="0.875rem" width="20%" />
        </div>
      </div>
    </div>
    
    <Skeleton variant="rectangular" height="300px" className="rounded-lg" />
    
    <div className="space-y-3">
      {Array.from({ length: 8 }).map((_, i) => (
        <Skeleton 
          key={i} 
          variant="text" 
          height="1rem" 
          width={`${Math.random() * 40 + 60}%`} 
        />
      ))}
    </div>
  </div>
));

BlogPostSkeleton.displayName = 'BlogPostSkeleton';

// Navigation Skeleton
export const NavSkeleton = memo(() => (
  <nav className="bg-night/95 backdrop-blur-lg border-b border-celeste/20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <div className="flex items-center space-x-4">
          <Skeleton variant="circular" width="60px" height="60px" />
          <Skeleton variant="text" width="200px" height="1.5rem" />
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} variant="text" width="80px" height="1rem" />
          ))}
          <Skeleton variant="rounded" width="120px" height="40px" />
        </div>
        
        <div className="md:hidden">
          <Skeleton variant="rectangular" width="24px" height="24px" />
        </div>
      </div>
    </div>
  </nav>
));

NavSkeleton.displayName = 'NavSkeleton';

// Hero Section Skeleton
export const HeroSkeleton = memo(() => (
  <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-night/5 via-white to-celeste/10">
    <div className="text-center space-y-8 px-4">
      <div className="space-y-4">
        <Skeleton variant="text" height="4rem" width="80%" className="mx-auto" />
        <Skeleton variant="text" height="2rem" width="60%" className="mx-auto" />
      </div>
      
      <div className="space-y-4">
        <Skeleton variant="text" height="1.5rem" width="70%" className="mx-auto" />
        <Skeleton variant="text" height="1.5rem" width="50%" className="mx-auto" />
      </div>
      
      <div className="flex justify-center space-x-4">
        <Skeleton variant="rounded" width="150px" height="48px" />
        <Skeleton variant="rounded" width="150px" height="48px" />
      </div>
    </div>
  </section>
));

HeroSkeleton.displayName = 'HeroSkeleton';

// Table Skeleton
export const TableSkeleton = memo(({ rows = 5, columns = 4 }: { rows?: number; columns?: number }) => (
  <div className="overflow-hidden shadow ring-1 ring-black/5 md:rounded-lg">
    <table className="min-w-full divide-y divide-gray-300">
      <thead className="bg-gray-50">
        <tr>
          {Array.from({ length: columns }).map((_, i) => (
            <th key={i} className="px-6 py-3">
              <Skeleton variant="text" height="1rem" width="80%" />
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <tr key={rowIndex}>
            {Array.from({ length: columns }).map((_, colIndex) => (
              <td key={colIndex} className="px-6 py-4">
                <Skeleton variant="text" height="1rem" width="90%" />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
));

TableSkeleton.displayName = 'TableSkeleton';

// Animated Skeleton with shimmer effect
export const ShimmerSkeleton = memo(({ className = '', children }: { 
  className?: string; 
  children: React.ReactNode;
}) => (
  <motion.div
    className={`relative overflow-hidden ${className}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
  >
    {children}
    <motion.div
      className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
      animate={{ translateX: '200%' }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  </motion.div>
));

ShimmerSkeleton.displayName = 'ShimmerSkeleton';

export default Skeleton;
