const ServiceCard = ({ service }) => {
  return (
    <div className="bg-primary-dark rounded-lg shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gold/30 group">
      {/* Icon */}
      <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mb-4 shadow-lg ring-4 ring-gold/20 group-hover:ring-gold/40 transition-all">
        {service.icon ? (
          <img src={service.icon} alt={service.title} className="w-8 h-8" />
        ) : (
          <svg className="w-8 h-8 text-primary-dark" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
          </svg>
        )}
      </div>

      {/* Content */}
      <h3 className="text-xl font-serif font-semibold text-cream mb-2 group-hover:text-gold transition-colors">{service.title}</h3>
      <p className="text-cream/60 text-sm mb-4 leading-relaxed">{service.description}</p>

      {/* Price */}
      {service.price && (
        <div className="mb-4">
          <span className="text-2xl font-bold text-gold font-serif">${service.price}</span>
          {service.duration && <span className="text-sm text-cream/40 ml-2">/ {service.duration}</span>}
        </div>
      )}

      {/* Features */}
      {service.features && service.features.length > 0 && (
        <ul className="space-y-2 mb-4">
          {service.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-cream/60">
              <svg className="w-5 h-5 text-gold mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* CTA Button */}
      <button className="w-full gradient-gold hover:shadow-xl text-primary-dark py-2.5 rounded-lg font-bold transition-all duration-300 hover:scale-[1.02] ring-2 ring-gold/30 hover:ring-gold/60">
        Book Now
      </button>
    </div>
  );
};

export default ServiceCard;
