import React from 'react';
import { Feature } from '../types';

const FEATURES_DATA: Feature[] = [
  {
    id: 1,
    icon: 'insights',
    title: 'Progress Tracking',
    description: 'Visualize your gains with intuitive charts. Track your progress, smash your goals, and transform your body with data-driven insights.'
  },
  {
    id: 2,
    icon: 'track_changes',
    title: 'Goal Setting',
    description: 'Set custom targets for strength, cardio, or flexibility. Transform your goals into structured daily challenges that keep you motivated.'
  },
  {
    id: 3,
    icon: 'fitness_center',
    title: 'Workout Variety',
    description: 'Access hundreds of exercises. From HIIT to Yoga, find the perfect workout to aid your structured challenges and crush limits.'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-background-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-transparent bg-green-500 bg-clip-text font-semibold tracking-wide uppercase mb-2">Features</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">Everything you need to succeed</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {FEATURES_DATA.map((feature) => (
            <div 
              key={feature.id} 
              className="group p-8 rounded-3xl bg-surface-dark border border-slate-800 hover:border-green-500/50 transition-all duration-300 hover:shadow-glow cursor-default"
            >
              <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500 group-hover:text-white transition-all duration-300 text-green-500">
                <span className="material-icons text-3xl">{feature.icon}</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;