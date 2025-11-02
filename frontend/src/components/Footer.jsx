import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="gradient-primary text-cream mt-auto border-t border-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-gold">About Us</h3>
            <ul className="space-y-2 text-sm text-cream/70">
              <li><Link to="/about" className="hover:text-gold transition-colors">Our Story</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">Team</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-gold">Services</h3>
            <ul className="space-y-2 text-sm text-cream/70">
              <li><Link to="/services" className="hover:text-gold transition-colors">Spa & Wellness</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Concierge</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Activities</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-gold">Contact</h3>
            <ul className="space-y-2 text-sm text-cream/70">
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span>+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span>info@luxuryresort.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-4 h-4 mt-1 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span>123 Paradise Island, Tropical Resort</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-gold">Newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-l-md text-primary-dark bg-cream/95 focus:outline-none focus:ring-2 focus:ring-gold border border-gold/20"
              />
              <button className="gradient-gold hover:opacity-90 text-primary-dark px-4 py-2 rounded-r-md font-semibold transition-all shadow-lg">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gold/20 text-center text-sm text-cream/60">
          <p>&copy; 2024 Luxury Resort. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
