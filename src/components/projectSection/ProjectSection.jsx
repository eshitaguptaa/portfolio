import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'ScrapX – Waste to Wealth',
    year: '2025',
    tech: ['Next.js', 'YOLOv8', 'Supabase', 'MetaMask'],
    desc: [
      'Built a blockchain-based scrap platform using YOLOv8 for detection, Mapbox for geolocation, and ERC-20 token rewards.',
      'Achieved a 40% improvement in waste segregation; integrated live tracking, purity grading, and escrow via MetaMask.'
    ],
    github: 'https://github.com/theaditya09/ScrapX',
    image: '/images/project1.jpg',
  },
  {
    name: 'Sakhi Pay – Financial Literacy App',
    year: '2025',
    tech: ['Next.js', 'Appwrite', 'FinBERT'],
    desc: [
      'Developed a budgeting and scheme discovery app for rural women; onboarded 50+ users and analyzed 500+ entries using FinBERT.',
      'Key features include visual insights, fraud education, scheme filtering, and security integration.'
    ],
    github: 'https://github.com/Arjundevraj05/SakhiPay',
    image: '/images/project2.png',
  },
  {
    name: 'DeepTruth – Deepfake Detection',
    year: '2024',
    tech: ['Python', 'Flask'],
    desc: [
      'Developed an AI-powered tool to detect deepfake videos and images, and generate automated verification reports.'
    ],
    github: 'https://github.com/yourusername/deeptruth',
    image: '/images/project3.jpg',
  },
];

const ProjectSection = () => {
  return (
    <section id='projects' className="w-full min-h-screen bg-transparent flex flex-col items-center justify-center py-20 relative z-10">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="max-w-[1500px] w-full mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-2 text-cyan">
          Solutions I've Built
        </h2>
        <p className="text-center text-lightGrey mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
        </p>
        <div className="grid md:grid-cols-3 gap-0.5 justify-content items-center justify-items-center items-stretch">
          {projects.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.25, delay: 0.1 * idx, type: 'spring', stiffness: 200, damping: 15 }}
              className="bg-lightBrown rounded-2xl shadow-lg shadow-cyan/20 border border-brown p-8 flex flex-col justify-between h-[600px] max-w-[450px] w-full mx-auto transition-transform duration-300 relative overflow-hidden hover:shadow-cyanShadow"
            >
              {/* Project Image */}
              <div className="w-full h-[180px] mb-2 rounded-xl overflow-hidden shadow-md border border-darkBrown">
                <img
                  src={project.image}
                  alt={project.name + ' screenshot'}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-darkBrown text-cyan text-xs font-semibold px-2 py-1 rounded-full border border-cyan"
                    >
                      {tech}
                    </span>
                  ))}
                  <span className="ml-auto text-xs text-lightGrey font-mono">{project.year}</span>
                </div>
                <h3 className="text-lg font-bold text-orange mb-2 leading-tight">
                  {project.name}
                </h3>
                <ul className="list-disc list-inside text-white text-lg space-y-1 pl-2">
                  {project.desc.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-cyan hover:text-lightCyan transition-colors text-sm font-semibold"
                >
                  GitHub Repository
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75v-2.25a2.25 2.25 0 0 0-2.25-2.25h-7.5A2.25 2.25 0 0 0 5.25 4.5v15a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-2.25M15.75 12l5.25-5.25m0 0L15.75 1.5m5.25 5.25H9" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectSection;