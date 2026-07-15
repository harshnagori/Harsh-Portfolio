import React from "react";
import { achievements, certifications } from "../../constants";

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">ACHIEVEMENTS & CERTIFICATIONS</h2>
        <div className="w-32 h-1 bg-[#8245ec] mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A summary of my milestones, hackathons, and certified technical specializations
        </p>
      </div>

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
        {/* Achievements Card */}
        <div className="border border-white bg-gray-900 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-2xl shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-transform duration-300 hover:scale-[1.02]">
          <h3 className="text-2xl font-bold text-white mb-6 border-b border-purple-500/30 pb-3">
            Achievements
          </h3>
          <ul className="space-y-4">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start space-x-3 text-gray-300">
                <span className="text-[#8245ec] text-xl font-bold mt-0.5">•</span>
                <span className="text-base sm:text-lg leading-relaxed">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Certifications Card */}
        <div className="border border-white bg-gray-900 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-2xl shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-transform duration-300 hover:scale-[1.02]">
          <h3 className="text-2xl font-bold text-white mb-6 border-b border-purple-500/30 pb-3">
            Certifications
          </h3>
          <ul className="space-y-6">
            {certifications.map((cert, index) => (
              <li key={index} className="flex flex-col">
                <h4 className="text-lg sm:text-xl font-semibold text-white">
                  {cert.title}
                </h4>
                <p className="text-purple-400 text-sm mt-1">{cert.issuer}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
