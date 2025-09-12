import React from "react";

const Courses = () => {
  const courses = [
    {
      title: "🚀 Beginner Level: AI Foundations",
      value: "❌ ₹6,999",
      earlyBird: "✅ ₹4,999",
      earlybirdtitle: "Early Bird-Only 20 Seats left!!",
      description:
        "From Zero to AI Hero in Record Time. Perfect for students with no prior AI experience.",
      duration: "8-10 hours (Flexible weekend/weekday schedule)",
      features: [
        "Introduction to AI and Machine Learning concepts",
        "Learn 10+ AI tools",
        "Prompt engineering fundamentals",
        "Basic automation with AI assistants",
        "AI ethics and responsible usage",
        "Creating your first AI-powered project",
      ],
    },
    {
      title: "⚡ Intermediate Level: AI Implementation",
      value: "❌ ₹9,999",
      earlyBird: "✅ ₹7,499",
      earlybirdtitle: "Limited Seats!",

      description:
        "Master AI Tools That Industry Leaders Use Daily. Perfect for students with basic AI knowledge or who have completed the Beginner Level.",
      duration: "8-10 hours (Flexible weekend/weekday schedule)",
      features: [
        "Advanced prompt engineering and chain-of-thought techniques",
        "AI workflow automation",
        "Data analysis with AI tools",
        "AI-powered content creation and marketing",
        "No-code AI app development",
        "Building AI-enhanced business solutions",
      ],
    },
    {
      title: "🎯 Advanced Level: AI Innovation, Strategy, and Capstone Project",
      value: "❌ ₹24,999",
      earlyBird: "✅ ₹19,999",
      earlybirdtitle : "Early Bird -10 Seats Left!",
      description:
        "Build Real-World AI Solutions Like Silicon Valley Pros. Perfect for students ready to lead AI initiatives or who have completed the Intermediate Level.",
      duration: "8-10 hours (Flexible weekend/weekday schedule)",
      features: [
        "Real-World Capstone Project: Develop a complete AI solution for an actual business problem",
        "Custom AI model fine-tuning and integration",
        "End-to-end AI product development",
        "AI strategy and implementation roadmaps",
        "Industry-specific AI applications",
        "Portfolio-ready projects that impress employers",
      ],
    },
  ];

  return (
    <section id="courses" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Your Path to <span className="text-emerald-400">AI Mastery</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect starting point for your AI journey
          </p>
        </div>

        <div className="grid grid-cols-1  md:grid-cols-3 gap-10">
          {courses.map((course, index) => (
            <div
              key={index}
              className="relative bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {course.title}
                </h3>

                <div className="mb-4 mt-2">
                  <div className="text-xl text-slate-400 ">{course.value}</div>
                  <div className="text-2xl font-bold text-emerald-400">
                    {course.earlyBird}{" "}
                    <span className="text-xs text-slate-400">
                      ({course.earlybirdtitle})
                    </span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {course.description}
                </p>
                <div className="text-sm font-medium mt-4 mb-4 text-emerald-300">
                  ⏳ {course.duration}
                </div>
              </div>

              <ul className="space-y-3 text-start">
                {course.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start text-slate-300 text-sm"
                  >
                    <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <div className="bg-slate-800/70 backdrop-blur-sm border border-slate-700 rounded-2xl p-12 max-w-4xl mx-auto shadow-lg hover:shadow-emerald-500/20 transition-all">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Project Examples You'll Create 🚀
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {[
                "AI-powered customer service chatbot for e-commerce",
                "Predictive analytics dashboard for business insights",
                "Automated content generation system",
                "AI-driven recommendation engine",
              ].map((project, i) => (
                <li
                  key={i}
                  className="flex items-start text-slate-300 text-base"
                >
                  <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full mt-2 mr-3"></span>
                  {project}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
