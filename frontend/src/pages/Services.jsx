import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Spa & Wellness',
      description: 'Indulge in our world-class spa treatments and wellness programs',
      price: 150,
      duration: 'session',
      features: [
        'Swedish & Deep Tissue Massage',
        'Aromatherapy Treatments',
        'Facial & Body Treatments',
        'Couples Spa Suite Available',
      ],
    },
    {
      id: 2,
      title: 'Fine Dining',
      description: 'Experience exquisite cuisine from our award-winning chefs',
      price: 85,
      duration: 'person',
      features: [
        'Multi-Course Tasting Menus',
        'Wine Pairing Available',
        'Private Dining Options',
        'Dietary Accommodations',
      ],
    },
    {
      id: 3,
      title: 'Guided Island Tours',
      description: 'Explore the beauty of the island with our expert guides',
      price: 120,
      duration: 'tour',
      features: [
        'Historical Sites Tour',
        'Nature & Wildlife Exploration',
        'Photography Tours',
        'Custom Itineraries',
      ],
    },
    {
      id: 4,
      title: 'Water Sports',
      description: 'Exciting water activities for all skill levels',
      price: 95,
      duration: 'activity',
      features: [
        'Scuba Diving & Snorkeling',
        'Jet Skiing & Parasailing',
        'Kayaking & Paddleboarding',
        'Professional Instruction',
      ],
    },
    {
      id: 5,
      title: 'Concierge Service',
      description: 'Personalized assistance for all your needs',
      features: [
        '24/7 Availability',
        'Reservation Management',
        'Special Event Planning',
        'Local Recommendations',
      ],
    },
    {
      id: 6,
      title: 'Fitness & Yoga',
      description: 'State-of-the-art fitness facilities and wellness classes',
      price: 30,
      duration: 'class',
      features: [
        'Personal Training Sessions',
        'Group Fitness Classes',
        'Beachside Yoga',
        'Meditation Programs',
      ],
    },
    {
      id: 7,
      title: 'Kids Club',
      description: 'Supervised activities and entertainment for children',
      price: 50,
      duration: 'day',
      features: [
        'Age-Appropriate Activities',
        'Educational Programs',
        'Arts & Crafts',
        'Outdoor Adventures',
      ],
    },
    {
      id: 8,
      title: 'Business Services',
      description: 'Complete business facilities and meeting spaces',
      price: 200,
      duration: 'hour',
      features: [
        'Conference Rooms',
        'High-Speed Internet',
        'Audio/Visual Equipment',
        'Catering Services',
      ],
    },
    {
      id: 9,
      title: 'Airport Transfer',
      description: 'Luxury transportation to and from the airport',
      price: 75,
      duration: 'transfer',
      features: [
        'Private Luxury Vehicles',
        'Professional Drivers',
        'Flight Tracking',
        'Complimentary Refreshments',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-primary-dark">
      {/* Header */}
      <section className="gradient-primary text-cream py-16 border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-serif font-bold mb-4">Resort Services</h1>
          <div className="w-20 h-1 gradient-gold mb-4 rounded-full"></div>
          <p className="text-xl text-cream/80">
            Elevate your stay with our premium services and amenities
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-primary py-16 border-t border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6 text-cream">Booking Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <div>
                    <h3 className="font-semibold mb-1 text-cream">Advance Booking</h3>
                    <p className="text-cream/60 text-sm">
                      We recommend booking services in advance to ensure availability, especially during peak seasons.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <div>
                    <h3 className="font-semibold mb-1 text-cream">Cancellation Policy</h3>
                    <p className="text-cream/60 text-sm">
                      Free cancellation up to 24 hours before your scheduled service. Late cancellations may incur fees.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <div>
                    <h3 className="font-semibold mb-1 text-cream">Guest Privileges</h3>
                    <p className="text-cream/60 text-sm">
                      Resort guests receive exclusive discounts on all services. Ask our concierge about package deals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold mb-6 text-cream">Contact Us</h2>
              <p className="text-cream/60 mb-6">
                Have questions about our services? Our team is here to help you plan the perfect experience.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <span className="text-cream/70">+1 (123) 456-7890</span>
                </div>

                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <span className="text-cream/70">services@luxuryresort.com</span>
                </div>
              </div>

              <button className="gradient-gold hover:shadow-2xl text-primary-dark px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 ring-2 ring-gold/30 hover:ring-gold/60">
                Request Information
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
