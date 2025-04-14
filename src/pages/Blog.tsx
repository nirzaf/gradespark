import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BlogCard from '../components/blog/BlogCard';
import SearchBar from '../components/blog/SearchBar';
import Pagination from '../components/blog/Pagination';
import { getAllBlogs, type BlogPost } from '../lib/blogLoader';

const Blog = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  
  const blogsPerPage = 12;
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  // Load blogs and filter based on search query
  useEffect(() => {
    const loadBlogs = async () => {
      const allBlogs = await getAllBlogs();
      const filteredBlogs = allBlogs.filter(blog =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setBlogs(filteredBlogs);
      setCurrentPage(1);
    };
    loadBlogs();
  }, [searchQuery]);

  // Get current page blogs
  const getCurrentPageBlogs = () => {
    const startIndex = (currentPage - 1) * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;
    return blogs.slice(startIndex, endIndex);
  };

  return (
    <div className="min-h-screen bg-night py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold text-celeste mb-4"
        >
          Our Blog
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-white/80"
        >
          Stay updated with our latest insights and educational resources
        </motion.p>
      </div>

      {/* Search Bar */}
      <SearchBar onSearch={setSearchQuery} />

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {getCurrentPageBlogs().map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>

        {/* Show pagination only if there are multiple pages */}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}

        {/* No results message */}
        {blogs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-white/80 text-lg">No blogs found matching your search.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Blog;