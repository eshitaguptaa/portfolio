import React from 'react';
import './SkillsExtraPage.css';
import { VscVscode } from "react-icons/vsc";
import { TbBrandMysql } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiAnaconda } from "react-icons/si";
import { MdOutlineDesignServices } from "react-icons/md";
import { motion } from 'framer-motion';

const orbitSkills = [
  { icon: <SiMongodb size={28} />, name: 'MongoDB' },
  { icon: <TbBrandMysql size={28} />, name: 'MySQL' },
  { icon: <FaGithub size={28} />, name: 'Git' },
  { icon: <VscVscode size={28} />, name: 'VS Code' },
  { icon: <SiCanva size={28} />, name: 'Canva' },
  { icon: <SiAnaconda size={28} />, name: 'Anaconda' },
  { icon: <SiFigma size={28} />, name: 'Figma' },
  { icon: <MdOutlineDesignServices size={28} />, name: 'UI/UX' }
];

// Responsive mobile skills list
const MobileSkillsList = () => (
  <div className="show-mobile-list w-full max-w-xs mx-auto mt-8">
    <h3 className="text-center text-cyan text-lg font-bold mb-4">Beyond the Core</h3>
    <ul className="grid grid-cols-2 gap-4">
      {orbitSkills.map((item, idx) => (
        <li key={idx} className="flex flex-col items-center justify-center bg-white/10 rounded-lg p-3">
          <span className="text-cyan mb-1">{item.icon}</span>
          <span className="text-xs text-white font-semibold text-center">{item.name}</span>
        </li>
      ))}
    </ul>
  </div>
);

const SkillsExtraPage = () => (
  <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="skills-page-container">
    {/* Desktop Orbit Layout */}
    <div className="ellipse-orbit hide-orbit-on-mobile">
      <div className="sun">Beyond the Core</div>
      <div className="orbit-ring"></div>
      {orbitSkills.map((item, idx) => {
        const angle = (360 / orbitSkills.length) * idx;
        return (
          <div
            key={idx}
            className="orbit-icon"
            style={{
              '--icon-angle': `${angle}deg`,
            }}
          >
            <div className="icon-wrapper">
              {item.icon}
              <div className="tooltip">{item.name}</div>
            </div>
          </div>
        );
      })}
    </div>
    {/* Mobile List Layout */}
    <MobileSkillsList />
  </motion.div>
);

export default SkillsExtraPage;
