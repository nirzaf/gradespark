/**
 * Utility functions for handling images in the application
 */

/**
 * Gets the correct image path for blog images
 * This function ensures we're using the local images from the public folder
 * instead of CDN URLs
 * 
 * @param imageName The name of the image file
 * @returns The correct path to the image in the public folder
 */
export const getBlogImagePath = (imageName: string): string => {
    // If the image is already a full path (starts with http or /), return it as is
    if (imageName.startsWith('http') || imageName.startsWith('/')) {
        return imageName;
    }

    // Otherwise, construct the path to the image in the public folder
    return `/images/${imageName}`;
};

/**
 * Gets a fallback image if the main image is not available
 * 
 * @returns Path to the fallback image
 */
export const getFallbackBlogImage = (): string => {
    return '/images/gradespark-default.png';
};