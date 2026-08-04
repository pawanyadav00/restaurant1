import React from 'react';
import { Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Aditya Kamath',
      role: 'Local Guide',
      rating: 5,
      text: 'Super food and good service. The Korean chicken is crispy, sticky, and has the perfect glaze. A must-visit place in Manipal!'
    },
    {
      id: 2,
      name: 'Sneha Hegde',
      role: 'Student, MIT Manipal',
      rating: 5,
      text: 'Nice ambience and value for money. Very clean environment and quick service. Perfect spot for hanging out with friends after classes.'
    },
    {
      id: 3,
      name: 'Rahul Nayak',
      role: 'Regular Diner',
      rating: 5,
      text: 'Loved the Korean fried rice and mushroom pepper fry. Highly recommended! The fusion dishes are genuinely well-crafted and rich in flavor.'
    },
    {
      id: 4,
      name: 'Priya Rao',
      role: 'Food Enthusiast',
      rating: 4,
      text: 'Great service and very hygienic environment. The chicken lababdar was rich, creamy, and paired wonderfully with their butter naan.'
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-cream-dark relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-outfit uppercase tracking-[0.2em] text-accent text-xs font-semibold block mb-2">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-dark font-bold mb-4 underlined-title">
            What Our Customers Say
          </h2>
          <p className="font-sans text-sm text-charcoal-light mt-6">
            Read real feedback from our diners. We take pride in delivering taste, hygiene, and hospitality.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {reviews.map((rev) => (
            <div 
              key={rev.id} 
              className="bg-cream p-6 rounded-2xl shadow-md border border-primary/5 relative hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Quote Icon Overlay */}
                <div className="absolute top-4 right-4 text-accent/15 group-hover:text-accent/25 transition-colors duration-300">
                  <Quote className="h-8 w-8 transform rotate-180" />
                </div>
                
                {/* Stars */}
                <div className="flex text-accent text-lg mb-4">
                  {'★'.repeat(rev.rating)}
                  {'☆'.repeat(5 - rev.rating)}
                </div>
                
                {/* Review Text */}
                <p className="font-sans text-xs text-charcoal-light leading-relaxed mb-6 italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="flex items-center gap-3 pt-4 border-t border-cream-dark">
                {/* Avatar Initial */}
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-outfit font-bold text-sm">
                  {rev.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-outfit font-semibold text-sm text-charcoal-dark leading-tight">
                    {rev.name}
                  </h4>
                  <span className="font-sans text-[10px] text-accent font-medium uppercase tracking-wider block mt-0.5">
                    {rev.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate Ratings Callout */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 px-6 py-3 bg-cream rounded-2xl border border-primary/10 shadow-sm">
            <span className="font-outfit font-bold text-charcoal-dark text-sm">4.8 Overall Rating</span>
            <div className="h-4 w-[1px] bg-primary/10" />
            <div className="flex text-accent">★★★★★</div>
            <div className="h-4 w-[1px] bg-primary/10" />
            <span className="font-outfit text-xs text-charcoal-light font-medium">Based on 200+ online reviews</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Reviews;
