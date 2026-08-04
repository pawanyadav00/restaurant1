import React from 'react';
import { Utensils, Globe } from 'lucide-react';

const InstagramIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-dark text-cream border-t border-primary/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info Column */}
          <div className="space-y-4">
            <a href="#home" className="flex items-center space-x-3 group">
              <img 
                src="/logo.png" 
                alt="Royal Bites Logo" 
                className="h-10 w-10 sm:h-11 sm:w-11 rounded-full object-cover border border-accent/25 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-wide text-cream">
                  Royal Bites
                </span>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.15em] font-sans text-accent -mt-1 font-bold">
                  One bite is never enough
                </span>
              </div>
            </a>
            <p className="font-sans text-xs text-cream-dark leading-relaxed max-w-sm">
              Savor the taste of royalty at Royal Bites. We serve top-quality Indian, Chinese, and Korean dishes in a warm, family-friendly environment.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://instagram.com/royal_bites_restaurant" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-full bg-charcoal text-cream-dark hover:text-accent hover:bg-primary/20 transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4.5 w-4.5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-charcoal text-cream-dark hover:text-accent hover:bg-primary/20 transition-all duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-4.5 w-4.5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-charcoal text-cream-dark hover:text-accent hover:bg-primary/20 transition-all duration-300"
                aria-label="Website"
              >
                <Globe className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-outfit font-semibold text-sm text-accent uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Us', href: '#about' },
                { name: 'Popular Dishes', href: '#popular-dishes' },
                { name: 'Menu Highlights', href: '#menu-preview' },
                { name: 'Restaurant Gallery', href: '#gallery' },
                { name: 'Contact & Location', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="font-sans text-xs text-cream-dark hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary Column */}
          <div>
            <h4 className="font-outfit font-semibold text-sm text-accent uppercase tracking-wider mb-4">
              Contact Info
            </h4>
            <p className="font-sans text-xs text-cream-dark leading-relaxed mb-3">
              9Q6M+5JC, Shivalli, Vidyaratna Nagar, Manipal, Karnataka 576104
            </p>
            <p className="font-sans text-xs text-cream-dark mb-1">
              <span className="font-semibold text-cream">Phone:</span> +91 82345 67890
            </p>
            <p className="font-sans text-xs text-cream-dark">
              <span className="font-semibold text-cream">Email:</span> contact@royalbites.com
            </p>
          </div>

          {/* Instagram Callout Column */}
          <div>
            <h4 className="font-outfit font-semibold text-sm text-accent uppercase tracking-wider mb-4">
              Instagram
            </h4>
            <p className="font-sans text-xs text-cream-dark leading-relaxed mb-4">
              Follow our page <a href="https://instagram.com/royal_bites_restaurant" target="_blank" rel="noreferrer" className="text-accent underline font-semibold">@royal_bites_restaurant</a> for menus, food snapshots, and weekend offers!
            </p>
            <div className="p-3 bg-charcoal rounded-xl border border-primary/10 flex items-center gap-3">
              <InstagramIcon className="h-6 w-6 text-accent flex-shrink-0" />
              <div>
                <span className="font-outfit text-xs font-semibold text-cream block">Royal Bites on Instagram</span>
                <span className="font-sans text-[10px] text-cream-dark">Joint @royal_bites_restaurant</span>
              </div>
            </div>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="pt-8 border-t border-cream-dark/10 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
          <p className="font-sans text-[11px] text-cream-dark">
            &copy; {currentYear} Royal Bites Restaurant, Manipal. All Rights Reserved.
          </p>
          <p className="font-sans text-[11px] text-cream-dark">
            Designed for Royal Bites Restaurant • Shivalli, Manipal
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
