import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  heroImage: string;
  date: string;
  author: string;
  slug: string;
}

const BlogCard = ({ title, excerpt, heroImage, date, author, slug }: BlogCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-xl bg-night/30 backdrop-blur-xl border border-celeste/20"
    >
      <Link to={`/blog/${slug}`} className="block h-full">
        {/* Hero Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={heroImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night/80 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-celeste mb-2 line-clamp-2">{title}</h3>
          <p className="text-white/80 mb-4 line-clamp-3">{excerpt}</p>
          
          {/* Meta information */}
          <div className="flex items-center justify-between text-sm text-white/60">
            <span>{author}</span>
            <span>{new Date(date).toLocaleDateString()}</span>
          </div>
        </div>

        {/* Hover Effects */}
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(160,235,235,0.1),transparent_70%)]"></div>
          
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-celeste/10 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer"></div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;