import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Download from './components/Download';
import Footer from './components/Footer';
import { analytics } from './services/firebaseService';

const App: React.FC = () => {
  
  // Analytics Initialization Mock
  useEffect(() => {
    analytics.logEvent('app_initialized');
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Testimonials />
        <Download />
      </main>
      <Footer />
    </div>
  );
};

export default App;