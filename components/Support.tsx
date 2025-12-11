import React, { useState } from 'react';

const Support: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Wsparcie i Pomoc</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-10">
        Masz problem z aplikacją Six Fit? Wypełnij poniższy formularz lub napisz do nas bezpośrednio na adres <a href="mailto:kontakt@develoart.pl" className="text-primary hover:underline">kontakt@develoart.pl</a>.
      </p>

      {submitted ? (
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-8 text-center">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600 dark:text-green-300">
            <span className="material-icons text-3xl">check</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Wiadomość Wysłana!</h3>
          <p className="text-slate-600 dark:text-slate-400">
            Dziękujemy za kontakt. Nasz zespół wsparcia odpowie w ciągu 24 godzin.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="mt-6 text-primary font-medium hover:text-primary-dark"
          >
            Wyślij kolejną wiadomość
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-surface-dark p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Imię i Nazwisko
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-background-dark text-slate-900 dark:text-white focus:ring-primary focus:border-primary transition-colors"
              placeholder="Jan Kowalski"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Adres Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-background-dark text-slate-900 dark:text-white focus:ring-primary focus:border-primary transition-colors"
              placeholder="jan@example.com"
            />
          </div>

          <div>
            <label htmlFor="issue" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Rodzaj problemu
            </label>
            <select
              id="issue"
              className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-background-dark text-slate-900 dark:text-white focus:ring-primary focus:border-primary transition-colors"
            >
              <option>Problem Techniczny</option>
              <option>Pytanie o Konto</option>
              <option>Propozycja Funkcji</option>
              <option>Inne</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Wiadomość
            </label>
            <textarea
              id="message"
              rows={4}
              required
              className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-background-dark text-slate-900 dark:text-white focus:ring-primary focus:border-primary transition-colors"
              placeholder="Opisz swój problem..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-xl transition-all duration-200 shadow-lg shadow-green-500/20"
          >
            Wyślij Wiadomość
          </button>
        </form>
      )}
    </section>
  );
};

export default Support;