import React from 'react';
import { Testimonial } from '../types';

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah K.',
    role: 'Pro Member',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkOoEMLhJWmDkrfNl6xk05-8u5PkjS6guvhxFG0pj7u90o1Vla6A1TWFyQme1c2-zCvHEUfiMPdVUQ0OFUIpzhVM1Nb_bA1INLb18HL-fqbOBEATsCX6TruCBT_28Gx2EVce4SFwQNRODTecss8YTxdySjAyVoYXZKB9HL2GkAnMgbyKeUlDd6AHdajf-toanrek5OOoOmv9S9xHWxYVaNcSbc8cCO8EdDJ-rTnt1zq1-eJwuJUEQHqd19gBzCeGPf5qB7-djoEFZ4',
    content: '"Six Fit helped me crush my goals! The tracking features are incredible and keep me honest every single day."',
    rating: 5
  },
  {
    id: 2,
    name: 'Mark B.',
    role: 'Elite Athlete',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxKKhvouf_7xTb5Wp23TXoR85e-hURXrzGNMCsHzMbu08Oh54HmnARLLmGzdR8P7whfqozKaSVhfJnc7nFBFFeMwtN_06qgWKOm4NE6ukGkmVoI8VefWLhl3EiEufUzsCDTXLJjKoNwILg6UvlWtY0CuCv9BZjWtuyKIaSOeSKlbVis_ZJQdzX080ASXBuQD9g683Jw5PZcV1hKm3JyBLkDngkQrOCYTNpJ6tvLhvazTzfGiNBqkHdVUuM1aOjyK2Vkc_BJtznjf8V',
    content: '"I\'ve gained strength and confidence. The community challenges push me harder than I ever could alone."',
    rating: 5,
    featured: true
  },
  {
    id: 3,
    name: 'James L.',
    role: 'Fitness Enthusiast',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOTNfLZj2w7FOHy-NmDP3DJgy3g71u4kD1luNPwDr_riCKf9Px7kAYVqkQ7km8TCUiS7mf8ZKUE99a3KGolmMPI1l9ZkazquT36gaaNesrKJ92jaSNBCyvlDt6LWWPPmsO31NpOdzCqQraZfrt684-FIS34f1NH5OWhmx5usN4yPX4sl8rjPEf3Xv2rrmFQRJ9KnRhp0Bq9RNzu3dIvtT2K2zXq8alvA9U19447aLDLOrL_QEPspNW8Upf03Q2pGEgY2R-IfCczOHD',
    content: '"Simply the best fitness app on the market. The interface is clean and the workout variety is unmatched."',
    rating: 4.5
  }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex text-yellow-400 mb-4">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="material-icons text-sm">
          {i < Math.floor(rating) ? 'star' : i < rating ? 'star_half' : 'star_border'}
        </span>
      ))}
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-50 dark:bg-[#050a14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">Stories of Strength</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <div 
              key={testimonial.id}
              className={`p-8 rounded-2xl border border-slate-100 dark:border-slate-800 relative ${
                testimonial.featured 
                  ? 'bg-linear-to-br from-white to-purple-50/50 dark:from-slate-800 dark:to-purple-900/20 transform md:-translate-y-4 shadow-xl shadow-purple-500/10' 
                  : 'bg-white dark:bg-surface-dark shadow-lg'
              }`}
            >
              {testimonial.featured && (
                <div className="absolute -top-3 right-8 bg-sixfit text-white text-[10px] font-bold px-2 py-1 rounded shadow">
                  FEATURED
                </div>
              )}
              
              <StarRating rating={testimonial.rating} />
              
              <p className="text-slate-700 dark:text-slate-300 mb-6 italic">
                {testimonial.content}
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-pink-500"
                />
                <div>
                  <h5 className="font-bold text-slate-900 dark:text-white text-sm">{testimonial.name}</h5>
                  <span className="text-xs text-slate-500">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;