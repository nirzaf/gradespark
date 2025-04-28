/**
 * Utility functions for handling blog posts
 */
import matter from 'gray-matter';

export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    author?: string;
    imageUrl?: string;
    readingTime?: string;
    content: string;
}

/**
 * Gets all blog posts from Markdown files in the src/blogs directory
 * Uses Vite's import.meta.glob to load all .md files during build time
 */
// Manually import all blog posts
// This is a workaround for Vite's import.meta.glob which might not work as expected in some environments
const blogPosts = [
    { path: 'how-to-write-a-dissertation', import: () => import('../blogs/how-to-write-a-dissertation.md?raw') },
    { path: 'common-research-paper-mistakes', import: () => import('../blogs/common-research-paper-mistakes.md?raw') },
    { path: 'understanding-citation-styles', import: () => import('../blogs/understanding-citation-styles.md?raw') },
    { path: 'writing-literature-review', import: () => import('../blogs/writing-literature-review.md?raw') },
    { path: 'academic-success-guide', import: () => import('../blogs/academic-success-guide.md?raw') },
    { path: 'engineering-design-project-best-practices', import: () => import('../blogs/engineering-design-project-best-practices.md?raw') },
    { path: 'collaborate-academic-experts', import: () => import('../blogs/collaborate-academic-experts.md?raw') },
    { path: 'evidence-based-study-strategies', import: () => import('../blogs/evidence-based-study-strategies.md?raw') },
    { path: 'mastering-mathematical-proofs-guide', import: () => import('../blogs/mastering-mathematical-proofs-guide.md?raw') },
    { path: 'when-how-seek-academic-assignment-help', import: () => import('../blogs/when-how-seek-academic-assignment-help.md?raw') },
    { path: 'writing-compelling-thesis-statement-tips', import: () => import('../blogs/writing-compelling-thesis-statement-tips.md?raw') },
    { path: 'writing-psychology-papers-research-analysis', import: () => import('../blogs/writing-psychology-papers-research-analysis.md?raw') },
];

export const getAllBlogPosts = async (): Promise<BlogPost[]> => {
    try {
        const posts: BlogPost[] = [];

        // Process each blog file
        for (const blog of blogPosts) {
            try {
                // Import the blog content
                const rawContent = await blog.import();

                // Parse frontmatter and content using gray-matter
                const { data, content } = matter(rawContent.default);

                posts.push({
                    slug: data.slug || blog.path,
                    title: data.title,
                    description: data.description,
                    date: data.date,
                    author: data.author,
                    imageUrl: data.imageUrl,
                    readingTime: data.readingTime,
                    content
                });
            } catch (err) {
                console.error(`Error loading blog ${blog.path}:`, err);
            }
        }

        // Sort posts by date (newest first)
        return posts.sort((a, b) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
    } catch (error) {
        console.error('Error loading blog posts:', error);
        return [];
    }
};

/**
 * Gets a single blog post by its slug
 */
export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | undefined> => {
    const posts = await getAllBlogPosts();
    return posts.find(post => post.slug === slug);
};

/**
 * Format date to be more readable
 */
export const formatBlogDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
};