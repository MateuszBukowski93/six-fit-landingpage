import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-dark border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="material-icons text-primary text-2xl">bolt</span>
            <span className="font-bold text-xl text-white">Six Fit</span>
          </div>
          
          {/* Links */}
          <div className="flex gap-8 text-sm text-slate-400">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Support</a>
          </div>
          
          {/* Socials */}
          <div className="flex gap-4">
            {['X', 'f', 'in'].map((social, i) => (
              <a 
                key={i} 
                href="#" 
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all"
              >
                <span className="text-lg font-bold">{social}</span>
              </a>
            ))}
          </div>
        </div>
        
        <div className="text-center text-xs text-slate-600 border-t border-slate-800 pt-8">
          © 2023 Six Fit. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;