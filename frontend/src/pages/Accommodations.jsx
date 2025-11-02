import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import RoomCard from '../components/RoomCard';

const Accommodations = () => {
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    type: 'all',
    priceRange: 'all',
    guests: searchParams.get('guests') || 'all',
  });

  // Sample data - will be replaced with API data
  const accommodations = [
    {
      id: 1,
      title: 'Deluxe Room',
      description: 'Elegant room with modern amenities and city views',
      type: 'room',
      price: 250,
      guests: 2,
      size: 45,
      featured: true,
    },
    {
      id: 2,
      title: 'Ocean View Suite',
      description: 'Spacious suite with panoramic ocean views and private balcony',
      type: 'suite',
      price: 450,
      guests: 4,
      size: 85,
      featured: true,
    },
    {
      id: 3,
      title: 'Garden Villa',
      description: 'Private villa surrounded by lush tropical gardens',
      type: 'villa',
      price: 650,
      guests: 6,
      size: 120,
    },
    {
      id: 4,
      title: 'Presidential Suite',
      description: 'Ultimate luxury with premium amenities and butler service',
      type: 'suite',
      price: 850,
      guests: 4,
      size: 150,
      featured: true,
    },
    {
      id: 5,
      title: 'Superior Room',
      description: 'Comfortable room with elegant furnishings',
      type: 'room',
      price: 200,
      guests: 2,
      size: 40,
    },
    {
      id: 6,
      title: 'Beach Villa',
      description: 'Exclusive beachfront villa with private pool',
      type: 'villa',
      price: 800,
      guests: 8,
      size: 180,
    },
    {
      id: 7,
      title: 'Junior Suite',
      description: 'Stylish suite perfect for couples',
      type: 'suite',
      price: 350,
      guests: 2,
      size: 60,
    },
    {
      id: 8,
      title: 'Family Villa',
      description: 'Spacious villa ideal for family getaways',
      type: 'villa',
      price: 700,
      guests: 6,
      size: 140,
    },
  ];

  const handleFilterChange = (filterType, value) => {
    setFilters({
      ...filters,
      [filterType]: value,
    });
  };

  const filteredAccommodations = accommodations.filter((acc) => {
    if (filters.type !== 'all' && acc.type !== filters.type) return false;
    if (filters.guests !== 'all' && acc.guests < parseInt(filters.guests)) return false;
    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number);
      if (max && (acc.price < min || acc.price > max)) return false;
      if (!max && acc.price < min) return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-primary-dark">
      {/* Header */}
      <section className="gradient-primary text-cream py-16 border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-serif font-bold mb-4">Our Accommodations</h1>
          <div className="w-20 h-1 gradient-gold mb-4 rounded-full"></div>
          <p className="text-xl text-cream/80">
            Choose from our exclusive collection of rooms, suites, and villas
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-primary rounded-lg shadow-xl p-6 sticky top-20 border border-gold/30">
              <h3 className="text-lg font-serif font-bold mb-4 text-cream">Filter By</h3>

              {/* Type Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gold mb-2 uppercase tracking-wide">
                  Accommodation Type
                </label>
                <select
                  value={filters.type}
                  onChange={(e) => handleFilterChange('type', e.target.value)}
                  className="w-full px-3 py-2 border-2 border-gold/30 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold bg-primary-dark text-cream"
                >
                  <option value="all">All Types</option>
                  <option value="room">Rooms</option>
                  <option value="suite">Suites</option>
                  <option value="villa">Villas</option>
                </select>
              </div>

              {/* Price Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gold mb-2 uppercase tracking-wide">
                  Price Range
                </label>
                <select
                  value={filters.priceRange}
                  onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                  className="w-full px-3 py-2 border-2 border-gold/30 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold bg-primary-dark text-cream"
                >
                  <option value="all">All Prices</option>
                  <option value="0-300">$0 - $300</option>
                  <option value="300-500">$300 - $500</option>
                  <option value="500-700">$500 - $700</option>
                  <option value="700">$700+</option>
                </select>
              </div>

              {/* Guests Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gold mb-2 uppercase tracking-wide">
                  Minimum Guests
                </label>
                <select
                  value={filters.guests}
                  onChange={(e) => handleFilterChange('guests', e.target.value)}
                  className="w-full px-3 py-2 border-2 border-gold/30 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold bg-primary-dark text-cream"
                >
                  <option value="all">Any</option>
                  <option value="2">2+ Guests</option>
                  <option value="4">4+ Guests</option>
                  <option value="6">6+ Guests</option>
                </select>
              </div>

              {/* Reset Button */}
              <button
                onClick={() => setFilters({ type: 'all', priceRange: 'all', guests: 'all' })}
                className="w-full bg-primary-dark hover:bg-primary-light text-cream border border-gold/30 py-2 rounded-lg font-semibold transition-all hover:border-gold/60"
              >
                Reset Filters
              </button>
            </div>
          </aside>

          {/* Accommodations Grid */}
          <main className="flex-1">
            <div className="mb-6">
              <p className="text-cream/60">
                Showing <span className="font-semibold text-gold">{filteredAccommodations.length}</span> of{' '}
                <span className="font-semibold text-gold">{accommodations.length}</span> accommodations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredAccommodations.map((accommodation) => (
                <RoomCard key={accommodation.id} room={accommodation} />
              ))}
            </div>

            {filteredAccommodations.length === 0 && (
              <div className="text-center py-12">
                <svg className="w-16 h-16 text-gold/40 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-semibold text-cream mb-2">No accommodations found</h3>
                <p className="text-cream/60 mb-4">Try adjusting your filters</p>
                <button
                  onClick={() => setFilters({ type: 'all', priceRange: 'all', guests: 'all' })}
                  className="gradient-gold text-primary-dark px-6 py-2 rounded-lg font-semibold hover:shadow-xl transition-all"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Accommodations;
