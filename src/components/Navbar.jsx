import React, { useState } from 'react';
import logo from '../assets/agentx_logo_edited_0.jpeg';

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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Clean Logo - Better responsive sizing */}
          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
            <img 
              src={logo} 
              alt="Future Minds Institute Logo" 
              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg object-fill"
            />
            <div className="text-white">
              <p className="text-sm sm:text-base lg:text-lg font-semibold leading-tight">Future Minds Institute</p>
              <p className="text-xs sm:text-sm text-slate-400 leading-tight">Transforming Education</p>
            </div>
          </div>

          {/* Clean Desktop Navigation - Better responsive breakpoints */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-400 hover:text-white transition-colors duration-200 font-medium cursor-pointer text-sm xl:text-base"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('agenda')}
              className="text-slate-400 hover:text-white transition-colors duration-200 font-medium cursor-pointer text-sm xl:text-base"
            >
              Agenda
            </button>
            <button 
              onClick={() => scrollToSection('event-details')}
              className="text-slate-400 hover:text-white transition-colors duration-200 font-medium cursor-pointer text-sm xl:text-base"
            >
              Details
            </button>
            <button 
              onClick={() => scrollToSection('educators')}
              className="text-slate-400 hover:text-white transition-colors duration-200 font-medium cursor-pointer text-sm xl:text-base"
            >
              Educators
            </button>
            <button 
              onClick={() => scrollToSection('cta')}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 xl:px-6 py-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer text-sm xl:text-base"
            >
              Register Now
            </button>
          </div>

          {/* Tablet Navigation - Show on md screens */}
          <div className="hidden md:flex lg:hidden items-center space-x-4">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-400 hover:text-white transition-colors duration-200 font-medium cursor-pointer text-sm"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('agenda')}
              className="text-slate-400 hover:text-white transition-colors duration-200 font-medium cursor-pointer text-sm"
            >
              Agenda
            </button>
            <button 
              onClick={() => scrollToSection('cta')}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer text-sm"
            >
              Register
            </button>
          </div>

          {/* Mobile menu button - Show on smaller screens */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-200"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50">
            <div className="px-4 pt-4 pb-6 space-y-1">
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200 font-medium text-sm"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('agenda')}
                className="block w-full text-left px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200 font-medium text-sm"
              >
                Agenda
              </button>
              <button 
                onClick={() => scrollToSection('event-details')}
                className="block w-full text-left px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200 font-medium text-sm"
              >
                Details
              </button>
              <button 
                onClick={() => scrollToSection('educators')}
                className="block w-full text-left px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200 font-medium text-sm"
              >
                Educators
              </button>
              <button 
                onClick={() => scrollToSection('cta')}
                className="block w-full text-left px-4 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-all duration-200 mt-4 font-semibold text-sm"
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
