import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Our Warm Dining Area',
      category: 'Ambience',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'Crispy Korean Starters',
      category: 'Food',
      image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Cozy Table Setup',
      category: 'Ambience',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 4,
      title: 'Artisanal Mocktails',
      category: 'Drinks',
      image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 5,
      title: 'Spiced Mughlai Specialties',
      category: 'Food',
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 6,
      title: 'Royal Culinary Art',
      category: 'Food',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-outfit uppercase tracking-[0.2em] text-accent text-xs font-semibold block mb-2">
            Visual Tour
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-dark font-bold mb-4 underlined-title">
            Restaurant Gallery
          </h2>
          <p className="font-sans text-sm text-charcoal-light mt-6">
            A glimpse into the cozy dining spaces, refreshing mocktails, and fresh dishes cooked at Royal Bites.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImg(item)}
              className="relative rounded-2xl overflow-hidden shadow-md group cursor-pointer aspect-[4/3] bg-charcoal"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-primary-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="absolute top-6 right-6 p-2 rounded-full bg-accent/25 text-cream border border-accent/20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <ZoomIn className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-outfit text-xs text-accent font-semibold uppercase tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg text-cream font-semibold tracking-wide">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImg(null)}
        >
          <div className="absolute top-6 right-6">
            <button 
              onClick={() => setSelectedImg(null)}
              className="text-cream hover:text-accent p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Close image"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div 
            className="max-w-4xl w-full max-h-[80vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImg.image} 
              alt={selectedImg.title} 
              className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl border border-white/10"
            />
            <div className="text-center mt-4">
              <span className="font-outfit text-xs text-accent uppercase tracking-wider font-semibold block mb-1">
                {selectedImg.category}
              </span>
              <h3 className="font-serif text-xl text-cream font-bold">
                {selectedImg.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
