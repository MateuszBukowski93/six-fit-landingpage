import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'pl'>('en');
  const navigate = useNavigate();

  const content = {
    en: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: January 5, 2026',
      sections: [
        {
          heading: '1. Introduction',
          text: 'Welcome to Six Fit. We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and protect your information when you use our fitness application.'
        },
        {
          heading: '2. Information We Collect',
          text: 'We collect information that you provide directly to us, including:\n• Account information (name, email address)\n• Fitness data (workouts, progress, goals)\n• Usage data (how you interact with our app)\n• Device information (device type, operating system)'
        },
        {
          heading: '3. How We Use Your Information',
          text: 'We use your information to:\n• Provide and maintain our service\n• Personalize your experience\n• Improve our app and develop new features\n• Communicate with you about your account\n• Analyze usage patterns to optimize performance'
        },
        {
          heading: '4. Data Security',
          text: 'We implement appropriate security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. All data is encrypted and stored securely.'
        },
        {
          heading: '5. Third-Party Services',
          text: 'We may use third-party services to help us operate our app, including analytics and cloud storage providers. These services have their own privacy policies and we are not responsible for their practices.'
        },
        {
          heading: '6. Your Rights',
          text: 'You have the right to:\n• Access your personal data\n• Correct inaccurate data\n• Request deletion of your data\n• Opt-out of marketing communications\n• Export your data'
        },
        {
          heading: '7. Contact Us',
          text: 'If you have any questions about this Privacy Policy, please contact us at:\nEmail: privacy@sixfit.com'
        }
      ]
    },
    pl: {
      title: 'Polityka Prywatności',
      lastUpdated: 'Ostatnia aktualizacja: 5 stycznia 2026',
      sections: [
        {
          heading: '1. Wprowadzenie',
          text: 'Witamy w Six Fit. Szanujemy Twoją prywatność i jesteśmy zaangażowani w ochronę Twoich danych osobowych. Ta polityka prywatności wyjaśnia, jak zbieramy, wykorzystujemy i chronimy Twoje informacje, gdy korzystasz z naszej aplikacji fitness.'
        },
        {
          heading: '2. Informacje, Które Zbieramy',
          text: 'Zbieramy informacje, które nam bezpośrednio udostępniasz, w tym:\n• Informacje o koncie (imię, adres e-mail)\n• Dane fitness (treningi, postępy, cele)\n• Dane użytkowania (jak korzystasz z naszej aplikacji)\n• Informacje o urządzeniu (typ urządzenia, system operacyjny)'
        },
        {
          heading: '3. Jak Wykorzystujemy Twoje Informacje',
          text: 'Wykorzystujemy Twoje informacje do:\n• Świadczenia i utrzymania naszej usługi\n• Personalizacji Twojego doświadczenia\n• Poprawy naszej aplikacji i rozwoju nowych funkcji\n• Komunikacji z Tobą dotyczącej Twojego konta\n• Analizy wzorców użytkowania w celu optymalizacji wydajności'
        },
        {
          heading: '4. Bezpieczeństwo Danych',
          text: 'Wdrażamy odpowiednie środki bezpieczeństwa, aby chronić Twoje dane osobowe przed nieautoryzowanym dostępem, modyfikacją, ujawnieniem lub zniszczeniem. Wszystkie dane są szyfrowane i bezpiecznie przechowywane.'
        },
        {
          heading: '5. Usługi Osób Trzecich',
          text: 'Możemy korzystać z usług osób trzecich, aby pomóc nam w obsłudze naszej aplikacji, w tym dostawców analityki i przechowywania w chmurze. Te usługi mają własne polityki prywatności i nie jesteśmy odpowiedzialni za ich praktyki.'
        },
        {
          heading: '6. Twoje Prawa',
          text: 'Masz prawo do:\n• Dostępu do swoich danych osobowych\n• Poprawiania nieprawidłowych danych\n• Żądania usunięcia swoich danych\n• Rezygnacji z komunikacji marketingowej\n• Eksportu swoich danych'
        },
        {
          heading: '7. Kontakt z Nami',
          text: 'Jeśli masz jakiekolwiek pytania dotyczące tej Polityki Prywatności, skontaktuj się z nami pod adresem:\nE-mail: privacy@sixfit.com'
        }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-background-dark text-slate-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/')}
            className="mb-6 text-slate-400 hover:text-green-500 hover:bg-clip-text transition-colors flex items-center gap-2"
          >
            <span className="material-icons">arrow_back</span>
            {language === 'en' ? 'Back to Home' : 'Powrót do strony głównej'}
          </button>
          
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-4xl font-bold text-white">{currentContent.title}</h1>
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  language === 'en'
                    ? 'bg-green-500 text-white'
                    : 'bg-slate-700 text-slate-400 hover:text-green-500'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('pl')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  language === 'pl'
                    ? 'bg-green-500 text-white'
                    : 'bg-slate-700 text-slate-400 hover:text-green-500'
                }`}
              >
                PL
              </button>
            </div>
          </div>
          <p className="text-slate-400">{currentContent.lastUpdated}</p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {currentContent.sections.map((section, index) => (
            <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h2 className="text-2xl font-semibold text-white mb-4">{section.heading}</h2>
              <div className="text-slate-300 leading-relaxed whitespace-pre-line">
                {section.text}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-slate-700 text-center text-slate-400">
          <p className="text-sm">
            {language === 'en' 
              ? '© 2023 Six Fit. All rights reserved.' 
              : '© 2023 Six Fit. Wszelkie prawa zastrzeżone.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
