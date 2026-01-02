import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

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

// PWA Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Explicitly defining scope can help in some hosted environments
    navigator.serviceWorker.register('./sw.js', { scope: './' })
      .then((registration) => {
        console.log('SW registered:', registration);
      })
      .catch((error) => {
        console.warn('SW registration failed:', error);
        // The error "Script origin does not match" usually means the server
        // is serving sw.js from a different origin/port than index.html.
        // This is common in some preview environments (like CodeSandbox/StackBlitz).
        // It usually resolves itself on a real production static host.
      });
  });
}