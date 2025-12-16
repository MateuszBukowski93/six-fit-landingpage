import React from 'react';
import { analytics } from '../services/firebaseService';

const Download: React.FC = () => {
  const trackDownload = (platform: string) => {
    analytics.logEvent('download_click', { platform });
  };

  return (
    <section id="download" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-slate-900 to-black z-0"></div>
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] z-0"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Start your journey today</h2>
        <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
          Available on iOS and Android. Join over 10,000 users transforming their lives.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => trackDownload('ios')}
            className="flex items-center justify-center gap-3 bg-white text-slate-900 px-6 py-3 rounded-xl hover:bg-gray-300 transition-colors duration-200 w-full sm:w-auto min-w-45 cursor-pointer"
          >
            <span className="material-icons text-3xl">apple</span>
            <div className="text-left">
              <div className="text-[10px] uppercase font-bold text-slate-500">Download on the</div>
              <div className="text-lg font-bold leading-none">App Store</div>
            </div>
          </button>
          
          <button 
            onClick={() => trackDownload('android')}
            className="flex items-center justify-center gap-3 bg-transparent border border-white/30 text-white px-6 py-3 rounded-xl hover:bg-white/10 transition-colors duration-200 w-full sm:w-auto min-w-45 cursor-pointer"
          >
            <span className="material-icons text-3xl text-gradient bg-green-500">android</span>
            <div className="text-left">
              <div className="text-[10px] uppercase font-bold text-slate-400">Get it on</div>
              <div className="text-lg font-bold leading-none">Google Play</div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Download;