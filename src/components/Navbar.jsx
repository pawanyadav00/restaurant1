import React, { useState, useEffect } from 'react';
import { Menu, X, Utensils } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Popular Dishes', href: '#popular-dishes' },
    { name: 'Menu', href: '#menu-preview' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-cream-light/95 backdrop-blur-md shadow-md border-b border-primary/10 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-3 group">
            <img 
              src="/logo.png" 
              alt="Royal Bites Logo" 
              className="h-10 w-10 sm:h-11 sm:w-11 rounded-full object-cover border border-accent/25 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col">
              <span className={`font-serif text-xl sm:text-2xl font-bold tracking-wide transition-colors ${
                isScrolled ? 'text-primary' : 'text-cream-light sm:text-primary lg:text-cream-light'
              }`}>
                Royal Bites
              </span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.15em] font-sans text-accent -mt-1 font-bold">
                One bite is never enough
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-outfit font-medium text-sm tracking-wide transition-all duration-300 hover:text-accent relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full ${
                  isScrolled ? 'text-charcoal-light' : 'text-cream-light'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors ${
                isScrolled 
                  ? 'text-primary hover:bg-cream-dark' 
                  : 'text-cream-light hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-cream border-b border-primary/10 shadow-lg transition-all duration-300 ease-in-out transform ${
        isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'
      }`}>
        <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-md font-outfit text-base font-medium text-charcoal-light hover:text-primary hover:bg-cream-dark transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
