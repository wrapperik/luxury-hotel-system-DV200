import { Link } from 'react-router-dom';
import BookingWidget from '../components/BookingWidget';
import RoomCard from '../components/RoomCard';

const Home = () => {
  // Sample data - will be replaced with API data later
  const featuredRooms = [
    {
      id: 1,
      title: 'Luxury Rooms',
      description: 'Experience comfort and elegance in our premium rooms',
      price: 250,
      guests: 2,
      size: 45,
      featured: true,
    },
    {
      id: 2,
      title: 'Luxury Rooms',
      description: 'Experience comfort and elegance in our premium rooms',
      price: 250,
      guests: 2,
      size: 45,
    },
    {
      id: 3,
      title: 'Luxury Rooms',
      description: 'Experience comfort and elegance in our premium rooms',
      price: 250,
      guests: 2,
      size: 45,
    },
    {
      id: 4,
      title: 'Luxury Rooms',
      description: 'Experience comfort and elegance in our premium rooms',
      price: 250,
      guests: 2,
      size: 45,
    },
    {
      id: 5,
      title: 'Luxury Rooms',
      description: 'Experience comfort and elegance in our premium rooms',
      price: 250,
      guests: 2,
      size: 45,
    },
    {
      id: 6,
      title: 'Luxury Rooms',
      description: 'Experience comfort and elegance in our premium rooms',
      price: 250,
      guests: 2,
      size: 45,
    },
    {
      id: 7,
      title: 'Luxury Rooms',
      description: 'Experience comfort and elegance in our premium rooms',
      price: 250,
      guests: 2,
      size: 45,
    },
    {
      id: 8,
      title: 'Luxury Rooms',
      description: 'Experience comfort and elegance in our premium rooms',
      price: 250,
      guests: 2,
      size: 45,
    },
  ];

  return (
    <div className="min-h-screen bg-primary-dark">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-cover bg-center" 
             style={{ 
               backgroundImage: 'url(https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3)',
             }}>
          <div className="absolute inset-0 gradient-overlay"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-cream mb-6 tracking-tight leading-tight">
            Experience Timeless Luxury
          </h1>
          <div className="w-20 h-1 gradient-gold mx-auto mb-6 rounded-full"></div>
          <p className="text-xl md:text-2xl text-cream/90 mb-10 font-light tracking-wide">
            Discover paradise at our exclusive resort where elegance meets nature
          </p>
          <Link
            to="/accommodations"
            className="inline-block gradient-gold hover:shadow-2xl text-primary-dark px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 ring-4 ring-gold/40 hover:ring-gold/70"
          >
            Book Your Stay
          </Link>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-dark to-transparent"></div>
      </section>

      {/* Booking Widget Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 mb-16">
        <BookingWidget />
      </section>

      {/* Featured Rooms Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-4 tracking-tight">
            Luxury Rooms
          </h2>
          <div className="w-16 h-1 gradient-gold mx-auto mb-6 rounded-full"></div>
          <p className="text-cream/60 max-w-2xl mx-auto text-lg">
            Choose from our selection of elegantly designed rooms, each offering unparalleled comfort and stunning views
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {featuredRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="gradient-primary py-20 relative overflow-hidden">
        {/* Decorative Gold Lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-4 tracking-tight">
              Why Choose Our Resort
            </h2>
            <div className="w-16 h-1 gradient-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="text-center p-8 bg-primary-light/30 rounded-lg backdrop-blur-sm border border-gold/20 hover:border-gold/40 transition-all duration-300 hover:shadow-2xl">
              <div className="w-20 h-20 gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl ring-4 ring-gold/20">
                <svg className="w-10 h-10 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-3 text-gold">Luxury Amenities</h3>
              <p className="text-cream/80 leading-relaxed">World-class facilities and services at your fingertips</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-8 bg-primary-light/30 rounded-lg backdrop-blur-sm border border-gold/20 hover:border-gold/40 transition-all duration-300 hover:shadow-2xl">
              <div className="w-20 h-20 gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl ring-4 ring-gold/20">
                <svg className="w-10 h-10 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-3 text-gold">Prime Location</h3>
              <p className="text-cream/80 leading-relaxed">Nestled in paradise with breathtaking views</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-8 bg-primary-light/30 rounded-lg backdrop-blur-sm border border-gold/20 hover:border-gold/40 transition-all duration-300 hover:shadow-2xl">
              <div className="w-20 h-20 gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl ring-4 ring-gold/20">
                <svg className="w-10 h-10 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-3 text-gold">Fine Dining</h3>
              <p className="text-cream/80 leading-relaxed">Exquisite cuisine from award-winning chefs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 relative border-t border-b border-gold/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-6 tracking-tight">
            Ready for an Unforgettable Experience?
          </h2>
          <div className="w-16 h-1 gradient-gold mx-auto mb-8 rounded-full"></div>
          <p className="text-xl mb-10 text-cream/70 leading-relaxed">
            Book your stay today and indulge in luxury like never before
          </p>
          <Link
            to="/packages"
            className="inline-block gradient-gold hover:shadow-2xl text-primary-dark px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 ring-4 ring-gold/30 hover:ring-gold/60"
          >
            View Our Packages
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
