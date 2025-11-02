import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Accommodations from './pages/Accommodations';
import Packages from './pages/Packages';
import Dining from './pages/Dining';
import Services from './pages/Services';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accommodations" element={<Accommodations />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/dining" element={<Dining />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

