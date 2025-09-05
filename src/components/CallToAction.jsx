import React from 'react';

const CallToAction = () => {
  return (
    <section id="cta" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #64748b 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #475569 0%, transparent 50%)`
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main CTA Content */}
          <div className="max-w-4xl mx-auto mb-16">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></span>
              Limited Time Student Offer - 68% OFF
            </div>

            {/* Main Headline */}
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Register <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">NOW</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-4 font-medium">
              Take your first step into the world of AI agents
            </p>

            <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Don't miss out on this transformative opportunity. Secure your spot today and join the next generation of AI builders.
            </p>

            {/* Price Highlight */}
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-2xl p-8 mb-12 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-6 mb-6">
                <div className="text-slate-400 text-2xl line-through">₹5,497</div>
                <div className="text-5xl font-bold text-emerald-400">₹1,749</div>
                <div className="bg-red-500 text-white px-4 py-2 rounded-full text-lg font-bold animate-pulse">
                  68% OFF
                </div>
              </div>
              <p className="text-slate-300 text-lg">
                Complete workshop + ₹1,998 worth of exclusive bonuses + lifetime community access
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <button className="group bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-12 py-6 rounded-full text-xl font-bold hover:from-emerald-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-emerald-500/25">
                <span className="flex items-center">
                  Register Now
                  <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              
              <button className="group border-2 border-slate-400 text-slate-300 px-8 py-6 rounded-full text-lg font-semibold hover:border-white hover:text-white hover:bg-slate-800/50 transition-all duration-300">
                <span className="flex items-center">
                  Contact Us
                  <svg className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-slate-400">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                Secure Payment
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                Instant Confirmation
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                Money Back Guarantee
              </div>
            </div>
          </div>

          {/* Urgency Section */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 mb-12">
              <div className="flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center mr-3">
                  <div className="w-4 h-4 bg-red-400 rounded-full animate-pulse"></div>
                </div>
                <h3 className="text-2xl font-bold text-white">Limited Seats Available</h3>
              </div>
              <p className="text-slate-300 text-lg mb-6">
                We're keeping the workshop intimate with only 50 seats to ensure personalized attention and maximum learning.
              </p>
              
              {/* Progress Bar */}
              <div className="max-w-md mx-auto">
                <div className="flex justify-between text-sm text-slate-400 mb-2">
                  <span>Seats Filled</span>
                  <span>37/50</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 h-3 rounded-full animate-pulse" style={{width: '74%'}}></div>
                </div>
                <p className="text-red-400 text-sm mt-2 font-semibold">Only 13 seats remaining!</p>
              </div>
            </div>

            {/* Final Value Props */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Immediate Impact</h4>
                <p className="text-slate-400">Start building AI agents from day one</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Expert Network</h4>
                <p className="text-slate-400">Connect with industry professionals</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Lifetime Value</h4>
                <p className="text-slate-400">Skills that grow with the industry</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
