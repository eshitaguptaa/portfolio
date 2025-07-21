import React from 'react';
import { SiNokia } from "react-icons/si";
import { motion } from 'framer-motion';

const ExperienceSection = () => {
  const internshipDetails = {
    company: SiNokia,
    department: 'CNS Department',
    role: 'Intern',
    duration: 'May 2025 – June 2025',
    location: 'Noida, India',
    focusAreas: [
      {
        icon: (
          <svg className="text-cyan" width="56" height="56" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
          </svg>
        ),
        title: 'Cybersecurity',
        description: 'Network security & threat mitigation'
      },
      {
        icon: (
          <svg className="text-darkCyan" width="56" height="56" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c3.31 0 6-2.69 6-6 0-2.97-2.16-5.43-5.05-5.96z" />
          </svg>
        ),
        title: 'Cloud Infrastructure',
        description: 'Modern platforms & architectures'
      },
      {
        icon: (
          <svg className="text-orange" width="56" height="56" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.69 2 6 4.69 6 8c0 2.5 1.23 4.76 3.12 6.25.81.63 1.38 1.44 1.63 2.35H8v2h8v-2h-2.75c.25-.91.82-1.72 1.63-2.35C16.77 12.76 18 10.5 18 8c0-3.31-2.69-6-6-6z" />
          </svg>
        ),
        title: 'Telecom Innovation',
        description: 'Cutting edge solutions'
      }
    ],
    responsibilities: [
      'Completed a 6-week internship program in Nokia, covering Cybersecurity, Network security, and Cloud infrastructure.',
      'Attended instructor-led sessions and discussions on Nokia automation tools, ESG initiatives, and industry-grade telecom platforms.',
      'Collaborated with experts and contributed to interactive projects and demonstrations related to secure networks and sustainable technology.',
    ],
  };

  return (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="min-h-screen bg-darkBrown text-white flex flex-col justify-center items-center py-24 px-8 relative overflow-hidden">
      {/* Abstract Background Elements (No cards, just visual texture/depth) */}
      <div id='experience'className="absolute top-0 left-0 w-[80vw] h-[80vw] bg-cyan/5 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-[80vw] h-[80vw] bg-lightOrange/5 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute inset-0 bg-repeat opacity-[0.03]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23978580\" fill-opacity=\"0.4\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 20v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 6v-4h-2v4H0v2h4v4h2v-4h4v-2H6zm30 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 20v-4h-2v4H0v2h4v4h2v-4h4v-2H6zm0 14v-4h-2v4H0v2h4v4h2v-4h4v-2H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
 

      {/* Main Experience Hero - Asymmetrical and impactful */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl z-10 mb-24">
        <div className="text-left w-full md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-special text-orange leading-none drop-shadow-xl">
            Hands-On
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-special text-cyan leading-none ml-4 mt-2">
            Learning
          </h2>
          <p className="text-lg text-lightGrey max-w-md mt-6 ml-4 leading-relaxed">
            A deep dive into the world of telecom and technology.
          </p>
        </div>

        <div className="text-right w-full md:w-1/2 pr-0 md:pr-12 relative flex flex-col items-center md:items-end">
            <div className="bg-darkBrown/60 backdrop-blur-md px-10 py-8 rounded-full shadow-2xl relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out">
                <p className="text-2xl md:text-3xl font-bold font-special text-orange leading-tight flex items-center gap-2">
                    {internshipDetails.role} @ 
                    <span className="text-[#124191]" style={{ color: '#124191' }}>
                        <SiNokia size={95} />
                    </span>
                </p>
                <p className="text-lg text-lightCyan mt-2">{internshipDetails.department}</p>
                <p className="text-base text-lightGrey mt-1">{internshipDetails.location} &mdash; {internshipDetails.duration}</p>
            </div>
            {/* Abstract visual connector */}
            <div className="w-px h-24 bg-gradient-to-b from-cyan to-transparent absolute -bottom-16 right-1/2 transform translate-x-1/2 hidden md:block"></div>
        </div>
      </div>

      {/* Focus Areas - A dynamic, fluid row of key insights */}
      <div className="w-full max-w-6xl z-10 mb-24 grid grid-cols-1 md:grid-cols-3 gap-10">
        {internshipDetails.focusAreas.map((area, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-8 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 relative group"
            style={{ filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.3))' }}
          >
            {/* Visual element that hints at a shape without being a box */}
            <div className="absolute inset-0 bg-darkGrey/40 rounded-full scale-x-0 group-hover:scale-x-100 group-hover:bg-darkGrey/60 transition-transform duration-500 ease-in-out opacity-70"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {area.icon}
              </div>
              <h4 className="text-xl md:text-2xl font-bold font-special text-white mb-2 leading-tight">{area.title}</h4>
              <p className="text-lg text-lightGrey leading-relaxed">{area.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Key Achievements - A structured yet open list */}
      <div className="w-full max-w-4xl z-10">
        <h4 className="text-4xl md:text-5xl font-bold font-special text-orange text-center mb-12 tracking-wide">
          Key Contributions & Learnings
        </h4>
        <ul className="space-y-10">
          {internshipDetails.responsibilities.map((item, index) => (
            <li key={index} className="relative pl-16 group cursor-default">
              {/* Custom, large, glowing "bullet" */}
              <div className="absolute left-0 top-0 text-darkCyan text-4xl md:text-5xl font-extrabold transform -translate-x-1/2 -translate-y-2 rotate-6 group-hover:rotate-0 transition-transform duration-500 ease-in-out">
                {String(index + 1).padStart(2, '0')}
                <span className="absolute inset-0 bg-darkCyan rounded-full mix-blend-screen opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-md"></span>
              </div>
              <p className="text-lg leading-relaxed text-white group-hover:text-lightCyan transition-colors duration-200">
                {item}
              </p>
              {/* Subtle wave divider */}
              {index < internshipDetails.responsibilities.length - 1 && (
                <div className="relative w-full h-px mt-6 overflow-hidden">
                  <div className="absolute w-full h-full bg-darkGrey/50 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ExperienceSection;