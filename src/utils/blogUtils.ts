/**
 * Utility functions for handling blog posts
 */

export interface BlogPost {
    id: string;
    title: string;
    description: string;
    date: string;
    url: string;
    imageUrl?: string;
}

/**
 * Fetches blog posts from HTML files in the public directory
 * In a real application, this would be an API call or server-side function
 * For this static implementation, we're returning hardcoded data based on the HTML files
 */
export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
    // This would typically be an API call, but for static HTML files
    // we'll hardcode the blog data based on the files in the public directory
    const blogData: BlogPost[] = [
        {
            id: 'how-to-write-a-dissertation',
            title: 'How to Write a Dissertation: A Step-by-Step Guide for University Students',
            description: 'Your complete guide to writing a university dissertation. Follow Grade Spark Academy\'s step-by-step process from topic selection to final submission.',
            date: '2023-09-15',
            url: '/how-to-write-a-dissertation.html',
            imageUrl: '/assignment-infografic.png'
        },
        {
            id: 'common-research-paper-mistakes',
            title: '10 Common Research Paper Mistakes and How to Avoid Them',
            description: 'Learn how to avoid the 10 most common research paper mistakes with expert tips from Grade Spark Academy. Improve your writing and boost your grades.',
            date: '2023-10-02',
            url: '/common-research-paper-mistakes.html',
            imageUrl: '/assignment-infografic.png'
        },
        {
            id: 'understanding-citation-styles',
            title: 'Understanding Citation Styles: APA, MLA, Chicago, Harvard',
            description: 'Learn the key differences between APA, MLA, Chicago, and Harvard citation styles and when to use each. A comprehensive guide from Grade Spark Academy.',
            date: '2023-10-20',
            url: '/understanding-citation-styles-apa-mla-chicago-harvard.html',
            imageUrl: '/assignment-infografic.png'
        },
        {
            id: 'writing-literature-review',
            title: 'The Ultimate Guide to Writing a Literature Review',
            description: 'Learn how to write a comprehensive literature review with Grade Spark Academy\'s ultimate guide. Understand its purpose, structure, and step-by-step process.',
            date: '2023-11-05',
            url: '/writing-literature-review-guide.html',
            imageUrl: '/assignment-infografic.png'
        },
        {
            id: 'academic-success-guide',
            title: 'The Ultimate Guide to Academic Success',
            description: 'Discover proven strategies, expert tips, and practical advice to excel in your academic journey with Grade Spark Academy\'s comprehensive guide to academic success.',
            date: '2023-11-18',
            url: '/blog.html',
            imageUrl: '/assignment-infografic.png'
        }
    ];

    // Sort blogs by date (newest first)
    return blogData.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
};

/**
 * Format date to be more readable
 */
export const formatBlogDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
};