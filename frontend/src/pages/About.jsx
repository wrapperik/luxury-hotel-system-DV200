const About = () => {
  return (
    <div className="min-h-screen bg-primary-dark">
      {/* Header */}
      <section className="gradient-primary text-cream py-16 border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-serif font-bold mb-4">About Our Resort</h1>
          <div className="w-20 h-1 gradient-gold mb-4 rounded-full"></div>
          <p className="text-xl text-cream/80">
            A legacy of luxury and exceptional hospitality
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6 text-cream">Our Story</h2>
            <p className="text-cream/60 mb-4">
              Founded in 1985, our luxury resort has been a beacon of excellence in hospitality for nearly 
              four decades. What began as a vision to create the perfect tropical escape has evolved into 
              one of the world's most prestigious destinations.
            </p>
            <p className="text-cream/60 mb-4">
              Nestled on a pristine stretch of coastline, our resort combines natural beauty with world-class 
              amenities to offer guests an unparalleled experience. Every detail has been carefully crafted 
              to ensure your stay is nothing short of extraordinary.
            </p>
            <p className="text-cream/60">
              Our commitment to sustainability, community, and excellence has earned us numerous international 
              awards and the loyalty of guests from around the globe.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary-light to-primary rounded-lg h-96 flex items-center justify-center border border-gold/30">
            <svg className="w-32 h-32 text-gold/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-primary py-16 border-t border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold mb-4 text-center text-cream">Our Values</h2>
          <div className="w-16 h-1 gradient-gold mx-auto mb-12 rounded-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 ring-4 ring-gold/20 group-hover:ring-gold/40 transition-all">
                <svg className="w-10 h-10 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-cream">Excellence</h3>
              <p className="text-cream/60">
                We strive for perfection in every aspect of our service, from the moment you arrive to the moment you depart.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 ring-4 ring-gold/20 group-hover:ring-gold/40 transition-all">
                <svg className="w-10 h-10 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-cream">Sustainability</h3>
              <p className="text-cream/60">
                Committed to protecting our environment and supporting local communities for future generations.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 ring-4 ring-gold/20 group-hover:ring-gold/40 transition-all">
                <svg className="w-10 h-10 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-cream">Hospitality</h3>
              <p className="text-cream/60">
                Warmth and genuine care for our guests are at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-serif font-bold mb-4 text-center text-cream">Awards & Recognition</h2>
        <div className="w-16 h-1 gradient-gold mx-auto mb-12 rounded-full"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-primary-dark rounded-lg shadow-xl p-6 text-center border border-gold/30 hover:border-gold/50 transition-all group">
            <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 ring-4 ring-gold/20 group-hover:ring-gold/40 transition-all">
              <svg className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <h3 className="font-bold mb-2 text-cream">Best Luxury Resort</h3>
            <p className="text-sm text-cream/60">World Travel Awards 2023</p>
          </div>

          <div className="bg-primary-dark rounded-lg shadow-xl p-6 text-center border border-gold/30 hover:border-gold/50 transition-all group">
            <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 ring-4 ring-gold/20 group-hover:ring-gold/40 transition-all">
              <svg className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <h3 className="font-bold mb-2 text-cream">5-Star Excellence</h3>
            <p className="text-sm text-cream/60">Forbes Travel Guide</p>
          </div>

          <div className="bg-primary-dark rounded-lg shadow-xl p-6 text-center border border-gold/30 hover:border-gold/50 transition-all group">
            <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 ring-4 ring-gold/20 group-hover:ring-gold/40 transition-all">
              <svg className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <h3 className="font-bold mb-2 text-cream">Green Globe Certified</h3>
            <p className="text-sm text-cream/60">Sustainability Leader</p>
          </div>

          <div className="bg-primary-dark rounded-lg shadow-xl p-6 text-center border border-gold/30 hover:border-gold/50 transition-all group">
            <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 ring-4 ring-gold/20 group-hover:ring-gold/40 transition-all">
              <svg className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <h3 className="font-bold mb-2 text-cream">Best Spa Resort</h3>
            <p className="text-sm text-cream/60">SpaFinder Wellness 2023</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="gradient-primary text-cream py-16 border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Our Dedicated Team</h2>
          <div className="w-16 h-1 gradient-gold mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-cream/80 max-w-3xl mx-auto mb-8">
            Our success is built on the passion and dedication of our exceptional staff. From front desk 
            professionals to housekeeping, chefs to tour guides, every team member is committed to making 
            your stay unforgettable.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="group">
              <p className="text-4xl font-bold text-gold mb-2 font-serif group-hover:scale-110 transition-transform inline-block">500+</p>
              <p className="text-cream/70">Team Members</p>
            </div>
            <div className="group">
              <p className="text-4xl font-bold text-gold mb-2 font-serif group-hover:scale-110 transition-transform inline-block">40</p>
              <p className="text-cream/70">Countries Represented</p>
            </div>
            <div className="group">
              <p className="text-4xl font-bold text-gold mb-2 font-serif group-hover:scale-110 transition-transform inline-block">95%</p>
              <p className="text-cream/70">Guest Satisfaction</p>
            </div>
            <div className="group">
              <p className="text-4xl font-bold text-gold mb-2 font-serif group-hover:scale-110 transition-transform inline-block">38</p>
              <p className="text-cream/70">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
