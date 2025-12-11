import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import { Link, useLocation } from 'react-router-dom';

const NAV_ITEMS: NavItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Download', href: '#download' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    
    // If we are already on home and it's an anchor link, let default behavior happen
    // but if we are on another page, Link component handles the navigation to /#id
    if (isHome && href.startsWith('#')) {
       // Optional: smooth scroll logic if needed explicitly
       const element = document.getElementById(href.substring(1));
       if(element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getLinkProps = (href: string) => {
    // If on home, keep as simple anchor for scrolling
    // If not on home, prepend / to go to home anchor
    if (isHome) {
        return { href: href };
    }
    return { to: `/${href}` };
  };

  return (
    <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${
      scrolled || mobileMenuOpen 
        ? 'bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800' 
        : 'bg-transparent border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <span className="material-icons text-primary text-3xl">bolt</span>
            <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">Six Fit</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_ITEMS.map((item) => {
                // Conditional rendering based on current location
                return isHome ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={`/${item.href}`}
                    className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
            >
              <span className="material-icons">{mobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background-light dark:bg-background-dark border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => {
              return isHome ? (
                 <a
                  key={item.label}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={`/${item.href}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;