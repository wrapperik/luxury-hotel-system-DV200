import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Accommodations', path: '/accommodations' },
    { name: 'Packages', path: '/packages' },
    { name: 'Dining', path: '/dining' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="gradient-primary shadow-2xl sticky top-0 z-50 border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 gradient-gold rounded-full flex items-center justify-center shadow-lg ring-2 ring-gold/30 group-hover:ring-gold/60 transition-all">
              <span className="text-primary-dark font-bold text-xl font-serif">L</span>
            </div>
            <span className="text-cream font-serif text-xl hidden sm:block tracking-wide">Luxury Resort</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 bg-cream/95 backdrop-blur-sm rounded-full px-6 py-2 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-gradient-to-r from-primary via-primary-light to-primary text-cream shadow-md'
                    : 'text-primary-dark hover:bg-gold/20 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-cream hover:text-gold transition-colors"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-cream-light border-t border-gold/20 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all ${
                  isActive(link.path)
                    ? 'bg-gradient-to-r from-primary to-primary-light text-cream shadow-md'
                    : 'text-primary-dark hover:bg-gold/20 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
