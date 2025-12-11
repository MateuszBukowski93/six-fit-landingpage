import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// PWA Service Worker Registration (Placeholder for PWA functionality)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // navigator.serviceWorker.register('/service-worker.js');
    console.log('Service Worker ready for registration');
  });
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);