import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-dark border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={() => window.scrollTo(0,0)}>
            <span className="material-icons text-primary text-2xl">bolt</span>
            <span className="font-bold text-xl text-white">Six Fit</span>
          </Link>
          
          {/* Links */}
          <div className="flex gap-8 text-sm text-slate-400">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/support" className="hover:text-primary transition-colors">Support</Link>
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