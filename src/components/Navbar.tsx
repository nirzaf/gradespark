import { Link, useLocation } from 'react-router-dom';
import {
  Menu, X, Sparkles, Phone, Mail, Globe, MessageCircle,
  MessageSquare} from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const navItems = [
  {
    title: "Home",
    path: "/"
  },
  {
    title: "About",
    path: "/about"
  },
  {
    title: "Services",
    path: "/services"
  },
  {
    title: "Blogs",
    path: "/blogs"
  },
  {
    title: "Contact",
    path: "/contact",
    dropdownItems: [
      { title: "WhatsApp", path: "https://wa.me/97433170042?text=Hi,%20I'm%20interested%20to%20learn%20more%20about%20your%20services.", icon: <MessageSquare className="w-5 h-5" />, external: true },
      { title: "Chat", path: "#", icon: <MessageCircle className="w-5 h-5" />, onClick: "openHubSpotChat" },
      { title: "Mobile", path: "tel:+97433170042", icon: <Phone className="w-5 h-5" /> },
      { title: "Email", path: "mailto:contact@gradespark.org", icon: <Mail className="w-5 h-5" /> },
      { title: "Contact Form", path: "/contact", icon: <Globe className="w-5 h-5" /> }
    ]
  }
];

const GetStartedButton = () => {
  return (
    <Link to="/contact">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium
                   bg-gradient-to-r from-celeste to-celeste-dark
                   text-night shadow-md hover:shadow-lg
                   transition-all duration-300
                   backdrop-blur-sm backdrop-saturate-150
                   border border-celeste/20"
      >
        <Sparkles className="w-4 h-4 mr-2" />
        Connect Now
      </motion.button>
    </Link>
  );
};

const NavItem = ({ item, isMobile = false }: { item: any; isMobile?: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  interface DropdownItemProps {
    title: string;
    path: string;
    icon: JSX.Element;
    external?: boolean;
    onClick?: string;
  }

  const variants = {
    initial: { opacity: 0, y: -5 },
    animate: { opacity: 1, y: 0 },
    hover: { scale: 1.02, y: -2 },
    tap: { scale: 0.98 }
  };

  const isActive: boolean = location.pathname === item.path ||
                    (item.dropdownItems && item.dropdownItems.some((dropdownItem: DropdownItemProps) => location.pathname + location.hash === dropdownItem.path));

  const handleMobileClick = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
      >
        <Link
          to={item.path}
          onClick={handleMobileClick}
          className={`group relative px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300
            ${isActive
              ? 'text-celeste'
              : 'text-white hover:text-celeste'}
            ${isMobile ? 'block w-full text-left' : 'inline-flex items-center'}
            before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b
            before:from-white/10 before:to-white/5 before:backdrop-blur-lg
            before:border before:border-white/20
            before:shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] hover:before:shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]
            overflow-hidden`}
        >
          <span className="relative z-10">{item.title}</span>

          {/* Glow effect */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(160,235,235,0.3),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Shimmer effect */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-celeste/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>

          {/* Shine effect */}
          <div className="absolute inset-0 -z-10 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute w-[200%] h-[200%] -top-[50%] -left-[50%] bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-45 animate-shine-slow"></div>
          </div>

          {/* Active state glow */}
          {isActive && (
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-celeste/10 via-celeste/5 to-celeste/10"></div>
          )}
        </Link>
      </motion.div>

      {/* Dropdown */}
      {item.dropdownItems && isHovered && !isMobile && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 mt-2 w-56 rounded-xl overflow-hidden z-50"
        >
          {/* Dropdown glass background */}
          <div className="absolute inset-0 bg-gradient-to-b from-night/95 to-night/90 backdrop-blur-xl border border-celeste/20 shadow-lg shadow-celeste/10"></div>

          {/* Dropdown glow effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(160,235,235,0.2),transparent_70%)] animate-pulse-slow"></div>

          {/* Dropdown content */}
          <div className="relative z-10 py-1">
            {item.dropdownItems.map((dropdownItem: DropdownItemProps, index: number) => (
              <Link
                key={index}
                to={dropdownItem.path}
                className="group relative flex items-center px-4 py-3 text-sm text-white
                  transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  {dropdownItem.icon}
                  <span className="ml-3">{dropdownItem.title}</span>
                </span>

                {/* Dropdown item hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-celeste/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Dropdown item shine */}
                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute w-[200%] h-[200%] -top-[50%] -left-[50%] bg-gradient-to-r from-transparent via-celeste/20 to-transparent rotate-45 animate-shine-slow"></div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50">
      {/* Main glass panel background */}
      <div className="absolute inset-0 bg-gradient-to-b from-night/95 via-night/90 to-night/95 backdrop-blur-xl border-b border-celeste/20 shadow-lg shadow-celeste/5"></div>

      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(160,235,235,0.3),transparent_70%)] opacity-70 animate-pulse-slow"></div>

      {/* Dynamic shine effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-1/2 h-[120%] -top-[10%] -left-[25%] bg-gradient-to-r from-transparent via-celeste/30 to-transparent rotate-12 animate-shine-fast"></div>
      </div>

      {/* Interactive bottom border */}
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-celeste/70 to-transparent animate-pulse-slow"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Text */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <motion.div
                className="bg-white rounded-lg p-0.5 flex items-center justify-center h-[42px] w-[42px] sm:h-[48px] sm:w-[48px] overflow-hidden"
                style={{
                  boxShadow: "inset 0 1px 2px rgba(255,255,255,0.9), 0 2px 4px rgba(0,0,0,0.3)",
                  border: "1px solid rgba(255,255,255,0.2)"
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "inset 0 1px 3px rgba(255,255,255,0.9), 0 3px 6px rgba(0,0,0,0.4), 0 0 10px rgba(160,235,235,0.3)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.img
                  className="h-[38px] w-auto sm:h-[44px] object-contain"
                  src="/gsa-logo-trasparent-bg.png"
                  alt="Grade Spark Academy"
                  whileHover={{ rotate: [0, -2, 2, -2, 0] }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </Link>
            {/* Desktop Text */}
            <Link to="/" className="ml-3 hidden sm:block">
              <span className="relative z-20 text-xl font-bold celeste-gradient-text-no-shadow whitespace-nowrap">
                Grade Spark Academy
              </span>
            </Link>
            {/* Mobile Text - Two Lines */}
            <Link to="/" className="ml-2 sm:hidden">
              <div className="flex flex-col">
                <span className="relative z-20 text-base font-bold celeste-gradient-text-no-shadow leading-tight">
                  Grade Spark
                </span>
                <span className="relative z-20 text-base font-bold celeste-gradient-text-no-shadow leading-tight">
                  Academy
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map((item, index) => (
              <NavItem key={index} item={item} />
            ))}
            <GetStartedButton />
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-celeste hover:bg-night-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-celeste"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-night/95 border-t border-celeste/20"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1" onClick={handleMobileMenuClick}>
            {navItems.map((item, index) => (
              <NavItem key={index} item={item} isMobile={true} />
            ))}
            <div className="px-3 py-2">
              <GetStartedButton />
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;