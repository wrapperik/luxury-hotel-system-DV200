import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingWidget = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to accommodations with search params
    navigate(`/accommodations?checkIn=${formData.checkIn}&checkOut=${formData.checkOut}&guests=${formData.guests}`);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-primary-dark rounded-xl shadow-2xl p-8 border border-gold/30 relative overflow-hidden">
      {/* Decorative corner accents */}
      <div className="absolute top-0 right-0 w-32 h-32 gradient-gold opacity-10 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 gradient-gold opacity-10 rounded-tr-full"></div>
      
      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Check In */}
          <div>
            <label className="flex items-center text-sm font-semibold text-gold mb-2 uppercase tracking-wide">
              <svg className="w-5 h-5 mr-2 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
              </svg>
              Check In
            </label>
            <input
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              required
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 border-2 border-gold/30 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-all bg-primary text-cream font-medium shadow-sm hover:border-gold/50"
            />
          </div>

          {/* Check Out */}
          <div>
            <label className="flex items-center text-sm font-semibold text-gold mb-2 uppercase tracking-wide">
              <svg className="w-5 h-5 mr-2 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
              </svg>
              Check Out
            </label>
            <input
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              required
              min={formData.checkIn || new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 border-2 border-gold/30 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-all bg-primary text-cream font-medium shadow-sm hover:border-gold/50"
            />
          </div>

          {/* Guests */}
          <div>
            <label className="flex items-center text-sm font-semibold text-gold mb-2 uppercase tracking-wide">
              <svg className="w-5 h-5 mr-2 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
              </svg>
              Guests
            </label>
            <select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gold/30 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-all bg-primary text-cream font-medium shadow-sm hover:border-gold/50"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                <option key={num} value={num}>{num} Adult{num > 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="w-full gradient-gold hover:shadow-2xl text-primary-dark py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-[1.02] ring-4 ring-gold/20 hover:ring-gold/40 uppercase tracking-wide"
        >
          Search Availability
        </button>
      </form>
    </div>
  );
};

export default BookingWidget;
