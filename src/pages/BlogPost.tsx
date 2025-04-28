import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getBlogPostBySlug, BlogPost, formatBlogDate } from '../utils/blogUtils';
import { getBlogImagePath, getFallbackBlogImage } from '../utils/imageUtils';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Set page title for SEO
    document.title = post?.title ? `${post.title} | Grade Spark Academy Blog` : 'Blog | Grade Spark Academy';
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [post]);

  useEffect(() => {
    if (!slug) {
      setError(true);
      setLoading(false);
      return;
    }

    const fetchPost = async () => {
      try {
        setLoading(true);
        const fetchedPost = await getBlogPostBySlug(slug);
        if (fetchedPost) {
          setPost(fetchedPost);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Error fetching blog post:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="py-16 px-4 sm:px-6 lg:px-8 min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-celeste"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, the blog post you're looking for doesn't exist or has been moved.
          </p>
          <Link 
            to="/blogs" 
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-celeste hover:bg-celeste-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-celeste"
          >
            Back to Blog List
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/blogs" 
          className="inline-flex items-center text-celeste hover:text-celeste-dark mb-8"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Blog List
        </Link>

        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-night">{post.title}</h1>

          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-celeste/30 flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="text-night">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div>
              <p className="font-medium text-night">{post.author || 'The Grade Spark Team'}</p>
              <p className="text-sm text-gray-500">
                Published on {formatBlogDate(post.date)}
                {post.readingTime && ` • ${post.readingTime}`}
              </p>
            </div>
          </div>
        </header>

        {post.imageUrl && (
          <div className="rounded-xl overflow-hidden shadow-lg mb-8">
            <img 
              src={getBlogImagePath(post.imageUrl)} 
              alt={post.title}
              className="w-full h-auto object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = getFallbackBlogImage();
              }}
            />
          </div>
        )}

        <article className="blog-content prose prose-lg max-w-none bg-white rounded-xl shadow-md p-8">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              // Custom rendering for links to open in new tab if external
              a: ({ node, ...props }) => {
                const href = props.href || '';
                const isExternal = href.startsWith('http');
                return isExternal ? 
                  <a {...props} target="_blank" rel="noopener noreferrer" /> : 
                  <a {...props} />;
              },
              // Add any other custom component renderers here
            }}
          >
            {post.content}
          </ReactMarkdown>
        </article>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-night mb-4">Continue Reading</h2>
          <Link 
            to="/blogs" 
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-celeste hover:bg-celeste-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-celeste"
          >
            View All Blog Posts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
