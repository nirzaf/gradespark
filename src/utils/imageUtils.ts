/**
 * Utility functions for handling images in the application
 */
import { urlFor } from '../lib/sanity';

/**
 * Gets the correct image path for blog images
 * This function handles both local and remote images, including Sanity images
 *
 * @param image The image (can be a string path, Sanity image object, or null)
 * @returns The correct path to the image
 */
export const getBlogImagePath = (image: any): string => {
    // If it's null or undefined, return fallback
    if (!image) {
        return getFallbackBlogImage();
    }

    // If the image is a string
    if (typeof image === 'string') {
        // If the image is already a full path (starts with http or /), return it as is
        if (image.startsWith('http') || image.startsWith('/')) {
            return image;
        }

        // Otherwise, construct the path to the image in the public folder
        return `/images/${image}`;
    }

    // If it's a Sanity image object, use urlFor
    if (typeof image === 'object') {
        const sanityUrl = urlFor(image);
        return sanityUrl || getFallbackBlogImage();
    }

    return getFallbackBlogImage();
};

/**
 * Gets a fallback image if the main image is not available
 *
 * @returns Path to the fallback image
 */
export const getFallbackBlogImage = (): string => {
    return '/images/gradespark-default.png';
};