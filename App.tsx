import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  // Trigger load state for animation effect
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4 sm:p-8">
      <div 
        className={`relative max-w-4xl w-full flex justify-center transition-all duration-1000 ease-out ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Decorative background glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-30 animate-pulse"></div>
        
        {/* Main Image Container */}
        <div className="relative bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-700/50">
           <img
            src="https://picsum.photos/1080/1350"
            alt="PWA Showcase"
            className="w-full h-auto max-h-[85vh] object-cover sm:object-contain block pointer-events-none select-none"
            loading="eager"
            draggable={false}
          />
          
          {/* Subtle Overlay text (Optional, removes if strictly image only is desired, keeping for polish) */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center">
            <p className="text-white/80 text-sm font-light tracking-widest uppercase">MonoView</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;