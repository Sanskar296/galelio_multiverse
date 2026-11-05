import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal';
import BookTrialModal from './components/BookTrialModal';

import Home from './pages/Home';
import About from './pages/About';
import SpaceClub from './pages/SpaceClub';
import CancellationPolicy from './pages/CancellationPolicy';
import ReturnPolicy from './pages/ReturnPolicy';
import TermsOfService from './pages/TermsOfService';
import ContactUs from './pages/ContactUs';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState('Level-1');

  const handleOpenTrial = (level = 'Level-1') => {
    setSelectedLevel(level);
    setTrialModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-space-950 text-slate-100">
      <ScrollToTop />
      
      {/* Top Navbar */}
      <Navbar
        onOpenSearch={() => setSearchOpen(true)}
        onOpenTrialModal={handleOpenTrial}
      />

      {/* Main Pages Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home onOpenTrialModal={handleOpenTrial} />} />
          
          <Route path="/about" element={<About />} />
          <Route path="/about.html" element={<About />} />

          <Route path="/space-club" element={<SpaceClub />} />
          <Route path="/space-club.html" element={<SpaceClub />} />

          <Route path="/cancelation-and-refund-policy" element={<CancellationPolicy />} />
          <Route path="/cancelation-and-refund-policy.html" element={<CancellationPolicy />} />

          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/return-policy.html" element={<ReturnPolicy />} />

          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/terms-of-service.html" element={<TermsOfService />} />

          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/contact-us.html" element={<ContactUs />} />

          <Route path="*" element={<Home onOpenTrialModal={handleOpenTrial} />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />

      <BookTrialModal
        isOpen={trialModalOpen}
        onClose={() => setTrialModalOpen(false)}
        initialLevel={selectedLevel}
      />
    </div>
  );
}

