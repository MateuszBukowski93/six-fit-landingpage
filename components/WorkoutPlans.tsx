import React, { useState } from 'react';
import { WorkoutPlan } from '../types';
import { analytics } from '../services/firebaseService';

const workoutPlans: WorkoutPlan[] = [
  {
    id: 'pushups',
    name: {
      en: '100 Push-ups',
      pl: '100 Pompek',
    },
    targetReps: 100,
    category: 'strength',
    difficulty: 'intermediate',
    description: {
      en: 'Build upper body strength with progressive push-up challenges',
      pl: 'Zbuduj siłę górnej części ciała z progresywnymi wyzwaniami pompek',
    },
    icon: 'fitness_center',
  },
  {
    id: 'squats',
    name: {
      en: '200 Squats',
      pl: '200 Przysiadów',
    },
    targetReps: 200,
    category: 'strength',
    difficulty: 'intermediate',
    description: {
      en: 'Strengthen your legs and glutes with squat progression',
      pl: 'Wzmocnij nogi i pośladki z progresją przysiadów',
    },
    icon: 'accessibility_new',
  },
  {
    id: 'situps',
    name: {
      en: '200 Sit-ups',
      pl: '200 Brzuszków',
    },
    targetReps: 200,
    category: 'strength',
    difficulty: 'intermediate',
    description: {
      en: 'Develop core strength and abdominal definition',
      pl: 'Rozwijaj siłę core i definicję brzucha',
    },
    icon: 'sports_gymnastics',
  },
  {
    id: 'lunges',
    name: {
      en: '200 Lunges',
      pl: '200 Wykroków',
    },
    targetReps: 200,
    category: 'strength',
    difficulty: 'intermediate',
    description: {
      en: 'Improve balance and leg strength with lunges',
      pl: 'Popraw równowagę i siłę nóg z wykrokami',
    },
    icon: 'directions_walk',
  },
  {
    id: 'plank',
    name: {
      en: '5 min Plank',
      pl: '5 min Plank',
    },
    targetDuration: 5,
    targetReps: 1,
    category: 'flexibility',
    difficulty: 'beginner',
    description: {
      en: 'Build core stability and endurance with planking',
      pl: 'Zbuduj stabilność core i wytrzymałość z plankiem',
    },
    icon: 'timer',
  },
  {
    id: 'dips',
    name: {
      en: '150 Dips',
      pl: '150 Dips',
    },
    targetReps: 150,
    category: 'strength',
    difficulty: 'advanced',
    description: {
      en: 'Strengthen triceps and chest with dip exercises',
      pl: 'Wzmocnij triceps i klatkę piersiową z ćwiczeniami dipów',
    },
    icon: 'fitness_center',
  },
  {
    id: 'pullups',
    name: {
      en: '25 Pull-ups',
      pl: '25 Podciągnięć',
    },
    targetReps: 25,
    category: 'strength',
    difficulty: 'advanced',
    description: {
      en: 'Develop back and bicep strength with pull-ups',
      pl: 'Rozwijaj siłę pleców i bicepsów z podciągnięciami',
    },
    icon: 'fitness_center',
  },
];

const WorkoutPlans: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  
  const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.bukos.minrepsapp&pli=1';
  const APP_STORE_URL = 'https://apps.apple.com/us/app/sixfit/id6751943924';

  const detectDevice = () => {
    const userAgent = navigator.userAgent || navigator.vendor;
    if (/iPad|iPhone|iPod/.test(userAgent)) {
      return 'ios';
    } else if (/android/i.test(userAgent)) {
      return 'android';
    }
    return 'unknown';
  };

  const handleDownload = (platform?: string) => {
    analytics.logEvent('download_click', { platform });
    
    let targetUrl = GOOGLE_PLAY_URL; // Default to Google Play
    
    if (platform) {
      // If platform is explicitly specified
      targetUrl = platform === 'ios' ? APP_STORE_URL : GOOGLE_PLAY_URL;
    } else {
      // Auto-detect device
      const device = detectDevice();
      targetUrl = device === 'ios' ? APP_STORE_URL : GOOGLE_PLAY_URL;
    }
    
    window.open(targetUrl, '_blank');
  };

  const categories = ['all', 'strength', 'flexibility'];
  const difficulties = ['all', 'beginner', 'intermediate', 'advanced'];

  const filteredPlans = workoutPlans.filter(plan => {
    const categoryMatch = selectedCategory === 'all' || plan.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'all' || plan.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-500 bg-green-500/10';
      case 'intermediate': return 'text-yellow-500 bg-yellow-500/10';
      case 'advanced': return 'text-red-500 bg-red-500/10';
      default: return 'text-gray-500 bg-gray-500/10';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'strength': return 'text-blue-500 bg-blue-500/10';
      case 'flexibility': return 'text-purple-500 bg-purple-500/10';
      default: return 'text-gray-500 bg-gray-500/10';
    }
  };

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            6-Week <span className="text-gradient bg-green-500">Workout Plans</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Choose from our proven workout plans designed to transform your fitness in just 6 weeks
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <div className="flex gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-green-500 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            {difficulties.map(difficulty => (
              <button
                key={difficulty}
                onClick={() => setSelectedDifficulty(difficulty)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedDifficulty === difficulty
                    ? 'bg-green-500 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Workout Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlans.map(plan => (
            <div
              key={plan.id}
              className="bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="material-icons text-3xl text-green-500">{plan.icon}</span>
                <div className="flex gap-2">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${getCategoryColor(plan.category)}`}>
                    {plan.category}
                  </span>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${getDifficultyColor(plan.difficulty)}`}>
                    {plan.difficulty}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-500 transition-colors">
                {plan.name.en}
              </h3>
              
              <p className="text-slate-400 text-sm mb-4">
                {plan.description.en}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="text-white">
                  <span className="text-2xl font-bold">
                    {plan.targetDuration ? `${plan.targetDuration} min` : plan.targetReps}
                  </span>
                  <span className="text-sm text-slate-500 ml-1">
                    {plan.targetDuration ? 'duration' : 'reps'}
                  </span>
                </div>
                <button 
                  onClick={() => handleDownload()}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
                >
                  Start Plan
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Create Custom Workout CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Create Your <span className="text-gradient bg-green-500">Custom Workout</span>
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Mix and match exercises from our proven plans to create your perfect 6-week workout routine
            </p>
            <button 
              onClick={() => handleDownload()}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transform hover:-translate-y-1"
            >
              Build Custom Workout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutPlans;
