import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Certificate from './pages/Certificate';

const App: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change unless it's a hash link
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/certificate" element={<Certificate />} />
      </Routes>
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/918608525323?text=Hi! I would like to place an order."
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </>
  );
};

export default App;
