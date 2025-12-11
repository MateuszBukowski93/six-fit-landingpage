import React from 'react';
import Hero from './Hero';
import Features from './Features';
import Testimonials from './Testimonials';
import Download from './Download';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <Download />
    </>
  );
};

export default Home;