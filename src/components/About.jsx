import React from 'react';
import { Heart, Sparkles, ShieldCheck, DollarSign } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: 'Family Friendly',
      description: 'A cozy, welcoming environment designed for memorable moments with your loved ones.'
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      title: 'Hygienic Environment',
      description: 'We follow strict cleaning protocols in our kitchen and dining area to ensure absolute safety.'
    },
    {
      icon: <DollarSign className="h-6 w-6 text-primary" />,
      title: 'Affordable Pricing',
      description: 'Enjoy delicious, premium quality meals that are light on your wallet.'
    },
    {
      icon: <Sparkles className="h-6 w-6 text-primary" />,
      title: 'Excellent Service',
      description: 'Friendly, prompt service that prioritizes your comfort and satisfaction.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-cream relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Image collage */}
          <div className="relative group">
            {/* Background gold border decorative box */}
            <div className="absolute -inset-4 rounded-2xl border-2 border-accent/30 translate-x-2 translate-y-2 pointer-events-none transition-transform group-hover:translate-x-1 group-hover:translate-y-1 duration-500" />
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-cream-dark">
              <img 
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop" 
                alt="Royal Bites Restaurant Ambience" 
                className="w-full h-[400px] sm:h-[500px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Overlay rating card */}
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-accent/20">
                <p className="font-serif text-charcoal font-bold text-lg">Royal Bites Ambience</p>
                <div className="flex items-center text-accent text-sm mt-1">
                  <span>★★★★★</span>
                  <span className="text-charcoal-light text-xs ml-2">(4.8/5 Rated on Maps)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text & Features */}
          <div>
            <span className="font-outfit uppercase tracking-[0.2em] text-accent text-xs font-semibold block mb-2">
              Our Story
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-dark font-bold leading-tight mb-6">
              A Fusion of Flavors & Welcoming Ambience
            </h2>
            
            <p className="font-sans text-charcoal-light leading-relaxed mb-6">
              Located in the heart of Vidyaratna Nagar, Manipal, **Royal Bites Restaurant** is your go-to destination for mouthwatering culinary creations. We offer a curated fusion menu containing rich **Indian spices**, classic **Chinese staples**, and crispy, savory **Korean street delights**. 
            </p>
            
            <p className="font-sans text-charcoal-light leading-relaxed mb-10">
              Whether you are here for a casual lunch, a celebratory family dinner, or simply grabbing food with friends, we guarantee a warm atmosphere, meticulous food hygiene, and quality service.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start group">
                  <div className="flex-shrink-0 p-2.5 bg-cream-dark rounded-xl group-hover:bg-primary/10 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-outfit font-semibold text-charcoal-dark text-base tracking-wide mb-1">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-charcoal-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
