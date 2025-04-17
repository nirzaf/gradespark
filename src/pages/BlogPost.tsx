import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getBlogById, formatBlogDate } from '../utils/blogUtils';
import { getBlogImagePath, getFallbackBlogImage } from '../utils/imageUtils';
import { ArrowLeft, Calendar, User, Clock, Share2 } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { blogId } = useParams<{ blogId: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    const fetchBlogData = async () => {
      try {
        setLoading(true);
        if (!blogId) {
          throw new Error('Blog ID is required');
        }

        const blog = await getBlogById(blogId);
        if (!blog) {
          throw new Error('Blog not found');
        }

        setBlogData(blog);
        // Set page title
        document.title = `${blog.title} - Grade Spark Academy Blog`;
      } catch (err) {
        console.error('Error fetching blog:', err);
        setError(err instanceof Error ? err.message : 'Failed to load blog post');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [blogId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-celeste"></div>
      </div>
    );
  }

  if (error || !blogData) {
    return (
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">{error || 'The blog post you are looking for does not exist.'}</p>
          <Link 
            to="/blogs" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-celeste hover:bg-celeste-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-celeste"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <div className="mb-8">
          <button 
            onClick={() => navigate('/blogs')}
            className="inline-flex items-center text-celeste-dark hover:text-celeste transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Blogs
          </button>
        </div>

        {/* Featured Image */}
        <div className="relative rounded-xl overflow-hidden mb-8 shadow-lg h-[300px] md:h-[400px]">
          <img
            src={getBlogImagePath(blogData.imageUrl || '')}
            alt={blogData.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = getFallbackBlogImage();
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{blogData.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{formatBlogDate(blogData.date)}</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                <span>Grade Spark Academy</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{blogData.readTime || '10 min read'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8"
        >
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">{blogData.description}</p>
            
            {/* Table of Contents */}
            {blogData.tableOfContents && (
              <div className="bg-gray-50 rounded-lg p-4 mb-8">
                <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
                <ul className="space-y-2">
                  {blogData.tableOfContents.map((item: any, index: number) => (
                    <li key={index} className="text-celeste-dark hover:text-celeste">
                      <a href={`#section-${index + 1}`} className="flex items-center">
                        <span className="mr-2">{index + 1}.</span>
                        <span>{item}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Render content sections */}
            {blogData.content && blogData.content.map((section: any, index: number) => (
              <div key={index} id={`section-${index + 1}`} className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                {section.paragraphs.map((paragraph: string, pIndex: number) => (
                  <p key={pIndex} className="mb-4">{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    {section.bullets.map((bullet: string, bIndex: number) => (
                      <li key={bIndex}>{bullet}</li>
                    ))}
                  </ul>
                )}
                {section.image && (
                  <div className="my-6">
                    <img 
                      src={getBlogImagePath(section.image.url)} 
                      alt={section.image.alt || section.title} 
                      className="rounded-lg w-full"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = getFallbackBlogImage();
                      }}
                    />
                    {section.image.caption && (
                      <p className="text-sm text-gray-500 mt-2 text-center italic">{section.image.caption}</p>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* Conclusion */}
            {blogData.conclusion && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
                <p className="mb-4">{blogData.conclusion}</p>
              </div>
            )}
          </div>

          {/* Share buttons */}
          <div className="border-t pt-6 mt-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Share this article</h3>
                <div className="flex space-x-4">
                  <button className="text-gray-500 hover:text-celeste transition-colors">
                    <Share2 className="h-5 w-5" />
                  </button>
                  {/* Add more social share buttons as needed */}
                </div>
              </div>
              <div>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-celeste hover:bg-celeste-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-celeste"
                >
                  Get Academic Help
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Related Articles */}
        {blogData.relatedPosts && blogData.relatedPosts.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogData.relatedPosts.map((post: any) => (
                <Link 
                  key={post.id} 
                  to={`/blog/${post.id}`}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="h-40 bg-celeste/30 relative overflow-hidden">
                    <img
                      src={getBlogImagePath(post.imageUrl || '')}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = getFallbackBlogImage();
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-sm text-gray-500">{formatBlogDate(post.date)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPost;
