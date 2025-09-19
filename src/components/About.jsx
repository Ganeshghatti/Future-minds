import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 tracking-tight">
            Empowering the Next Generation of AI Leaders
          </h3>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-emerald-400 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed px-4">
            At Future Minds Institute, we believe every student deserves to be
            future-ready. Powered by the dynamic Women in Product India
            community, we're bridging the gap between academic learning and
            industry demands by providing practical, job-focused AI training. In
            a world where AI is reshaping every industry, we ensure you're not
            just keeping up – you're leading the change.
          </p>
        </div>

        <div className=" gap-8 sm:gap-12 lg:gap-10 items-start">
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
              Why Choose Future Minds Institute?
            </h3>

            <div className="bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 rounded-xl p-6 sm:p-8">
              <div className="space-y-3 sm:space-y-4 text-start">
                {[
                  "Big Tech Expertise: Learn from professionals actively solving AI problems at Google, Microsoft, Amazon, Meta, Flipkart, and other leading companies",
                  "Real-World Application: Every lesson is backed by live case studies and methodologies used in actual business environments",
                  "Hands-On Project Building: Create portfolio-worthy AI solutions that demonstrate your capabilities to employers",
                  "Women in Product India Partnership: Leverage the expertise and network of India's premier product community",
                  "Flexible Learning: 8-10 hour intensive courses designed to fit your schedule",
                  "Industry Mentorship: Get guidance from professionals who've built AI products used by millions",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full mt-2 mr-3 sm:mr-4 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Workshop Details & Visual */}
          {/* <div className="space-y-6 sm:space-y-8">
            <div className="relative">
              <div className="bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 rounded-xl p-6 sm:p-8">
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-2">
                    Learning Journey
                  </h3>
                  <p className="text-slate-400 text-sm sm:text-base">
                    From concept to deployment
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                  {[
                    { title: "Theory", desc: "Strategic Frameworks" },
                    { title: "Practice", desc: "Hands-On Building" },
                    { title: "Deploy", desc: "Real-World Systems" },
                    { title: "Measure", desc: "Success & ROI" },
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <h4 className="text-white font-semibold text-sm sm:text-base lg:text-lg mb-1">
                        {item.title}
                      </h4>
                      <p className="text-slate-400 text-xs sm:text-sm">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex flex-row gap-4 sm:gap-6 col-span-2 justify-center items-center">
                <div className="bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 rounded-xl p-4 sm:p-6 flex-1">
                  <h4 className="text-white font-semibold text-sm sm:text-base lg:text-lg mb-2">
                    Duration
                  </h4>
                  <p className="text-slate-300 text-sm sm:text-base lg:text-lg font-medium">
                    Full Day (7 Hours)
                  </p>
                  <p className="text-slate-400 text-xs sm:text-sm">
                    9:00 AM - 4:00 PM
                  </p>
                </div>

                <div className="bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 rounded-xl p-4 sm:p-6 flex-1">
                  <h4 className="text-white font-semibold text-sm sm:text-base lg:text-lg mb-2">
                    Format
                  </h4>
                  <p className="text-slate-300 text-sm sm:text-base lg:text-lg font-medium">
                    Hands-On Workshop
                  </p>
                  <p className="text-slate-400 text-xs sm:text-sm">
                    Theory + Practice
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        {/* Bottom CTA Section */}
        {/* <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <div className="bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 rounded-xl p-6 sm:p-8 lg:p-10 max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
              Ready to Transform Your AI Skills?
            </h3>
            <p className="text-slate-300 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">
              Join industry leaders and peers in this comprehensive workshop
              designed to accelerate your AI agent development journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center text-xs sm:text-sm">
              <div className="text-slate-300">
                Industry-Recognized Certificate
              </div>
              <div className="text-slate-300">Lifetime Community Access</div>
              <div className="text-slate-300">Hands-On Project Portfolio</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
