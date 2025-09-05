import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark border-t border-accent-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/src/assets/agentx_logo.jpeg" 
                alt="Future Minds Institute Logo" 
                className="w-10 h-10 rounded-lg object-cover"
              />
              <div className="text-secondary-light">
                <h3 className="text-xl font-bold">Future Minds Institute</h3>
                <p className="text-xs text-accent-gold">Transforming Education</p>
              </div>
            </div>
            <p className="text-muted-gray text-sm leading-relaxed mb-4">
              Empowering minds through innovative AI education and cutting-edge technology workshops. Shaping the future of learning.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-slate-blue hover:bg-accent-gold rounded-lg flex items-center justify-center transition-colors duration-300">
                <svg className="w-4 h-4 text-secondary-light" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-slate-blue hover:bg-accent-gold rounded-lg flex items-center justify-center transition-colors duration-300">
                <svg className="w-4 h-4 text-secondary-light" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-slate-blue hover:bg-accent-gold rounded-lg flex items-center justify-center transition-colors duration-300">
                <svg className="w-4 h-4 text-secondary-light" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-secondary-light font-semibold mb-4">AgentX Workshop</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-gray hover:text-secondary-light transition-colors duration-300 text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#agenda" className="text-muted-gray hover:text-secondary-light transition-colors duration-300 text-sm">
                  Agenda
                </a>
              </li>
              <li>
                <a href="#educators" className="text-muted-gray hover:text-secondary-light transition-colors duration-300 text-sm">
                  Educators
                </a>
              </li>
              <li>
                <a href="#event-details" className="text-muted-gray hover:text-secondary-light transition-colors duration-300 text-sm">
                  Event Details
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-secondary-light font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-gray hover:text-secondary-light transition-colors duration-300 text-sm">
                  CrewAI Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-gray hover:text-secondary-light transition-colors duration-300 text-sm">
                  Learning Materials
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-gray hover:text-secondary-light transition-colors duration-300 text-sm">
                  Community Forum
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-gray hover:text-secondary-light transition-colors duration-300 text-sm">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-secondary-light font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-muted-gray text-sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@futureminds.institute
              </li>
              <li className="flex items-center text-muted-gray text-sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 98765 43210
              </li>
              <li className="flex items-start text-muted-gray text-sm">
                <svg className="w-4 h-4 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Alliance University,<br />
                Bangalore, Karnataka
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-accent-gold/30 flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-gray text-sm mb-4 md:mb-0">
            © {currentYear} Future Minds Institute. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-muted-gray hover:text-secondary-light text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-gray hover:text-secondary-light text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-muted-gray hover:text-secondary-light text-sm transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>

        {/* Special Notice */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-gold/10 to-sage-green/10 border border-accent-gold/20 rounded-full text-accent-gold text-sm">
            <span className="w-2 h-2 bg-accent-gold rounded-full mr-2 animate-pulse"></span>
            Built with ❤️ for the future of AI
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
