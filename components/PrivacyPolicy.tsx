import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-slate-700 dark:text-slate-300">
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-8">Polityka Prywatności</h1>
      <p className="mb-4 text-sm text-slate-500">Ostatnia aktualizacja: 15 czerwca 2024</p>

      <div className="prose dark:prose-invert max-w-none">
        <p className="mb-6">
          Six Fit, zarządzana przez <strong>DeveloArt Mateusz Bukowski</strong> ("my", "nasz" lub "nas"), zobowiązuje się do ochrony Twojej prywatności. Niniejsza Polityka Prywatności wyjaśnia, w jaki sposób Twoje dane osobowe są gromadzone, wykorzystywane i ujawniane przez aplikację Six Fit.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">1. Administrator Danych</h2>
        <p className="mb-4">
          Administratorem Twoich danych osobowych jest:<br />
          <strong>DeveloArt Mateusz Bukowski</strong><br />
          ul. Raduńska 40A/3<br />
          80-021 Gdańsk<br />
          NIP: 5833271688<br />
          REGON: 368731514
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">2. Informacje, które gromadzimy</h2>
        <p className="mb-4">
          <strong>Dane Osobowe:</strong> Możemy gromadzić dane osobowe, które nam podajesz, takie jak imię, adres e-mail i zdjęcie profilowe podczas rejestracji konta.
        </p>
        <p className="mb-4">
          <strong>Dane Zdrowotne i Aktywność:</strong> W celu zapewnienia funkcji śledzenia postępów fitness, aplikacja może przetwarzać dane dotyczące Twojej aktywności fizycznej (np. liczba kroków, spalone kalorie, czas trwania treningu). 
          <strong>Ważne:</strong> Nie integrujemy się z zewnętrznymi usługami takimi jak Apple Health czy Google Fit. Wszystkie dane dotyczące zdrowia są wprowadzane ręcznie lub mierzone przez samą aplikację i przechowywane w naszej bezpiecznej bazie danych.
        </p>
        <p className="mb-4">
          <strong>Dane Urządzenia:</strong> Automatycznie gromadzimy pewne informacje o Twoim urządzeniu, w tym informacje o systemie operacyjnym, adresie IP, strefie czasowej oraz plikach cookies niezbędnych do działania aplikacji.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">3. Jak wykorzystujemy Twoje informacje</h2>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li>Aby świadczyć i utrzymywać Usługę (śledzenie treningów i postępów).</li>
          <li>Aby powiadamiać Cię o zmianach w naszej Usłudze.</li>
          <li>Aby zapewnić wsparcie klienta.</li>
          <li>Aby monitorować sposób korzystania z Usługi w celach analitycznych.</li>
        </ul>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">4. Bezpieczeństwo Danych</h2>
        <p className="mb-6">
          Bezpieczeństwo Twoich danych jest dla nas ważne. Stosujemy komercyjnie akceptowalne środki w celu ochrony Twoich Danych Osobowych, jednak żadna metoda transmisji przez Internet ani metoda elektronicznego przechowywania danych nie jest w 100% bezpieczna.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">5. Kontakt</h2>
        <p>
          Jeśli masz jakiekolwiek pytania dotyczące tej Polityki Prywatności, skontaktuj się z nami:<br/>
          E-mail: <a href="mailto:kontakt@develoart.pl" className="text-primary hover:underline">kontakt@develoart.pl</a><br />
          Adres: DeveloArt Mateusz Bukowski, ul. Raduńska 40A/3, 80-021 Gdańsk.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;