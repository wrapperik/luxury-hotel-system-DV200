import { Link } from 'react-router-dom';

const RoomCard = ({ room }) => {
  return (
    <div className="bg-primary-dark rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-gold/30 group">
      {/* Image Placeholder */}
      <div className="h-48 bg-gradient-to-br from-primary-light to-primary-dark relative overflow-hidden">
        {room.image ? (
          <img src={room.image} alt={room.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-light via-primary to-primary-dark">
            <svg className="w-16 h-16 text-gold/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
        )}
        {room.featured && (
          <span className="absolute top-3 right-3 gradient-gold text-primary-dark px-3 py-1 rounded-full text-xs font-bold shadow-lg ring-2 ring-gold/50">
            Featured
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-5 bg-primary-dark">
        <h3 className="text-xl font-serif font-semibold text-cream mb-2 group-hover:text-gold transition-colors">{room.title}</h3>
        <p className="text-cream/60 text-sm mb-4 line-clamp-2">{room.description}</p>

        {/* Details */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-cream/50">
            {room.guests && (
              <span className="flex items-center space-x-1">
                <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                </svg>
                <span className="text-cream/70">{room.guests} Guests</span>
              </span>
            )}
            {room.size && (
              <span className="flex items-center space-x-1">
                <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
                </svg>
                <span className="text-cream/70">{room.size} m²</span>
              </span>
            )}
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gold/20">
          <div>
            <span className="text-xs text-cream/40 uppercase tracking-wide font-medium">Starting from</span>
            <p className="text-2xl font-bold text-gold font-serif">${room.price}</p>
            <span className="text-xs text-cream/40">/night</span>
          </div>
          <Link
            to={`/accommodations/${room.id}`}
            className="gradient-gold hover:shadow-xl text-primary-dark px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 ring-2 ring-gold/30 hover:ring-gold/60"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
