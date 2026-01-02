// Note: React and ReactDOM are available globally from the scripts in index.html
// We do not need to import them here when using the UMD/Babel Standalone setup.

// Explicitly retrieve globals to avoid TS module errors and provide 'any' type for flexibility
const React = (window as any).React;
const ReactDOM = (window as any).ReactDOM;

// --- Composant App intégré ---
const App = () => {
  return (
    <main className="fixed inset-0 w-full h-full flex items-center justify-center bg-black">
      <div className="relative w-full h-full max-w-screen-xl mx-auto flex items-center justify-center p-4">
        {/* Image principale */}
        <img
          src="https://images.unsplash.com/photo-1620121692023-60c74613ca4d?q=80&w=1920&auto=format&fit=crop"
          alt="App Content"
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          style={{ maxHeight: '90vh' }}
        />
      </div>
    </main>
  );
};

// --- Point d'entrée ---
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// In React 18 UMD, createRoot is available directly under ReactDOM
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// --- Enregistrement du Service Worker ---
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then((registration) => {
        console.log('SW registered successfully:', registration.scope);
      })
      .catch((error) => {
        console.warn('SW registration failed:', error);
      });
  });
}