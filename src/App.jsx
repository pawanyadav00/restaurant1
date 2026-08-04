import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PopularDishes from './components/PopularDishes';
import MenuPreview from './components/MenuPreview';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ArrowUp } from 'lucide-react';
import './App.css';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Set document title
    document.title = "Royal Bites Restaurant | Shivalli, Manipal, Karnataka";
    
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-cream text-charcoal flex flex-col font-sans">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Banner */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Popular Dishes */}
        <PopularDishes />

        {/* Menu Preview */}
        <MenuPreview />

        {/* Reviews/Testimonials */}
        <Reviews />

        {/* Image Gallery */}
        <Gallery />

        {/* Contact Us */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 p-3 rounded-full bg-primary text-cream shadow-lg border border-primary hover:bg-transparent hover:text-primary transition-all duration-300 transform ${
          showScrollTop ? 'translate-y-0 opacity-100 visible' : 'translate-y-4 opacity-0 invisible'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
}

export default App;
