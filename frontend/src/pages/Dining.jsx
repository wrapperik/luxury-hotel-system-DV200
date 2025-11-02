const Dining = () => {
  const restaurants = [
    {
      id: 1,
      name: 'The Ocean View',
      cuisine: 'International Fine Dining',
      description: 'Experience culinary excellence with breathtaking ocean views',
      hours: 'Dinner: 6:00 PM - 11:00 PM',
      priceRange: '$$$',
      image: null,
      features: ['Dress Code: Smart Casual', 'Reservations Required', 'Wine Pairing Available'],
    },
    {
      id: 2,
      name: 'Sunset Terrace',
      cuisine: 'Mediterranean',
      description: 'Fresh seafood and Mediterranean flavors in an open-air setting',
      hours: 'Lunch & Dinner: 12:00 PM - 10:00 PM',
      priceRange: '$$',
      image: null,
      features: ['Outdoor Seating', 'Live Music Fridays', 'Family Friendly'],
    },
    {
      id: 3,
      name: 'The Grand Buffet',
      cuisine: 'International Buffet',
      description: 'An extensive selection of global cuisines',
      hours: 'Breakfast, Lunch & Dinner',
      priceRange: '$$',
      image: null,
      features: ['All-Day Dining', 'Kids Menu', 'Dietary Options'],
    },
    {
      id: 4,
      name: 'Sakura',
      cuisine: 'Japanese',
      description: 'Authentic Japanese cuisine and sushi bar',
      hours: 'Dinner: 5:30 PM - 10:30 PM',
      priceRange: '$$$',
      image: null,
      features: ['Sushi Bar', 'Private Tatami Rooms', 'Sake Selection'],
    },
  ];

  const specialExperiences = [
    {
      id: 1,
      title: 'Beach Candlelight Dinner',
      description: 'Romantic private dining experience on the beach',
      price: 350,
    },
    {
      id: 2,
      title: 'Chef\'s Table Experience',
      description: 'Exclusive 7-course tasting menu with wine pairing',
      price: 250,
    },
    {
      id: 3,
      title: 'Sunset Cruise Dinner',
      description: 'Gourmet dining aboard our luxury yacht',
      price: 400,
    },
  ];

  return (
    <div className="min-h-screen bg-primary-dark">
      {/* Header */}
      <section className="gradient-primary text-cream py-16 border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-serif font-bold mb-4">Dining Experiences</h1>
          <div className="w-20 h-1 gradient-gold mb-4 rounded-full"></div>
          <p className="text-xl text-cream/80">
            Savor exceptional cuisine from around the world
          </p>
        </div>
      </section>

      {/* Restaurants */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-serif font-bold mb-8 text-cream">Our Restaurants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className="bg-primary-dark rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all border border-gold/30 hover:border-gold/50 group">
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary-light to-primary-dark flex items-center justify-center relative overflow-hidden">
                <svg className="w-20 h-20 text-gold/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-2xl font-serif font-bold text-cream group-hover:text-gold transition-colors">{restaurant.name}</h3>
                  <span className="text-gold font-semibold text-lg">{restaurant.priceRange}</span>
                </div>
                <p className="text-sm text-gold font-medium mb-2">{restaurant.cuisine}</p>
                <p className="text-cream/60 mb-4">{restaurant.description}</p>

                {/* Hours */}
                <div className="flex items-center text-sm text-cream/50 mb-4">
                  <svg className="w-4 h-4 mr-2 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-cream/70">{restaurant.hours}</span>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {restaurant.features.map((feature, index) => (
                    <span key={index} className="text-xs bg-gold/10 text-gold px-3 py-1 rounded-full border border-gold/20">
                      {feature}
                    </span>
                  ))}
                </div>

                <button className="w-full gradient-gold hover:shadow-xl text-primary-dark py-2 rounded-lg font-bold transition-all duration-300 hover:scale-[1.02] ring-2 ring-gold/30 hover:ring-gold/60">
                  Make Reservation
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Special Dining Experiences */}
      <section className="bg-primary py-16 border-t border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold mb-4 text-center text-cream">Special Dining Experiences</h2>
          <div className="w-16 h-1 gradient-gold mx-auto mb-12 rounded-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialExperiences.map((experience) => (
              <div key={experience.id} className="bg-primary-dark rounded-lg shadow-xl p-6 hover:shadow-2xl transition-all border border-gold/30 hover:border-gold/50 group">
                <h3 className="text-xl font-serif font-bold mb-2 text-cream group-hover:text-gold transition-colors">{experience.title}</h3>
                <p className="text-cream/60 mb-4">{experience.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gold/20">
                  <span className="text-2xl font-bold text-gold font-serif">${experience.price}</span>
                  <button className="gradient-gold hover:shadow-xl text-primary-dark px-4 py-2 rounded-full font-bold transition-all hover:scale-105 ring-2 ring-gold/30 hover:ring-gold/60">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culinary Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6 text-cream">Our Culinary Philosophy</h2>
            <p className="text-cream/60 mb-4">
              At our resort, dining is more than just a meal—it's an experience. Our award-winning chefs 
              use only the finest locally-sourced ingredients to create unforgettable culinary masterpieces.
            </p>
            <p className="text-cream/60 mb-6">
              From farm-to-table freshness to innovative fusion cuisine, every dish tells a story of 
              passion, creativity, and excellence.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-cream/70">Fresh, locally-sourced ingredients</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-cream/70">Accommodations for all dietary needs</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-cream/70">Award-winning culinary team</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-light to-primary rounded-lg h-96 flex items-center justify-center border border-gold/30">
            <svg className="w-32 h-32 text-gold/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dining;
