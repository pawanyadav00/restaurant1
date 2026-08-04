import React, { useState } from 'react';

const MenuPreview = () => {
  const categories = [
    { id: 'veg-starters', name: 'Veg Starters' },
    { id: 'non-veg-starters', name: 'Non-Veg Starters' },
    { id: 'soups', name: 'Soups' },
    { id: 'fried-rice', name: 'Fried Rice' },
    { id: 'noodles', name: 'Noodles' },
    { id: 'mocktails', name: 'Mocktails' },
    { id: 'main-course', name: 'Main Course' }
  ];

  const [activeCategory, setActiveCategory] = useState('veg-starters');

  const menuItems = {
    'veg-starters': [
      { name: 'Mushroom Pepper Fry', price: '₹190', desc: 'Button mushrooms tossed in freshly cracked pepper, onions, and curry leaves.', isVeg: true },
      { name: 'Paneer 65', price: '₹190', desc: 'Deep-fried spiced paneer cubes tossed in yogurt and green chilies.', isVeg: true },
      { name: 'Gobi Manchurian', price: '₹160', desc: 'Crispy cauliflower florets tossed in a tangy soy-garlic sauce.', isVeg: true },
      { name: 'Veg Spring Rolls', price: '₹140', desc: 'Crispy pastry sheets filled with seasoned julienned vegetables.', isVeg: true }
    ],
    'non-veg-starters': [
      { name: 'Korean Fried Chicken', price: '₹260', desc: 'Double fried crispy chicken glazed in sweet-spicy gochujang paste.', isVeg: false },
      { name: 'Chicken 65', price: '₹220', desc: 'Classic deep-fried chicken cubes spiced with ginger, garlic, and curry leaves.', isVeg: false },
      { name: 'Dragon Chicken', price: '₹230', desc: 'Stir-fried chicken strips in a spicy red sauce with cashews and bell peppers.', isVeg: false },
      { name: 'Chicken Tikka', price: '₹240', desc: 'Clay oven roasted chicken chunks marinated in spiced yogurt.', isVeg: false }
    ],
    'soups': [
      { name: 'Wonton Soup', price: '₹150', desc: 'Delicate vegetable wontons served in a seasoned piping hot clear broth.', isVeg: true },
      { name: 'Chicken Manchow Soup', price: '₹150', desc: 'Spicy and tangy dark soup with chicken, garlic, and crispy noodles.', isVeg: false },
      { name: 'Veg Hot & Sour Soup', price: '₹130', desc: 'Comforting, thick soup filled with finely chopped veggies, vinegar, and white pepper.', isVeg: true },
      { name: 'Sweet Corn Chicken Soup', price: '₹140', desc: 'Mild, sweet and savory thick broth cooked with chicken shreddings and sweet corn.', isVeg: false }
    ],
    'fried-rice': [
      { name: 'Paneer Korean Fried Rice', price: '₹220', desc: 'Savory fried rice cooked with fresh paneer cubes and sweet-spicy Korean sauce.', isVeg: true },
      { name: 'Royal Special Fried Rice', price: '₹245', desc: 'Combination of chicken, prawns, and egg tossed with aromatic jasmine rice.', isVeg: false },
      { name: 'Veg Schezwan Fried Rice', price: '₹175', desc: 'Rice stir-fried with mixed vegetables in a fiery homemade Schezwan sauce.', isVeg: true },
      { name: 'Egg Fried Rice', price: '₹180', desc: 'Simple, classic stir-fried rice tossed with eggs, light soy sauce, and spring onions.', isVeg: false }
    ],
    'noodles': [
      { name: 'Veg Hakka Noodles', price: '₹170', desc: 'Noodles tossed with crunchy cabbage, carrots, bell peppers, and scallions.', isVeg: true },
      { name: 'Chicken Schezwan Noodles', price: '₹200', desc: 'Noodles stir-fried in hot Schezwan sauce with shredded chicken and veggies.', isVeg: false },
      { name: 'Royal Special Noodles', price: '₹225', desc: 'Wok-tossed noodles with chicken, egg, prawns, and our secret spice mix.', isVeg: false },
      { name: 'Egg Noodles', price: '₹180', desc: 'Simple wok-tossed noodles tossed with scrambled eggs and spring onions.', isVeg: false }
    ],
    'mocktails': [
      { name: 'Signature Mint Mojito', price: '₹120', desc: 'Muddled fresh mint, lime slices, sugar syrup, topped with sparkling soda and ice.', isVeg: true },
      { name: 'Blue Lagoon', price: '₹120', desc: 'Refreshing blue curacao syrup mixed with lemon juice and fizzy sprite.', isVeg: true },
      { name: 'Virgin Piña Colada', price: '₹140', desc: 'Smooth, tropical blend of sweet pineapple juice and creamy coconut milk.', isVeg: true },
      { name: 'Mango Sunset', price: '₹130', desc: 'Vibrant layer of fresh mango pulp, orange juice, and a splash of grenadine.', isVeg: true }
    ],
    'main-course': [
      { name: 'Chicken Lababdar', price: '₹280', desc: 'Boneless chicken in a rich, buttery, creamy onion and tomato-based gravy.', isVeg: false },
      { name: 'Paneer Butter Masala', price: '₹240', desc: 'Soft cottage cheese cubes cooked in a sweet, mildly spiced tomato cream gravy.', isVeg: true },
      { name: 'Dal Makhani', price: '₹200', desc: 'Slow-cooked black lentils and kidney beans topped with fresh cream and butter.', isVeg: true },
      { name: 'Butter Naan', price: '₹45', desc: 'Clay oven baked flatbread brushed with premium melted butter.', isVeg: true },
      { name: 'Jeera Rice', price: '₹150', desc: 'Aromatic basmati rice cooked and tempered with ghee and cumin seeds.', isVeg: true }
    ]
  };

  return (
    <section id="menu-preview" className="py-24 bg-cream relative">
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-outfit uppercase tracking-[0.2em] text-accent text-xs font-semibold block mb-2">
            Taste the Royalty
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-dark font-bold mb-4 underlined-title">
            Menu Highlights
          </h2>
          <p className="font-sans text-sm text-charcoal-light mt-6">
            Browse through our selected categories. We offer a balanced mix of traditional tastes and modern street food creations.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-primary/10 pb-4 max-w-5xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`font-outfit text-sm font-semibold tracking-wide px-5 py-2.5 rounded-full transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-primary text-cream shadow-md shadow-primary/10'
                  : 'text-charcoal-light hover:text-primary hover:bg-cream-dark'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto transition-opacity duration-300">
          {menuItems[activeCategory].map((item, idx) => (
            <div 
              key={idx} 
              className="flex items-start justify-between p-4 rounded-xl hover:bg-cream-dark/50 transition-colors duration-300 group"
            >
              <div className="flex-grow pr-4">
                <div className="flex items-center gap-2 mb-1">
                  {/* Diet dot */}
                  <div className={`w-3.5 h-3.5 border flex-shrink-0 flex items-center justify-center rounded-sm ${
                    item.isVeg ? 'border-green-600' : 'border-red-600'
                  }`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      item.isVeg ? 'bg-green-600' : 'bg-red-600'
                    }`} />
                  </div>
                  
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal-dark group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                </div>
                <p className="font-sans text-xs text-charcoal-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Price & Divider line */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-accent/25 hidden sm:block group-hover:w-16 transition-all duration-300" />
                <span className="font-outfit text-base font-bold text-primary whitespace-nowrap">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Note at Bottom */}
        <div className="text-center mt-16">
          <p className="font-sans text-xs text-charcoal-light italic">
            * All prices are exclusive of applicable taxes. Please notify our server in case of any food allergies.
          </p>
          
          <p className="font-outfit text-sm font-semibold text-charcoal-dark mt-8 mb-4">
            Order Online Via
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.swiggy.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#fc8019] text-white rounded-full font-outfit text-sm font-bold tracking-wide hover:bg-[#e0710f] transition-colors shadow-md shadow-[#fc8019]/20 hover:shadow-none"
            >
              🍔 Order on Swiggy
            </a>
            <a
              href="https://www.zomato.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#e23744] text-white rounded-full font-outfit text-sm font-bold tracking-wide hover:bg-[#cb2d3a] transition-colors shadow-md shadow-[#e23744]/20 hover:shadow-none"
            >
              🍽️ Order on Zomato
            </a>
            <a
              href="tel:+918234567890"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-primary rounded-full border border-primary font-outfit text-sm font-bold tracking-wide hover:bg-primary hover:text-cream transition-all"
            >
              📞 Call to Order
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MenuPreview;
