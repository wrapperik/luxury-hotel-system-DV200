import PackageCard from '../components/PackageCard';

const Packages = () => {
  // Sample packages data
  const packages = [
    {
      id: 1,
      title: 'Honeymoon Package',
      description: 'The perfect romantic getaway for newlyweds',
      duration: '3 Days / 2 Nights',
      price: 1299,
      popular: true,
      savings: 300,
      includes: [
        'Deluxe Suite with Ocean View',
        'Couples Spa Treatment (90 mins)',
        'Candlelight Dinner on the Beach',
        'Champagne & Chocolates Welcome',
        'Daily Breakfast in Bed',
        'Sunset Cruise for Two',
      ],
    },
    {
      id: 2,
      title: 'Wellness Retreat',
      description: 'Rejuvenate your mind, body, and soul',
      duration: '5 Days / 4 Nights',
      price: 1899,
      savings: 450,
      includes: [
        'Superior Room with Garden View',
        'Daily Yoga & Meditation Sessions',
        'Full Spa Package (4 treatments)',
        'Healthy Gourmet Meals',
        'Personal Wellness Consultation',
        'Guided Nature Walks',
      ],
    },
    {
      id: 3,
      title: 'Family Adventure',
      description: 'Create unforgettable memories with your loved ones',
      duration: '7 Days / 6 Nights',
      price: 3499,
      popular: true,
      savings: 700,
      includes: [
        'Family Villa (sleeps 6)',
        'All-Day Kids Club Activities',
        'Water Sports Package',
        'Guided Island Tours',
        'Daily Buffet Breakfast',
        'BBQ Dinner Night',
        'Complimentary Babysitting (4 hrs)',
      ],
    },
    {
      id: 4,
      title: 'Luxury Escape',
      description: 'Experience the ultimate in luxury and relaxation',
      duration: '4 Days / 3 Nights',
      price: 2499,
      savings: 500,
      includes: [
        'Presidential Suite',
        'Private Butler Service',
        'Helicopter Island Tour',
        'Fine Dining Experience (3 nights)',
        'Premium Spa Package',
        'Private Beach Cabana',
        'Luxury Airport Transfer',
      ],
    },
    {
      id: 5,
      title: 'Adventure Seeker',
      description: 'For those who crave excitement and exploration',
      duration: '5 Days / 4 Nights',
      price: 1699,
      includes: [
        'Deluxe Room',
        'Scuba Diving Certification Course',
        'Jungle Trekking Expedition',
        'Rock Climbing Session',
        'Kayaking Adventure',
        'Mountain Biking Tour',
        'Daily Adventure Meals',
      ],
    },
    {
      id: 6,
      title: 'Culinary Journey',
      description: 'A gastronomic adventure for food lovers',
      duration: '3 Days / 2 Nights',
      price: 1199,
      popular: true,
      savings: 250,
      includes: [
        'Superior Room',
        'Cooking Classes with Executive Chef',
        '6-Course Tasting Menu',
        'Wine Pairing Dinner',
        'Market Tour & Breakfast',
        'Recipe Book & Apron',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-primary-dark">
      {/* Header */}
      <section className="gradient-primary text-cream py-16 border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-serif font-bold mb-4">Special Packages</h1>
          <div className="w-20 h-1 gradient-gold mb-4 rounded-full"></div>
          <p className="text-xl text-cream/80">
            Curated experiences combining the best of our accommodations and services
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Info Banner */}
        <div className="bg-gold/10 border-l-4 border-gold rounded-lg p-6 mb-8 backdrop-blur-sm">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
            </svg>
            <div>
              <h3 className="text-lg font-semibold text-cream mb-1">Save More with Packages</h3>
              <p className="text-cream/70">
                All our packages offer significant savings compared to booking services individually. 
                Customize any package to fit your needs!
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} package={pkg} />
          ))}
        </div>
      </section>

      {/* Custom Package CTA */}
      <section className="bg-primary py-16 border-t border-b border-gold/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-cream mb-4">
            Can't Find What You're Looking For?
          </h2>
          <div className="w-16 h-1 gradient-gold mx-auto mb-6 rounded-full"></div>
          <p className="text-cream/70 mb-8 text-lg">
            Our concierge team can create a custom package tailored to your specific needs and preferences
          </p>
          <button className="gradient-gold hover:shadow-2xl text-primary-dark px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 ring-2 ring-gold/30 hover:ring-gold/60">
            Create Custom Package
          </button>
        </div>
      </section>

      {/* Package Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-serif font-bold text-center mb-4 text-cream">What's Included</h2>
        <div className="w-16 h-1 gradient-gold mx-auto mb-12 rounded-full"></div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 ring-4 ring-gold/20">
              <svg className="w-8 h-8 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2 text-cream">Accommodation</h3>
            <p className="text-sm text-cream/60">Premium rooms, suites, or villas</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 ring-4 ring-gold/20">
              <svg className="w-8 h-8 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2 text-cream">Dining</h3>
            <p className="text-sm text-cream/60">Gourmet meals and experiences</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 ring-4 ring-gold/20">
              <svg className="w-8 h-8 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2 text-cream">Spa & Wellness</h3>
            <p className="text-sm text-cream/60">Rejuvenating treatments</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 ring-4 ring-gold/20">
              <svg className="w-8 h-8 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2 text-cream">Activities</h3>
            <p className="text-sm text-cream/60">Guided tours and experiences</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;
