import React from 'react';

const PopularDishes = () => {
  const dishes = [
    {
      id: 1,
      name: 'Chicken Lababdar',
      category: 'Main Course',
      price: '₹280',
      isVeg: false,
      tag: 'Best Seller',
      spicyLevel: 2, // scale of 3
      image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=600&auto=format&fit=crop',
      description: 'Boneless chicken cubes cooked in a rich, creamy onion-tomato gravy infused with butter, cream, and dry fenugreek leaves.'
    },
    {
      id: 2,
      name: 'Korean Fried Chicken',
      category: 'Non-Veg Starters',
      price: '₹260',
      isVeg: false,
      tag: 'Trending',
      spicyLevel: 3,
      image: '/dishes/korean-chicken.png',
      description: 'Ultra-crispy double-fried chicken pieces coated in a sticky, sweet, and spicy Korean glaze, topped with toasted sesame seeds.'
    },
    {
      id: 3,
      name: 'Mushroom Pepper Fry',
      category: 'Veg Starters',
      price: '₹190',
      isVeg: true,
      tag: 'Local Favorite',
      spicyLevel: 3,
      image: '/dishes/mushroom-pepper-fry.png',
      description: 'Fresh button mushrooms stir-fried with onions, curry leaves, crushed black pepper, and South Indian spices for a spicy kick.'
    },
    {
      id: 4,
      name: 'Paneer Korean Fried Rice',
      category: 'Fried Rice',
      price: '₹220',
      isVeg: true,
      tag: 'Chef Special',
      spicyLevel: 2,
      image: '/dishes/paneer-korean-fried-rice.png',
      description: 'A flavorful fusion fried rice cooked with diced soft paneer, vegetables, and hot gochujang sauce for a perfect sweet-spicy profile.'
    },
    {
      id: 5,
      name: 'Wonton Soup',
      category: 'Soups',
      price: '₹150',
      isVeg: true,
      tag: 'Healthy Pick',
      spicyLevel: 0,
      image: '/dishes/wonton-soup.jpg',
      description: 'Delicate handmade dumplings (wontons) stuffed with fresh vegetables, served in a warm, clear, and fragrant vegetable broth.'
    },
    {
      id: 6,
      name: 'Signature Mocktails',
      category: 'Mocktails',
      price: '₹120',
      isVeg: true,
      tag: 'Refreshing',
      spicyLevel: 0,
      image: '/dishes/mocktails.png',
      description: 'A selection of ice-cold fruit mocktails, from a zesty Mint Mojito to a classic Blue Lagoon, mixed with fresh herbs and citrus.'
    }
  ];

  return (
    <section id="popular-dishes" className="py-24 bg-cream-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-outfit uppercase tracking-[0.2em] text-accent text-xs font-semibold block mb-2">
            Chef Recommends
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-dark font-bold mb-4 underlined-title">
            Our Popular Dishes
          </h2>
          <p className="font-sans text-sm text-charcoal-light mt-6">
            Handcrafted with fresh local ingredients, custom spice blends, and cooking styles that deliver royal satisfaction in every bite.
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish) => (
            <div 
              key={dish.id} 
              className="bg-cream rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group border border-primary/5"
            >
              {/* Image & Tag */}
              <div className="relative h-64 w-full overflow-hidden bg-charcoal">
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-primary text-cream text-xs font-outfit uppercase tracking-wider px-3 py-1 rounded-full font-bold">
                  {dish.tag}
                </div>
                
                {/* Diet indicator (Veg / Non Veg) */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-1.5 rounded-full shadow-md flex items-center justify-center">
                  <div className={`w-3.5 h-3.5 border-2 rounded-sm flex items-center justify-center ${
                    dish.isVeg ? 'border-green-600' : 'border-red-600'
                  }`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      dish.isVeg ? 'bg-green-600' : 'bg-red-600'
                    }`} />
                  </div>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-outfit text-xs text-accent font-semibold tracking-wide uppercase">
                      {dish.category}
                    </span>
                    {dish.spicyLevel > 0 && (
                      <span className="flex items-center text-xs text-primary font-bold">
                        {'🌶️'.repeat(dish.spicyLevel)}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="font-serif text-xl sm:text-2xl text-charcoal-dark font-bold mb-3 group-hover:text-primary transition-colors">
                    {dish.name}
                  </h3>
                  
                  <p className="font-sans text-xs text-charcoal-light leading-relaxed mb-6">
                    {dish.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-cream-dark">
                  <span className="font-outfit text-xl font-bold text-primary">
                    {dish.price}
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://www.swiggy.com"
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 bg-[#fc8019] text-white rounded-full font-outfit text-[10px] font-bold uppercase tracking-wider hover:bg-[#e0710f] transition-colors"
                    >
                      Swiggy
                    </a>
                    <a
                      href="https://www.zomato.com"
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 bg-[#e23744] text-white rounded-full font-outfit text-[10px] font-bold uppercase tracking-wider hover:bg-[#cb2d3a] transition-colors"
                    >
                      Zomato
                    </a>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PopularDishes;
