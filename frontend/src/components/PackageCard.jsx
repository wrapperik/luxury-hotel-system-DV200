const PackageCard = ({ package: pkg }) => {
  return (
    <div className="bg-primary-dark rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-gold/30 group">
      {/* Image */}
      <div className="h-56 bg-gradient-to-br from-primary-light via-primary to-primary-dark relative overflow-hidden">
        {pkg.image ? (
          <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full flex items-center justify-center relative">
            <svg className="w-20 h-20 text-gold/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/30 to-transparent"></div>
          </div>
        )}
        <div className="absolute top-4 right-4">
          {pkg.popular && (
            <span className="gradient-gold text-primary-dark px-4 py-1.5 rounded-full text-sm font-bold shadow-xl ring-4 ring-gold/40">
              Popular
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-2xl font-serif font-bold text-cream group-hover:text-gold transition-colors">{pkg.title}</h3>
          {pkg.duration && (
            <span className="text-sm text-gold bg-gold/10 px-3 py-1 rounded-full whitespace-nowrap ml-2 font-medium border border-gold/20">
              {pkg.duration}
            </span>
          )}
        </div>

        <p className="text-cream/60 mb-4 leading-relaxed">{pkg.description}</p>

        {/* Included Services */}
        {pkg.includes && pkg.includes.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-bold text-gold mb-2 uppercase tracking-wide flex items-center">
              <span className="w-8 h-px gradient-gold mr-2"></span>
              Includes
            </h4>
            <ul className="grid grid-cols-1 gap-2">
              {pkg.includes.map((item, index) => (
                <li key={index} className="flex items-start text-sm text-cream/60">
                  <svg className="w-5 h-5 text-gold mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="leading-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gold/20">
          <div>
            <span className="text-xs text-cream/40 uppercase tracking-wide font-medium">From</span>
            <p className="text-3xl font-bold text-gold font-serif">${pkg.price}</p>
            <span className="text-xs text-cream/40">per person</span>
          </div>
          <button className="gradient-gold hover:shadow-xl text-primary-dark px-6 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 ring-2 ring-gold/30 hover:ring-gold/60">
            Book Now
          </button>
        </div>

        {/* Savings Badge */}
        {pkg.savings && (
          <div className="mt-4 text-center">
            <span className="inline-block bg-green-100 text-green-800 px-4 py-1.5 rounded-full text-sm font-bold border border-green-200">
              Save ${pkg.savings}!
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PackageCard;
