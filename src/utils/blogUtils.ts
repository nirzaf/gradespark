/**
 * Utility functions for handling blog posts
 */
import { client, urlFor } from '../lib/sanity';

export interface BlogPost {
    id: string;
    title: string;
    description: string;
    date: string;
    imageUrl?: string;
    readTime?: string;
    author?: string;
    tableOfContents?: string[];
    content?: BlogSection[];
    conclusion?: string;
    relatedPosts?: RelatedPost[];
}

export interface BlogSection {
    title: string;
    paragraphs: string[];
    bullets?: string[];
    image?: {
        url: string;
        alt?: string;
        caption?: string;
    };
}

export interface RelatedPost {
    id: string;
    title: string;
    date: string;
    imageUrl?: string;
}

/**
 * Fetches all blog posts from Sanity
 */
export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
    try {
        // Query to get all blog posts with essential fields
        const query = `*[_type == "blog"] | order(publishedAt desc) {
            "id": slug.current,
            title,
            description,
            "date": publishedAt,
            "imageUrl": mainImage,
            readTime,
            "author": author->name
        }`;

        const sanityPosts = await client.fetch(query);

        // Transform Sanity data to match our BlogPost interface
        const blogPosts: BlogPost[] = sanityPosts.map((post: any) => ({
            id: post.id,
            title: post.title,
            description: post.description,
            date: post.date,
            imageUrl: urlFor(post.imageUrl),
            readTime: post.readTime || `${Math.ceil(post.description.length / 1000)} min read`,
            author: post.author || 'Grade Spark Academy'
        }));

        return blogPosts;
    } catch (error) {
        console.error('Error fetching blog posts from Sanity:', error);
        return [];
    }
};

/**
 * Fetches a single blog post by ID from Sanity
 */
export const getBlogById = async (id: string): Promise<BlogPost | null> => {
    try {
        // Query to get a specific blog post with all its details
        const query = `*[_type == "blog" && slug.current == $id][0]{
            "id": slug.current,
            title,
            description,
            "date": publishedAt,
            "imageUrl": mainImage,
            readTime,
            "author": author->name,
            tableOfContents,
            content[] {
                title,
                paragraphs,
                bullets,
                image {
                    "url": url,
                    alt,
                    caption
                }
            },
            conclusion,
            "relatedPosts": relatedPosts[]->{
                "id": slug.current,
                title,
                "date": publishedAt,
                "imageUrl": mainImage
            }
        }`;

        const post = await client.fetch(query, { id });

        if (!post) return null;

        // Transform Sanity data to match our BlogPost interface
        const blogPost: BlogPost = {
            id: post.id,
            title: post.title,
            description: post.description,
            date: post.date,
            imageUrl: urlFor(post.imageUrl),
            readTime: post.readTime || `${Math.ceil(post.description.length / 1000)} min read`,
            author: post.author || 'Grade Spark Academy',
            tableOfContents: post.tableOfContents || [],
            content: post.content?.map((section: any) => ({
                title: section.title,
                paragraphs: section.paragraphs || [],
                bullets: section.bullets || [],
                image: section.image ? {
                    url: urlFor(section.image.url),
                    alt: section.image.alt || section.title,
                    caption: section.image.caption
                } : undefined
            })) || [],
            conclusion: post.conclusion,
            relatedPosts: post.relatedPosts?.map((related: any) => ({
                id: related.id,
                title: related.title,
                date: related.date,
                imageUrl: urlFor(related.imageUrl)
            })) || []
        };

        return blogPost;
    } catch (error) {
        console.error(`Error fetching blog post with ID ${id} from Sanity:`, error);
        return null;
    }
};

/**
 * Format date to be more readable
 */
export const formatBlogDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
};