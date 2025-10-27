import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  lowQualitySrc?: string;
  formats?: ('avif' | 'webp' | 'jpg' | 'png')[];
  fallbackFormat?: 'jpg' | 'png';
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

  // Check if src already has an extension (for backward compatibility)
  const hasExtension = /\.(jpg|jpeg|png|webp|avif)$/i.test(src);
  
  // Generate source URLs for different formats
  const generateSources = () => {
    if (hasExtension) {
      // If src has extension, use it as-is (backward compatibility)
      return [];
    }
    return formats.map(format => ({
      srcSet: `${src}.${format}`,
      type: `image/${format}`
    }));
  };

  // Get the final image src
  const getFinalSrc = () => {
    if (hasExtension) {
      return src; // Use original src if it has extension
    }
    return `${src}.${fallbackFormat}`;
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  // For backward compatibility, if src has extension, use simple img tag
  if (hasExtension) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <AnimatePresence mode="wait">
          <motion.img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            onLoad={handleLoad}
            className={`w-full h-full object-cover transition-all duration-300 ${
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
  }

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
            src={getFinalSrc()}
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
