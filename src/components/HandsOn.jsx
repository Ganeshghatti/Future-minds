import React from 'react';

const LearningOutcomes = () => {
  const outcomes = [
    {
      id: 1,
      text: "Build and orchestrate multi-agent systems using CrewAI"
    },
    {
      id: 2,
      text: "Apply product management frameworks to define agentic roadmaps"
    },
    {
      id: 3,
      text: "Understand the lifecycle of agentic products from ideation to deployment"
    },
    {
      id: 4,
      text: "Define success metrics and measure ROI of agentic systems"
    },
    {
      id: 5,
      text: "Bridge the gap between technical AI building and business adoption"
    }
  ];

  return (
    <section id="learning-outcomes" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Learning <span className="text-emerald-400">Outcomes</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            By the end of this workshop, you will have mastered the essential skills to build, deploy, and manage intelligent agent systems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {outcomes.map((outcome, index) => (
            <div 
              key={outcome.id}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                {/* Number */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="text-slate-300 text-lg leading-relaxed">
                    {outcome.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-xl p-10 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your AI Skills?
            </h3>
            <p className="text-slate-300 mb-8 text-lg leading-relaxed">
              Join hundreds of students who are already building the future with intelligent agents
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="text-slate-300">Certificate of Completion</div>
              <div className="text-slate-300">Lifetime Community Access</div>
              <div className="text-slate-300">Hands-On Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningOutcomes;
