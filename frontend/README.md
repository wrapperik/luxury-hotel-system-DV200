# Luxury Hotel & Resort System - Frontend

A modern, responsive frontend application for a luxury hotel and resort booking system built with React, Tailwind CSS, and Vite.

## 🎨 Design Features

- **Modern UI/UX**: Clean, elegant design inspired by luxury hospitality brands
- **Responsive Layout**: Fully responsive design that works on all devices
- **Color Scheme**: 
  - Primary: Dark Teal (#2D5F5D)
  - Gold Accent (#D4AF37)
  - Cream Background (#F5F5DC)
- **Typography**: 
  - Headings: Playfair Display (serif)
  - Body: Inter (sans-serif)

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx       # Main navigation with responsive menu
│   │   ├── Footer.jsx       # Footer with links and newsletter
│   │   ├── RoomCard.jsx     # Accommodation display card
│   │   ├── ServiceCard.jsx  # Service offering card
│   │   ├── PackageCard.jsx  # Package deal card
│   │   └── BookingWidget.jsx # Search/booking form widget
│   ├── pages/               # Page components
│   │   ├── Home.jsx         # Landing page with hero and featured rooms
│   │   ├── Accommodations.jsx # Rooms, suites, and villas listing
│   │   ├── Packages.jsx     # Special packages (honeymoon, wellness, etc.)
│   │   ├── Dining.jsx       # Restaurant and dining experiences
│   │   ├── Services.jsx     # Resort services (spa, tours, etc.)
│   │   └── About.jsx        # About us, story, and team
│   ├── App.jsx              # Main app with routing configuration
│   ├── main.jsx             # App entry point
│   └── index.css            # Global styles with Tailwind imports
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
└── package.json             # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎯 Features Implemented

### Pages

1. **Home Page**
   - Hero section with compelling imagery
   - Quick booking widget
   - Featured accommodations grid (8 rooms)
   - Features showcase
   - Call-to-action sections

2. **Accommodations Page**
   - Filter by type (rooms, suites, villas)
   - Filter by price range
   - Filter by guest capacity
   - Responsive grid layout
   - Detailed room cards with pricing

3. **Packages Page**
   - 6 curated packages:
     - Honeymoon Package
     - Wellness Retreat
     - Family Adventure
     - Luxury Escape
     - Adventure Seeker
     - Culinary Journey
   - Package includes list
   - Savings calculator
   - Custom package option

4. **Dining Page**
   - 4 restaurants with different cuisines
   - Operating hours and price ranges
   - Special dining experiences
   - Culinary philosophy section

5. **Services Page**
   - 9 service categories:
     - Spa & Wellness
     - Fine Dining
     - Guided Tours
     - Water Sports
     - Concierge
     - Fitness & Yoga
     - Kids Club
     - Business Services
     - Airport Transfer
   - Booking information
   - Contact section

6. **About Page**
   - Resort story and history
   - Core values
   - Awards and recognition
   - Team statistics

### Components

- **Navbar**: Responsive navigation with mobile menu
- **Footer**: Multi-column footer with newsletter signup
- **RoomCard**: Reusable card for displaying accommodations
- **ServiceCard**: Card component for services
- **PackageCard**: Special package display with includes list
- **BookingWidget**: Search form with date pickers and guest selection

## 🎨 Tailwind Configuration

Custom theme extensions:
- Primary color palette (teal)
- Gold accent colors
- Cream background colors
- Custom font families

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔄 Next Steps (Backend Integration)

To connect with the backend:

1. Create API service layer:
```javascript
// src/services/api.js
const API_BASE_URL = 'http://localhost:3000/api';

export const fetchAccommodations = async () => {
  const response = await fetch(`${API_BASE_URL}/accommodations`);
  return response.json();
};
```

2. Update components to use real data
3. Implement booking flow with backend
4. Add authentication
5. Implement payment processing

## 🛠️ Technologies Used

- **React 18**: UI library
- **React Router DOM**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Build tool and dev server
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

## 📝 Project Brief Alignment

This frontend is designed to support the following backend features:

### Database Schema Support
- **Guests**: User profiles and preferences
- **Reservations**: Bookings with dates and guests
- **Services**: Spa, tours, dining, etc.
- **Staff**: Front desk, housekeeping, chefs, guides
- **Payments**: Split payments and third-party integrations
- **Packages**: Multi-service combinations

### Key Functionalities
- Browse accommodations (rooms, villas, suites)
- View and book special packages
- Request additional services
- Extend stays
- Multiple booking channels (direct and third-party)
- Service bundling

## 🎯 Design Improvements Over Original

1. **Better UX Flow**: Simplified navigation and booking process
2. **Modern Components**: Card-based layout for better scanability
3. **Filtering**: Advanced filtering options for accommodations
4. **Package Visualization**: Clear display of included services
5. **Responsive Tables**: Better mobile experience
6. **Accessibility**: Proper semantic HTML and ARIA labels
7. **Performance**: Optimized with Vite and lazy loading ready

## 📄 License

This project is part of the DV200 course.

## 👥 Contributing

For course purposes, this is an individual project. For suggestions or improvements, please contact the course instructor.

---

**Note**: This is a frontend-only implementation. Backend API integration is required for full functionality. Sample data is currently hardcoded in components.
