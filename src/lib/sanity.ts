import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'bhy24mna',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
});

// Set up the image URL builder
const builder = imageUrlBuilder(client);

// Helper function to generate image URL from Sanity image reference
export const urlFor = (source: any) => {
  if (!source) return '';

  // If it's already a URL, return it
  if (typeof source === 'string' && (source.startsWith('http') || source.startsWith('/'))) {
    return source;
  }

  // For Sanity images, use the imageUrlBuilder
  try {
    return builder.image(source).url();
  } catch (error) {
    console.error('Error generating image URL:', error);
    return '';
  }
};
