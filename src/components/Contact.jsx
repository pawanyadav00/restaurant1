import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Send } from 'lucide-react';

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

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      setSubmitted(true);
      // Simulate API call
      setTimeout(() => {
        setFormState({ name: '', email: '', subject: '', message: '' });
        setSubmitted(false);
        alert('Thank you! Your message has been sent successfully. We will get back to you shortly.');
      }, 500);
    }
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-cream-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-outfit uppercase tracking-[0.2em] text-accent text-xs font-semibold block mb-2">
            Find Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-dark font-bold mb-4 underlined-title">
            Contact & Location
          </h2>
          <p className="font-sans text-sm text-charcoal-light mt-6">
            Have a question, feedback, or want to host a small gathering? Get in touch with us or drop by today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Left Side: Info & Map (7 cols on large screens) */}
          <div className="lg:col-span-7 space-y-8 flex flex-col justify-between">
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Address Card */}
              <div className="bg-cream p-6 rounded-2xl border border-primary/5 flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-outfit font-semibold text-charcoal-dark mb-1">Our Address</h4>
                  <p className="font-sans text-xs text-charcoal-light leading-relaxed">
                    9Q6M+5JC, Shivalli,<br />
                    Vidyaratna Nagar, Manipal,<br />
                    Karnataka 576104
                  </p>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-cream p-6 rounded-2xl border border-primary/5 flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary flex-shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-outfit font-semibold text-charcoal-dark mb-1">Opening Hours</h4>
                  <p className="font-sans text-xs text-charcoal-light leading-relaxed">
                    Monday – Sunday<br />
                    11:00 AM – 11:00 PM<br />
                    <span className="text-accent font-semibold">Open All Days</span>
                  </p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-cream p-6 rounded-2xl border border-primary/5 flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary flex-shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-outfit font-semibold text-charcoal-dark mb-1">Call Us</h4>
                  <a 
                    href="tel:+918234567890" 
                    className="font-sans text-xs text-charcoal-light hover:text-primary transition-colors block mt-0.5"
                  >
                    +91 82345 67890
                  </a>
                  <a 
                    href="tel:+918234567891" 
                    className="font-sans text-xs text-charcoal-light hover:text-primary transition-colors block mt-0.5"
                  >
                    +91 82345 67891
                  </a>
                </div>
              </div>

              {/* Instagram Card */}
              <div className="bg-cream p-6 rounded-2xl border border-primary/5 flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary flex-shrink-0">
                  <InstagramIcon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-outfit font-semibold text-charcoal-dark mb-1">Follow Us</h4>
                  <a 
                    href="https://instagram.com/royal_bites_restaurant" 
                    target="_blank" 
                    rel="noreferrer"
                    className="font-sans text-xs text-primary font-semibold hover:underline block mt-0.5"
                  >
                    @royal_bites_restaurant
                  </a>
                  <span className="font-sans text-[10px] text-charcoal-light block mt-1">Get updates on daily specials!</span>
                </div>
              </div>

            </div>

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-primary/5 h-80 bg-cream">
              <iframe
                title="Royal Bites Restaurant Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.8367286024354!2d74.78152007440461!3d13.360426386991906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbca35b28b80e7d%3A0xed4a765c98d35930!2sRoyal%20Bites%20Restaurant!5e0!3m2!1sen!2sin!4v1779525054682!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Side: Form (5 cols on large screens) */}
          <div className="lg:col-span-5 bg-cream p-8 rounded-2xl border border-primary/5 shadow-md flex flex-col justify-center">
            <h3 className="font-serif text-2xl text-charcoal-dark font-bold mb-2">Send an Inquiry</h3>
            <p className="font-sans text-xs text-charcoal-light mb-6">
              Fill out the form below and our team will get in touch with you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-charcoal-light uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-cream-dark text-sm text-charcoal-dark placeholder-charcoal-light/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-charcoal-light uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-cream-dark text-sm text-charcoal-dark placeholder-charcoal-light/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-charcoal-light uppercase tracking-wider mb-1.5">
                  Subject (Optional)
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder="e.g. Table Reservation, Catering"
                  className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-cream-dark text-sm text-charcoal-dark placeholder-charcoal-light/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-charcoal-light uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-cream-dark text-sm text-charcoal-dark placeholder-charcoal-light/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full bg-primary text-cream font-outfit font-semibold py-3.5 px-4 rounded-xl border border-primary hover:bg-transparent hover:text-primary transition-all duration-300 flex items-center justify-center gap-2 group shadow-md shadow-primary/15 hover:shadow-none mt-2"
              >
                <span>{submitted ? 'Sending...' : 'Send Message'}</span>
                <Send className="h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
