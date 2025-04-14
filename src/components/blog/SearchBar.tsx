import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Debounce search input
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      onSearch(searchQuery);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchQuery, onSearch]);

  return (
    <div className="relative max-w-xl mx-auto mb-8">
      <div className="relative">
        {/* Glass background */}
        <div className="absolute inset-0 bg-night/30 backdrop-blur-xl rounded-xl border border-celeste/20"></div>

        {/* Search input */}
        <div className="relative flex items-center">
          <Search className="absolute left-4 w-5 h-5 text-celeste" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search blogs..."
            className="w-full py-3 pl-12 pr-4 bg-transparent text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-celeste/50 rounded-xl relative z-10"
          />
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(160,235,235,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
      </div>
    </div>
  );
};

export default SearchBar;