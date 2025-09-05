import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            About the <span className="text-emerald-400">Workshop</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Transform from AI theory to practical mastery in a single intensive day. 
            Learn to design, build, and deploy intelligent agent systems that solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Main Description */}
            <div className="bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 rounded-xl p-8">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Move beyond AI theory into <span className="text-emerald-400 font-semibold">real-world product development</span> with CrewAI. 
                This comprehensive workshop bridges the gap between technical AI building and business adoption.
              </p>
              
              <p className="text-base text-slate-400 leading-relaxed">
                Master the frameworks and strategies that power multi-agent systems while gaining hands-on experience 
                with industry-standard tools and methodologies.
              </p>
            </div>
            
            {/* Learning Outcomes */}
            <div className="bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">What You'll Master</h3>
              
              <div className="space-y-4">
                {[
                  "Multi-agent system orchestration using CrewAI",
                  "Product management frameworks for AI agents", 
                  "Complete lifecycle from ideation to deployment",
                  "Success metrics and ROI measurement"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-slate-300 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Workshop Details & Visual */}
          <div className="space-y-8">
            {/* Workshop Details */}
            
            {/* Visual Element */}
            <div className="relative">
              <div className="bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 rounded-xl p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-white mb-2">Learning Journey</h3>
                  <p className="text-slate-400">From concept to deployment</p>
                </div>
                
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { title: "Theory", desc: "Strategic Frameworks" },
                    { title: "Practice", desc: "Hands-On Building" },
                    { title: "Deploy", desc: "Real-World Systems" },
                    { title: "Measure", desc: "Success & ROI" }
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <h4 className="text-white font-semibold text-lg mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-row gap-6 col-span-2 justify-center items-center">
                  <div className="bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 rounded-xl p-6">
                    <h4 className="text-white font-semibold text-lg mb-2">Duration</h4>
                    <p className="text-slate-300 text-lg font-medium">Full Day (7 Hours)</p>
                    <p className="text-slate-400 text-sm">9:00 AM - 4:00 PM</p>
                  </div>
                  
                  <div className="bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 rounded-xl p-6">
                    <h4 className="text-white font-semibold text-lg mb-2">Format</h4>
                    <p className="text-slate-300 text-lg font-medium">Hands-On Workshop</p>
                    <p className="text-slate-400 text-sm">Theory + Practice</p>
                  </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 rounded-xl p-10 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your AI Skills?
            </h3>
            <p className="text-slate-300 mb-8 text-lg leading-relaxed">
              Join industry leaders and peers in this comprehensive workshop designed to accelerate your AI agent development journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="text-slate-300">Industry-Recognized Certificate</div>
              <div className="text-slate-300">Lifetime Community Access</div>
              <div className="text-slate-300">Hands-On Project Portfolio</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
