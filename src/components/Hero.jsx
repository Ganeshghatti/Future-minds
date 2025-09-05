import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30% 30%, #64748b 0%, transparent 50%), 
                           radial-gradient(circle at 70% 70%, #475569 0%, transparent 50%)`
        }}></div>
      </div>
      
      {/* Minimal Animated Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-slate-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-slate-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-24">
        <div className="text-center">
          {/* Clean Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-full text-slate-300 text-sm font-medium mb-12">
            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
            Full-Day Hands-On Workshop for College Students
          </div>

          {/* Clean Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tight">
            <span className="text-white">
              AgentX <span className="text-emerald-400">2025</span>
            </span>
          </h1>

          {/* Clean Subtitle */}
          <p className="text-2xl md:text-3xl text-slate-300 mb-8 font-light tracking-wide">
            Design. Deploy. Dominate the AI Era
          </p>

          {/* Clean Description */}
          <p className="text-lg text-slate-400 mb-16 max-w-3xl mx-auto leading-relaxed">
            Transform from AI theory to practical mastery in a single intensive day. 
            Learn to design, build, and deploy intelligent agent systems that solve real-world problems.
          </p>

          {/* Clean CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <button 
              onClick={() => scrollToSection('cta')}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Register Now
            </button>
            
            <button 
              onClick={() => scrollToSection('about')}
              className="border border-slate-600 text-slate-300 hover:text-white hover:border-slate-500 px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
            >
              Learn More
            </button>
          </div>

          {/* Clean Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:bg-slate-800/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">No-Code Friendly</h3>
              <p className="text-slate-400 leading-relaxed">Build CrewAI agents with drag-and-drop ease and visual workflows</p>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:bg-slate-800/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">Python-Powered</h3>
              <p className="text-slate-400 leading-relaxed">Learn coding agents with full support and mentorship included</p>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:bg-slate-800/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">Beginner-Friendly</h3>
              <p className="text-slate-400 leading-relaxed">No prior AI/ML expertise required - just curiosity and enthusiasm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

