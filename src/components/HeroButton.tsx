import { Sparkles, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroButton() {
  return (
    <Link
      to="/place-order"
      className="relative inline-block group"
    >
      <span className="absolute inset-0 w-full h-full transition-all duration-300 rounded-full filter blur-sm opacity-20 scale-[1.1] group-hover:scale-100 group-hover:opacity-70 bg-gradient-to-br from-celeste to-celeste-dark animate-gradient"></span>
      <span className="relative flex items-center gap-3 px-6 py-3 text-lg font-bold text-white rounded-full bg-night transition-colors duration-300 group-hover:bg-night-dark">
        <Rocket className="h-5 w-5 text-celeste" />
        <span>Get Started Now</span>
        <Sparkles className="h-5 w-5 text-celeste animate-spin" />
      </span>
    </Link>
  );
}