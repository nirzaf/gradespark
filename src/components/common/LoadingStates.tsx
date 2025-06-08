import { motion } from 'framer-motion';
import { memo } from 'react';
import { Loader2, Wifi, WifiOff } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  className?: string;
}

export const LoadingSpinner = memo(({ 
  size = 'md', 
  color = 'text-celeste',
  className = '' 
}: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} ${color} ${className}`}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    >
      <Loader2 className="w-full h-full" />
    </motion.div>
  );
});

LoadingSpinner.displayName = 'LoadingSpinner';

interface ProgressBarProps {
  progress: number;
  className?: string;
  showPercentage?: boolean;
  color?: string;
}

export const ProgressBar = memo(({ 
  progress, 
  className = '',
  showPercentage = false,
  color = 'bg-celeste'
}: ProgressBarProps) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center mb-2">
        {showPercentage && (
          <span className="text-sm text-gray-600">{Math.round(progress)}%</span>
        )}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          className={`h-2 rounded-full ${color}`}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
});

ProgressBar.displayName = 'ProgressBar';

interface PulseLoaderProps {
  count?: number;
  size?: string;
  color?: string;
  className?: string;
}

export const PulseLoader = memo(({ 
  count = 3, 
  size = 'w-3 h-3',
  color = 'bg-celeste',
  className = ''
}: PulseLoaderProps) => {
  return (
    <div className={`flex space-x-2 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className={`${size} ${color} rounded-full`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
});

PulseLoader.displayName = 'PulseLoader';

interface SkeletonWaveProps {
  className?: string;
  children: React.ReactNode;
}

export const SkeletonWave = memo(({ className = '', children }: SkeletonWaveProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {children}
      <motion.div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
        animate={{ translateX: '200%' }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
});

SkeletonWave.displayName = 'SkeletonWave';

interface LoadingOverlayProps {
  isLoading: boolean;
  message?: string;
  children: React.ReactNode;
  blur?: boolean;
}

export const LoadingOverlay = memo(({ 
  isLoading, 
  message = 'Loading...', 
  children,
  blur = true
}: LoadingOverlayProps) => {
  return (
    <div className="relative">
      {children}
      {isLoading && (
        <motion.div
          className={`absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50 ${
            blur ? 'backdrop-blur-sm' : ''
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="text-center">
            <LoadingSpinner size="lg" />
            <p className="mt-4 text-gray-600 font-medium">{message}</p>
          </div>
        </motion.div>
      )}
    </div>
  );
});

LoadingOverlay.displayName = 'LoadingOverlay';

interface ConnectionStatusProps {
  isOnline: boolean;
  className?: string;
}

export const ConnectionStatus = memo(({ isOnline, className = '' }: ConnectionStatusProps) => {
  return (
    <motion.div
      className={`flex items-center space-x-2 px-3 py-2 rounded-lg ${
        isOnline ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
      } ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      {isOnline ? (
        <Wifi className="w-4 h-4" />
      ) : (
        <WifiOff className="w-4 h-4" />
      )}
      <span className="text-sm font-medium">
        {isOnline ? 'Online' : 'Offline'}
      </span>
    </motion.div>
  );
});

ConnectionStatus.displayName = 'ConnectionStatus';

interface LazyLoadingProps {
  isLoading: boolean;
  error?: Error | null;
  retry?: () => void;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const LazyLoading = memo(({ 
  isLoading, 
  error, 
  retry, 
  children, 
  fallback 
}: LazyLoadingProps) => {
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <div className="text-red-500 mb-4">
          <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Failed to load content
        </h3>
        <p className="text-gray-600 mb-4">
          {error.message || 'An unexpected error occurred'}
        </p>
        {retry && (
          <button
            onClick={retry}
            className="px-4 py-2 bg-celeste text-night rounded-lg hover:bg-celeste-dark transition-colors"
          >
            Try Again
          </button>
        )}
      </div>
    );
  }

  if (isLoading) {
    return fallback || (
      <div className="flex items-center justify-center p-8">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return <>{children}</>;
});

LazyLoading.displayName = 'LazyLoading';

// Typing indicator for real-time features
export const TypingIndicator = memo(() => {
  return (
    <div className="flex items-center space-x-2 text-gray-500">
      <span className="text-sm">Typing</span>
      <PulseLoader count={3} size="w-1 h-1" color="bg-gray-400" />
    </div>
  );
});

TypingIndicator.displayName = 'TypingIndicator';

// Loading button component
interface LoadingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading: boolean;
  loadingText?: string;
  children: React.ReactNode;
}

export const LoadingButton = memo(({ 
  isLoading, 
  loadingText = 'Loading...', 
  children, 
  disabled,
  className = '',
  ...props 
}: LoadingButtonProps) => {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={`relative ${className} ${isLoading ? 'cursor-not-allowed' : ''}`}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <LoadingSpinner size="sm" color="text-current" />
          <span className="ml-2">{loadingText}</span>
        </div>
      )}
      <div className={isLoading ? 'opacity-0' : 'opacity-100'}>
        {children}
      </div>
    </button>
  );
});

LoadingButton.displayName = 'LoadingButton';
