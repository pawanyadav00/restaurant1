import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark & Warm Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 ease-out transform scale-105"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1920&auto=format&fit=crop')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-dark/90 via-charcoal-dark/80 to-charcoal-dark/65" />
      
      {/* Subtle Warm Amber Light effect */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <span className="font-outfit uppercase tracking-[0.3em] text-accent text-sm font-semibold mb-4 block">
          Welcome to
        </span>
        
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream-light font-bold leading-tight tracking-wide mb-6">
          Royal Bites
        </h1>
        
        <div className="w-24 h-[3px] bg-accent mx-auto mb-8 rounded-full" />
        
        <p className="font-outfit text-base sm:text-lg md:text-xl lg:text-2xl text-cream/90 font-light tracking-wider max-w-2xl mx-auto mb-10">
          Delicious Food <span className="text-accent mx-1.5">•</span> Great Ambience <span className="text-accent mx-1.5">•</span> Memorable Experience
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href="#menu-preview"
            className="w-full sm:w-auto bg-primary text-cream px-8 py-3.5 rounded-full font-outfit text-base font-semibold tracking-wide border border-primary hover:bg-transparent hover:text-cream transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-none"
          >
            Explore Menu
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto border border-cream/40 text-cream px-8 py-3.5 rounded-full font-outfit text-base font-semibold tracking-wide hover:bg-cream hover:text-charcoal hover:border-cream transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-70 animate-bounce pointer-events-none">
        <span className="font-outfit text-[10px] uppercase tracking-[0.2em] text-cream-dark mb-1">
          Scroll Down
        </span>
        <div className="w-1.5 h-6 bg-accent rounded-full" />
      </div>
    </section>
  );
};

export default Hero;
