import { useEffect, useState } from 'react';
import { getBlogImagePath, getFallbackBlogImage } from '../utils/imageUtils';

interface BlogPost {
    id: string;
    title: string;
    description: string;
    date: string;
    url: string;
    imageUrl?: string;
}

const BlogList = () => {
    const [blogs, setBlogs] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 12;

    useEffect(() => {
        // Function to fetch and parse blog HTML files
        const fetchBlogs = async () => {
            try {
                setLoading(true);

                // This would typically be an API call to fetch blog data
                // For now, we're using local images from the public folder
                const blogData: BlogPost[] = [
                    {
                        id: 'how-to-write-a-dissertation',
                        title: 'How to Write a Dissertation: A Step-by-Step Guide for University Students',
                        description: 'Your complete guide to writing a university dissertation. Follow Grade Spark Academy\'s step-by-step process from topic selection to final submission.',
                        date: '2024-06-15',
                        url: '/how-to-write-a-dissertation.html',
                        imageUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80'
                    },
                    {
                        id: 'common-research-paper-mistakes',
                        title: '10 Common Research Paper Mistakes and How to Avoid Them',
                        description: 'Learn how to avoid the 10 most common research paper mistakes with expert tips from Grade Spark Academy. Improve your writing and boost your grades.',
                        date: '2024-06-02',
                        url: '/common-research-paper-mistakes.html',
                        imageUrl: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80'
                    },
                    {
                        id: 'understanding-citation-styles',
                        title: 'Understanding Citation Styles: APA, MLA, Chicago, Harvard',
                        description: 'Learn the key differences between APA, MLA, Chicago, and Harvard citation styles and when to use each. A comprehensive guide from Grade Spark Academy.',
                        date: '2024-07-20',
                        url: '/understanding-citation-styles-apa-mla-chicago-harvard.html',
                        imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80'
                    },
                    {
                        id: 'writing-literature-review',
                        title: 'The Ultimate Guide to Writing a Literature Review',
                        description: 'Learn how to write a comprehensive literature review with Grade Spark Academy\'s ultimate guide. Understand its purpose, structure, and step-by-step process.',
                        date: '2024-11-05',
                        url: '/writing-literature-review-guide.html',
                        imageUrl: 'https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
                    },
                    {
                        id: 'academic-success-guide',
                        title: 'The Ultimate Guide to Academic Success',
                        description: 'Discover proven strategies, expert tips, and practical advice to excel in your academic journey with Grade Spark Academy\'s comprehensive guide to academic success.',
                        date: '2024-07-18',
                        url: '/ultimate-academic-success-guide.html',
                        imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80'
                    },
                    {
                        "id": "mastering-mathematical-proofs",
                        "title": "Mastering Complex Mathematical Proofs: A Student's Guide",
                        "description": "Learn effective strategies and techniques to understand, structure, and write complex mathematical proofs with Grade Spark Academy's student guide.",
                        "date": "2025-04-16",
                        "url": "/mastering-mathematical-proofs-guide.html",
                        "imageUrl": "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
                    },
                    {
                        "id": "engineering-design-projects",
                        "title": "How to Approach Engineering Design Projects: Best Practices",
                        "description": "Learn best practices for approaching engineering design projects, from defining the problem and requirements to prototyping, testing, and documentation for successful outcomes.",
                        "date": "2025-04-17",
                        "url": "/engineering-design-project-best-practices.html",
                        "imageUrl": "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                    },
                    {
                        "id": "writing-psychology-papers",
                        "title": "Writing Psychology Papers: From Research to Analysis",
                        "description": "Master the art of writing psychology papers. Learn essential steps from choosing a topic and conducting research to structuring your analysis and citing sources according to APA style.",
                        "date": "2025-04-17",
                        "url": "/writing-psychology-papers-research-analysis.html",
                        "imageUrl": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                    }
                ];

                // Sort blogs by date (newest first)
                const sortedBlogs = blogData.sort((a, b) => {
                    return new Date(b.date).getTime() - new Date(a.date).getTime();
                });

                setBlogs(sortedBlogs);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching blogs:', error);
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    // Get current blogs for pagination
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
    const totalPages = Math.ceil(blogs.length / blogsPerPage);

    // Change page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    // Format date to be more readable
    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Grade Spark Academy Blog</h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Expert insights, practical tips, and comprehensive guides to help you excel in your academic journey.
                    </p>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-celeste"></div>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {currentBlogs.map((blog) => (
                                <div key={blog.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                    <a href={blog.url} className="block">
                                        <div className="h-48 bg-celeste/30 relative overflow-hidden">
                                            {blog.imageUrl ? (
                                                <img
                                                    src={getBlogImagePath(blog.imageUrl)}
                                                    alt={blog.title}
                                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                                    onError={(e) => {
                                                        const target = e.target as HTMLImageElement;
                                                        target.onerror = null;
                                                        target.src = getFallbackBlogImage();
                                                    }}
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-celeste/50 to-celeste-dark/50">
                                                    <span className="text-night text-xl font-semibold">Grade Spark Academy</span>
                                                </div>
                                            )}
                                            <div className="absolute top-4 right-4 bg-night text-white text-xs font-medium px-2 py-1 rounded">
                                                {formatDate(blog.date)}
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">{blog.title}</h2>
                                            <p className="text-gray-600 mb-4 line-clamp-3">{blog.description}</p>
                                            <div className="flex items-center text-celeste-dark font-medium">
                                                Read Article
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex justify-center mt-12">
                                <nav className="inline-flex rounded-md shadow">
                                    <button
                                        onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
                                        disabled={currentPage === 1}
                                        className={`relative inline-flex items-center px-4 py-2 rounded-l-md border ${currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-50'} text-sm font-medium`}
                                    >
                                        Previous
                                    </button>

                                    {Array.from({ length: totalPages }).map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => paginate(index + 1)}
                                            className={`relative inline-flex items-center px-4 py-2 border ${currentPage === index + 1 ? 'bg-celeste text-night' : 'bg-white text-gray-700 hover:bg-gray-50'} text-sm font-medium`}
                                        >
                                            {index + 1}
                                        </button>
                                    ))}

                                    <button
                                        onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
                                        disabled={currentPage === totalPages}
                                        className={`relative inline-flex items-center px-4 py-2 rounded-r-md border ${currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-50'} text-sm font-medium`}
                                    >
                                        Next
                                    </button>
                                </nav>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default BlogList;