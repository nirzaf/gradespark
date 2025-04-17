import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fetchBlogPosts, formatBlogDate, BlogPost } from '../utils/blogUtils';
import { getBlogImagePath, getFallbackBlogImage } from '../utils/imageUtils';



const BlogList = () => {
    const [blogs, setBlogs] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const blogsPerPage = 9;

    useEffect(() => {
        // Set page title
        document.title = "Blog - Grade Spark Academy";

        // Scroll to top when component mounts
        window.scrollTo(0, 0);

        // Function to fetch blog posts
        const fetchBlogs = async () => {
            try {
                setLoading(true);
                const blogData = await fetchBlogPosts();
                setBlogs(blogData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching blogs:', error);
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    // Filter blogs by search term
    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Get current blogs for pagination
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
    const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

    // Change page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);



    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Grade Spark Academy Blog</h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Expert insights, practical tips, and comprehensive guides to help you excel in your academic journey.
                    </p>
                </motion.div>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-celeste"></div>
                    </div>
                ) : (
                    <>
                        <div className="mb-6 flex justify-center">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                                placeholder="Search blogs..."
                                className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-celeste"
                            />
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, staggerChildren: 0.1 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {currentBlogs.map((blog, index) => (
                                <motion.div
                                    key={blog.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]"
                                >
                                    <Link to={`/blog/${blog.id}`} className="block">
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
                                                {formatBlogDate(blog.date)}
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
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>

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