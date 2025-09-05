import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Clean Logo */}
          <div className="flex items-center space-x-4">
            <img 
              src="/src/assets/agentx_logo.jpeg" 
              alt="Future Minds Institute Logo" 
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="text-white">
              <h1 className="text-xl font-semibold">Future Minds Institute</h1>
              <p className="text-sm text-slate-400">Transforming Education</p>
            </div>
          </div>

          {/* Clean Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-400 hover:text-white transition-colors duration-200 font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('agenda')}
              className="text-slate-400 hover:text-white transition-colors duration-200 font-medium"
            >
              Agenda
            </button>
            <button 
              onClick={() => scrollToSection('event-details')}
              className="text-slate-400 hover:text-white transition-colors duration-200 font-medium"
            >
              Details
            </button>
            <button 
              onClick={() => scrollToSection('educators')}
              className="text-slate-400 hover:text-white transition-colors duration-200 font-medium"
            >
              Educators
            </button>
            <button 
              onClick={() => scrollToSection('cta')}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200"
            >
              Register Now
            </button>
          </div>

          {/* Clean Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-400 hover:text-white p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Clean Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50">
            <div className="px-4 pt-4 pb-6 space-y-2">
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200 font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('agenda')}
                className="block w-full text-left px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200 font-medium"
              >
                Agenda
              </button>
              <button 
                onClick={() => scrollToSection('event-details')}
                className="block w-full text-left px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200 font-medium"
              >
                Details
              </button>
              <button 
                onClick={() => scrollToSection('educators')}
                className="block w-full text-left px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200 font-medium"
              >
                Educators
              </button>
              <button 
                onClick={() => scrollToSection('cta')}
                className="block w-full text-left px-4 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-all duration-200 mt-4 font-semibold"
              >
                Register Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
