// frontend/src/components/LoadingScreen.jsx
import React from 'react';

const LoadingScreen = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white/80">
    <div className="animate-pulse text-gray-700">Loading...</div>
  </div>
);

export default LoadingScreen;