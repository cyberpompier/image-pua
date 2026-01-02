import React from 'react';

const App: React.FC = () => {
  return (
    <main className="fixed inset-0 w-full h-full flex items-center justify-center bg-black">
      {/* 
        Container for the single image. 
        Using simple styling for maximum robustness.
      */}
      <div className="relative w-full h-full max-w-screen-xl mx-auto flex items-center justify-center p-4">
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

export default App;