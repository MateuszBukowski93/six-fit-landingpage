import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-slate-700 dark:text-slate-300">
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-8">Regulamin Świadczenia Usług</h1>
      <p className="mb-4 text-sm text-slate-500">Ostatnia aktualizacja: 15 czerwca 2024</p>

      <div className="prose dark:prose-invert max-w-none">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">1. Postanowienia Ogólne</h2>
        <p className="mb-6">
          Niniejszy regulamin określa zasady korzystania z aplikacji Six Fit, której właścicielem jest firma <strong>DeveloArt Mateusz Bukowski</strong> z siedzibą przy ul. Raduńska 40A/3, 80-021 Gdańsk, NIP: 5833271688 (zwana dalej "Usługodawcą"). Pobierając lub używając aplikacji, akceptujesz niniejszy Regulamin.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">2. Oświadczenie Medyczne</h2>
        <p className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-r">
          <strong>Ważne:</strong> Six Fit nie jest organizacją medyczną. Plany treningowe i informacje zawarte w aplikacji mają charakter wyłącznie informacyjny i nie mogą być traktowane jako porada medyczna. Zawsze skonsultuj się z lekarzem przed rozpoczęciem jakiejkolwiek diety lub programu ćwiczeń.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">3. Konto Użytkownika</h2>
        <p className="mb-6">
          Tworząc konto, zobowiązujesz się do podania prawdziwych, dokładnych i aktualnych informacji. Nieprzestrzeganie tego wymogu stanowi naruszenie Regulaminu, co może skutkować natychmiastowym usunięciem konta.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">4. Opłaty i Subskrypcje</h2>
        <p className="mb-6">
          Aplikacja Six Fit jest udostępniana użytkownikom <strong>bezpłatnie</strong>. Usługodawca nie pobiera obecnie opłat subskrypcyjnych ani jednorazowych za dostęp do podstawowych i zaawansowanych funkcji aplikacji. W przypadku wprowadzenia płatnych funkcjonalności w przyszłości, użytkownicy zostaną o tym poinformowani z odpowiednim wyprzedzeniem.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">5. Własność Intelektualna</h2>
        <p className="mb-6">
          Usługa oraz jej oryginalna zawartość (z wyłączeniem treści dostarczanych przez użytkowników), funkcje i funkcjonalność są i pozostaną wyłączną własnością DeveloArt Mateusz Bukowski oraz jej licencjodawców.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">6. Rozwiązanie Umowy</h2>
        <p className="mb-6">
          Możemy zamknąć lub zawiesić dostęp do naszej Usługi natychmiast, bez wcześniejszego powiadomienia, z dowolnego powodu, w tym bez ograniczeń w przypadku naruszenia Regulaminu.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">7. Kontakt</h2>
        <p>
          Wszelkie pytania dotyczące niniejszego Regulaminu prosimy kierować na adres e-mail: <a href="mailto:kontakt@develoart.pl" className="text-primary hover:underline">kontakt@develoart.pl</a>.
        </p>
      </div>
    </section>
  );
};

export default TermsOfService;